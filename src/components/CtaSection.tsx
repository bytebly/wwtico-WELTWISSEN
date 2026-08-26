import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  sectionNumber?: string;
  onTalkToTeam: () => void;
  onGetQuote: () => void;
  showTalkToTeam?: boolean;
  hideTalkToTeamMobile?: boolean; // Hides "TALK TO OUR TEAM" button on mobile view only
  variant?: 'light' | 'dark';
  className?: string; // Allows passing custom background/styling per file
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  sectionNumber = '06',
  onTalkToTeam,
  onGetQuote,
  showTalkToTeam = true,
  hideTalkToTeamMobile = false,
  variant = 'light',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <section
      className={`box-border flex w-full flex-col items-start justify-center px-[24px] py-[56px] border-y border-[#D1C9B7] sm:items-center sm:px-6 sm:py-[120px] sm:border sm:border-[#D1C9B7] lg:px-[80px] ${
        isDark ? 'sm:border-none bg-[#0E2620]' : className ? className : 'bg-[#FAF9F5]'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[342px] flex-col items-start gap-[32px] text-left sm:max-w-[760px] sm:items-center sm:gap-[40px] sm:text-center">
        
        {/* TEXT CONTENT */}
        <div className="flex w-full flex-col items-start gap-[12px] sm:items-center sm:gap-[24px]">
          {/* Section Badge */}
          <div className="flex items-center gap-[8px] sm:gap-[12px]">
            <span
              aria-hidden="true"
              className={`h-[1px] w-[12px] bg-[#C0913F] sm:w-[16px] ${
                isDark ? 'sm:bg-[#F5F2E8]' : 'sm:bg-[#C6A15B]'
              }`}
            />
            <span
              className={`font-['Geist_Mono',monospace] text-[10px] font-normal uppercase leading-[13px] text-[#C0913F] sm:text-[12px] sm:font-semibold sm:leading-[16px] ${
                isDark ? 'sm:text-[#F5F2E8]' : 'sm:text-[#C6A15B]'
              }`}
            >
              {sectionNumber} // GET IN TOUCH
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-['DM_Serif_Text',serif] font-normal text-[24px] leading-[125%] text-[#14211D] sm:max-w-[633px] sm:text-[40px] sm:leading-[115%] lg:text-[44px] ${
              isDark ? 'text-[#FAF9F5] sm:text-[#F5F2E8]' : 'text-[#14211D]'
            }`}
          >
            Let's move your project forward.
          </h2>

          {/* Description */}
          <p
            className={`font-['Geist',sans-serif] text-[14px] font-normal leading-[150%] text-[#4A5E59] sm:max-w-[632px] sm:text-[18px] sm:leading-[160%] ${
              isDark ? 'text-[#E5DEC9] sm:text-[#F5F2E8]' : 'text-[#4A5E59]'
            }`}
          >
            Construction, equipment rental or project logistics - our team is ready to support your next project.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full flex-col items-stretch gap-[16px] sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          
          {/* Request a Quote Button */}
          <button
  type="button"
  onClick={onGetQuote}
  className="group flex h-[44px] w-full items-center justify-center gap-[8px] whitespace-nowrap bg-[#C6A15B] p-[14px] font-['Geist_Mono',monospace] text-[12px] font-semibold uppercase leading-[16px] text-[#0B211A] transition-all duration-300 hover:bg-[#0E2620] hover:border-[#C0913F] hover:text-[#F5EFE2] active:scale-[0.98] sm:h-[45px] sm:w-auto sm:border sm:border-[#C6A15B] sm:px-[28px] sm:text-[13px] sm:leading-[17px]"
>
  <span className="whitespace-nowrap">REQUEST A QUOTE</span>
  <ArrowRight
    className="h-[14px] w-[14px] shrink-0 text-[#0B211A] transition-colors duration-300 group-hover:text-[#F5EFE2]"
    strokeWidth={2.5}
  />
</button>

          {/* Talk To Our Team Button */}
          {showTalkToTeam && (
            <button
              type="button"
              onClick={onTalkToTeam}
              className={`${
                hideTalkToTeamMobile ? 'hidden sm:flex' : 'flex'
              } h-[44px] w-full items-center justify-center rounded-[2px] border px-[28px] py-[14px] font-['Geist_Mono',monospace] text-[12px] font-semibold uppercase leading-[16px] transition-colors active:scale-[0.98] sm:h-[45px] sm:w-auto sm:text-[13px] sm:leading-[17px] ${
                isDark
                  ? 'border-[#ECE8DB] text-[#ECE8DB] hover:bg-[#ECE8DB] hover:text-[#0B211A]'
                  : 'border-[#0B211A] text-[#0B211A] hover:bg-[#0B211A] hover:text-white'
              }`}
            >
              <span>TALK TO OUR TEAM</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};