'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';

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

function HireUsModal({ onClose, payload }: { onClose: () => void; payload: ModalPayload }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto animate-slide-up"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-neutral-100 flex items-center justify-center transition shadow-sm"
        >
          <X size={20} className="text-neutral-700" />
        </button>

        <div className="px-6 lg:px-10 pt-10 pb-6 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-3">
            Get Exclusive{' '}
            <em className="text-brand-gold not-italic font-display italic">
              PI Leads
            </em>{' '}
            in Your Area
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base">
            We usually respond within same day
          </p>
          {payload.services && payload.services.length > 0 && (
            <div className="mt-3 inline-block rounded-lg bg-brand-cream/60 px-4 py-2 text-xs text-neutral-700">
              <span className="font-semibold text-neutral-900">Interested in:</span>{' '}
              {payload.services.join(', ')}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-10 pb-10">
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://link.greatmarketing.ai/widget/form/BNiIyTPy457i6PbjUXsQ"
              title="Get Exclusive PI Leads in Your Area"
              className="w-full h-[500px] lg:h-[550px] border-0"
              loading="lazy"
            />
          </div>

          <div className="hidden lg:block rounded-xl overflow-hidden">
            <img
              src="https://assets.cdn.filesafe.space/3JxiSjEheXuH69sw6BIK/media/6a111a50fe2210f89e49ff94.png"
              alt="Great Marketing AI team — Rafael Hernandez and team welcoming new law firm partners"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
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
