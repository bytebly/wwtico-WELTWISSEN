import React from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../utils/analytics';

interface ChatbotProps {
  // Kept for drop-in compatibility with existing call sites (e.g. App.tsx),
  // no longer used now that this opens WhatsApp directly.
  onOpenQuoteModal?: (service?: string, equipment?: string) => void;
}

// WhatsApp Business number, digits only (country code + number, no "+", no spaces, no leading 0).
// Currently mapped from the Al Khobar HQ line: 0138822946
const WHATSAPP_NUMBER = '0138822946';

// Default greeting sent when someone taps the button.
const DEFAULT_MESSAGE = "Hi WELTWISSEN, I'd like to know more about your construction, equipment rental and logistics services.";

// Official WhatsApp glyph.
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.04 2c-5.522 0-10 4.478-10 10 0 1.765.462 3.489 1.34 5.007L2 22l5.13-1.345A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.478 10-10s-4.477-10-10-10zm0 18.19a8.17 8.17 0 0 1-4.166-1.14l-.299-.177-3.044.798.813-2.968-.194-.305A8.184 8.184 0 0 1 3.83 12c0-4.529 3.684-8.19 8.21-8.19 4.527 0 8.21 3.661 8.21 8.19 0 4.529-3.683 8.19-8.21 8.19z"/>
  </svg>
);

export const Chatbot: React.FC<ChatbotProps> = () => {
  const handleOpenWhatsApp = () => {
    trackEvent('whatsapp_button_clicked');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenWhatsApp}
        className="bg-[#25D366] hover:bg-[#1fb958] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center relative cursor-pointer group"
        aria-label="Chat with WELTWISSEN on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </motion.button>
    </div>
  );
};
