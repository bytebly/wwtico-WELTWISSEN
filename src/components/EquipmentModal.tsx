import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import type { FleetCategory } from '../data/websiteData';

interface FleetEquipmentModalProps {
  equipment: FleetCategory | null;
  onClose: () => void;
  onRequestQuote: (equipmentName: string) => void;
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Tracks whether the viewport is at or below Tailwind's `sm` breakpoint (640px).
 * Used only to switch the modal's *animation* between a bottom-sheet slide-up
 * (mobile) and the original centered fade/scale (tablet & desktop). All other
 * mobile-only styling is handled purely with Tailwind's `sm:` variants so it
 * never affects larger screens.
 */
const useIsMobileViewport = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 639px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};

export const FleetEquipmentModal: React.FC<FleetEquipmentModalProps> = ({
  equipment,
  onClose,
  onRequestQuote,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobileViewport();

  useEffect(() => {
    if (!equipment) return;

    const previouslyFocusedElement = document.activeElement as HTMLElement | null;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const focusCloseButton = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLButtonElement>('[data-modal-close]')?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusCloseButton);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [equipment, onClose]);

  // Mobile = slide up from the bottom like a native bottom sheet.
  // Desktop/tablet = original centered fade + scale (unchanged).
  const sheetMotionProps = isMobile
    ? {
        initial: { opacity: 0, y: '100%' },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: '100%' },
        transition: { duration: 0.28, ease: 'easeOut' as const },
      }
    : {
        initial: { opacity: 0, scale: 0.96, y: 12 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.96, y: 12 },
        transition: { duration: 0.25, ease: 'easeOut' as const },
      };

  return (
    <AnimatePresence>
      {equipment && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close equipment details"
            className="fixed inset-0 cursor-default bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Card Container */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`fleet-equipment-title-${equipment.id}`}
            aria-describedby={`fleet-equipment-description-${equipment.id}`}
            tabIndex={-1}
            className="relative z-10 box-border flex max-h-[92vh] w-full flex-col items-start overflow-y-auto rounded-t-[20px] border-t border-[#D1C9B7] bg-[#FAF9F5] p-[12px_24px_34px] shadow-[0px_-8px_30px_rgba(0,0,0,0.12)] outline-none sm:max-h-[calc(100vh-2rem)] sm:w-full sm:max-w-[655px] sm:rounded-[12px] sm:border sm:p-[32px_36px] sm:shadow-[0px_12px_40px_rgba(0,0,0,0.15)]"
            {...sheetMotionProps}
          >
            {/* Drag Indicator (mobile bottom-sheet only) */}
            <div className="mb-2 flex w-full justify-center sm:hidden">
              <span className="h-1 w-12 rounded-full bg-[#D1C9B7]" />
            </div>

            <div className="flex w-full flex-col gap-[20px]">

              {/* Header: Category Badge + Close Button */}
              <div className="flex h-[24px] w-full items-center justify-between sm:hidden">
                <span className="font-['Geist_Mono',monospace] text-[11px] font-semibold uppercase leading-[14px] tracking-[1.5px] text-[#C0913F]">
                  {equipment.category || 'HEAVY MACHINERY'}
                </span>
                <button
                  type="button"
                  data-modal-close
                  onClick={onClose}
                  aria-label={`Close ${equipment.name} details`}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F5EFE2] text-[#4A5E59] transition-colors hover:text-[#06251F] focus-visible:outline-none"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>

              {/* Equipment Image */}
              <div className="h-[220px] w-full overflow-hidden rounded-[12px] bg-[#E9E4D9] sm:h-[357px]">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Header: Category Badge + Close Button (desktop/tablet) */}
              <div className="hidden h-[24px] w-full items-center justify-between sm:flex">
                <span className="font-['Inter',sans-serif] text-[11px] font-semibold uppercase leading-[13px] tracking-[1.5px] text-[#C6A15B]">
                  {equipment.category || 'HEAVY MACHINERY'}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={`Close ${equipment.name} details`}
                  className="flex h-[22px] w-[16px] items-center justify-center text-[#595E57] transition-colors hover:text-[#06251F] focus-visible:outline-none"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Title */}
              <h2
                id={`fleet-equipment-title-${equipment.id}`}
                className="font-['DM_Serif_Text',serif] text-[26px] font-normal leading-[120%] text-[#0B211A] sm:font-['Inter',sans-serif] sm:text-[28px] sm:font-bold sm:leading-[34px] sm:text-[#06251F]"
              >
                {equipment.name}
              </h2>

              {/* Divider */}
              <div className="h-[1px] w-full bg-[#D1C9B7]" />

              {/* Description */}
              <p
                id={`fleet-equipment-description-${equipment.id}`}
                className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] text-[#595E57]"
              >
                {equipment.description}
              </p>

              {/* Key Specifications Label */}
              <span className="font-['Inter',sans-serif] text-[11px] font-semibold uppercase leading-[13px] tracking-[1.5px] text-[#C6A15B]">
                KEY SPECIFICATIONS
              </span>

              {/* Specs Grid Chips */}
              <div className="flex flex-wrap items-start gap-[8px] sm:gap-[10px]">
                {equipment.specifications.map((spec) => (
                  <div
                    key={spec}
                    className="box-border flex h-[33px] items-center rounded-[6px] border border-[#D1C9B7] bg-[#FAF9F5] px-[14px] py-[8px] sm:rounded-[4px] sm:bg-transparent"
                  >
                    <span className="whitespace-nowrap font-['Inter',sans-serif] text-[13px] font-medium leading-[17px] text-[#14211D] sm:text-[12px] sm:leading-[15px] sm:text-[#06251F]">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-[4px] flex items-start">
                <button
  type="button"
  onClick={() => onRequestQuote(equipment.name)}
  className="group box-border flex h-[40px] items-center justify-center gap-[12px] 
             rounded-[4px] bg-[#06251F] px-[24px] py-[12px] transition-colors duration-300 
             hover:bg-[#C6A15B] hover:border-[#C6A15B] active:scale-[0.98]"
>
  <span
    className="whitespace-nowrap font-['Inter',sans-serif] text-[13px] font-semibold 
               leading-[16px] text-white transition-colors duration-300 
               group-hover:text-[#06251F]"
  >
    Request This Equipment
  </span>
  <ArrowRight
    className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#06251F]"
    strokeWidth={2}
  />
</button>


              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
