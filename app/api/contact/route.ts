import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Where contact-form messages land.
 *
 * Each department has its own inbox (matching the addresses published on the
 * /contact page). Override any of them with an environment variable if they
 * ever change, and set CONTACT_EMAIL_OVERRIDE to funnel everything into a
 * single inbox instead.
 */
const DEFAULT_AUTHOR_EMAIL = 'Jadeanibor@icloud.com'
const DEFAULT_FOUNDATION_EMAIL = 'Jadeaniborfoundation@gmail.com'
const DEFAULT_CONSULTING_EMAIL = 'jfatrainingtools@gmail.com'

const SUBJECT_KEYS = [
  'consulting',
  'speaking',
  'books',
  'foundation',
  'partnership',
  'other',
] as const

type SubjectKey = (typeof SUBJECT_KEYS)[number]

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  phone: z.string().trim().max(40).optional().nullable(),
  subject: z.enum(SUBJECT_KEYS),
  message: z.string().trim().min(1, 'Please write a message.').max(5000),
})

type ContactPayload = z.infer<typeof contactSchema>

interface RouteTarget {
  label: string
  to: string[]
}

function inboxes() {
  return {
    author: process.env.CONTACT_AUTHOR_EMAIL?.trim() || DEFAULT_AUTHOR_EMAIL,
    foundation: process.env.CONTACT_FOUNDATION_EMAIL?.trim() || DEFAULT_FOUNDATION_EMAIL,
    consulting: process.env.CONTACT_CONSULTING_EMAIL?.trim() || DEFAULT_CONSULTING_EMAIL,
  }
}

/** Maps the "Subject" dropdown to a human label and the inbox that should get it. */
function resolveTarget(subject: SubjectKey): RouteTarget {
  const { author, foundation, consulting } = inboxes()

  const override = process.env.CONTACT_EMAIL_OVERRIDE?.trim()
  if (override) return { label: labelFor(subject), to: [override] }

  switch (subject) {
    case 'consulting':
      return { label: 'Consulting Inquiry', to: [consulting] }
    case 'speaking':
      return { label: 'Speaking Engagement', to: [author, foundation] }
    case 'books':
      return { label: 'Books', to: [author] }
    case 'foundation':
      return { label: 'Foundation Support', to: [foundation] }
    case 'partnership':
      return { label: 'Partnership Opportunity', to: [foundation] }
    default:
      return { label: 'General Enquiry', to: [foundation] }
  }
}

function labelFor(subject: SubjectKey): string {
  switch (subject) {
    case 'consulting':
      return 'Consulting Inquiry'
    case 'speaking':
      return 'Speaking Engagement'
    case 'books':
      return 'Books'
    case 'foundation':
      return 'Foundation Support'
    case 'partnership':
      return 'Partnership Opportunity'
    default:
      return 'General Enquiry'
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildBody(data: ContactPayload, target: RouteTarget) {
  const lines = [
    `New message from the website`,
    ``,
    `Subject:  ${target.label}`,
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone || '—'}`,
    ``,
    `Message:`,
    data.message,
    ``,
    `—`,
    `Sent from the "Send Us a Message" form on the Contact page.`,
  ]

  const text = lines.join('\n')

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;color:#1f2937">
      <h2 style="font-size:18px;margin:0 0 16px">New message from the website</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-bottom:20px">
        <tr><td style="padding:8px 12px;background:#f3f4f6;font-weight:bold;width:110px">Subject</td><td style="padding:8px 12px">${escapeHtml(target.label)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f3f4f6;font-weight:bold">Name</td><td style="padding:8px 12px">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f3f4f6;font-weight:bold">Email</td><td style="padding:8px 12px"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f3f4f6;font-weight:bold">Phone</td><td style="padding:8px 12px">${escapeHtml(data.phone || '—')}</td></tr>
      </table>
      <p style="margin:0 0 8px;font-weight:bold">Message</p>
      <p style="white-space:pre-wrap;margin:0;padding:16px;background:#f9fafb;border-radius:6px;line-height:1.6">${escapeHtml(data.message)}</p>
    </div>
  `

  return { text, html }
}

/* ------------------------------------------------------------------ */
/* Lightweight in-memory throttle. Serverless instances are short-lived, */
/* so this is a best-effort deterrent against bots, not a hard guarantee. */
/* ------------------------------------------------------------------ */
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent)
    return true
  }
  recent.push(now)
  hits.set(key, recent)

  // Keep the map from growing without bound.
  if (hits.size > 1000) {
    for (const [k, v] of hits) if (v.length === 0) hits.delete(k)
  }
  return false
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

