'use client';

import { useState } from 'react';
import { Check, ArrowRight, ChevronDown, Mail, Users, MapPin, DollarSign } from 'lucide-react';

const STATES = [
  'California', 'Texas', 'Florida', 'New York', 'Arizona', 'Nevada',
  'Illinois', 'Georgia', 'Pennsylvania', 'Ohio', 'Other',
];

const SPEND_RANGES = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $50k',
  '$50k – $100k',
  '$100k+',
];

interface FormState {
  name: string;
  email: string;
  firm: string;
  state: string;
  monthlySpend: string;
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '', email: '', firm: '', state: '', monthlySpend: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.firm || !formData.state || !formData.monthlySpend) {
      setError('Please complete all fields.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="hero-form" className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-7 relative">
      <div className="absolute -top-3 left-7 px-3 py-1 bg-brand-gold text-neutral-900 text-xs font-bold rounded-full">
        FREE STRATEGY CALL
      </div>
      <h3 className="font-display text-2xl font-bold mb-1.5">Get Your Custom Growth Plan</h3>
      <p className="text-sm text-neutral-600 mb-5">
        Built specifically for your firm. No fluff, no obligation.
      </p>

      {submitted ? (
        <div className="py-8 text-center">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-100 flex items-center justify-center">
            <Check size={28} className="text-emerald-600" strokeWidth={3} />
          </div>
          <h4 className="font-display font-bold text-lg mb-1">
            Thanks, {formData.name.split(' ')[0]}!
          </h4>
          <p className="text-sm text-neutral-600">
            We will reach out within 24 hours to schedule your call.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <FieldInput
            icon={<Users size={16} />}
            placeholder="Full Name"
            value={formData.name}
            onChange={(v) => handleChange('name', v)}
            required
          />
          <FieldInput
            icon={<Mail size={16} />}
            placeholder="Work Email"
            type="email"
            value={formData.email}
            onChange={(v) => handleChange('email', v)}
            required
          />
          <FieldInput
            icon={<BuildingIcon />}
            placeholder="Law Firm Name"
            value={formData.firm}
            onChange={(v) => handleChange('firm', v)}
            required
          />
          <FieldSelect
            icon={<MapPin size={16} />}
            value={formData.state}
            onChange={(v) => handleChange('state', v)}
            placeholder="State"
            options={STATES}
          />
          <FieldSelect
            icon={<DollarSign size={16} />}
            value={formData.monthlySpend}
            onChange={(v) => handleChange('monthlySpend', v)}
            placeholder="Monthly Ad Spend"
            options={SPEND_RANGES}
          />
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3.5 bg-brand-gold text-neutral-900 rounded-xl font-bold text-sm hover:brightness-105 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
          >
            {submitting ? 'Sending...' : (
              <>
                Book a Consultation Call <ArrowRight size={16} />
              </>
            )}
          </button>
          <p className="text-[11px] text-center text-neutral-500 pt-1">
            100% confidential · No spam · No obligation
          </p>
        </form>
      )}
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

interface FieldInputProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function FieldInput({ icon, placeholder, value, onChange, type = 'text', required }: FieldInputProps) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
      />
    </div>
  );
}

interface FieldSelectProps {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}

function FieldSelect({ icon, value, onChange, placeholder, options }: FieldSelectProps) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">{icon}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition appearance-none cursor-pointer"
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
