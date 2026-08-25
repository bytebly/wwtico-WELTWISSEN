import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onViewFleet: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onViewFleet,
}) => {
  return (
    <section className="relative w-full bg-[#0B211A] min-h-[715px] flex items-center justify-center py-[80px] px-4 md:px-[80px] lg:px-[80px] xl:px-[80px] max-sm:min-h-fit max-sm:py-[40px] max-sm:px-[20px]">
      {/* hero-content (Width: 1440px max, Gap: 42px / 32px mobile) */}
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center gap-[42px] max-sm:gap-[32px]">
        
        {/* LEFT COLUMN: Text & Actions Frame (Width: 611px, Gap: 50px / 32px mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-[611_611_0%] lg:min-w-0 flex flex-col items-start gap-[50px] max-sm:gap-[32px] shrink-0"
        >
          {/* Text Container Frame (Gap: 24px / 16px mobile) */}
          <div className="w-full flex flex-col items-start gap-[24px] max-sm:gap-[16px]">
            
            {/* Location Tag Frame */}
            <div className="flex flex-row items-center gap-[8px] h-[16px] max-sm:h-[13px]">
              <span 
                className="text-[#C6A15B] font-['Geist_Mono',monospace] text-[12px] leading-[16px] max-sm:text-[10px] max-sm:leading-[13px] font-normal tracking-wider"
              >
                {COMPANY_INFO.location || "AL KHOBAR, KINGDOM OF SAUDI ARABIA"}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[#FFFFFF] font-['DM_Serif_Text',serif] text-[40px] sm:text-[56px] leading-[110%] font-normal w-full max-sm:text-[32px] max-sm:leading-[120%]"
            >
              {COMPANY_INFO.heroHeadline || "Precision-built for the Kingdom's hardest sites."}
            </h1>

            {/* Description */}
            <p
              className="text-[#E5DEC9] font-['Geist',sans-serif] text-[16px] sm:text-[18px] leading-[160%] font-normal w-full"
            >
              {COMPANY_INFO.heroDescription || "WELTWISSEN delivers industrial construction, heavy equipment and project logistics for demanding sites across Saudi Arabia."}
            </p>
          </div>

          {/* Action Buttons Frame (Gap: 16px / 12px + stacked on mobile) */}
          <div className="flex flex-row flex-wrap items-start gap-[16px] w-full max-sm:flex-col max-sm:flex-nowrap max-sm:gap-[12px]">
            
            {/* button-primary */}
            <button
  onClick={onExploreServices}
  className="box-border flex flex-row items-center justify-center shrink-0
             px-[28px] py-[14px] gap-[8px] w-auto h-[45px] whitespace-nowrap
             bg-[#E5DEC9] border border-[#E5DEC9] transition-colors cursor-pointer 
             max-sm:w-full max-sm:h-[44px] max-sm:bg-[#C6A15B] max-sm:border-[#C6A15B] 
             hover:bg-[#C6A15B] hover:border-[#C6A15B]"
>
  <span
    className="font-['Geist_Mono',monospace] font-semibold text-[13px] 
               leading-[17px] uppercase text-[#0B211A] whitespace-nowrap"
  >
    Explore Services
  </span>
  <ArrowRight
    className="w-[14px] h-[14px] shrink-0 text-[#0B211A] hover:text-[#0B211A]"
    strokeWidth={2}
  />
</button>


            {/* button-secondary */}
            <button
  onClick={onViewFleet}
  className="box-border flex flex-row items-center justify-center shrink-0
             px-[28px] py-[14px] gap-[8px] w-auto h-[45px] whitespace-nowrap
             border border-[#FFFFFF] transition-colors cursor-pointer 
             max-sm:w-full max-sm:h-[44px] max-sm:border-[#E5DEC9] 
             hover:bg-[#C6A15B] hover:border-[#C6A15B]"
>
  <span
    className="font-['Geist_Mono',monospace] font-semibold text-[13px] 
               leading-[17px] uppercase text-[#E5DEC9] whitespace-nowrap
               hover:text-[#0B211A]"
  >
    View Fleet
  </span>
</button>

          </div>

          {/* Footer Sub-Services Bar Frame (desktop/tablet position - hidden on mobile, re-rendered after image below) */}
          <div className="box-sizing-border w-full flex-col items-start pt-[24px] gap-[8px] border-t border-[#1E4137] flex max-sm:hidden">
            <p className="font-['Geist_Mono',monospace] font-normal text-[11px] leading-[14px] text-[#E5DEC9] opacity-60 uppercase tracking-widest">
              CONSTRUCTION &nbsp;·&nbsp; EQUIPMENT RENTAL &nbsp;·&nbsp; PROJECT LOGISTICS
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Construction Site Image Frame (Width: 624px, Height: 555px / 220px mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:flex-[624_624_0%] lg:min-w-0 h-[400px] sm:h-[555px] lg:h-[450px] xl:h-[555px] rounded-[8px] overflow-hidden max-sm:h-[220px]"
        >
          <img
            src="/weltwissen/hero_img.png"
            alt="Saudi Arabia Industrial Construction Site"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Footer Sub-Services Bar - mobile-only, appears after the image (hidden above the sm breakpoint) */}
        <div className="hidden max-sm:flex w-full flex-col items-start pt-[16px] gap-[8px] border-t border-[#1E4137]">
          <p className="font-['Geist_Mono',monospace] font-normal text-[9px] leading-[12px] text-[#E5DEC9] opacity-60 uppercase tracking-widest">
            CONSTRUCTION &nbsp;·&nbsp; EQUIPMENT RENTAL &nbsp;·&nbsp; PROJECT LOGISTICS
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;