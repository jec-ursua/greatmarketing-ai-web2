'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Check, ArrowRight, ChevronDown, X, Mail, Users, MapPin, DollarSign, Phone, Globe } from 'lucide-react';

const STATES = ['California', 'Texas', 'Florida', 'New York', 'Arizona', 'Nevada', 'Illinois', 'Georgia', 'Pennsylvania', 'Ohio', 'Other'];
const SPEND_RANGES = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k – $100k', '$100k+'];

export type ModalPayload = {
  services?: string[];
  sourceSlug?: string;
  sourceSurface?: string;
};

interface ModalContextType {
  isOpen: boolean;
  payload: ModalPayload;
  openModal: (payload?: ModalPayload) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<ModalPayload>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const openModal = (next?: ModalPayload) => {
    setPayload(next ?? {});
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider value={{ isOpen, payload, openModal, closeModal: () => setIsOpen(false) }}>
      {children}
      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} payload={payload} />}
    </ModalContext.Provider>
  );
}

function HireUsModal({ onClose, payload }: { onClose: () => void; payload: ModalPayload }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', firm: '', website: '', state: '', monthlySpend: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.name || !formData.email || !formData.firm || !formData.state || !formData.monthlySpend) {
      setError('Please complete all required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone || undefined,
          website: formData.website || undefined,
          services: payload.services,
          sourceSlug: payload.sourceSlug,
          sourceSurface: payload.sourceSurface,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-7 animate-slide-up max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition">
          <X size={18} className="text-neutral-600" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check size={32} className="text-emerald-600" strokeWidth={3} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">Thanks, {formData.name.split(' ')[0]}!</h3>
            <p className="text-neutral-600">We will reach out within 24 hours to schedule your consultation call.</p>
          </div>
        ) : (
          <>
            <div className="inline-block px-3 py-1 bg-brand-gold text-neutral-900 text-xs font-bold rounded-full mb-3">FREE STRATEGY CALL</div>
            <h3 className="font-display text-2xl font-bold mb-1.5">Get Your Custom Growth Plan</h3>
            <p className="text-sm text-neutral-600 mb-5">Built specifically for your firm. No fluff, no obligation.</p>

            {payload.services && payload.services.length > 0 && (
              <div className="mb-4 rounded-lg bg-brand-cream/60 px-3 py-2 text-xs text-neutral-700">
                <span className="font-semibold text-neutral-900">Interested in:</span>{' '}
                {payload.services.join(', ')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <FieldInput icon={<Users size={16} />} placeholder="Full Name" value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} />
              <FieldInput icon={<Mail size={16} />} placeholder="Work Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
              <FieldInput icon={<Phone size={16} />} placeholder="Phone (optional)" type="tel" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />
              <FieldInput icon={<BuildingIcon />} placeholder="Law Firm Name" value={formData.firm} onChange={(v) => setFormData({ ...formData, firm: v })} />
              <FieldInput icon={<Globe size={16} />} placeholder="Website (optional)" type="url" value={formData.website} onChange={(v) => setFormData({ ...formData, website: v })} />
              <FieldSelect icon={<MapPin size={16} />} value={formData.state} onChange={(v) => setFormData({ ...formData, state: v })} placeholder="State" options={STATES} />
              <FieldSelect icon={<DollarSign size={16} />} value={formData.monthlySpend} onChange={(v) => setFormData({ ...formData, monthlySpend: v })} placeholder="Monthly Ad Spend" options={SPEND_RANGES} />
              {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
              <button type="submit" disabled={submitting} className="w-full mt-2 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-neutral-900 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-md disabled:opacity-60">
                {submitting ? 'Sending...' : (<>Book a Consultation Call <ArrowRight size={16} /></>)}
              </button>
              <p className="text-[11px] text-center text-neutral-500 pt-1">100% confidential · No spam · No obligation</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function FieldInput({ icon, placeholder, value, onChange, type = 'text' }: { icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">{icon}</div>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition" />
    </div>
  );
}

function FieldSelect({ icon, value, onChange, placeholder, options }: { icon: React.ReactNode; value: string; onChange: (v: string) => void; placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">{icon}</div>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition appearance-none cursor-pointer">
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
    </div>
  );
}

export function HireUsButton({
  children,
  className,
  onClick,
  payload,
}: {
  children: React.ReactNode;
  className?: string;
  /** Optional caller-supplied click handler. Fires BEFORE the modal opens
   *  (used by exit-intent popup to close itself first). */
  onClick?: () => void;
  /** Optional payload (services, source slug) passed to the modal so the
   *  CRM/Slack notification carries the context of where the click came from. */
  payload?: ModalPayload;
}) {
  const { openModal } = useModal();
  return (
    <button
      onClick={() => {
        onClick?.();
        openModal(payload);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
