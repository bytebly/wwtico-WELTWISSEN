import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FLEET_CATEGORIES, type FleetCategory } from '../data/websiteData';

interface FleetSectionProps {
  onViewFleet: () => void;
  onSelectCategory: (category: FleetCategory) => void;
}

// Icon map — image-based icons matching the fleet category design
const categoryIconMap: Record<string, string> = {
  'excavators': '/weltwissen/home_icon/excavator.png',
  'dump-trucks': '/weltwissen/home_icon/truck.png',
  'cranes': '/weltwissen/home_icon/crane.png',
  'bulldozers-loaders': '/weltwissen/home_icon/loaders.png',
  'tankers-water-trucks': '/weltwissen/home_icon/tanker.png',
  'generators-compressors': '/weltwissen/home_icon/generator.png',
};

// Hover-state icons live in a parallel /hover/ folder, same filenames
const categoryHoverIconMap: Record<string, string> = {
  'excavators': '/weltwissen/home_icon/excavator_hover.png',
  'dump-trucks': '/weltwissen/home_icon/truck_hover.png',
  'cranes': '/weltwissen/home_icon/crane_hover.png',
  'bulldozers-loaders': '/weltwissen/home_icon/loader_hover.png',
  'tankers-water-trucks': '/weltwissen/home_icon/tanker_hover.png',
  'generators-compressors': '/weltwissen/home_icon/generator_hover.png',
};

const CategoryIcon: React.FC<{ id: string }> = ({ id }) => {
  const src = categoryIconMap[id] || '/weltwissen/icons/bulldozer.png';
  const hoverSrc = categoryHoverIconMap[id] || '/weltwissen/icons/hover/bulldozer.png';
  return (
    <div className="relative h-full w-full">
      <img
        src={src}
        alt={id.replace(/-/g, ' ')}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src={hoverSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

export const FleetSection: React.FC<FleetSectionProps> = ({
  onViewFleet,
}) => {
  const homeCategoryIds = [
    'excavators',
    'dump-trucks',
    'cranes',
    'bulldozers-loaders',
    'tankers-water-trucks',
    'generators-compressors',
  ];

  const homeCategories = homeCategoryIds
    .map((id) => FLEET_CATEGORIES.find((category) => category.id === id))
    .filter((category): category is FleetCategory => !!category);

  return (
    <section className="box-border w-full bg-[#FAF9F5] border-b border-[#D1C9B7] px-4 py-14 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 sm:gap-12 lg:gap-16">
        
        {/* HEADER */}
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
          <div className="flex w-full max-w-[843px] flex-col items-start gap-3 sm:gap-4">
            
            {/* Eyebrow */}
            <div className="flex h-4 items-center gap-3">
              <span className="block h-px w-4 shrink-0 bg-[#C0913F]" />
              <span className="font-['Geist_Mono',monospace] text-[11px] sm:text-[12px] font-semibold uppercase text-[#C0913F]">
                03 // FLEET &amp; EQUIPMENT
              </span>
            </div>

            {/* Title */}
            <h2 className="font-['DM_Serif_Text',serif] text-[30px] xs:text-[34px] sm:text-[40px] lg:text-[44px] font-normal leading-[115%] text-[#0E2620]">
              Equipment ready for the job.
            </h2>

            {/* Subtitle */}
            <p className="font-['Geist',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[160%] text-[#4A5E59]">
              Heavy lifting and civil equipment available on project-based or monthly terms, maintained to industrial standards and ready across the Kingdom.
            </p>
          </div>

          {/* View Fleet Button */}
          <button
            type="button"
            onClick={onViewFleet}
            className="flex h-[45px] w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap
                       bg-[#0E2620] border border-[#0E2620] px-6 py-3 
                       font-['Geist_Mono',monospace] text-[13px] font-semibold 
                       uppercase tracking-wider text-white transition-all duration-300
                       hover:bg-[#C6A15B] hover:border-[#C6A15B] hover:text-[#0B211A]
                       sm:w-auto"
          >
            <span className="whitespace-nowrap">VIEW FLEET</span>
            <ArrowRight size={14} className="shrink-0" />
          </button>

        </div>

        {/* FLEET GRID */}
      <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 min-[1440px]:grid-cols-[repeat(3,400px)] min-[1440px]:justify-center">
          {homeCategories.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              onClick={onViewFleet}
              aria-label={`View ${item.name} details`}
              className="group box-border flex h-auto min-h-[220px] w-full flex-col justify-between rounded-[16px] border border-[#D1C9B7] bg-[#F5EFE2] p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-[#0E2620] hover:border-[#C0913F] hover:shadow-lg sm:min-h-[240px] sm:p-7 lg:rounded-[12px] lg:shadow-[0px_10px_24px_-10px_rgba(0,0,0,0.101961)] xl:h-[256px] xl:shrink-0 xl:pt-8 xl:px-6 xl:pb-6 min-[1440px]:w-[400px]"
            >
              {/* Top Section: Icon & Header Meta */}
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="h-16 w-16 overflow-hidden rounded-xl bg-[#EFE7D2] transition-colors duration-300 group-hover:bg-[#C0913F] sm:h-20 sm:w-20">
                  <CategoryIcon id={item.id} />
                </div>

                <div className="flex flex-col gap-1 lg:gap-[6px]">
                  <span className="font-['Geist_Mono',monospace] text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#C0913F] transition-colors duration-300 group-hover:text-[#C0913F] lg:tracking-normal">
                    {item.badgeTag || 'Heavy Machinery'}
                  </span>
                  <h3 className="font-['DM_Serif_Text',serif] text-[19px] sm:text-[22px] font-normal leading-[120%] text-[#14211D] transition-colors duration-300 group-hover:text-white lg:leading-[30px]">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Bottom Section: CTA Link */}
              <span className="font-['Geist_Mono',monospace] text-right text-[13px] sm:text-[14px] font-semibold text-[#C0913F] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C0913F] lg:text-[13px] lg:leading-[17px]">
                View models →
              </span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};
