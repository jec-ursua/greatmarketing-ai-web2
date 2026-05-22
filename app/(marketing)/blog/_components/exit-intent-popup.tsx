"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, Sparkles, Check } from "lucide-react";
import { HireUsButton } from "@/components/HireUsModal";

const STORAGE_KEY = "gma_exit_popup_shown";

export function ExitIntentPopup({
  mobileTimerMs = 180000,
  slug,
}: {
  mobileTimerMs?: number;
  slug?: string;
}) {
  // slug is currently consumed indirectly via HireUsButton (which routes to the
  // contact flow); reserved for future inline-rendered CTAs.
  void slug;

  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const showPopup = useCallback(() => {
    if (hasTriggered.current) return;
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) return;
    hasTriggered.current = true;
    setIsVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    const mobileTimer =
      mobileTimerMs > 0
        ? setTimeout(() => {
            if (window.innerWidth < 1024) {
              showPopup();
            }
          }, mobileTimerMs)
        : null;

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (mobileTimer) clearTimeout(mobileTimer);
    };
  }, [showPopup, mobileTimerMs]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closePopup();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isVisible, closePopup]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200 sm:p-10">
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cream">
          <Sparkles className="h-7 w-7 text-brand-gold-dark" />
        </div>

        <h3 className="mb-3 font-display text-3xl font-bold tracking-tight text-neutral-900">
          Before you go — get exclusive MVA leads
        </h3>

        <p className="mb-6 text-base leading-relaxed text-neutral-700">
          We deliver 100% exclusive, AI-qualified motor vehicle accident leads
          to personal injury law firms — including the untapped Spanish-speaking
          market.
        </p>

        <ul className="mb-6 space-y-3">
          {[
            "Native Spanish + English campaigns (not Google Translate)",
            "AI lead qualification before intake — no junk leads",
            "Territory-protected, 100% exclusive — never shared",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-neutral-700">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              {item}
            </li>
          ))}
        </ul>

        <HireUsButton
          className="flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-base font-bold text-neutral-900 transition hover:bg-brand-gold-dark"
          onClick={closePopup}
        >
          Get Spanish MVA Leads
        </HireUsButton>

        <p className="mt-4 text-center text-sm text-neutral-500">
          Free strategy call. No commitment.
        </p>
      </div>
    </div>
  );
}
