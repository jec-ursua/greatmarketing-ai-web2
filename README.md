# Great Marketing AI — Next.js Homepage

Production-ready Next.js 15 homepage for greatmarketing.ai migration from Framer.

---

## 📦 What's in this package

This zip contains the complete homepage code:

```
greatmarketing-ai-web/
├── app/              ← Pages, API routes, SEO config
├── components/       ← All visual sections (Hero, FAQ, etc.)
├── lib/              ← JSON-LD schema for SEO
├── package.json      ← Lists what tools the project needs
└── README.md         ← This file
```

**Built-in features:**
- ✅ 5-field lead form (Name, Email, Firm, State, Monthly Spend) that posts to email + Slack
- ✅ SEO metadata, JSON-LD schema (Organization, FAQ, Website)
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt allowing GPTBot, ClaudeBot, Google-Extended, Bingbot
- ✅ /llms.txt for AI agent discovery
- ✅ Responsive design (mobile + desktop)
- ✅ Faithful replication of existing greatmarketing.ai content

---

## 🚀 DEPLOYMENT (No coding needed)

You don't need to write code. Just follow these steps in order.

### Option A — Hand off to Rafael (Easiest)

1. Send the entire `greatmarketing-ai-web.zip` file to Rafael
2. Tell him: *"Boss, eto yung Next.js homepage code from Claude. Deploy mo na lang sa Vercel as `new.greatmarketing.ai` (staging)."*
3. Done — wait for his deployment

### Option B — Deploy it yourself via Vercel + GitHub (No code editing)

This takes about 30 minutes. You won't write a single line of code.

#### Step 1: Create a GitHub account (skip if you have one)
- Go to https://github.com/signup
- Sign up with email

#### Step 2: Create a new GitHub repository
- Click the green **"+"** button (top right) → **"New repository"**
- Repository name: `greatmarketing-ai-web`
- Set to **Private**
- Click **"Create repository"**

#### Step 3: Upload the files
- On your new repo page, click **"uploading an existing file"** link
- **Unzip** `greatmarketing-ai-web.zip` first on your computer
- **Drag the contents** of the unzipped folder (not the folder itself — open it first and select all files inside) into the GitHub upload area
- Wait for upload to finish
- Click **"Commit changes"**

#### Step 4: Connect to Vercel
- Go to https://vercel.com and sign up using your **GitHub** account
- Click **"Add New..."** → **"Project"**
- Find `greatmarketing-ai-web` in the list, click **"Import"**
- On the configuration page, just click **"Deploy"** (don't change anything)
- Wait 2-3 minutes — Vercel will build the site automatically

#### Step 5: Set up the lead form (REQUIRED for form to work)
The lead form needs 2 services to send notifications. Ask Rafael for these or set them up:

1. **Resend** (sends emails) — https://resend.com
   - Sign up, create an API key
   - Copy the key starting with `re_...`

2. **Slack Incoming Webhook** (sends Slack DMs) — https://api.slack.com/messaging/webhooks
   - Create a webhook for the channel where leads should appear
   - Copy the URL starting with `https://hooks.slack.com/...`

Then in Vercel:
- Go to your project → **Settings** → **Environment Variables**
- Add these 4 variables:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_xxxxx...` (from Resend) |
| `LEAD_NOTIFICATION_EMAIL` | `rafael@greatmarketing.ai` |
| `SLACK_LEAD_WEBHOOK_URL` | `https://hooks.slack.com/...` (from Slack) |
| `NEXT_PUBLIC_SITE_URL` | `https://new.greatmarketing.ai` |

- Click **"Save"**
- Go to **"Deployments"** tab → click **"⋯"** on latest → **"Redeploy"**

#### Step 6: Set the staging domain
- In Vercel → your project → **Settings** → **Domains**
- Add: `new.greatmarketing.ai`
- Vercel will show DNS records — give those to Rafael to add to the domain provider

#### Step 7: Enable password protection (per Notion task)
- In Vercel → **Settings** → **Deployment Protection**
- Enable **"Vercel Authentication"** or **"Password Protection"**
- This prevents Google from indexing the staging site before launch

---

## ✅ How to verify it works

After deployment, visit `https://new.greatmarketing.ai`:

1. **The homepage loads** with all sections (Hero → Footer)
2. **The lead form works** — submit a test entry with your own email
3. **You receive a test email** + see the test lead in Slack
4. **`/sitemap.xml` loads** — visit `https://new.greatmarketing.ai/sitemap.xml`
5. **`/robots.txt` loads** — visit `https://new.greatmarketing.ai/robots.txt`
6. **`/llms.txt` loads** — visit `https://new.greatmarketing.ai/llms.txt`

If all 6 pass — Phase 2 (Build Next.js Site on Staging) is DONE. Tick it in Notion.

---

## 🛠 Common issues & fixes

**"Build failed" in Vercel** → Usually means a file is missing or syntax error. Send Rafael the error message screenshot.

**Lead form returns "Internal server error"** → Environment variables not set (Step 5 incomplete). Recheck them and redeploy.

**Page looks ugly / no styles** → Tailwind didn't build. Vercel build logs will show why. Send screenshot to Rafael.

**404 on `/llms.txt`** → Vercel needs full deploy. Trigger Redeploy from the Deployments tab.

---

## 📋 Things to update later (after Rafael reviews)

These are placeholders that need real content:

1. **Team photo** in Careers section (currently a placeholder gradient)
2. **Partner logos** in marquee (currently text — should be actual logo images)
3. **Avatar images** in Hero social proof (currently gradient circles)
4. **OG image** at `/og-image.png` for social sharing previews
5. **Favicon** at `/favicon.ico`

These don't block deployment — you can update them after the site is live.

---

## 🧭 Migration roadmap reminder

This handles **Phase 2** of the migration (Build Next.js Site on Staging).

- ✅ **Phase 1**: SEO Baseline + URL Audit (separate task)
- ✅ **Phase 2**: This package — Build Next.js homepage on staging
- ⏳ **Phase 3**: Pre-launch QA (test everything before going live)
- ⏳ **Phase 4**: DNS Cutover (point greatmarketing.ai to new site)
- ⏳ **Phase 5**: 30-day post-launch monitoring (watch rankings, fix issues)

---

Made for Great Marketing AI · Jec & Claude
