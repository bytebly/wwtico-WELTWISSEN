import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

// Lightweight inline icons — lucide-react dropped brand/logo icons (Facebook,
// Instagram) in recent versions, so these are self-contained and won't break
// on a package upgrade.
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l1-4h-4V7.5c0-.55.45-1 1-1H15V3z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
    <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
    <path d="M11.5 16.5v-4a2.2 2.2 0 0 1 4.4 0v4" />
    <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
  </svg>
);

// Social links — wire these to COMPANY_INFO.social if/when that shape exists,
// otherwise edit the fallbacks below directly.
const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: COMPANY_INFO?.social?.instagram || 'https://instagram.com/weltwissen',
    Icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: COMPANY_INFO?.social?.facebook || 'https://facebook.com/weltwissen',
    Icon: FacebookIcon,
  },
  {
    name: 'LinkedIn',
    href: COMPANY_INFO?.social?.linkedin || 'https://linkedin.com/company/weltwissen',
    Icon: LinkedinIcon,
  },
];

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="relative w-full bg-[#0B211A] px-5 sm:px-8 md:px-[80px] pt-[56px] sm:pt-[72px] md:pt-[96px] pb-[32px] sm:pb-[40px] md:pb-[48px] flex justify-center text-[#E5DEC9]">
      {/* Background Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex flex-col justify-between">
        <div className="w-full h-[1px] bg-[#C6A15B]" />
        <div className="w-full h-[1px] bg-[#C6A15B]" />
      </div>

      {/* Main Container Max Width 1280px */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-[48px] md:gap-[64px] lg:gap-[80px]">

        {/* Footer Main Content Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12 lg:gap-8">

          {/* Left Column: Logo & Tagline (515px max) */}
          <div className="w-full lg:max-w-[515px] flex flex-col items-start gap-[24px] sm:gap-[32px]">
            {/* Logo Lockup */}
            <div className="flex items-center gap-[11px]">
              <img
                src="/weltwissen/weltwissen-mark.png"
                alt="WELTWISSEN Logo"
                className="h-[38px] w-[36px] sm:h-[44px] sm:w-[42px] object-contain shrink-0"
              />
              <span className="font-['DM_Serif_Text',serif] text-[22px] sm:text-[26px] leading-[130%] sm:leading-[36px] tracking-[0.04em] text-[#FAF9F5]">
                WELTWISSEN
              </span>
            </div>

            {/* Description */}
            <p className="font-['Geist',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[160%] text-[#E5DEC9] max-w-[420px] lg:max-w-none">
              Delivering construction, equipment rental and project logistics for industrial sites throughout the Kingdom of Saudi Arabia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-[10px] sm:gap-[12px]">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WELTWISSEN on ${name}`}
                  title={name}
                  className="group w-[40px] h-[40px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-[#1E4137] text-[#E5DEC9] transition-all duration-200 hover:border-[#C6A15B] hover:bg-[#C6A15B]/10 hover:text-[#C6A15B] hover:-translate-y-[2px] active:scale-95"
                >
                  <Icon className="w-[17px] h-[17px] transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section Layout (Address + Services) */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row flex-wrap md:flex-nowrap items-start gap-8 sm:gap-12 md:gap-[100px] lg:gap-[144px]">

            {/* Middle Column: HQ Address & Contacts */}
            <div className="w-full sm:w-[240px] flex flex-col items-start gap-[16px]">
              <span className="font-['Geist_Mono',monospace] font-bold text-[12px] leading-[16px] uppercase text-[#C6A15B]">
                Al Khobar Headquarters
              </span>

              <p className="font-['Geist',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[150%] text-[#E5DEC9]">
                Office 5127, Building 2004, Road 1527, Block 1115, Al Hidd Industrial Area, Kingdom of Bahrain
              </p>

              <div className="flex flex-col items-start gap-[8px] pt-1 font-['Geist_Mono',monospace] text-[13px] sm:text-[14px] leading-[18px] break-all sm:break-normal">
                <a
                  href={`mailto:${COMPANY_INFO?.email || 'info@weltwissen.com'}`}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  E: {COMPANY_INFO?.email || 'info@weltwissen.com'}
                </a>
                <a
                  href={`tel:${COMPANY_INFO?.phone || '+966138882026'}`}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  T: {COMPANY_INFO?.phone || '+966 13 888 2026'}
                </a>
              </div>
            </div>

            {/* Right Column: Services Links */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-[12px]">
              <span className="font-['Geist_Mono',monospace] font-bold text-[12px] leading-[16px] uppercase text-[#C6A15B]">
                Services
              </span>

              <div className="flex flex-col items-start gap-[12px] font-['Geist',sans-serif] text-[14px] leading-[18px]">
                <button
                  onClick={() => onNavClick('services')}
                  className="text-left text-[#E5DEC9] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Construction
                </button>
                <button
                  onClick={() => onNavClick('fleet')}
                  className="text-left text-[#E5DEC9] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Equipment Rental
                </button>
                <button
                  onClick={() => onNavClick('services')}
                  className="text-left text-[#E5DEC9] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Project Logistics
                </button>
                <button
                  onClick={() => onNavClick('contact')}
                  className="text-left text-[#E5DEC9] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full pt-[24px] sm:pt-[32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 border-t border-[#1D4137]/60">
          <p className="font-['Geist_Mono',monospace] font-normal text-[10px] sm:text-[11px] leading-[16px] sm:leading-[14px] text-[#E5DEC9] opacity-60 max-w-full">
            © {new Date().getFullYear()} WELTWISSEN Company. All rights reserved. Registered in the Kingdom of Saudi Arabia.
          </p>
          <span className="font-['Geist_Mono',monospace] font-normal text-[10px] sm:text-[11px] leading-[14px] uppercase text-[#C6A15B] tracking-wider whitespace-nowrap">
            WORLD KNOWLEDGE · GROUNDED IN DELIVERY
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;