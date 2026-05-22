# Great Marketing AI — Homepage (v2.0)

Production-ready Next.js 15 homepage matching greatmarketing.ai 1:1 with all 13 sections rebuilt.

## What's new in v2.0

- ✅ All 13 sections rebuilt with **exact Framer copy** + real image URLs
- ✅ **Smart-hide navigation** (hides on scroll down, shows on scroll up)
- ✅ **Hire Us modal** with 5-field form (Name, Email, Firm, State, Monthly Ad Spend)
- ✅ Real **case study stats** + **FAQ answers** matching Framer
- ✅ All **partner logos**, **testimonial cards**, **podcast cover**, **team photo** loaded from Framer URLs
- ✅ Services + Free Content **dropdown menus** in nav

## Tech Stack

- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS with custom brand tokens (`brand-gold`, `brand-cream`, `brand-dark`)
- lucide-react icons
- Resend (lead email)
- Slack webhooks (lead alerts)
- Zod validation

## Local Development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with real values
npm run dev
# → http://localhost:3000
```

## Environment Variables (set in Vercel)

| Variable | Source |
|----------|--------|
| `RESEND_API_KEY` | https://resend.com/api-keys |
| `LEAD_NOTIFICATION_EMAIL` | rafael@greatmarketing.ai |
| `SLACK_LEAD_WEBHOOK_URL` | https://api.slack.com/messaging/webhooks |
| `NEXT_PUBLIC_SITE_URL` | https://greatmarketing.ai |

## Upload to GitHub

Upload ALL files (4 folders + 8 files) to `Rafael805/Great-Marketing-AI-Web`. Vercel auto-deploys on commit.

## Note on Framer-hosted images

All images currently reference `framerusercontent.com` URLs. **Before cancelling Framer subscription**, download all images and host them in `/public` folder of this repo, then update component references.
