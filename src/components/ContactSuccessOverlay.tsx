import React from 'react';
import { Check, X } from 'lucide-react';

interface ContactSuccessOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  refCode?: string;
}

export const ContactSuccessOverlay: React.FC<ContactSuccessOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 sm:bg-[#0B211A]/85 sm:backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative flex w-full max-w-[320px] sm:max-w-[480px] flex-col items-center gap-6 sm:gap-5 rounded-2xl border-[1.5px] border-[#C0913F] bg-[#F5EFE2] px-6 py-10 sm:px-12 sm:py-14 text-center shadow-[0_16px_32px_rgba(0,0,0,0.25)] sm:shadow-[0_24px_48px_rgba(0,0,0,0.32)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="hidden sm:block absolute top-4 right-4 cursor-pointer p-1 text-[#4A5E59]/60 hover:text-[#14211D]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex h-16 w-16 sm:h-[72px] sm:w-[72px] items-center justify-center rounded-full bg-[#C0913F]">
          <Check className="h-7 w-7 sm:h-8 sm:w-8 text-[#0B211A] sm:text-[#0E2620]" strokeWidth={3} />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h3 className="font-serif-title text-2xl sm:text-[28px] leading-[33px] sm:leading-[38px] text-[#14211D]">
            Enquiry sent.
          </h3>
          <p className="font-sans-body max-w-[272px] sm:max-w-[360px] text-sm sm:text-[15px] leading-[150%] sm:leading-[160%] text-[#4A5E59]">
            Thank you for reaching out. Our team will review your enquiry and get back to you shortly.
          </p>
        </div>

        <button
          onClick={onClose}
          className="h-11 sm:h-12 w-full sm:w-[160px] cursor-pointer rounded-lg border-[1.5px] border-[#14211D] bg-[#F5EFE2] font-mono-tag text-[13px] font-bold uppercase tracking-[1.5px] text-[#14211D] transition-all hover:bg-[#14211D]/5 active:scale-[0.99]"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};