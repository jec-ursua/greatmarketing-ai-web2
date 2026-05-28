'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';
import {
  X, Target, ShieldCheck, Brain, Globe, DollarSign, Sparkles,
  Mail, Users, Phone, ChevronDown, ArrowRight, Check, Lock,
  Zap, PhoneCall, Briefcase,
} from 'lucide-react';

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
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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

/* ─── Constants ─── */

const CASE_TYPES = [
  { label: 'Motor Vehicle Accidents', icon: Target },
  { label: 'Slip & Fall', icon: ShieldCheck },
  { label: 'Medical Malpractice', icon: Brain },
  { label: 'Wrongful Death', icon: Globe },
  { label: 'Workers\' Compensation', icon: Briefcase },
  { label: 'All PI Case Types', icon: Sparkles },
] as const;

const STATES = [
  'California', 'Texas', 'Florida', 'New York', 'Arizona', 'Nevada',
  'Illinois', 'Georgia', 'Pennsylvania', 'Ohio', 'Other',
];

const SPEND_RANGES = [
  'Under $5k', '$5k – $15k', '$15k – $50k', '$50k – $100k', '$100k+',
];

/* ─── Types ─── */

interface FormData {
  caseTypes: string[];
  states: string[];
  monthlySpend: string;
  name: string;
  email: string;
  firm: string;
  phone: string;
}

/* ─── Multi-Step Modal ─── */

