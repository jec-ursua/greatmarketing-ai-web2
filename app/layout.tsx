import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    template: '%s | Great Marketing AI',
  },
  description:
    'Boost your personal injury law firm with the best marketing agency, delivering high-quality leads to personal injury lawyers nationwide. Get leads now!',
  keywords: [
    'personal injury marketing agency',
    'law firm marketing',
    'MVA leads',
    'motor vehicle accident leads',
    'personal injury lawyer marketing',
    'exclusive leads law firm',
    'Spanish marketing law firm',
  ],
  authors: [{ name: 'Great Marketing AI' }],
  creator: 'Great Marketing AI',
  publisher: 'Great Marketing AI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Great Marketing AI',
    title: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    description:
      'Boost your personal injury law firm with the best marketing agency, delivering high-quality leads to personal injury lawyers nationwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Great Marketing AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    description:
      'Boost your personal injury law firm with the best marketing agency, delivering high-quality leads to personal injury lawyers nationwide.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when ready
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
