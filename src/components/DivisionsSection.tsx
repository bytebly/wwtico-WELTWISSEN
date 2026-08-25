import React from 'react';
import { motion } from 'framer-motion';
import { DISCIPLINES } from '../data/websiteData';

interface DivisionsSectionProps {
  onSelectDiscipline?: (id: string) => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  onSelectDiscipline,
}) => {
  return (
    <section className="relative w-full bg-[#FFFFFF] border-b border-[#D1C9B7] py-[120px] px-4 md:px-[80px] max-sm:py-14 max-sm:px-5 flex justify-center">
      {/* Main Container: Max Width 1440px, Gap 64px (mobile: 32px) */}
      <div className="max-w-[1280px] w-full flex flex-col items-start gap-[64px] max-sm:gap-8">
        
        {/* Section Header Frame (Gap 16px, mobile 12px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-start gap-[16px] max-sm:gap-3"
        >
          {/* Tag Line Frame (Gap 12px) */}
          <div className="flex flex-row items-center gap-[12px]">
            {/* Rectangle 16px x 1px */}
            <div className="w-[16px] h-[1px] bg-[#C6A15B]" />
            
            <span className="font-['Geist_Mono',monospace] font-semibold text-[12px] leading-[16px] uppercase text-[#C6A15B] max-sm:text-[10px] max-sm:leading-[13px]">
              01 // WHAT WE DO
            </span>
          </div>

          {/* Heading: Our expertise. */}
          <h2 className="font-['DM_Serif_Text',serif] font-normal text-[36px] sm:text-[44px] leading-[115%] text-[#14211D] max-sm:text-[24px] max-sm:leading-[125%]">
            Our expertise.
          </h2>

          {/* Subtitle Description */}
          <p className="font-['Geist',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[160%] text-[#4A5E59] max-sm:text-[14px] max-sm:leading-[150%]">
            Industrial construction, equipment rental and project logistics - brought together to support demanding projects.
          </p>
        </motion.div>

        {/* Cards Grid Frame (Gap 32px, mobile 20px) */}
                {/* Cards Grid Frame (Gap 32px, mobile 20px) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[32px] max-sm:gap-5">
          {DISCIPLINES.map((item, index) => {
            // Mapping tags matching Figma spec requirements
            const disciplineTag =
              item.title === 'Construction' || item.title === 'Industrial Construction'
                ? 'INDUSTRIAL CONSTRUCTION'
                : item.title.toUpperCase();

            const displayTitle =
              item.title === 'Construction' ? 'Industrial Construction' : item.title;

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                onClick={() => onSelectDiscipline && onSelectDiscipline(item.id)}
                className="box-sizing-border w-full lg:h-[468px] flex flex-col items-start p-[32px] gap-[32px] max-sm:p-5 max-sm:gap-5 bg-[#FAF9F5] border border-[#D1C9B7] rounded-[8px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#C6A15B] group"
              >
                {/* Card Top Frame: Number & Discipline Name */}
                <div className="w-full flex flex-row justify-between items-center h-[26px] max-sm:h-[23px]">
                  <span className="font-['Geist_Mono',monospace] font-normal text-[20px] leading-[26px] text-[#C6A15B] max-sm:text-[18px] max-sm:leading-[23px]">
                    {item.number || `0${index + 1}`}
                  </span>
                  <span className="font-['Geist_Mono',monospace] font-normal text-[12px] leading-[16px] uppercase text-[#4A5E59] tracking-wider max-sm:text-[10px] max-sm:leading-[13px]">
                    {disciplineTag}
                  </span>
                </div>

                {/* Card Image Frame (Height 160px, mobile 130px, rounded 4px) */}
                <div className="w-full h-[160px] max-sm:h-[130px] rounded-[4px] overflow-hidden bg-[#E8E4DB] shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={displayTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-['Geist_Mono',monospace] text-[12px] text-[#9A978F] uppercase tracking-widest">
                      IMAGE
                    </div>
                  )}
                </div>

                {/* Card Content Frame (Title + Description, Gap 12px, mobile 8px) */}
                <div className="w-full flex flex-col items-start gap-[12px] max-sm:gap-2">
                  <h3 className="font-['DM_Serif_Text',serif]  text-[28px] leading-normal text-[#14211D] font-normal transition-colors max-sm:text-[20px] max-sm:leading-[130%]">
                    {displayTitle}
                  </h3>
                  <p className="font-['Geist',sans-serif] font-normal text-[15px] leading-[150%] text-[#4A5E59] max-sm:text-[14px] break-words line-clamp-3">
  {item.description}
</p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DivisionsSection;