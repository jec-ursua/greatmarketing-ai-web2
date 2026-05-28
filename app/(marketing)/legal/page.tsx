import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fulfillment Policy',
  description: 'Great Marketing AI fulfillment policy covering service delivery, pricing, cancellation, and refunds.',
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <article className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-3xl mx-auto px-6 prose prose-neutral prose-headings:font-display">
        <h1>Fulfillment Policy</h1>
        <p className="text-sm text-neutral-500">Effective Date: August 8, 2024</p>
        <p>
          Welcome to <strong>Great Marketing AI</strong>! As a dedicated marketing agency, we are committed to
          delivering high-quality marketing services and ensuring a smooth experience for our clients. This
          Fulfillment Policy outlines how we manage service delivery to keep you informed and satisfied.
        </p>

        <h2>1. Service Description</h2>
        <p>
          We provide a range of marketing services including digital marketing, social media management, SEO
          optimization, paid advertising, web design, and AI automation. Each service is described in detail on our
          website to help you make informed decisions. Please review the service descriptions carefully to ensure
          they meet your needs.
        </p>

        <h2>2. Pricing and Currency</h2>
        <p>
          All service prices displayed on our website are in USD and include applicable taxes. We accept payments
          in USD only via secure payment processing systems.
        </p>

        <h2>3. Order Processing</h2>
        <ul>
          <li>
            <strong>Service Confirmation:</strong> After purchasing a service, you will receive a confirmation email
            with details of your order and a summary of the agreed-upon services.
          </li>
          <li>
            <strong>Project Kickoff:</strong> Services will commence as outlined in the confirmation email. The start
            date will be agreed upon with you during the onboarding process.
          </li>
        </ul>

        <h2>4. Service Delivery</h2>
        <ul>
          <li>
            <strong>Delivery Time:</strong> The timeline for delivering services will vary based on the complexity and
            scope of the project. We will provide an estimated completion date and keep you updated on progress.
          </li>
          <li>
            <strong>Revisions and Adjustments:</strong> Any revisions or additional requests should be communicated
            promptly. We offer revision rounds as part of our service agreement.
          </li>
        </ul>

        <h2>5. Client Communication</h2>
        <ul>
          <li>
            <strong>Project Updates:</strong> We will provide regular updates on the status of your project.
            Communication will be conducted through email, project management tools, and Slack.
          </li>
          <li>
            <strong>Feedback and Approvals:</strong> Timely feedback is essential for the successful completion of
            services. We will seek your approval on key deliverables and milestones.
          </li>
        </ul>

        <h2>6. Cancellation and Refunds</h2>
        <ul>
          <li>
            <strong>Cancellation Policy:</strong> If you need to cancel a service, please notify us at least 14 days
            before the scheduled start date. Cancellations made after this period may incur charges.
          </li>
          <li>
            <strong>Refund Policy:</strong> Refunds are considered on a case-by-case basis. If you are dissatisfied
            with our services, please contact our customer support team to discuss your concerns.
          </li>
        </ul>

        <h2>7. Customer Support</h2>
        <p>
          For any questions, concerns, or support related to our services, please contact our customer support team
          at <a href="mailto:marketing@greatmarketing.ai">marketing@greatmarketing.ai</a>. We are here to assist
          you and ensure a successful partnership.
        </p>

        <h2>8. Changes to Policy</h2>
        <p>
          We may update this Fulfillment Policy periodically. Any changes will be posted on our website, and your
          continued use of our services constitutes acceptance of the updated policy.
        </p>

        <p>
          Thank you for choosing <strong>Great Marketing AI</strong>. We appreciate your business and look forward
          to working with you!
        </p>

        <hr />

        <p className="text-sm text-neutral-500">
          Great Marketing AI<br />
          La Mirada, CA, United States<br />
          <a href="mailto:marketing@greatmarketing.ai">marketing@greatmarketing.ai</a><br />
          <a href="tel:+15625928281">(562) 592-8281</a>
        </p>
      </div>
    </article>
  );
}
