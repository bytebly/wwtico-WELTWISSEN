import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { DISCIPLINES } from '../data/websiteData';
import { CtaSection } from '../components/CtaSection';

interface ServicesPageProps {
  onOpenQuote: () => void;
  onTalkToTeam: () => void;
  onNavigate: (tab: string) => void;
}

const SERVICE_REFERENCE_IMAGES: Record<string, string> = {
  construction: '/weltwissen/services-construction.jpg',
  'equipment-rental': '/weltwissen/services-equipment.jpg',
  'project-logistics': '/weltwissen/services-logistics.jpg',
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuote,
  onTalkToTeam,
  onNavigate,
}) => {
  const location = useLocation();

  // Scroll to the discipline section matching the URL hash (e.g. /services#equipment-rental)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#FAF9F5] text-[#14211D]">

      {/* Header Section */}
      <header className="relative flex flex-col gap-6 w-full bg-[#0B211A] px-6 py-[48px] sm:px-10 sm:py-[80px] lg:px-20 lg:pt-[100px] lg:pb-[80px] overflow-hidden">
        {/* faint structural grid lines, matches figma "structural-grid" layer */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-[0.06]">
          <div className="h-px w-full bg-[#C6A15B]" />
          <div className="h-px w-full bg-[#C6A15B]" />
        </div>

        <div className="relative z-[1] mx-auto flex w-full max-w-[1280px] flex-col gap-5 sm:gap-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-row items-center gap-2 text-[10px] sm:text-[11px] font-['Geist_Mono',monospace] tracking-[0.04em]">
            <span className="text-[#E5DEC9] uppercase">Home</span>
            <span className="text-[#C6A15B]">//</span>
            <span className="text-white uppercase">Services</span>
          </nav>

          {/* Title */}
          <h1 className="font-['DM_Serif_Text',serif] text-[28px] sm:text-[56px] lg:text-[72px] leading-[120%] sm:leading-[105%] capitalize text-white">
            Three Disciplines, One Standard
          </h1>

          {/* Description */}
          <p className="font-['Geist',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[160%] text-[#E5DEC9] max-w-[760px] m-0">
            We bring together industrial construction, a capable equipment fleet and project logistics – coordinated through one team.
          </p>
        </div>
      </header>

      {/* Divisions Container */}
     <section className="flex flex-col w-full px-5 pt-8 pb-10 sm:px-10 sm:pt-[24px] sm:pb-[48px] lg:px-20 lg:pt-[40px] lg:pb-[80px]">
  <div className="mx-auto flex w-full max-w-[1280px] flex-col max-sm:gap-10">
    {DISCIPLINES.map((discipline, index) => {
      const isReversed = index % 2 === 1;
      const imageSrc = SERVICE_REFERENCE_IMAGES[discipline.id] ?? discipline.image;

      return (
        <div key={discipline.id} id={discipline.id} className="w-full scroll-mt-24">

          {/* ===== Desktop / tablet layout (lg and up) — unchanged ===== */}
          <div className="hidden lg:flex lg:flex-row items-start gap-7 lg:gap-[48px] py-[40px] lg:py-[56px] w-full">
            {/* Image Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`w-full lg:w-[480px] h-[220px] sm:h-[320px] lg:h-[420px] bg-[#D9D3C6] rounded-[8px] overflow-hidden shrink-0 ${
                isReversed ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <img
                src={imageSrc}
                alt={discipline.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Content Component */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col gap-6 w-full lg:flex-1 min-w-0 ${
                isReversed ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              {/* Label */}
              <div className="flex flex-row items-center gap-4">
                <span className="font-['Geist_Mono',monospace] text-[16px] leading-[21px] text-[#C6A15B]">
                  {discipline.number}
                </span>
                <div className="w-[40px] h-[1px] bg-[#C6A15B] shrink-0" />
                <span className="font-['Geist_Mono',monospace] font-bold text-[14px] leading-[18px] uppercase text-[#C6A15B]">
                  {discipline.title}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-['DM_Serif_Text',serif] font-semiblod text-[30px] sm:text-[36px] lg:text-[44px] lg:leading-[60px] leading-[1.15] text-[#14211D] m-0">
                {discipline.title}
              </h2>

              {/* Description */}
              <p className="font-['Geist',sans-serif] text-[16px] lg:text-[18px] text-[#4A5E59] leading-[160%] m-0">
                {discipline.description}
              </p>

              {/* Key Capabilities */}
              {discipline.capabilities && discipline.capabilities.length > 0 && (
                <div className="flex flex-col gap-4">
                  <span className="font-['Geist_Mono',monospace] font-bold text-[12px] leading-[16px] uppercase tracking-[0.06em] text-[#C6A15B]">
                    Key Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {discipline.capabilities.map((cap, capIndex) => (
                      <span
                        key={capIndex}
                        className="px-[12px] py-[6px] text-[13px] leading-[17px] bg-[#F5EFEB] border border-[#D1C9B7] rounded-[4px] text-[#14211D] font-['Geist',sans-serif] transition-colors hover:border-[#C6A15B]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialized Deliverables */}
              {discipline.deliverables && discipline.deliverables.length > 0 && (
                <div className="flex flex-col gap-4">
                  <span className="font-['Geist_Mono',monospace] font-bold text-[12px] leading-[16px] uppercase tracking-[0.06em] text-[#C6A15B]">
                    Specialized Deliverables
                  </span>
                  <div className="flex flex-wrap gap-[6px]">
                    {discipline.deliverables.map((del, delIndex) => (
                      <span
                        key={delIndex}
                        className="px-[10px] py-[4px] text-[11px] leading-[14px] bg-white border border-[#D1C9B7] rounded-full text-[#4A5E59] font-['Geist_Mono',monospace] transition-colors hover:border-[#C6A15B] hover:text-[#14211D]"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* View Fleet CTA Action for Equipment Rental */}
              {discipline.id === 'equipment-rental' && (
                <button
                  type="button"
                  onClick={() => onNavigate('fleet')}
                  className="group flex w-fit items-center gap-2 font-['Geist_Mono',monospace] text-[13px] leading-[17px] font-bold uppercase tracking-[0.06em] text-[#C6A15B] transition-colors hover:text-[#ddbc73] pt-[10px]"
                >
                  View Fleet
                  <svg
                    className="w-[16px] h-[16px] transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </motion.div>
          </div>

          {/* ===== Mobile-only layout (below lg) — matches Figma mobile-services ===== */}
          <div
            className={`flex lg:hidden flex-col gap-6 w-full ${
              index !== DISCIPLINES.length - 1 ? 'border-b border-[#D1C9B7] pb-10' : ''
            }`}
          >
            {/* Label */}
            <div className="flex flex-row items-center gap-3">
              <span className="font-['Geist_Mono',monospace] text-[16px] leading-[21px] text-[#C6A15B]">
                {discipline.number}
              </span>
              <div className="w-[30px] h-[1px] bg-[#C6A15B] shrink-0" />
              <span className="font-['Geist_Mono',monospace] text-[10px] leading-[13px] uppercase text-[#C6A15B]">
                {discipline.title}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-['DM_Serif_Text',serif] text-[24px] leading-[125%] text-[#0E2620] m-0">
              {discipline.title}
            </h2>

            {/* Image */}
            <div className="w-full h-[200px] bg-[#D9D3C6] rounded-[8px] overflow-hidden">
              <img
                src={imageSrc}
                alt={discipline.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="font-['Geist',sans-serif] text-[16px] leading-[160%] text-[#4A5E59] m-0">
              {discipline.description}
            </p>

            {/* Key Capabilities */}
            {discipline.capabilities && discipline.capabilities.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="font-['Geist_Mono',monospace] text-[10px] leading-[13px] uppercase text-[#C6A15B]">
                  Key Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {discipline.capabilities.map((cap, capIndex) => (
                    <span
                      key={capIndex}
                      className="px-[12px] py-[6px] text-[12px] leading-[150%] bg-[#F5EFE2] border border-[#D1C9B7] rounded-[4px] text-[#14211D] font-['Geist',sans-serif]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      );
    })}
  </div>
</section>

      {/* CTA Section */}
      <CtaSection
        sectionNumber="04"
        onTalkToTeam={onTalkToTeam}
        onGetQuote={onOpenQuote}
        showTalkToTeam={false}
        variant="dark"
      />

    </div>
  );
};