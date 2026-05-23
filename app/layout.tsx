import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-inter', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greatmarketing.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    template: '%s | Great Marketing AI',
  },
  description: 'The marketing agency built for personal injury law firms. We generate exclusive, AI-qualified leads across every PI case type in English and Spanish.',
  keywords: ['personal injury marketing agency', 'law firm marketing', 'personal injury leads', 'PI lead generation', 'MVA leads', 'slip and fall leads', 'medical malpractice leads', 'personal injury lawyer marketing', 'exclusive leads law firm', 'bilingual law firm marketing'],
  authors: [{ name: 'Great Marketing AI' }],
  creator: 'Great Marketing AI',
  publisher: 'Great Marketing AI',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Great Marketing AI',
    title: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    description: 'The marketing agency built for personal injury law firms. We generate exclusive, AI-qualified leads across every PI case type in English and Spanish.',
    images: [{ url: 'https://framerusercontent.com/images/9g6ePFxvxMuo5NpDlkw8teXS78.png', width: 1200, height: 630, alt: 'Great Marketing AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Marketing Agency for Personal Injury Law Firms | Great Marketing AI',
    description: 'The marketing agency built for personal injury law firms. We generate exclusive, AI-qualified leads across every PI case type in English and Spanish.',
    images: ['https://framerusercontent.com/images/9g6ePFxvxMuo5NpDlkw8teXS78.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
