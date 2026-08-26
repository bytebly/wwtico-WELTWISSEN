import React from 'react';
import {
  ALL_INDUSTRIES,
  WHY_US_INDUSTRIES,
  QUALITY_SAFETY_STANDARDS,
} from '../data/websiteData';

interface IndustriesPageProps {
}

/* ----------------------------------------------------------------------
 * Custom icons — thin two-tone outline style matching the Figma spec
 * (single 2px stroke, gold on a soft gold-tinted rounded square).
 * -------------------------------------------------------------------- */
type IconProps = { className?: string };

const HandshakeIcon: React.FC<IconProps> = ({ className }) => (
  <img
    src="/weltwissen/icons/handshake.png"
    alt="Handshake"
    className={`w-full h-full object-contain ${className || ''}`}
  />
);

const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3.5l6.5 2.7v4.6c0 4.1-2.7 7.4-6.5 8.7-3.8-1.3-6.5-4.6-6.5-8.7V6.2L12 3.5z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
  </svg>
);

const LayersIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
    <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17.5l9 5 9-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldCheckSmallIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3.5l6.5 2.7v4.6c0 4.1-2.7 7.4-6.5 8.7-3.8-1.3-6.5-4.6-6.5-8.7V6.2L12 3.5z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Featured-advantage icon lookup (extend as more advantage items are added) */
const advantageIcons: React.FC<IconProps>[] = [HandshakeIcon, ShieldIcon, LayersIcon];

