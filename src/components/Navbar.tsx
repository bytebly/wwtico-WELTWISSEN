import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'industries', label: 'Industries' },
    { id: 'contact', label: 'Contact' },
  ];

  // Only used for the mobile full-screen drawer, which includes "Home" as the first link
  const mobileNavItems = [{ id: 'home', label: 'Home' }, ...navItems];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E4137] bg-[#0B211A]">
      {/* Navbar Container */}
      <div className="mx-auto flex h-auto min-h-[72px] max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10 lg:h-[90px] lg:px-[80px] lg:py-[20px] xl:h-[113px] xl:px-[80px] xl:py-[32px]">
        
        {/* Left: Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left focus:outline-none cursor-pointer sm:gap-3 lg:gap-2 xl:w-[265px] xl:h-[49px] xl:gap-2 xl:pl-1"
          aria-label="Go to home"
        >
          <img 
            src="/weltwissen/weltwissen-mark.png" 
            alt="WELTWISSEN Logo" 
            className="h-[34px] w-[33px] object-contain shrink-0 sm:h-[38px] sm:w-[36px] lg:h-[38px] lg:w-[36px] xl:h-[44.21px] xl:w-[42.58px]" 
          />
          <div className="flex flex-col justify-center">
            <span className="font-['DM_Serif_Text',serif] text-[14px] leading-[19px] font-normal tracking-[0.04em] text-[#FAF9F5] sm:text-[16px] sm:leading-[22px] xl:text-[18px] xl:leading-[25px]">
              WELTWISSEN
            </span>
            <span className="block font-['Geist_Mono',monospace] text-[7px] leading-[9px] font-normal tracking-[0.1em] text-[#C6A15B] uppercase sm:text-[8px] sm:leading-[10px] sm:tracking-[0.12em]">
              INDUSTRIAL CONSTRUCTION &amp; LOGISTICS
            </span>
          </div>
        </button>

        {/* Middle: Navigation Links */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-[24px] xl:gap-[40px]" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-['Geist_Mono',monospace] text-[13px] leading-[17px] font-medium uppercase tracking-[1px] transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === item.id ? 'text-[#C6A15B]' : 'text-[#E5DEC9] hover:text-[#C6A15B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Request a Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="group hidden lg:flex h-[40px] w-[150px] items-center justify-center gap-[6px] 
                       border border-[#C6A15B] bg-[#C6A15B] px-[16px] py-[10px] transition-all duration-300 
                       hover:bg-[#0E2620] hover:border-[#C0913F] cursor-pointer
                       xl:h-[45px] xl:w-[195px] xl:gap-[8px] xl:px-[28px] xl:py-[14px]"
          >
            <span className="font-['Geist_Mono',monospace] text-[11px] leading-[15px] font-semibold uppercase 
                             text-[#0B211A] transition-colors duration-300 group-hover:text-[#F5EFE2] whitespace-nowrap
                             xl:text-[13px] xl:leading-[17px]">
              Request a Quote
            </span>
            <ArrowRight 
              className="h-[13px] w-[13px] shrink-0 text-[#0B211A] transition-colors duration-300 group-hover:text-[#F5EFE2] xl:h-[14px] xl:w-[14px]" 
              strokeWidth={2} 
            />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="p-2 text-[#E5DEC9] lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Drawer Menu (below 1024px only) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0B211A] lg:hidden">
          {/* Top row: logo + close button */}
          <div className="flex h-[66px] w-full items-center justify-between px-5 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-[10px] text-left focus:outline-none cursor-pointer"
              aria-label="Go to home"
            >
              <img
                src="/weltwissen/weltwissen-mark.png"
                alt="WELTWISSEN Logo"
                className="h-[28px] w-[27px] object-contain shrink-0"
              />
              <div className="flex flex-col justify-center gap-[1px]">
                <span className="font-['DM_Serif_Text',serif] text-[15px] leading-[21px] font-normal tracking-[0.04em] text-[#FAF9F5]">
                  WELTWISSEN
                </span>
                <span className="font-['Geist_Mono',monospace] text-[7px] leading-[9px] font-normal tracking-[0.08em] text-[#C6A15B] uppercase">
                  INDUSTRIAL CONSTRUCTION &amp; LOGISTICS
                </span>
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#FAF9F5] cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="h-[20px] w-[20px]" strokeWidth={2} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-7 pt-10" aria-label="Mobile navigation">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex flex-col items-start border-b border-[#FAF9F5]/15 py-[18px] text-left cursor-pointer"
              >
                <span
                  className={`font-['DM_Serif_Text',serif] text-[26px] leading-[36px] font-normal ${
                    activeTab === item.id ? 'text-[#C6A15B]' : 'text-[#FAF9F5]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Spacer pushes CTA to bottom */}
          <div className="flex-1" />

          {/* CTA pinned to bottom */}
          <div className="w-full px-5 pb-10 pt-2 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex h-[44px] w-full items-center justify-center bg-[#C6A15B] px-[14px] py-[14px] cursor-pointer"
            >
              <span className="font-['Geist_Mono',monospace] text-[12px] leading-[16px] font-semibold uppercase tracking-[1px] text-[#0B211A]">
                Request a Quote
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;