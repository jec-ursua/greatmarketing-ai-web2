import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  firm: z.string().min(2).max(200),
  state: z.string().min(2),
  monthlySpend: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Validation failed', issues: result.error.flatten().fieldErrors }, { status: 400 });
    }

    const lead = result.data;
    const timestamp = new Date().toISOString();
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || 'rafael@greatmarketing.ai';

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Great Marketing AI <leads@greatmarketing.ai>',
        to: notificationEmail,
        subject: `🚨 New Lead: ${lead.firm} — ${lead.monthlySpend}/mo`,
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 600px; padding: 24px; background: #F5F0E6;">
            <h1 style="color: #C5A24A; font-size: 24px; margin: 0 0 16px;">New Lead from Homepage</h1>
            <table style="width: 100%; background: white; border-radius: 8px; padding: 20px;">
              <tr><td style="font-weight: bold; padding: 4px 12px;">Name:</td><td style="padding: 4px 12px;">${lead.name}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Email:</td><td style="padding: 4px 12px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Law Firm:</td><td style="padding: 4px 12px;">${lead.firm}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">State:</td><td style="padding: 4px 12px;">${lead.state}</td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Monthly Ad Spend:</td><td style="padding: 4px 12px;"><strong>${lead.monthlySpend}</strong></td></tr>
              <tr><td style="font-weight: bold; padding: 4px 12px;">Submitted:</td><td style="padding: 4px 12px;">${timestamp}</td></tr>
            </table>
          </div>
        `,
      });
    }

    const slackWebhookUrl = process.env.SLACK_LEAD_WEBHOOK_URL;
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 New Lead from Homepage`,
          blocks: [
            { type: 'header', text: { type: 'plain_text', text: '🚨 New Lead from Homepage' } },
            { type: 'section', fields: [
              { type: 'mrkdwn', text: `*Name:*\n${lead.name}` },
              { type: 'mrkdwn', text: `*Email:*\n${lead.email}` },
              { type: 'mrkdwn', text: `*Law Firm:*\n${lead.firm}` },
              { type: 'mrkdwn', text: `*State:*\n${lead.state}` },
              { type: 'mrkdwn', text: `*Monthly Spend:*\n${lead.monthlySpend}` },
              { type: 'mrkdwn', text: `*Time:*\n${timestamp}` },
            ]},
            { type: 'actions', elements: [{ type: 'button', text: { type: 'plain_text', text: 'Reply via Email' }, url: `mailto:${lead.email}`, style: 'primary' }] },
          ],
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
