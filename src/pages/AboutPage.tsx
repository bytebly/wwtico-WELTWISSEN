import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  COMPANY_INFO, 
  ABOUT_MILESTONES, 
  ABOUT_VALUES, 
  HOW_WE_WORK_STEPS, 
  BY_THE_NUMBERS 
} from '../data/websiteData';
import { CtaSection } from '../components/CtaSection';
import { 
   Eye, Target, 
  Truck, Layers, LayoutGrid, MapPin, 
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote?: () => void;
  onTalkToTeam?: () => void;
}



// 8 value icon images served from /public/aboutImage.
// Indices 0-3 are used on mobile, indices 4-7 are used on tablet/desktop,
// in the same order as ABOUT_VALUES (Integrity, Customer Focus, Quality, Safety).
const VALUE_ICONS = [
  '/aboutImage/darkshield.png', //mobile
  '/aboutImage/darkleaf.png',   //mobile
  '/aboutImage/mobquality.png',  //mobile
  '/aboutImage/darkbell.png',   //mobile
  '/aboutImage/shield.png',  
  '/aboutImage/lightleaf.png',
  '/aboutImage/tickDesk.png',
  '/aboutImage/bellDesk.png',
];

// Icon assigned per stat card, matching the Figma order: Equipment, Divisions, Industries, HQ
const STAT_ICONS = [Truck, Layers, LayoutGrid, MapPin];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onTalkToTeam }) => {
  const scrollToCapabilities = () => {
    const el = document.getElementById('vision-mission-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FAF9F5]">
      
      {/* Hero Section matching Figma About Header */}
      <section className="relative overflow-hidden bg-[#0B211A] pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:!p-20 border-b border-[#1E4137]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:!flex lg:!flex-row
                gap-8 sm:gap-10 lg:!gap-12 items-center relative z-10">

          
          {/* Left Column Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:!flex-1 lg:!min-w-0 flex flex-col items-start gap-4 sm:gap-6 max-w-[680px] lg:!max-w-none lg:!gap-10"
          >
            {/* Mobile badge (01 // ABOUT WELTWISSEN with gold rule) */}
            <span className="flex items-center gap-2 sm:hidden">
              <span className="h-px w-3 bg-[#C6A15B]" />
              <span className="font-mono-tag text-[#C6A15B] text-[10px] uppercase tracking-widest font-normal">
                01 // ABOUT WELTWISSEN
              </span>
            </span>
            {/* Desktop/tablet badge */}
            <span className="hidden sm:flex sm:items-center sm:gap-2 lg:!gap-3">
              <span className="hidden lg:!block h-px w-4 bg-[#C6A15B]" />
              <span className="font-mono-tag text-[#C6A15B] text-xs uppercase tracking-widest font-semibold lg:!text-[12px] lg:!tracking-normal">
                <span className="lg:!hidden">— </span>ABOUT WELTWISSEN
              </span>
            </span>

            <h1 className="font-['DM_Serif_Text',serif] font-normal lg:!font-normal text-white text-[32px] xs:text-4xl sm:text-5xl lg:!text-[56px] leading-[115%] sm:leading-[110%] lg:!leading-[1.1] tracking-tight lg:!tracking-normal">
              {COMPANY_INFO.aboutHeroHeadline}
            </h1>

            <p className="font-sans-body text-[#E5DEC9] sm:text-[#E5DEC9]/90 lg:!text-[#E5DEC9] text-[15px] sm:text-base md:text-lg lg:!text-[20px] leading-[150%] sm:leading-[160%] max-w-[600px] lg:!max-w-none">
              {COMPANY_INFO.aboutHeroDescription}
            </p>

            {/* CTA button — desktop/tablet only, not part of the mobile design */}
            <div className="pt-2 w-full sm:w-auto hidden sm:block">
              <button
  onClick={scrollToCapabilities}
  className="flex items-center justify-center gap-2 bg-[#C6A15B] hover:bg-[#0E2620] text-[#0B211A] hover:text-[#F5EFE2] font-['Geist_Mono',monospace] font-semibold text-xs uppercase px-6 lg:px-[28px] py-3.5 border border-[#C6A15B] hover:border-[#C0913F] transition-all cursor-pointer shadow-sm w-full sm:w-auto"
>
  <span>OUR CAPABILITIES</span>
  <ArrowRight className="w-3.5 h-3.5" />
</button>

            </div>

            {/* Bottom construction/rental/logistics bar — desktop/tablet only */}
            <div className="hidden sm:flex w-full pt-5 sm:pt-6 border-t border-[#1E4137] flex-col gap-1">
              <span className="font-mono-tag text-[#C68B59] lg:!text-[#E5DEC9] lg:!opacity-60 text-[10px] sm:text-[11px] font-semibold lg:!font-normal tracking-wider lg:!tracking-normal">
                CONSTRUCTION · EQUIPMENT RENTAL · PROJECT LOGISTICS
              </span>
            </div>
          </motion.div>

          {/* Right Column - Dusk Construction Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:!flex-1 lg:!min-w-0 relative w-full h-[220px] xs:h-[320px] sm:h-[440px] lg:!h-[520px] rounded-lg overflow-hidden border border-[#1E4137] lg:!border-0 bg-[#071510] shadow-2xl lg:!shadow-none"
          >
            <img
              src="/weltwissen/about_hero.png"
              alt="Industrial Site Construction at Dusk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B211A]/60 via-transparent to-transparent pointer-events-none lg:!hidden" />
          </motion.div>

        </div>
      </section>

      {/* 01 // VISION & MISSION (badge reads 02 on mobile) */}
      <section id="vision-mission-section" className="py-14 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-[80px] lg:py-[120px] border-b border-[#D1C9B7] lg:border lg:border-[#D1C9B7] lg:bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-[80px]">
          
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="flex items-center gap-2 sm:hidden">
              <span className="h-px w-3 bg-[#C6A15B]" />
              <span className="font-mono-tag font-normal text-[#C6A15B] text-[10px] uppercase tracking-wider">
                02 // VISION &amp; MISSION
              </span>
            </span>
            <span className="hidden sm:flex sm:items-center sm:gap-2 lg:gap-[12px]">
              <span className="block h-px w-3 lg:w-[16px] bg-[#C6A15B]" />
              <span className="font-mono-tag font-semibold text-[#C6A15B] text-xs uppercase tracking-wider lg:text-[12px] lg:leading-[16px] lg:tracking-normal">
                01 // VISION &amp; MISSION
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:flex lg:flex-row lg:items-stretch gap-5 sm:gap-8 lg:gap-[32px]">
            {/* Vision Card */}
            <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-white border border-[#D1C9B7] rounded-lg p-6 sm:p-8 lg:p-[48px] flex flex-col gap-4 sm:gap-6 lg:gap-[32px] shadow-sm hover:border-[#C68B59] transition-colors lg:rounded-[8px] lg:hover:border-[#D1C9B7] lg:flex-1 lg:basis-0 lg:min-w-0"
>
  {/* icon-box */}
  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#C68B59]/15 flex items-center justify-center text-[#C68B59] shrink-0 lg:w-[40px] lg:h-[40px] lg:rounded-[6px] lg:bg-[#F5EFEB] lg:text-[#C6A15B]">
    <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px]" strokeWidth={2} />
  </div>

  {/* label + text frame */}
  <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-[16px] lg:w-[528px] lg:max-w-full">
    <span className="font-mono-tag font-bold text-[#C68B59] text-[11px] sm:text-xs uppercase tracking-wider text-left lg:text-[#C6A15B] lg:font-['Geist_Mono',monospace] lg:text-[14px] lg:leading-[18px] lg:tracking-normal">
      OUR VISION
    </span>
    <p className="font-['DM_Serif_Text',serif] sm:font-serif-title text-[#14211D] sm:text-[#0B211A] text-[20px] sm:text-2xl lg:text-[26px] font-normal leading-[130%] sm:leading-[140%] max-w-[302px] sm:max-w-none lg:text-[#14211D] lg:text-[28px] lg:leading-[130%] lg:w-full">
      {COMPANY_INFO.visionText}
    </p>
  </div>
</motion.div>

            {/* Mission Card */}
            <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="bg-white border border-[#D1C9B7] rounded-lg p-6 sm:p-8 lg:p-[48px] flex flex-col gap-4 sm:gap-6 lg:gap-[32px] shadow-sm transition-colors lg:rounded-[8px] lg:border-[#C6A15B] lg:hover:border-[#C6A15B] lg:flex-1 lg:basis-0 lg:min-w-0"
>
  {/* icon-box */}
  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#C68B59]/15 flex items-center justify-center text-[#C68B59] shrink-0 lg:w-[40px] lg:h-[40px] lg:rounded-[6px] lg:bg-[#C6A15B] lg:text-[#0B211A]">
    <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px]" strokeWidth={2} />
  </div>

  {/* label + text frame */}
  <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-[16px] lg:w-[528px] lg:max-w-full">
    <span className="font-mono-tag font-bold text-[#C68B59] text-[11px] sm:text-xs uppercase tracking-wider text-left lg:text-[#C6A15B] lg:font-['Geist_Mono',monospace] lg:text-[14px] lg:leading-[18px] lg:tracking-normal">
      OUR MISSION
    </span>
    <p className="font-['DM_Serif_Text',serif] sm:font-serif-title text-[#14211D] sm:text-[#0B211A] text-[20px] sm:text-2xl lg:text-[26px] font-normal leading-[130%] sm:leading-[140%] max-w-[302px] sm:max-w-none lg:text-[#14211D] lg:text-[28px] lg:leading-[130%] lg:w-full">
      {COMPANY_INFO.missionText}
    </p>
  </div>
</motion.div>
          </div>

        </div>
      </section>

      {/* 02 // OUR JOURNEY (badge reads 03 on mobile) */}
     <section className="py-14 px-5 sm:py-20 sm:px-6 md:py-28 md:px-12 lg:!py-[120px] lg:!px-20 border-y border-[#D1C9B7] bg-white">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-10 sm:gap-12 lg:!gap-20">

    {/* Header */}
    <div className="flex flex-col gap-3 lg:!gap-4">
      <div className="flex items-center gap-2 lg:!gap-3">
        <span className="flex items-center gap-2 sm:hidden">
          <span className="h-px w-3 bg-[#C6A15B]" />
          <span className="font-['Geist_Mono',monospace] font-normal text-[#C6A15B] text-[10px] leading-[13px] uppercase">
            03 // OUR JOURNEY
          </span>
        </span>
        <span className="hidden sm:flex items-center gap-3">
          <span className="h-px w-4 bg-[#C6A15B]" />
          <span className="font-['Geist_Mono',monospace] font-semibold text-[#C6A15B] text-xs uppercase tracking-wider">
            02 // OUR JOURNEY
          </span>
        </span>
      </div>

      <h2 className="font-['DM_Serif_Text',serif] text-[#14211D] text-[28px] leading-[38px] sm:text-4xl lg:!text-[44px] sm:leading-[115%] lg:!leading-[115%]">
        Built one phase at a time.
      </h2>
      <p className="font-sans-body text-[#4A5E59] text-sm leading-[150%] sm:text-base lg:!leading-[160%]">
        From equipment rental to an integrated industrial services partner.
      </p>
    </div>

    {/* Mobile: connected vertical timeline — text synced to its own circle pop */}
    <div className="flex flex-col gap-8 sm:hidden">
      {ABOUT_MILESTONES.map((milestone, idx) => {
        const circleDelay = idx * 0.15; // stagger each circle pop down the list
        const textDelay = circleDelay + 0.05; // text follows a beat behind its circle

        const textVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: textDelay, ease: 'easeOut' },
  },
};

        return (
          // Single viewport trigger on the whole card — circle, line, and text
          // all key off this one "is this card in view" check, so nothing can
          // fire out of sync with the others.
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.25, delay: circleDelay, ease: 'easeOut' },
                  },
                }}
                className={`h-[18px] w-[18px] shrink-0 rounded-full border-[3px] border-[#E5DEC9] ${
                  idx === 0 ? 'bg-[#C6A15B]' : 'bg-[#0B211A]'
                }`}
              />
              <motion.span
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { duration: 0.3, delay: circleDelay + 0.2, ease: 'easeInOut' },
                  },
                }}
                style={{ transformOrigin: 'left' }}
                className="h-px flex-1 bg-[#D1C9B7]"
              />
            </div>
            <motion.div variants={textVariants} className="flex flex-col gap-2">
              <span className="font-['Geist_Mono',monospace] font-bold text-[#C6A15B] text-[11px] leading-[14px]">
                {milestone.phase}
              </span>
              <h3 className="font-['DM_Serif_Text',serif] text-[#14211D] text-[18px] leading-[25px]">
                {milestone.title}
              </h3>
              <p className="font-sans-body text-[#4A5E59] text-[13px] leading-[140%]">
                {milestone.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>

    {/* Tablet: card grid; Desktop (lg+): horizontal timeline with traveling gold + trailing lines */}
    <div className="hidden sm:grid lg:!flex lg:!flex-row lg:!items-start grid-cols-2 lg:grid-cols-none gap-4 sm:gap-6 lg:!gap-0">
      {(() => {
        const N = ABOUT_MILESTONES.length;

        // Circle-pop → line-draw → circle-pop ... timing.
        const CIRCLE_DURATION = 0.25;
        const LINE_DURATION = 0.35;
        const STEP = CIRCLE_DURATION + LINE_DURATION; // one full circle+line beat

        // Total time for all N circles + N trailing lines (last line included).
        const SEQUENCE_END = N * STEP;

        // After the full draw-in finishes, the non-last gold circles settle back to black.
        const FLIP_BUFFER = 0.15;
        const FLIP_DURATION = 0.4;
        const FLIP_START = SEQUENCE_END + FLIP_BUFFER;
        const FLIP_END = FLIP_START + FLIP_DURATION;

        const GOLD = '#C6A15B';
        const BLACK = '#0B211A';

        return ABOUT_MILESTONES.map((milestone, idx) => {
          const circleDelay = idx * STEP;   // also the moment the incoming line "touches" this circle
          const lineDelay = circleDelay + CIRCLE_DURATION;
          // Text now appears the instant this card's own circle pops in, not on an unrelated idx*0.1 clock.
          const textDelay = circleDelay + 0.08;
          const isFirst = idx === 0;
          const isLast = idx === N - 1;

          // Build a color timeline for this circle, all expressed as fractions of FLIP_END
          // (so every circle's backgroundColor animation runs on one shared clock from t=0).
          const touchRatio = circleDelay / FLIP_END;
          const flipStartRatio = FLIP_START / FLIP_END;

          let colors, times;
          if (isLast) {
            // Black until the line reaches it, then gold — and stays gold.
            colors = [BLACK, GOLD];
            times = [0, touchRatio];
          } else if (isFirst) {
            // Gold immediately (nothing to wait for), then settles black once sequence completes.
            colors = [GOLD, GOLD, BLACK];
            times = [0, flipStartRatio, 1];
          } else {
            // Black → gold the instant the line touches it → black once the sequence completes.
            colors = [BLACK, GOLD, GOLD, BLACK];
            times = [0, touchRatio, flipStartRatio, 1];
          }

          return (
            // Single viewport trigger on the whole card. Circle, line, and text
            // are all children driven off this one "is this card in view" check
            // via variants, so they can never fire out of sync with each other
            // even if the card straddles the viewport boundary oddly.
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="bg-[#F5EFE2] lg:!bg-transparent border border-[#D1C9B7] lg:!border-none rounded-lg lg:!rounded-none p-5 sm:p-6 lg:!p-0 flex flex-col justify-between lg:!justify-start gap-4 sm:gap-6 lg:!gap-6 shadow-sm lg:!shadow-none hover:border-[#C68B59] lg:hover:!border-none transition-colors lg:!flex-1 lg:!pr-8"
            >
              {/* Timeline connector row — desktop/laptop only */}
              <div className="hidden lg:!flex items-center w-full">
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      backgroundColor: colors,
                    },
                  }}
                  transition={{
                    scale: { duration: CIRCLE_DURATION, delay: circleDelay, ease: 'easeOut' },
                    opacity: { duration: CIRCLE_DURATION, delay: circleDelay, ease: 'easeOut' },
                    backgroundColor: { duration: FLIP_END, times, ease: 'easeInOut' },
                  }}
                  className="h-5 w-5 shrink-0 rounded-full border-4 border-[#E5DEC9]"
                />

                {/* Every circle gets a trailing line, including the last */}
                <motion.span
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: { duration: LINE_DURATION, delay: lineDelay, ease: 'easeInOut' },
                    },
                  }}
                  style={{ transformOrigin: 'left' }}
                  className="lg:!h-px h-0.5 flex-1 bg-[#D1C9B7]"
                />
              </div>

              {/* Text block — fades in the instant this card's own circle pops (or on mount for tablet grid, first beat) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: textDelay, ease: 'easeOut' },
                  },
                }}
                className="flex flex-col gap-2 sm:gap-3 lg:!gap-3"
              >
                <span className="font-['Geist_Mono',monospace] font-semibold text-[#C68B59] lg:!text-[#C6A15B] text-[11px] sm:text-xs uppercase tracking-wider lg:!normal-case lg:!tracking-normal">
                  {milestone.phase}
                </span>
                <h3 className="font-['DM_Serif_Text',serif] text-[#0B211A] lg:!text-[#14211D] text-xl sm:text-2xl lg:!text-[22px] lg:!leading-normal">
                  {milestone.title}
                </h3>
                <p className="font-sans-body text-[#4A5E59] text-xs sm:text-sm lg:!text-sm lg:!leading-[150%]">
                  {milestone.description}
                </p>
              </motion.div>
            </motion.div>
          );
        });
      })()}
    </div>

  </div>
</section>
 

      {/* 03 // OUR VALUES (badge reads 04 on mobile) */}
      <section className="py-14 sm:py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:!px-20 lg:!py-[120px] border-b border-[#D1C9B7] bg-[#F5EFE2] lg:!bg-white">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-12 lg:!gap-16">

    {/* Header */}
    <div className="flex flex-col gap-3 lg:!gap-4">
      <div className="flex items-center gap-2 lg:!gap-3">
        <span className="flex items-center gap-2 sm:hidden">
          <span className="h-px w-3 bg-[#C6A15B]" />
          <span className="font-['Geist_Mono',monospace] font-normal text-[#C6A15B] text-[10px] uppercase tracking-wider">
            04 // OUR VALUES
          </span>
        </span>
        <span className="hidden sm:flex sm:items-center sm:gap-2 lg:!gap-3">
          <span className="hidden sm:inline lg:!hidden font-['Geist_Mono',monospace] font-semibold text-[#4A5E59] text-xs uppercase tracking-wider">
            — 03 // OUR VALUES
          </span>
          <span className="hidden lg:!flex lg:!items-center lg:!gap-3">
            <span className="h-px w-4 bg-[#C6A15B]" />
            <span className="font-['Geist_Mono',monospace] font-semibold text-[#C6A15B] text-xs uppercase tracking-wider lg:!text-[12px] lg:!leading-[16px]">
              03 // OUR VALUES
            </span>
          </span>
        </span>
      </div>

      <h2 className="font-['DM_Serif_Text',serif] text-[#0B211A] lg:!text-[#14211D] text-[28px] xs:text-3xl sm:text-4xl lg:!text-[44px] leading-[135%] sm:leading-[115%] lg:!leading-[110%]">
        What drives every decision.
      </h2>
    </div>

    {/* Mobile: simple icon + title + description stack — uses icons 0-3 */}
    <div className="flex flex-col gap-5 sm:hidden">
      {ABOUT_VALUES.map((val, i) => {
        const iconSrc = VALUE_ICONS[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className={`rounded-xl border p-6 flex flex-col gap-4 ${
              val.isDark ? 'bg-[#0E2620] border-[#C6A15B]' : 'bg-white border-[#D1C9B7]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${
                  val.isDark
                    ? 'bg-[#C6A15B] text-[#0E2620]'
                    : 'bg-[#F5EFE2] border border-[#C6A15B] text-[#C6A15B]'
                }`}
              >
                <img src={iconSrc} alt="" className="h-full w-full object-contain" />
              </div>
              <h3
                className={`font-['DM_Serif_Text',serif] text-[22px] leading-[30px] ${
                  val.isDark ? 'text-white' : 'text-[#14211D]'
                }`}
              >
                {val.number} // {val.title}
              </h3>
            </div>
            <p
              className={`font-sans-body text-sm leading-[150%] ${
                val.isDark ? 'text-[#F5EFE2] opacity-90' : 'text-[#4A5E59]'
              }`}
            >
              {val.subhead}
            </p>
          </motion.div>
        );
      })}
    </div>

    {/* Tablet only: bento grid with badges + quotes — uses icons 4-7 — capped at md, hidden on lg (desktop uses the bento below) */}
    <div className="hidden sm:grid lg:!hidden md:grid-cols-2 gap-4 sm:gap-6">
      {ABOUT_VALUES.map((val, i) => {
        const iconSrc = VALUE_ICONS[i + 4];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 flex flex-col gap-4 sm:gap-6 ${
              val.isDark ? 'bg-[#0E2620] border-[#C6A15B]' : 'bg-[#FAF9F5] border-[#D1C9B7]'
            }`}
          >
            <span className={`absolute top-0 left-0 right-0 h-[3px] ${val.isDark ? 'bg-[#C6A15B]/40' : 'bg-transparent'}`} />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    val.isDark
                      ? 'bg-[#C6A15B] text-[#0E2620]'
                      : 'bg-[#F5EFE2] border border-[#C6A15B] text-[#C6A15B]'
                  }`}
                >
                  <img src={iconSrc} alt="" className="w-full h-full object-contain" />
                </div>
                <span className={`w-1.5 self-stretch rounded-full ${val.isDark ? 'bg-transparent' : 'bg-[#C6A15B]'}`} />
              </div>
              {val.badge && (
                <span className="font-['Geist_Mono',monospace] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-[#F5EFE2] text-[#0E2620]">
                  {val.badge}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="font-['Geist_Mono',monospace] font-bold text-[#C68B59] text-[11px] sm:text-xs uppercase tracking-wider">
                {val.number}
              </span>
              <h3 className={`font-['DM_Serif_Text',serif] text-xl sm:text-2xl leading-[120%] ${val.isDark ? 'text-white' : 'text-[#0B211A]'}`}>
                {val.title}
              </h3>
              <p className={`font-sans-body text-sm sm:text-base leading-[160%] ${val.isDark ? 'text-[#E5DEC9]/90' : 'text-[#14211D]/85'}`}>
                {val.subhead}
              </p>
            </div>
            <div className={`pt-3 sm:pt-4 flex flex-col gap-2 border-t ${val.isDark ? 'border-white/10' : 'border-[#D1C9B7]/60'}`}>
              <span className={`font-['Geist_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-wider font-bold ${val.isDark ? 'text-white/75' : 'text-[#14211D]/60'}`}>
                {val.label}
              </span>
              <p className={`font-sans-body text-xs sm:text-sm leading-[160%] ${val.isDark ? 'text-[#E5DEC9]/85' : 'text-[#4A5E59]'}`}>
                {val.text}
              </p>
            </div>
            {val.quote && (
              <div className="flex items-center gap-3 pt-1">
                <span className="w-[3px] self-stretch min-h-[36px] rounded-full bg-[#C6A15B]" />
                <p className={`font-['DM_Serif_Text',serif] italic text-xs sm:text-sm leading-[140%] ${val.isDark ? 'text-[#E5DEC9]' : 'text-[#0B211A]'}`}>
                  {val.quote}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>

    {/* Desktop (lg+): asymmetric bento per CSS spec — uses icons 4-7 — Integrity(560/dark) + Customer Focus(696/light) | Quality(560/light) + Safety(696/dark) */}
    <div className="hidden lg:!flex lg:!flex-col lg:!gap-6">
      {[0, 1].map((row) => (
        <div key={row} className="lg:!flex lg:!flex-row lg:!gap-6 lg:!items-stretch">
          {ABOUT_VALUES.slice(row * 2, row * 2 + 2).map((val, j) => {
            const idx = row * 2 + j;
            const iconSrc = VALUE_ICONS[idx + 4];
            const isNarrow = j === 0; // 560px card
            const isDark = val.isDark;
            const hasTopBadge = idx === 0;
            const hasDotRow = idx === 1 || idx === 2;
            const hasQuote = idx === 1 || idx === 3;

            // Only Integrity (idx 0) gets the large solid-gold icon treatment,
            // the top hero-strip, and the 16px subhead. Safety (idx 3) is dark
            // but still uses the same small/light icon style as the light cards.
            const isIntegrity = isNarrow && isDark;

            const dotRowBlock = hasDotRow && (
              <div className="lg:!flex lg:!flex-col lg:!gap-4 lg:!relative lg:!z-10">
                <span className="lg:!h-px lg:!bg-[#D1C9B7] lg:!opacity-60" />
                <div className="lg:!flex lg:!items-center lg:!justify-between">
                  <div className="lg:!flex lg:!items-center lg:!gap-1.5">
                    <span className="lg:!w-1.5 lg:!h-1.5 lg:!rounded-full lg:!bg-[#C6A15B]" />
                    <span className="lg:!w-1.5 lg:!h-1.5 lg:!rounded-full lg:!bg-[#C6A15B] lg:!opacity-35" />
                    <span className="lg:!w-1.5 lg:!h-1.5 lg:!rounded-full lg:!bg-[#C6A15B] lg:!opacity-35" />
                  </div>
                  <span className="font-['Geist_Mono',monospace] lg:!text-[11px] lg:!font-bold lg:!uppercase text-[#C6A15B] lg:!opacity-90">
                    {val.badge}
                  </span>
                </div>
              </div>
            );

            const quoteBlock = hasQuote && val.quote && (
              <div className="lg:!flex lg:!items-center lg:!gap-3 lg:!relative lg:!z-10">
                <span className="lg:!w-[3px] lg:!h-11 lg:!rounded-full lg:!bg-[#C6A15B]" />
                <p className={`font-['DM_Serif_Text',serif] italic lg:!text-[18px] lg:!leading-[140%] flex-1 ${isDark ? 'text-[#FAF9F5] lg:!opacity-95' : 'text-[#14211D] lg:!opacity-95'}`}>
                  {val.quote}
                </p>
              </div>
            );

            return (
              <div
                key={idx}
                style={{ flex: isNarrow ? '560 560 0%' : '696 696 0%', minWidth: 0 }}
                className={`lg:!relative lg:!overflow-hidden lg:!rounded-2xl lg:!border lg:!box-border ${
                  isDark ? 'lg:!border-[#C6A15B] lg:!bg-[#0E2620]' : 'lg:!border-[#D1C9B7] lg:!bg-[#FAF9F5]'
                } ${isDark ? 'lg:!p-8' : 'lg:!p-6'} lg:!flex lg:!flex-col ${isDark ? 'lg:!gap-4' : 'lg:!gap-10'}`}
              >
                {/* Top hero-strip: Integrity only per spec */}
                {isIntegrity && (
                  <span className="lg:!absolute lg:!top-0 lg:!left-0 lg:!right-0 lg:!h-[6px] lg:!bg-[#C6A15B] lg:!opacity-35 lg:!z-0" />
                )}

                <div className="lg:!flex lg:!flex-col lg:!gap-4 lg:!relative lg:!z-10">
                  {/* icon row */}
                  <div className="lg:!flex lg:!items-center lg:!justify-between">
                    {isIntegrity ? (
                      <div className="lg:!w-14 lg:!h-14 lg:!rounded-2xl lg:!bg-[#C6A15B] lg:!flex lg:!items-center lg:!justify-center">
                        <img src={iconSrc} alt="" className="lg:!w-full lg:!h-full object-contain" />
                      </div>
                    ) : (
                      <div className="lg:!w-11 lg:!h-11 lg:!rounded-xl lg:!border lg:!border-[#C6A15B] lg:!bg-[#F5EFE2] lg:!flex lg:!items-center lg:!justify-center">
                        <img src={iconSrc} alt="" className="lg:!w-full lg:!h-full object-contain" />
                      </div>
                    )}

                    {hasTopBadge ? (
                      <span className="font-['Geist_Mono',monospace] lg:!text-[12px] lg:!font-bold lg:!uppercase lg:!px-2.5 lg:!py-1.5 lg:!rounded-full lg:!bg-[#F5EFE2] text-[#0E2620]">
                        {val.badge}
                      </span>
                    ) : (
                      <span className="lg:!w-1.5 lg:!self-stretch lg:!rounded-full lg:!bg-[#C6A15B]" />
                    )}
                  </div>

                  {/* copy */}
                  <div className={`lg:!flex lg:!flex-col ${isIntegrity ? 'lg:!gap-3' : 'lg:!gap-2.5'}`}>
                    <span className="font-['Geist_Mono',monospace] lg:!text-[12px] lg:!font-bold lg:!uppercase text-[#C6A15B]">
                      {val.number}
                    </span>
                    <h3
                      className={`font-['DM_Serif_Text',serif] lg:!leading-[120%] ${
                        isIntegrity ? 'lg:!text-[36px] lg:!leading-[115%]' : 'lg:!text-[22px]'
                      } ${isDark ? 'text-[#FAF9F5]' : 'text-[#14211D]'}`}
                    >
                      {val.title}
                    </h3>
                    <p
                      className={`font-['DM_Serif_Text',serif] lg:!leading-[160%] ${
                        isIntegrity ? 'lg:!text-base' : 'lg:!text-sm'
                      } ${isDark ? 'text-[#FAF9F5] lg:!opacity-90' : 'text-[#14211D] lg:!opacity-85'}`}
                    >
                      {val.subhead}
                    </p>
                  </div>

                  {/* supporting */}
                  <div className="lg:!flex lg:!flex-col lg:!gap-2 lg:!pt-2">
                    <span className={`font-['Geist_Mono',monospace] lg:!text-[11px] lg:!font-bold lg:!uppercase ${isDark ? 'text-[#FAF9F5] lg:!opacity-75' : 'text-[#14211D] lg:!opacity-60'}`}>
                      {val.label}
                    </span>
                    <p
                      className={`font-['DM_Serif_Text',serif] lg:!leading-[160%] ${
                        isDark ? 'lg:!text-sm text-[#FAF9F5] lg:!opacity-85' : 'lg:!text-[13px] text-[#14211D] lg:!opacity-85'
                      }`}
                    >
                      {val.text}
                    </p>
                  </div>
                </div>

                {/* Safety (dark, wide) keeps the quote as a flat sibling at the card's own 16px rhythm.
                    Customer Focus (light, wide) groups the divider/dots and quote together at 40px
                    from the main copy block, with 16px between them internally. Quality has only
                    the divider/dots group. */}
                {hasDotRow && hasQuote ? (
                  <div className="lg:!flex lg:!flex-col lg:!gap-4 lg:!relative lg:!z-10">
                    {dotRowBlock}
                    {quoteBlock}
                  </div>
                ) : (
                  <>
                    {dotRowBlock}
                    {quoteBlock}
                  </>
                )}

                {/* Bottom rule: both dark cards per spec (hero-rule on Integrity, safety-rule on Safety) */}
                {isDark && (
                  <span className="lg:!absolute lg:!bottom-0 lg:!left-0 lg:!right-0 lg:!h-[2px] lg:!bg-[#C6A15B] lg:!opacity-25 lg:!z-0" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>

  </div>
</section>

{/**how to de work  */}
{/* 04 // HOW WE WORK — desktop only */}
<section className="hidden lg:!flex lg:!flex-col lg:!items-start lg:!py-[120px] lg:!px-20 lg:!gap-16 lg:!bg-[#FAF9F5] lg:!border lg:!border-[#D1C9B7]">
  <div className="lg:!max-w-[1280px] lg:!mx-auto lg:!w-full lg:!flex lg:!flex-col lg:!gap-16">

    {/* Header */}
    <div className="lg:!flex lg:!flex-col lg:!gap-4">
      <div className="lg:!flex lg:!items-center lg:!gap-3">
        <span className="lg:!h-px lg:!w-4 lg:!bg-[#C6A15B]" />
        <span className="font-['Geist_Mono',monospace] lg:!font-semibold lg:!text-[12px] lg:!leading-[16px] lg:!uppercase text-[#C6A15B]">
          04 // HOW WE WORK
        </span>
      </div>

      <h2 className="font-['DM_Serif_Text',serif] lg:!font-normal text-[#14211D] lg:!text-[44px] lg:!leading-[115%]">
        How we work.
      </h2>
    </div>

    {/* Steps row */}
    <div className="lg:!flex lg:!flex-row lg:!items-stretch lg:!gap-8">
      {HOW_WE_WORK_STEPS.map((step, idx) => (
        <div
          key={idx}
          className="lg:!flex-1 lg:!box-border lg:!bg-white lg:!border lg:!border-[#D1C9B7] lg:!rounded-lg lg:!p-8 lg:!flex lg:!flex-col lg:!gap-8"
        >
          {/* number */}
          <span className="font-['Geist_Mono',monospace] lg:!font-normal lg:!text-[20px] lg:!leading-normal text-[#C6A15B]">
            {String(idx + 1).padStart(2, '0')}
          </span>

          {/* copy */}
          <div className="lg:!flex lg:!flex-col lg:!gap-3">
            <h3 className="font-['DM_Serif_Text',serif] lg:!font-normal text-[#14211D] lg:!text-[28px] lg:!leading-normal">
              {step.title}
            </h3>
            <p className="font-['Geist',sans-serif] lg:!font-normal text-[#4A5E59] lg:!text-[15px] lg:!leading-[150%]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 05 // BY THE NUMBERS */}
      <section className="relative bg-[#0B211A] w-full border-y border-[#D1C9B7]/20 lg:border-none overflow-hidden lg:overflow-clip">
      {/* Decorative background shapes — desktop only, matches Figma bg-shape-1/2 */}
      <div className="hidden lg:block absolute size-[498px] -right-[198px] -top-[207px] rotate-[-12deg] rounded-[160px] bg-[#c0913f]/10 border border-[#c0913f]/20 pointer-events-none" />
      <div className="hidden lg:block absolute size-[417px] -left-[143px] -bottom-[237px] rotate-[10deg] rounded-[140px] bg-[#f5efe2]/10 border border-[#f5efe2]/20 pointer-events-none" />

      <div className="relative max-w-[1500px] lg:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 py-[56px] sm:py-24 lg:py-[120px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px] lg:max-w-[640px]"
        >
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-3 mb-3 sm:mb-8 lg:mb-6">
            <div className="w-[12px] sm:w-8 lg:w-4 h-px bg-[#C6A15B] sm:bg-[#C89C5D] lg:bg-[#C0913F]" />
            <span className="font-['Geist_Mono',monospace] sm:font-mono-tag uppercase tracking-[0.18em] lg:tracking-normal text-[10px] sm:text-[12px] lg:text-[14px] text-[#C6A15B] sm:text-[#C89C5D] lg:text-[#C0913F] font-normal sm:font-normal lg:font-semibold">
              05 // BY THE NUMBERS
            </span>
          </div>

          <h2 className="font-['DM_Serif_Text',serif] sm:font-serif-title text-[#FAF9F5] sm:text-white text-[28px] xs:text-[36px] sm:text-[48px] lg:text-[56px] leading-[110%] sm:leading-[1.05]">
            The numbers behind our work.
          </h2>

          <p className="mt-[8px] sm:mt-8 lg:mt-6 text-[#E5DEC9]/80 sm:text-[#D5DDD8] lg:text-[#E5DEC9]/90 text-[14px] sm:text-[18px] lg:text-[16px] leading-[150%] sm:leading-[1.9] lg:leading-[1.6] max-w-[680px]">
            A snapshot of our capacity, reach and operational scale across the Kingdom.
          </p>
        </motion.div>

        {/* Cards Grid / Stack */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-6 mt-8 sm:mt-20 lg:mt-16">
          {BY_THE_NUMBERS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            const goldBorder = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                className={`relative box-border overflow-hidden rounded-[12px] sm:rounded-[26px] lg:rounded-2xl p-6 sm:p-10 lg:p-8 min-h-[163px] sm:min-h-[217px] border bg-[#0E2620] border-[#1E4137] ${
                  goldBorder ? 'sm:bg-[#0E2620] sm:border-[#C0913F]' : 'sm:bg-[#123329] sm:border-[#1E4137]'
                }`}
                style={{ boxShadow: '0px 10px 24px -10px rgba(0,0,0,0.15)' }}
              >
                {/* Accent Line */}
                <div className="w-[40px] sm:w-14 h-[4px] sm:h-1 rounded-[2px] sm:rounded-full lg:rounded-[2px] bg-[#C0913F]" />

                {/* Stat Value */}
                <h3 className="font-['DM_Serif_Text',serif] sm:font-serif-title text-[#C0913F] text-[30px] sm:text-[55px] lg:text-[72px] leading-[100%] sm:leading-none mt-4 sm:mt-4 lg:mt-4">
                  {stat.stat}
                </h3>

                {/* Stat Label & Description */}
                <div className="mt-4 sm:mt-10 lg:mt-4 flex flex-col gap-[4px] sm:gap-1.5">
                  <p className="font-['Geist_Mono',monospace] sm:font-mono-tag uppercase tracking-[0.18em] lg:tracking-normal text-[13px] lg:text-sm text-[#FAF9F5] sm:text-white font-bold leading-[17px] sm:leading-normal">
                    {stat.label}
                  </p>
                  <p className="font-['Geist',sans-serif] text-[#E5DEC9]/80 sm:text-[#D8DDD8] lg:text-[#E5DEC9]/80 text-[13px] sm:text-[16px] lg:text-sm leading-[140%] sm:leading-[1.8] lg:leading-[150%]">
                    {stat.description}
                  </p>
                </div>

                {/* Icon Badge */}
                <div
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-[15px] lg:right-[15px] w-[32px] h-[32px] sm:w-9 sm:h-9 rounded-full flex items-center justify-center pointer-events-none"
                  style={{ 
                    background: 'rgba(192, 145, 63, 0.101961)', 
                    border: '1px solid rgba(192, 145, 63, 0.2)' 
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#C0913F]" strokeWidth={2} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>

      {/* 06 // GET IN TOUCH */}
      <CtaSection 
        sectionNumber="06"
        className="bg-[#FAF9F5]"
        onTalkToTeam={() => onTalkToTeam && onTalkToTeam()}
        onGetQuote={() => onOpenQuote && onOpenQuote()}
      />

    </div>
  );
};