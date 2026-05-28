import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Great Marketing AI collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <article className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-3xl mx-auto px-6 prose prose-neutral prose-headings:font-display">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-neutral-500">Last Updated: January 8, 2026</p>
        <p>
          <strong>Great Marketing AI</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values your privacy.
          This Privacy Policy describes how we collect, use, and protect the personal information you provide through
          our website and our SMS messaging services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide to us, including your name, email address, and mobile phone
          number, specifically when you opt-in to receive communications from us.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used to provide our services, respond to inquiries, and send you automated text messages
          (such as appointment reminders or service updates) if you have provided consent.
        </p>

        <h2>3. SMS Opt-In and Messaging</h2>
        <p>
          By providing your phone number and checking the consent box on our forms, you agree to receive recurring
          automated marketing and informational text messages from Great Marketing AI. Consent is not a condition
          of purchase. Message frequency varies.
        </p>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell, rent, or trade your personal information.</p>
        <p>
          <strong>NO SHARING OF MOBILE INFORMATION:</strong> No mobile information will be shared with third
          parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support
          services, such as customer service, is permitted. All other use case categories exclude text messaging
          originator opt-in data and consent; this information will not be shared with any third parties.
        </p>

        <h2>5. Your Choices and Opt-Out</h2>
        <p>You can cancel our SMS service at any time.</p>
        <ul>
          <li><strong>To Stop:</strong> Text <strong>STOP</strong> to our number. We will send you a final confirmation message.</li>
          <li><strong>For Help:</strong> Text <strong>HELP</strong> for more information or assistance.</li>
          <li><strong>Email:</strong> You may unsubscribe from emails using the link at the bottom of our messages.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We implement physical and technical security measures to protect your data. However, no data transmission
          over the internet or mobile network can be guaranteed to be 100% secure.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us
          at <a href="mailto:marketing@greatmarketing.ai">marketing@greatmarketing.ai</a>.
        </p>
      </div>
    </article>
  );
}