function HireUsModal({ onClose, payload }: { onClose: () => void; payload: ModalPayload }) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [animKey, setAnimKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>(() => {
    const initial: FormData = {
      caseTypes: [],
      states: [],
      monthlySpend: '',
      name: '',
      email: '',
      firm: '',
      phone: '',
    };
    if (payload.services?.length) {
      const caseTypeLabels = CASE_TYPES.map((c) => c.label);
      const matched = payload.services.filter((s) =>
        caseTypeLabels.some((l) => l.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(l.toLowerCase()))
      );
      if (matched.length) {
        initial.caseTypes = matched.map((s) =>
          caseTypeLabels.find((l) => l.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(l.toLowerCase())) || s
        );
      }
    }
    return initial;
  });

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const goForward = () => {
    setDirection('forward');
    setAnimKey((k) => k + 1);
    setStep((s) => s + 1);
    containerRef.current?.scrollTo({ top: 0 });
  };

  const goBack = () => {
    setDirection('backward');
    setAnimKey((k) => k + 1);
    setStep((s) => s - 1);
    containerRef.current?.scrollTo({ top: 0 });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.firm.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          firm: formData.firm,
          state: formData.states.join(', '),
          monthlySpend: formData.monthlySpend,
          phone: formData.phone || undefined,
          services: formData.caseTypes,
          sourceSlug: payload.sourceSlug,
          sourceSurface: payload.sourceSurface,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setDirection('forward');
      setAnimKey((k) => k + 1);
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const progressPercent = step >= 4 ? 100 : step * 25;
  const animClass = direction === 'forward' ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[95vh] overflow-y-auto animate-slide-up"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition"
        >
          <X size={18} className="text-neutral-600" />
        </button>

        {/* Progress bar (endowed progress: starts at 25%) */}
        <div className="flex gap-1 px-6 pt-5">
          {[1, 2, 3, 4].map((seg) => (
            <div
              key={seg}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                seg * 25 <= progressPercent ? 'bg-brand-gold' : 'bg-neutral-200'
              }`}
            />
          ))}
        </div>
        {step < 4 && (
          <p className="text-xs text-neutral-400 px-6 pt-2">Step {step} of 3</p>
        )}

        {/* Step content */}
        <div key={animKey} className={animClass}>
          {step === 1 && (
            <Step1CaseTypes
              selected={formData.caseTypes}
              onToggle={(label) => {
                if (label === 'All PI Case Types') {
                  const allLabels = CASE_TYPES.map((c) => c.label);
                  const allSelected = allLabels.every((l) => formData.caseTypes.includes(l));
                  update('caseTypes', allSelected ? [] : [...allLabels]);
                } else {
                  const next = formData.caseTypes.includes(label)
                    ? formData.caseTypes.filter((t) => t !== label)
                    : [...formData.caseTypes, label];
                  update('caseTypes', next);
                }
              }}
              onNext={() => {
                if (formData.caseTypes.length === 0) {
                  setError('Select at least one case type.');
                  return;
                }
                setError(null);
                goForward();
              }}
              error={error}
            />
          )}
          {step === 2 && (
            <Step2Territory
              states={formData.states}
              monthlySpend={formData.monthlySpend}
              onToggleState={(s) => {
                const next = formData.states.includes(s)
                  ? formData.states.filter((x) => x !== s)
                  : [...formData.states, s];
                update('states', next);
              }}
              onSpendChange={(v) => update('monthlySpend', v)}
              onNext={() => {
                if (formData.states.length === 0 || !formData.monthlySpend) {
                  setError('Please select at least one state and your budget.');
                  return;
                }
                setError(null);
                goForward();
              }}
              onBack={goBack}
              error={error}
            />
          )}
          {step === 3 && (
            <Step3Contact
              formData={formData}
              onChange={(key, val) => update(key, val)}
              onSubmit={handleSubmit}
              onBack={goBack}
              submitting={submitting}
              error={error}
              stateNames={formData.states}
            />
          )}
          {step === 4 && (
            <SuccessScreen
              firstName={formData.name.split(' ')[0]}
              stateNames={formData.states}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: Case Type Selection ─── */

function Step1CaseTypes({
  selected,
  onToggle,
  onNext,
  error,
}: {
  selected: string[];
  onToggle: (label: string) => void;
  onNext: () => void;
  error: string | null;
}) {
  return (
    <div className="px-6 pb-8 pt-5">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-1.5">
        What type of cases do you want{' '}
        <span className="text-brand-gold">more</span> of?
      </h2>
      <p className="text-sm text-neutral-500 mb-6">
        Select all that apply. We&apos;ll build a lead pipeline around your practice areas.
      </p>

      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {CASE_TYPES.map(({ label, icon: Icon }) => {
          const isSelected = selected.includes(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => onToggle(label)}
              className={`relative flex items-center gap-3 rounded-xl border-2 p-3.5 text-left text-sm font-semibold transition-all ${
                isSelected
                  ? 'border-brand-gold bg-brand-cream/50 text-neutral-900'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
              }`}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                isSelected ? 'bg-brand-gold/20 text-brand-gold-dark' : 'bg-neutral-100 text-neutral-400'
              }`}>
                <Icon size={18} />
              </div>
              <span className="leading-tight">{label}</span>
              {isSelected && (
                <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Social proof */}
      <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-3">
        <span className="font-semibold text-neutral-700">127+ law firms scaled</span>
        <span className="text-brand-gold">|</span>
        <span className="font-semibold text-neutral-700">800% avg. conversion growth</span>
      </div>

      {/* Scarcity pill */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-xs font-medium px-3.5 py-1.5 rounded-full">
          <Lock size={12} />
          Only 1 firm per territory — 3 markets claimed this week
        </span>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg mb-3">{error}</p>
      )}

      <button
        onClick={onNext}
        className="w-full py-3.5 bg-brand-gold text-neutral-900 rounded-xl font-bold text-sm hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md"
      >
        See Available Territories
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

/* ─── Step 2: Territory & Budget ─── */

function Step2Territory({
  states,
  monthlySpend,
  onToggleState,
  onSpendChange,
  onNext,
  onBack,
  error,
}: {
  states: string[];
  monthlySpend: string;
  onToggleState: (s: string) => void;
  onSpendChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
  error: string | null;
}) {
  return (
    <div className="px-6 pb-8 pt-5">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-1.5">
        Where should we find your{' '}
        <span className="text-brand-gold">cases</span>?
      </h2>
      <p className="text-sm text-neutral-500 mb-5">
        Select every state you want leads in. We protect one firm per market.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {STATES.map((s) => {
          const isSelected = states.includes(s);
          return (
            <button
              key={s}
              type="button"
              onClick={() => onToggleState(s)}
              className={`px-3.5 py-2 rounded-lg border text-sm font-medium transition-all ${
                isSelected
                  ? 'border-brand-gold bg-brand-cream/50 text-neutral-900'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
              }`}
            >
              {isSelected && <Check size={14} className="inline -mt-0.5 mr-1 text-brand-gold-dark" />}
              {s}
            </button>
          );
        })}
      </div>

      <div className="mb-5">
        <FieldSelect
          icon={<DollarSign size={16} />}
          value={monthlySpend}
          onChange={onSpendChange}
          placeholder="Current monthly ad spend"
          options={SPEND_RANGES}
        />
      </div>

      {/* Testimonial card */}
      <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 mb-6">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 text-brand-gold fill-current">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-semibold text-neutral-900 mb-1">
          &ldquo;800% conversion growth in 90 days&rdquo;
        </p>
        <p className="text-xs text-neutral-500">
          — PI firm partnership, verified result
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg mb-3">{error}</p>
      )}

      <button
        onClick={onNext}
        className="w-full py-3.5 bg-brand-gold text-neutral-900 rounded-xl font-bold text-sm hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md"
      >
        Check Availability
        <ArrowRight size={16} />
      </button>

      <button
        type="button"
        onClick={onBack}
        className="mt-3 w-full text-center text-sm text-neutral-500 hover:text-neutral-700 transition"
      >
        &larr; Back
      </button>
    </div>
  );
}

/* ─── Step 3: Contact Info ─── */

function Step3Contact({
  formData,
  onChange,
  onSubmit,
  onBack,
  submitting,
  error,
  stateNames,
}: {
  formData: FormData;
  onChange: (key: keyof FormData, val: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  submitting: boolean;
  error: string | null;
  stateNames: string[];
}) {
  const stateLabel = stateNames.length === 0
    ? 'your markets'
    : stateNames.includes('Other')
      ? stateNames.length === 1 ? 'your market' : stateNames.filter((s) => s !== 'Other').join(', ') + ' & more'
      : stateNames.join(', ');

  return (
    <div className="px-6 pb-8 pt-5">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-1.5">
        Your territory may still be{' '}
        <span className="text-brand-gold">available</span>
      </h2>
      <p className="text-sm text-neutral-500 mb-6">
        We&apos;ll build a custom lead plan for{' '}
        <span className="font-semibold text-neutral-700">{stateLabel}</span>{' '}
        and send it within 24 hours.
      </p>

      <div className="space-y-3 mb-5">
        <FieldInput
          icon={<Users size={16} />}
          placeholder="Full Name"
          value={formData.name}
          onChange={(v) => onChange('name', v)}
        />
        <FieldInput
          icon={<Mail size={16} />}
          placeholder="Work Email"
          type="email"
          value={formData.email}
          onChange={(v) => onChange('email', v)}
        />
        <FieldInput
          icon={<BuildingIcon />}
          placeholder="Law Firm Name"
          value={formData.firm}
          onChange={(v) => onChange('firm', v)}
        />
        <FieldInput
          icon={<Phone size={16} />}
          placeholder="Phone"
          type="tel"
          value={formData.phone}
          onChange={(v) => onChange('phone', v)}
        />
      </div>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mb-5">
        <span className="flex items-center gap-1">
          <Lock size={12} className="text-neutral-400" />
          100% Confidential
        </span>
        <span className="flex items-center gap-1">
          <Zap size={12} className="text-neutral-400" />
          No Obligation
        </span>
        <span className="flex items-center gap-1">
          <PhoneCall size={12} className="text-neutral-400" />
          Response in 24 hrs
        </span>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg mb-3">{error}</p>
      )}

      <button
        onClick={onSubmit}
        disabled={submitting}
        className="w-full py-3.5 bg-brand-gold text-neutral-900 rounded-xl font-bold text-sm hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
      >
        {submitting ? 'Securing your spot...' : (
          <>
            Get Your Custom Lead Plan
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="mt-3 w-full text-center text-sm text-neutral-500 hover:text-neutral-700 transition"
      >
        &larr; Back
      </button>
    </div>
  );
}

/* ─── Success Screen ─── */

function SuccessScreen({
  firstName,
  stateNames,
  onClose,
}: {
  firstName: string;
  stateNames: string[];
  onClose: () => void;
}) {
  const stateLabel = stateNames.length === 0
    ? 'your markets'
    : stateNames.includes('Other')
      ? stateNames.length === 1 ? 'your market' : stateNames.filter((s) => s !== 'Other').join(', ') + ' & more'
      : stateNames.join(', ');

  return (
    <div className="px-6 pb-10 pt-8 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/20">
        <Check size={32} className="text-brand-gold-dark" strokeWidth={3} />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
        You&apos;re in, {firstName}!
      </h2>
      <p className="text-sm text-neutral-600 mb-2 leading-relaxed">
        Your custom lead plan for{' '}
        <span className="font-semibold">{stateLabel}</span>{' '}
        is being built now. We&apos;ll reach out within 24 hours to walk you through it.
      </p>
      <p className="text-xs text-neutral-400 mb-6">
        You&apos;re joining 127+ law firms already scaling with Great Marketing AI
      </p>
      <button
        onClick={onClose}
        className="px-8 py-3 bg-neutral-900 text-white rounded-xl font-bold text-sm hover:bg-neutral-800 transition"
      >
        Close
      </button>
    </div>
  );
}

/* ─── Shared Field Components ─── */

function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function FieldInput({
  icon,
  placeholder,
  value,
  onChange,
  type = 'text',
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition"
      />
    </div>
  );
}

function FieldSelect({
  icon,
  value,
  onChange,
  placeholder,
  options,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">{icon}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition appearance-none cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
    </div>
  );
}

/* ─── HireUsButton (unchanged external API) ─── */

export function HireUsButton({
  children,
  className,
  onClick,
  payload,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
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
