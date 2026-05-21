import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Validation schema matching the 5-field hero form per Notion spec
const leadSchema = z.object({
  name: z.string().min(2, 'Name too short').max(100),
  email: z.string().email('Invalid email'),
  firm: z.string().min(2, 'Firm name required').max(200),
  state: z.string().min(2, 'State required'),
  monthlySpend: z.string().min(1, 'Monthly spend required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const lead = result.data;
    const timestamp = new Date().toISOString();

    // ============ 1. Send email via Resend ============
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || 'rafael@greatmarketing.ai';

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Great Marketing AI <leads@greatmarketing.ai>',
        to: notificationEmail,
        subject: `🚨 New Lead: ${lead.firm} — ${lead.monthlySpend}/mo`,
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 600px; padding: 24px; background: #FAF6EE;">
            <h1 style="color: #D4A93B; font-size: 24px; margin: 0 0 16px;">New Lead from Homepage</h1>
            <table style="width: 100%; background: white; border-radius: 8px; padding: 20px; border-collapse: separate; border-spacing: 0 8px;">
              <tr><td style="font-weight: bold; padding: 4px 12px; width: 30%;">Name:</td><td style="padding: 4px 12px;">${lead.name}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Email:</td><td style="padding: 4px 12px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Law Firm:</td><td style="padding: 4px 12px;">${lead.firm}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">State:</td><td style="padding: 4px 12px;">${lead.state}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Monthly Ad Spend:</td><td style="padding: 4px 12px;"><strong style="color: #D4A93B;">${lead.monthlySpend}</strong></td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Submitted:</td><td style="padding: 4px 12px;">${timestamp}</td></tr>
            </table>
          </div>
        `,
      });
    } else {
      console.warn('RESEND_API_KEY not configured — email notification skipped');
    }

    // ============ 2. Post to Slack ============
    const slackWebhookUrl = process.env.SLACK_LEAD_WEBHOOK_URL;

    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 New Lead from Homepage`,
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: '🚨 New Lead from Homepage' },
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*Name:*\n${lead.name}` },
                { type: 'mrkdwn', text: `*Email:*\n${lead.email}` },
                { type: 'mrkdwn', text: `*Law Firm:*\n${lead.firm}` },
                { type: 'mrkdwn', text: `*State:*\n${lead.state}` },
                { type: 'mrkdwn', text: `*Monthly Spend:*\n${lead.monthlySpend}` },
                { type: 'mrkdwn', text: `*Time:*\n${timestamp}` },
              ],
            },
            {
              type: 'actions',
              elements: [
                {
                  type: 'button',
                  text: { type: 'plain_text', text: 'Reply via Email' },
                  url: `mailto:${lead.email}`,
                  style: 'primary',
                },
              ],
            },
          ],
        }),
      });
    } else {
      console.warn('SLACK_LEAD_WEBHOOK_URL not configured — Slack notification skipped');
    }

    // TODO: Optionally save to database / CRM here (HubSpot, Asana, etc.)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
