'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
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

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
      {isOpen && <HireUsModal onClose={() => setIsOpen(false)} />}
    </ModalContext.Provider>
  );
}

function HireUsModal({ onClose }: { onClose: () => void }) {
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
              MVA Leads
            </em>{' '}
            in Your Area
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base">
            We usually respond within same day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 px-6 lg:px-10 pb-10">
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://link.greatmarketing.ai/widget/form/BNiIyTPy457i6PbjUXsQ"
              title="Get Exclusive MVA Leads in Your Area"
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { openModal } = useModal();
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}