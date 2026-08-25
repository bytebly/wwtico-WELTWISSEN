import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Droplet, 
  Zap, 
  Factory, 
  Landmark, 
  Layers, 
  type LucideIcon 
} from 'lucide-react';
import { HOME_SECTORS, type IndustrySector } from '../data/websiteData';

interface SectorsSectionProps {
  onSelectSector?: (sector: IndustrySector) => void;
}

// Icon mapper for the sector top-right vector icons
const sectorIcons: Record<string, LucideIcon> = {
  SEC_01: Building2,
  SEC_02: Droplet,
  SEC_03: Zap,
  SEC_04: Droplet,
  SEC_05: Factory,
  SEC_06: Landmark,
};

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  return (
    <section className="w-full bg-[#FAF9F5] py-16 md:py-[120px] px-6 md:px-12 lg:px-[80px] border-b border-[#D1C9B7]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[64px]">
        
        {/* Section Header */}
        <div className="flex flex-col gap-[16px] max-w-[1280px]">
          {/* Tag Line Lockup */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[16px] h-[1px] bg-[#C0913F]" />
            <span className="font-['Geist_Mono',monospace] font-semibold text-[#C0913F] text-[12px] leading-[16px] uppercase tracking-wider">
              04 // INDUSTRIES WE SERVE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Text',serif] text-[#0E2620] text-3xl sm:text-4xl lg:text-[44px] leading-[115%] font-normal">
            Industries we support.
          </h2>

          {/* Subtitle */}
          <p className="font-['Geist',sans-serif] text-[#4A5E59] text-base leading-[160%] font-normal">
            Built for the sectors that carry the Kingdom forward.
          </p>
        </div>

        {/* 6 Industry Sector Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {HOME_SECTORS.map((sector, index) => {
            const IconComponent = sectorIcons[sector.secTag] || Layers;

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onSelectSector && onSelectSector(sector)}
                className="bg-[#F5EFE2] border border-[#D1C9B7] rounded-[16px] p-[20px] flex flex-col justify-between h-auto min-h-[343px] gap-[12px] hover:shadow-lg hover:border-[#C0913F] transition-all duration-300 group cursor-pointer"
              >
                {/* Content Top */}
                <div className="flex flex-col gap-[12px]">
                  {/* Top Bar: Sector Tag & Dynamic Icon */}
                  <div className="flex items-center justify-between w-full h-[18px]">
                    <span className="font-['Geist_Mono',monospace] font-semibold text-[#C0913F] text-[12px] leading-[16px] uppercase">
                      {sector.secTag}
                    </span>
                    <IconComponent className="w-[18px] h-[18px] text-[#C0913F] stroke-[1.5]" />
                  </div>

                  {/* Sector Title */}
                  <h3 className="font-['DM_Serif_Text',serif] text-[#0E2620] text-[22px] leading-[115%] font-normal  transition-colors">
                    {sector.title}
                  </h3>

                  {/* Sector Description */}
                  <p className="font-['Geist',sans-serif] text-[#4A5E59] text-[14px] leading-[160%] font-normal min-h-[44px]">
                    {sector.description}
                  </p>
                </div>

                {/* Sector Image Thumbnail (180px height) */}
                <div className="h-[180px] w-full rounded-[12px] overflow-hidden bg-[#0E2620]/10 border border-[#D1C9B7]/40 shrink-0">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectorsSection;