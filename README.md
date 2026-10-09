# jadeaniborfoundation

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_HTQM68ziJL96Sfp4adBeXDYppQEo)

## Contact form email setup (FormSubmit — no configuration needed)

The "Send Us a Message" form on `/contact` posts straight from the browser to
[FormSubmit's AJAX endpoint](https://formsubmit.co/ajax-documentation)
(`https://formsubmit.co/ajax/Jadeaniborfoundation@gmail.com`), which delivers the
message by email. There is no backend route and no API key — nothing to configure
on Vercel.

- **To:** Jadeaniborfoundation@gmail.com (foundation inbox)
- **CC:** jasonofem79@gmail.com — **temporary** test recipient so deliveries can be
  watched during rollout; remove it once Jade's personal inbox is active (below).
- **Subject:** `[Website] <subject> — <name>`. Replying goes to the visitor
  (FormSubmit's `_replyto`).

### One-time activation per inbox

FormSubmit delivers **nothing** to an inbox until that inbox has been activated.
The first submission after a deploy triggers a FormSubmit confirmation email to
each recipient instead of the message:

1. Submit the form once on the live site.
2. In `Jadeaniborfoundation@gmail.com`, click the FormSubmit confirmation link.
3. In `jasonofem79@gmail.com`, click its FormSubmit confirmation link.

After that, every submission lands in both inboxes. Repeat the click for any
inbox added later.

### Later: add Jade's inbox, drop the test recipient (new PR)

When Jade's personal email is ready: add it as another recipient in
`app/contact/page.tsx`, have Jade click her activation link, then delete
`TEST_CC_EMAIL` (and its `_cc` field) to stop the test copies.

Caveats (from the FormSubmit docs): reCAPTCHA is disabled for this form
(`_captcha: false`) because it cannot be shown from a JS fetch — the hidden
honeypot field (`_honey`) filters bots instead. FormSubmit's free plan has a
monthly submission limit and submissions are retained for 30 days — check
<https://formsubmit.co/documentation> before any large campaign.

Any leftover form-email environment variables in the Vercel project belong to
removed email setups and are unused — delete them (see `.env.example`).

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
