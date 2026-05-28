import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions governing your use of GreatMarketing.ai services, tools, and website.',
  alternates: { canonical: '/terms-condition' },
};

export default function TermsPage() {
  return (
    <article className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-3xl mx-auto px-6 prose prose-neutral prose-headings:font-display">
        <h1>Terms and Conditions</h1>
        <p className="text-sm text-neutral-500">Last Updated: January 8, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to GreatMarketing.ai. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use
          of our website, tools, and services (&ldquo;Services&rdquo;). By accessing or using our Services, you agree
          to comply with and be bound by these Terms.
        </p>
        <p>
          By accessing or using GreatMarketing.ai, you confirm that you are at least 18 years old and agree to be
          legally bound by these Terms and our <a href="/privacy">Privacy Policy</a>. If you do not agree, please
          do not use the Services.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          GreatMarketing.ai provides AI-powered tools for generating marketing content, automation workflows, and
          strategic insights. These tools are available on a subscription or trial basis. We reserve the right to
          modify or discontinue any Services without prior notice.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          To use certain features, you must create an account and provide accurate information. You are responsible
          for maintaining the confidentiality of your login credentials and for any activity under your account.
        </p>

        <h2>4. Subscription and Billing</h2>
        <p>
          Access to premium features may require a paid subscription. All pricing is displayed on the website and is
          subject to change. By subscribing, you authorize recurring billing according to the terms selected. You may
          cancel your subscription at any time, but refunds are only issued in accordance with our Refund Policy.
        </p>

        <h2>5. Mobile Terms of Service (SMS)</h2>
        <ul>
          <li><strong>Program Name:</strong> Great Marketing AI SMS.</li>
          <li>
            <strong>Program Description:</strong> By opting in, you agree to receive automated marketing and
            informational text messages from Great Marketing AI, including appointment reminders, project updates,
            and promotional offers.
          </li>
          <li>
            <strong>Opt-Out Instructions:</strong> You can cancel the SMS service at any time. Simply
            text <strong>STOP</strong> to our number. Upon sending &ldquo;STOP,&rdquo; we will confirm your
            unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us.
          </li>
          <li>
            <strong>Rejoining Instructions:</strong> To rejoin after opting out, sign up as you did initially, and
            we will resume sending SMS messages to you.
          </li>
          <li>
            <strong>Help Instructions:</strong> If you experience issues with the messaging program, reply with the
            keyword <strong>HELP</strong> for more assistance, or reach out directly
            to <a href="mailto:marketing@greatmarketing.ai">marketing@greatmarketing.ai</a>.
          </li>
          <li><strong>Carrier Liability Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
          <li><strong>Message and Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies.</li>
          <li>
            <strong>Privacy Policy:</strong> For privacy-related inquiries, please refer to
            our <a href="/privacy">Privacy Policy</a>.
          </li>
        </ul>

        <h2>6. Acceptable Use</h2>
        <p>
          You agree not to use the Services for any unlawful or harmful purpose. This includes a prohibition on
          sending any content that is illegal or violates carrier compliance guidelines. You may not copy, scrape,
          or reverse-engineer any part of the website or AI models. We reserve the right to suspend or terminate
          your account for any violation of these Terms.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All content, tools, and intellectual property on GreatMarketing.ai are owned by us or our licensors. You
          retain ownership of content you input, but grant us a license to use it for improving our Services.
        </p>

        <h2>8. AI-Generated Content</h2>
        <p>
          Our AI tools generate marketing content based on your prompts. You are solely responsible for verifying and
          editing any generated content before use. We are not liable for errors or legal issues arising from use of
          AI-generated content.
        </p>

        <h2>9. Disclaimer and Limitation of Liability</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent
          permitted by law, GreatMarketing.ai shall not be liable for any indirect, incidental, or consequential damages.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California. Any disputes will be resolved in the
          courts of Los Angeles County, California.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us
          at <a href="mailto:marketing@greatmarketing.ai">marketing@greatmarketing.ai</a>.
        </p>
      </div>
    </article>
  );
}
