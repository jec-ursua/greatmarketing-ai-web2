'use client';

import { Mail, MessageSquare, FileText, Search, Monitor, ArrowRight } from 'lucide-react';
import { HireUsButton } from '@/components/HireUsModal';

/* ------------------------------------------------------------------ */
/* Brand SVG logos                                                     */
/* ------------------------------------------------------------------ */

function GoogleAdsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="-2 -5 30 30" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#FBBC04" d="M3.2 14.6L9.5 3.8c.9-1.5 2.8-2 4.3-1.2 1.5.9 2 2.8 1.2 4.3L8.6 17.8c-.9 1.5-2.8 2-4.3 1.2-1.5-.9-2-2.9-1.1-4.4z" />
      <path fill="#4285F4" d="M20.8 14.6L14.5 3.8c-.9-1.5-.3-3.5 1.2-4.3 1.5-.9 3.5-.3 4.3 1.2l6.4 10.8c.9 1.5.3 3.5-1.2 4.3-1.5.9-3.5.3-4.4-1.2z" />
      <circle fill="#34A853" cx="6" cy="19.2" r="3.5" />
    </svg>
  );
}

function MetaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#0081FB" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.04.86.11V9a6.27 6.27 0 0 0-.86-.06A6.34 6.34 0 0 0 3.15 15.4a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.65a8.16 8.16 0 0 0 4.77 1.52V7.73a4.83 4.83 0 0 1-1.01-1.04z" fill="#000"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Lucide icon wrappers (gold-tinted for visual weight parity)         */
/* ------------------------------------------------------------------ */

function LucideIcon({ icon: Icon, className }: { icon: typeof Mail; className?: string }) {
  return (
    <div className={className}>
      <Icon className="h-full w-full text-brand-gold-dark" strokeWidth={1.75} />
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
  return <LucideIcon icon={Mail} className={className} />;
}
function SmsIcon({ className }: { className?: string }) {
  return <LucideIcon icon={MessageSquare} className={className} />;
}
function ContentIcon({ className }: { className?: string }) {
  return <LucideIcon icon={FileText} className={className} />;
}
function SeoIcon({ className }: { className?: string }) {
  return <LucideIcon icon={Search} className={className} />;
}
function WebDesignIcon({ className }: { className?: string }) {
  return <LucideIcon icon={Monitor} className={className} />;
}

/* ------------------------------------------------------------------ */
/* Channel data with floating positions (3-2-3 layout)                 */
/* ------------------------------------------------------------------ */

const channels = [
  // Top row — paid ad platforms
  { name: 'Google Ads', Icon: GoogleAdsIcon, position: { top: '6%', left: '12%' }, delay: 0 },
  { name: 'Meta Ads', Icon: MetaIcon, position: { top: '-8%', left: '45%' }, delay: 0.5 },
  { name: 'TikTok Ads', Icon: TikTokIcon, position: { top: '6%', right: '12%' }, delay: 1.0 },
  // Middle row — direct communication channels
  { name: 'Email', Icon: MailIcon, position: { top: '44%', left: '3%' } as const, delay: 0.3 },
  { name: 'SMS', Icon: SmsIcon, position: { top: '44%', right: '3%' } as const, delay: 0.8 },
  // Bottom row — owned channels
  { name: 'Content', Icon: ContentIcon, position: { bottom: '8%', left: '14%' }, delay: 1.2 },
  { name: 'SEO', Icon: SeoIcon, position: { bottom: '-2%', left: '42%' }, delay: 0.6 },
  { name: 'Web Design', Icon: WebDesignIcon, position: { bottom: '8%', right: '14%' }, delay: 0.9 },
];

/* ------------------------------------------------------------------ */
/* Floating icon card                                                  */
/* ------------------------------------------------------------------ */

type CSSPosition = { top?: string; bottom?: string; left?: string; right?: string };

function FloatingIcon({
  name,
  Icon,
  position,
  delay,
}: {
  name: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  position: CSSPosition;
  delay: number;
}) {
  return (
    <div
      className="channel-float absolute z-10"
      style={{
        ...position,
        animation: `integrationFloat 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-brand-gold-light hover:shadow-lg sm:h-[68px] sm:w-[68px] sm:p-3.5 lg:h-[72px] lg:w-[72px] lg:p-4"
        title={name}
      >
        <Icon className="h-full w-full" />
      </div>
      <p className="mt-2 text-center text-[10px] font-medium text-neutral-500 sm:text-xs">
        {name}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Matrix grid background (gold-tinted)                                */
/* ------------------------------------------------------------------ */

function MatrixGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(197,162,74,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,162,74,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(197,162,74,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,162,74,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at center, transparent 30%, white 80%)',
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/10 blur-[100px]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function OmniChannel() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <MatrixGrid />

          {/* Desktop: floating icons around center text */}
          <div className="relative mx-auto hidden h-[580px] max-w-7xl px-6 sm:block lg:h-[620px]">
            {channels.map((channel) => (
              <FloatingIcon key={channel.name} {...channel} />
            ))}

            <div className="absolute inset-0 flex items-center justify-center pb-12">
              <div className="mx-auto max-w-lg px-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  Omni-Channel Marketing
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-[42px] lg:leading-tight">
                  One Firm. <em className="not-italic text-brand-gold">Every Channel.</em> Total Market Presence.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  Most law firms scatter budget across disconnected agencies and freelancers. We run every channel under one roof so your messaging stays consistent, your data stays connected, and every dollar works harder.
                </p>
                <div className="mt-8">
                  <HireUsButton
                    className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-10 py-5 font-bold text-lg text-white transition hover:opacity-90"
                    payload={{ sourceSurface: 'omni-channel' }}
                  >
                    See How It Works <ArrowRight className="h-4 w-4" />
                  </HireUsButton>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: stacked text + icon grid */}
          <div className="relative mx-auto max-w-md px-4 text-center sm:hidden">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
              Omni-Channel Marketing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-neutral-900">
              One Firm. <em className="not-italic text-brand-gold">Every Channel.</em> Total Market Presence.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Most law firms scatter budget across disconnected agencies and freelancers. We run every channel under one roof so your messaging stays consistent, your data stays connected, and every dollar works harder.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {channels.map((channel) => (
                <div key={channel.name} className="flex flex-col items-center gap-1.5">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-md"
                    title={channel.name}
                  >
                    <channel.Icon className="h-full w-full" />
                  </div>
                  <p className="text-[10px] font-medium text-neutral-500">{channel.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <HireUsButton
                className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-10 py-5 font-bold text-lg text-white transition hover:opacity-90"
                payload={{ sourceSurface: 'omni-channel' }}
              >
                See How It Works <ArrowRight className="h-4 w-4" />
              </HireUsButton>
            </div>
          </div>
    </section>
  );
}
