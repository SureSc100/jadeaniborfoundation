# jadeaniborfoundation

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_HTQM68ziJL96Sfp4adBeXDYppQEo)

## Contact form email setup (FormSubmit — no configuration needed)

The "Send Us a Message" form on `/contact` posts straight from the browser to
[FormSubmit's AJAX endpoint](https://formsubmit.co/ajax-documentation)
(`https://formsubmit.co/ajax/jasonofem79@gmail.com`), which delivers the
message by email. There is no backend route and no API key — nothing to configure
on Vercel.

- **To:** jasonofem79@gmail.com (the owner's test inbox)
- **CC:** Jadeaniborfoundation@gmail.com (the foundation inbox; CC recipients receive messages without needing endpoint activation)
- **Subject:** `[Website] <subject> — <name>`. Replying goes to the visitor
  (FormSubmit's `_replyto`).

### FormSubmit activation & held test submissions

The endpoint `jasonofem79@gmail.com` is activated and confirmed working. CC addresses
do not need FormSubmit activation.

**Important safety rule regarding held test submissions:**
Test submissions sent earlier to `Jadeaniborfoundation@gmail.com` remain held at FormSubmit.
Do **not** change the endpoint URL to `Jadeaniborfoundation@gmail.com`, and **never** click
any FormSubmit "Activate Form" links in `Jadeaniborfoundation@gmail.com`, as doing so would
activate the foundation endpoint and release the held test messages.

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
