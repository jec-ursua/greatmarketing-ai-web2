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
    default: 'Best Law Firm Marketing Agency for Personal Injury | Great Marketing AI',
    template: '%s | Great Marketing AI',
  },
  description: 'Full-service digital marketing agency built exclusively for personal injury law firms. Facebook Ads, Google Ads, SEO, web design, and AI automation — all optimized for signed cases.',
  keywords: ['law firm marketing agency', 'personal injury lawyer marketing', 'law firm marketing', 'AI marketing agency for law firms', 'legal marketing agency', 'personal injury marketing agency', 'bilingual law firm marketing', 'facebook ads for lawyers', 'google ads for lawyers', 'SEO for law firms'],
  authors: [{ name: 'Great Marketing AI' }],
  creator: 'Great Marketing AI',
  publisher: 'Great Marketing AI',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Great Marketing AI',
    title: 'Best Law Firm Marketing Agency for Personal Injury | Great Marketing AI',
    description: 'Full-service digital marketing agency built exclusively for personal injury law firms. Facebook Ads, Google Ads, SEO, web design, and AI automation — all optimized for signed cases.',
    images: [{ url: 'https://framerusercontent.com/images/9g6ePFxvxMuo5NpDlkw8teXS78.png', width: 1200, height: 630, alt: 'Great Marketing AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Law Firm Marketing Agency for Personal Injury | Great Marketing AI',
    description: 'Full-service digital marketing agency built exclusively for personal injury law firms. Facebook Ads, Google Ads, SEO, web design, and AI automation — all optimized for signed cases.',
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
