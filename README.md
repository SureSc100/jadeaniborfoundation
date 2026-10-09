# jadeaniborfoundation

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_HTQM68ziJL96Sfp4adBeXDYppQEo)

## Contact form email setup (required, one time)

The "Send Us a Message" form on `/contact` posts to `/api/contact`, which delivers the
message by email. It needs **one** of the two providers below configured as an
environment variable, otherwise the form returns a 503 and tells the visitor to email
directly. See `.env.example` for the full list.

**Option A — Web3Forms (simplest, ~2 minutes, no domain needed)**

1. Go to <https://web3forms.com> and enter the inbox that should receive the messages.
2. Confirm the email and copy the access key from the message Web3Forms sends you.
3. Set `WEB3FORMS_ACCESS_KEY` (Vercel: Project → Settings → Environment Variables).
   `WEB3FORMS_KEY` and `NEXT_PUBLIC_WEB3FORMS_KEY` are accepted as aliases.
4. **Redeploy.** Vercel does not redeploy when you add or change an environment
   variable, so the new key only reaches the running app after a redeploy
   (Vercel dashboard → Deployments → ⋯ → Redeploy, or push any commit).

The recipient inbox is bound to the access key, so every message lands in that one
inbox; the department chosen in the form is carried in the email subject line.
The key is read server-side only and must never be committed to the repo.

**Option B — Resend (branded sender, routes each subject to its own inbox)**

1. Sign up at <https://resend.com>.
2. Verify your domain at <https://resend.com/domains>. This is required: until a domain
   is verified, Resend only delivers to the email address on your own Resend account.
3. Create a "Sending access" API key and set `RESEND_API_KEY`.
4. Set `RESEND_FROM_EMAIL` to an address on that verified domain.

With Resend, messages are routed by the subject the visitor picks:

| Subject              | Inbox                                    |
| -------------------- | ---------------------------------------- |
| Consulting Inquiry   | jfatrainingtools@gmail.com               |
| Books                | Jadeanibor@icloud.com                    |
| Speaking Engagement  | Jadeanibor@icloud.com + foundation inbox |
| Foundation Support   | Jadeaniborfoundation@gmail.com           |
| Partnership Opportunity | Jadeaniborfoundation@gmail.com        |
| Other                | Jadeaniborfoundation@gmail.com           |

Set `CONTACT_EMAIL_OVERRIDE` to send everything to a single inbox instead.

> SMTP (nodemailer) is deliberately not used: Vercel blocks outbound SMTP, so mail must
> be sent over HTTPS through an email API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/SureSc100/jadeaniborfoundation" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