async function sendViaResend(args: {
  to: string[]
  replyTo: string
  subject: string
  html: string
  text: string
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')

  // Falls back to Resend's shared test sender, which only delivers to the
  // email address that owns the Resend account. Verify a domain and set
  // RESEND_FROM_EMAIL to send to any inbox from a branded address.
  const from = process.env.RESEND_FROM_EMAIL?.trim() || 'Website <onboarding@resend.dev>'

  const endpoint = process.env.RESEND_API_URL?.trim() || 'https://api.resend.com/emails'

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: args.to,
      reply_to: args.replyTo,
      subject: args.subject,
      html: args.html,
      text: args.text,
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Resend responded ${response.status}: ${detail.slice(0, 300)}`)
  }
}

/**
 * Reads the Web3Forms access key from the environment. `WEB3FORMS_ACCESS_KEY`
 * is the documented name (see .env.example); the other spellings are accepted
 * so the form keeps working if the variable was added under a different name
 * (e.g. following Web3Forms' own docs). The key is only ever read server-side
 * here — it must never be committed to the repo.
 */
function web3formsAccessKey(): string | undefined {
  return (
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.WEB3FORMS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim() ||
    undefined
  )
}

async function sendViaWeb3Forms(args: {
  replyTo: string
  name: string
  subject: string
  message: string
}): Promise<void> {
  const accessKey = web3formsAccessKey()
  if (!accessKey) throw new Error('WEB3FORMS_ACCESS_KEY is not set')

  const endpoint = process.env.WEB3FORMS_API_URL?.trim() || 'https://api.web3forms.com/submit'

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      // The recipient inbox is bound to the access key when the key is created,
      // so the department is carried in the subject line instead.
      from_name: 'Website Contact Form',
      subject: args.subject,
      email: args.replyTo,
      replyto: args.replyTo,
      name: args.name,
      message: args.message,
    }),
  })

  const payload = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null

  if (!response.ok || payload?.success === false) {
    throw new Error(`Web3Forms rejected the submission: ${payload?.message ?? response.status}`)
  }
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages sent from this connection. Please try again later.' },
      { status: 429 }
    )
  }

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'The form data could not be read.' }, { status: 400 })
  }

  // Honeypot is read straight off the raw body so that a bot filling it in
  // never produces a validation error — it just gets a silent "ok".
  const honeypot =
    typeof raw === 'object' && raw !== null && 'website' in raw
      ? String((raw as { website?: unknown }).website ?? '').trim()
      : ''

  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const error = parsed.error.issues[0]?.message ?? 'Please check the form and try again.'
    return NextResponse.json({ ok: false, error }, { status: 400 })
  }

  const data = parsed.data

  const target = resolveTarget(data.subject)
  const { text, html } = buildBody(data, target)
  const subject = `[Website] ${target.label} — ${data.name}`

  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim())
  const hasWeb3Forms = Boolean(web3formsAccessKey())

  if (!hasResend && !hasWeb3Forms) {
    console.error(
      '[contact] No email provider configured. Set RESEND_API_KEY or a Web3Forms key ' +
        '(WEB3FORMS_ACCESS_KEY, WEB3FORMS_KEY or NEXT_PUBLIC_WEB3FORMS_KEY).'
    )
    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact form is not connected to email yet. Please email us directly and we will get back to you.',
        mailto: target.to[0],
      },
      { status: 503 }
    )
  }

  try {
    if (hasResend) {
      await sendViaResend({
        to: target.to,
        replyTo: data.email,
        subject,
        html,
        text,
      })
    } else {
      await sendViaWeb3Forms({
        replyTo: data.email,
        name: data.name,
        subject,
        message: text,
      })
    }
  } catch (error) {
    console.error('[contact] Failed to send message:', error)
    return NextResponse.json(
      {
        ok: false,
        error:
          'Sorry, your message could not be sent just now. Please email us directly and we will get back to you.',
        mailto: target.to[0],
      },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