export const IndustriesPage: React.FC<IndustriesPageProps> = () => {
  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#FAF9F5] text-[#14211D]">

      {/* Header Section */}
      <header className="flex flex-col gap-5 sm:gap-6 px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20 w-full bg-[#FAF6EE] border-b border-[#D1C9B7]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 sm:gap-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-row items-center gap-2 text-[10px] sm:text-xs font-['Geist_Mono',monospace]">
            <span className="text-[#4A5E59] uppercase">Home</span>
            <span className="text-[#C6A15B]">//</span>
            <span className="text-[#14211D] uppercase font-normal">Industries</span>
          </nav>

          {/* Section Label */}
          <div className="flex flex-row items-center gap-2 sm:gap-3">
            <div className="w-3 sm:w-4 h-[1px] bg-[#C6A15B]" />
            <span className="sm:hidden font-['Geist_Mono',monospace] font-normal text-[10px] uppercase tracking-wider text-[#C6A15B]">
              01 // Industries We Serve
            </span>
            <span className="hidden sm:inline font-['Geist_Mono',monospace] font- text-xs uppercase tracking-wider text-[#C6A15B]">
              Industries We Serve
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['DM_Serif_Text',serif] font-normal text-[32px] sm:text-[48px] lg:text-[64px] leading-[110%] text-[#14211D]">
            Industries we serve.
          </h1>

          {/* Description */}
          <p className="font-['Geist',sans-serif] text-[15px] sm:text-lg leading-[150%] sm:leading-[160%] text-[#4A5E59] max-w-[760px]">
            Supporting complex projects across the industries shaping Saudi Arabia's infrastructure, energy and industrial landscape.
          </p>
        </div>
      </header>

      {/* Industries Grid */}
      <section className="flex flex-col gap-8 px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20 w-full">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-6">
          {ALL_INDUSTRIES.map((industry, index) => {
            const formattedIndex = `IND.${String(index + 1).padStart(2, '0')}`;

            return (
              <div
                key={industry.id}
                className="flex flex-col w-full bg-[#0E2620] border border-[#C0913F]/20 rounded-xl overflow-hidden shadow-md"
              >
                {/* Image */}
                <div className="w-full h-[180px] sm:h-[240px] lg:h-[260px] bg-gray-400 overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B211A]/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 sm:gap-3 p-5 sm:p-6 text-white min-h-[150px] sm:min-h-[168px]">
                  <div className="flex flex-row justify-between text-[11px] font-['Geist_Mono',monospace] text-[#C0913F]">
                    <span>{formattedIndex}</span>
                  </div>
                  <h3 className="font-['DM_Serif_Text',serif] text-[22px] sm:text-2xl leading-[120%] sm:leading-[115%] text-white">
                    {industry.title}
                  </h3>
                  <p className="font-['Geist',sans-serif] text-[13px] sm:text-sm leading-[150%] sm:leading-relaxed text-[#F5EFE2] opacity-90 line-clamp-3">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Weltwissen Section (badge reads 02 on mobile) */}
      <section className="flex flex-col gap-8 sm:gap-12 px-5 py-14 sm:px-10 sm:py-20 lg:px-20 lg:py-28 w-full bg-[#0B211A] text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 sm:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <div className="w-3 sm:w-4 h-[1px] bg-[#C6A15B]" />
              <span className="sm:hidden font-['Geist_Mono',monospace] font-normal text-[10px] uppercase tracking-wider text-[#C6A15B]">
                02 // Why Weltwissen
              </span>
              <span className="hidden sm:inline font-['Geist_Mono',monospace] font-semibold text-xs uppercase tracking-wider text-[#C6A15B]">
                Why WELTWISSEN
              </span>
            </div>
            <h2 className="font-['DM_Serif_Text',serif] text-[28px] sm:text-[36px] lg:text-[44px] leading-[120%] sm:leading-tight text-[#FAF9F5] sm:text-white">
              Built around how projects actually work.
            </h2>
          </div>

          {/* Mobile: simple uniform advantage cards (matches the reference design) */}
          <div className="flex flex-col gap-5 sm:hidden">
            {WHY_US_INDUSTRIES.slice(0, 3).map((item, i) => {
              const Icon = advantageIcons[i % advantageIcons.length];
              return (
                <div
                  key={item.number}
                  className="flex flex-col gap-4 rounded-xl border border-[#1E4137] bg-[#0E2620] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#C0913F]/20 bg-[#C0913F]/10 text-[#C6A15B]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-['DM_Serif_Text',serif] text-[20px] leading-[27px] text-[#FAF9F5]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-['Geist',sans-serif] text-sm leading-[150%] text-[#E5DEC9]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop/tablet: asymmetric featured grid (unchanged) */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 sm:gap-6">
            {/* Primary Featured Card */}
            {WHY_US_INDUSTRIES.slice(0, 1).map((item) => {
              const FeaturedIcon = advantageIcons[0];
              return (
                <div
                  key={item.number}
                  className="relative overflow-hidden flex flex-col justify-between gap-8 rounded-xl border border-[#C0913F] bg-[#0E2620] p-6 sm:p-8 shadow-lg"
                >
                  <span className="absolute left-0 right-0 top-0 h-[6px] bg-[#C0913F]" />
                  <div className="flex flex-col gap-5 sm:gap-6">
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C0913F]/20 bg-[#C0913F]/10 text-[#C0913F]">
                        <FeaturedIcon className="h-[22px] w-[22px]" />
                      </span>
                      <div>
                        <span className="font-['Geist_Mono',monospace] text-xs font-semibold uppercase tracking-wider text-[#C0913F]">
                          Featured Advantage
                        </span>
                        <h3 className="font-['DM_Serif_Text',serif] text-2xl sm:text-3xl text-white mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-['Geist',sans-serif] text-[15px] xm:text-base leading-relaxed text-[#E5DEC9]">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-row items-start gap-3 sm:gap-4">
                    <span className="shrink-0 flex items-center gap-2 rounded-full border border-[#C0913F]/20 bg-[#C0913F]/10 px-5 py-2 font-['Geist_Mono',monospace] text-xs font-semibold uppercase tracking-wider text-[#C0913F]">
                      <ShieldCheckSmallIcon className="h-4 w-5" />
                      Trusted Delivery
                    </span>
                    <span className="font-['Geist',sans-serif] text-xs sm:text-sm text-[#E5DEC9] opacity-90 line-clamp-2">
                      From planning to handover, we keep you informed with clear milestones, transparent reporting, and a single point of contact.
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Secondary Cards */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {WHY_US_INDUSTRIES.slice(1, 3).map((item, index) => {
                const SideIcon = advantageIcons[index + 1] || ShieldIcon;
                return (
                  <div
                    key={item.number}
                    className="flex flex-col gap-3 rounded-xl border border-[#C0913F]/20 bg-[#0E2620] p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#C0913F]/20 bg-[#C0913F]/10 text-[#C0913F]">
                        <SideIcon className="h-[18px] w-[18px]" />
                      </span>
                      <h3 className="font-['DM_Serif_Text',serif] text-lg sm:text-xl text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-['Geist',sans-serif] text-[13px] leading-relaxed text-[#E5DEC9]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section — not part of the mobile design, hidden below sm */}
      <section className="hidden sm:flex flex-col gap-10 sm:gap-12 px-5 py-14 sm:px-10 sm:py-20 lg:px-20 lg:py-24 w-full bg-[#FAF6EE] border-t border-[#D1C9B7]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Section Left */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:sticky lg:top-8">
            <div className="flex flex-row items-center gap-3">
              <div className="w-4 h-[1px] bg-[#C6A15B]" />
              <span className="font-['Geist_Mono',monospace] font-semibold text-xs uppercase tracking-wider text-[#C6A15B]">
                Quality & Safety
              </span>
            </div>
            <h2 className="font-['DM_Serif_Text',serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[105%] text-[#14211D]">
              Quality is not a phase. It's the standard.
            </h2>
            <p className="font-['Geist',sans-serif] text-[15px] sm:text-lg leading-relaxed text-[#4A5E59]">
              We maintain rigorous quality and safety practices across our operations, adapted to the demands of large-scale industrial projects.
            </p>
          </div>

          {/* Standards List */}
          <div className="flex flex-col gap-4">
            {QUALITY_SAFETY_STANDARDS.map((standard) => (
              <div
                key={standard.number}
                className={`flex items-start sm:items-center gap-4 rounded-2xl border p-5 transition-all ${
                  standard.isHighlighted
                    ? 'border-[#C0913F] bg-[#0E2620] text-white shadow-md'
                    : 'border-[#0E2620] bg-[#F5EFE2] text-[#14211D]'
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C0913F] font-['Geist_Mono',monospace] text-xs font-extrabold text-[#0E2620]">
                  {standard.number}
                </span>
                <p className={`font-['Geist',sans-serif] text-sm sm:text-base leading-relaxed ${standard.isHighlighted ? 'text-[#F5EFE2]' : 'text-[#0E2620]'}`}>
                  {standard.title}{' '}
                  – {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};