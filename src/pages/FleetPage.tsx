import React from 'react';
import { motion } from 'framer-motion';
import { FLEET_CATEGORIES, FLEET_ADVANTAGES, type FleetCategory } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface FleetPageProps {
  onOpenQuote: () => void;
  onTalkToTeam: () => void;
  onSelectCategory: (category: FleetCategory) => void;
}

/* ----------------------------------------------------------------------
 * Custom fleet-category icons
 * Drawn to match the gold line-art icon style from the Figma spec —
 * each is a simple 24x24 stroke icon so it stays crisp at any size.
 * -------------------------------------------------------------------- */
type IconProps = { className?: string };

const TruckIcon: React.FC<{ className?: string }> = ({ className = "h-[18px] w-[18px] text-[#C0913F]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Truck Body & Cab Outline */}
    <path
      d="M2 5a2 2 0 012-2h9a2 2 0 012 2v2h2.5a2 2 0 011.6.8l2.5 3.33A2 2 0 0120 12.4V17a1 1 0 01-1 1h-1.1M13.9 18H9.1M5.1 18H4a1 1 0 01-1-1V5z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner Divider between Cargo and Cab */}
    <path
      d="M13 3v15"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    {/* Left Wheel */}
    <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth={2} />
    {/* Right Wheel */}
    <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth={2} />
  </svg>
);

/* ----------------------------------------------------------------------
 * IconWithHover
 * Renders the default icon image, plus a hover-variant image stacked on
 * top via absolute positioning. The hover image fades in (opacity 0 -> 1)
 * when an ancestor with the `group` class is hovered — no JS needed.
 *
 * Hover asset naming convention: same filename with `-white` before the
 * extension, e.g. `/weltwissen/icons/excavator.png` ->
 * `/weltwissen/icons/excavator-white.png`. Adjust the replace() below if
 * your actual hover assets use a different suffix/path.
 * -------------------------------------------------------------------- */
const getHoverSrc = (src: string) => src.replace(/(\.\w+)$/, '-white$1');

const IconWithHover: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <span className={`relative inline-block ${className ?? ''}`}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
    />
    <img
      src={getHoverSrc(src)}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </span>
);

const ExcavatorIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/excavator.png" alt="Excavator" className={className} />
);
const DumpTruckIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/dump-truck.png" alt="Dump Truck" className={className} />
);
const CraneIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/crane.png" alt="Crane" className={className} />
);
const BulldozerIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/bulldozer.png" alt="Bulldozer" className={className} />
);
const BackhoeIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/backhoe.png" alt="Backhoe Loader" className={className} />
);
const WheelLoaderIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/wheel-loader.png" alt="Wheel Loader" className={className} />
);
const GraderIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/grader.png" alt="Grader" className={className} />
);
const FlatbedIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/flatbed.png" alt="Flatbed" className={className} />
);
const TankerIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/tanker.png" alt="Tanker" className={className} />
);
const ScissorLiftIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/scissor-lift.png" alt="Scissor Lift" className={className} />
);
const TelehandlerIcon: React.FC<IconProps> = ({ className }) => (
  <IconWithHover src="/weltwissen/icons/telehandler.png" alt="Telehandler" className={className} />
);

const cardIconsMap: Record<string, React.FC<IconProps>> = {
  'excavators': ExcavatorIcon,
  'dump-trucks': DumpTruckIcon,
  'cranes': CraneIcon,
  'bulldozers-loaders': BulldozerIcon,
  'backhoe-loaders': BackhoeIcon,
  'wheel-loaders': WheelLoaderIcon,
  'graders-rollers': GraderIcon,
  'flatbed-lowbed': FlatbedIcon,
  'tankers-water-trucks': TankerIcon,
  'scissors-manlifts': ScissorLiftIcon,
  'telehandlers-forklifts': TelehandlerIcon,
};

export const FleetPage: React.FC<FleetPageProps> = ({
  onOpenQuote,
  onTalkToTeam,
  onSelectCategory,
}) => {
  const featuredCategory = FLEET_CATEGORIES[0]; // Excavators
  const firstRowCategories = FLEET_CATEGORIES.slice(1, 3); // Dump Trucks, Cranes
  const middleCategories = FLEET_CATEGORIES.slice(3, -1); // Middle items
  const finalCategory = FLEET_CATEGORIES.at(-1); // Generators & Compressors

  const getCategoryIcon = (item: FleetCategory) => {
    const IconComponent = cardIconsMap[item.id] || BulldozerIcon;
    return <IconComponent className="h-full w-full" />;
  };

  /* --------------------------------------------------------------------
   * Mobile-only fleet card order — matches the Figma "fleet-stack" frame.
   * On mobile, Backhoe Loaders & Wheel Loaders become dark image cards
   * (like the desktop featured card) and Generators & Compressors moves
   * mid-list as a plain icon card, instead of the desktop grouping.
   * ------------------------------------------------------------------ */
  const findMiddle = (id: string) => middleCategories.find((c) => c.id === id);
  const mobileFleetOrder: { item: FleetCategory | undefined; variant: 'dark' | 'plain' }[] = [
    { item: featuredCategory, variant: 'dark' },
    { item: firstRowCategories[0], variant: 'plain' },
    { item: firstRowCategories[1], variant: 'plain' },
    { item: findMiddle('bulldozers-loaders'), variant: 'plain' },
    { item: findMiddle('tankers-water-trucks'), variant: 'plain' },
    { item: finalCategory, variant: 'plain' },
    { item: findMiddle('scissors-manlifts'), variant: 'plain' },
    { item: findMiddle('telehandlers-forklifts'), variant: 'plain' },
    { item: findMiddle('flatbed-lowbed'), variant: 'plain' },
    { item: findMiddle('graders-rollers'), variant: 'plain' },
    { item: findMiddle('backhoe-loaders'), variant: 'dark' },
    { item: findMiddle('wheel-loaders'), variant: 'dark' },
  ];

  const renderMobilePlainCard = (item: FleetCategory) => (
    <motion.button
      type="button"
      key={item.id}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      onClick={() => onSelectCategory(item)}
      className="group flex flex-col gap-4 p-5 w-full bg-[#FAF9F5] border border-[#D1C9B7] shadow-[0px_6px_12px_-4px_rgba(0,0,0,0.05)] rounded-xl text-left"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center justify-center w-14 h-14">
          {getCategoryIcon(item)}
        </div>
        <span className="px-[10px] py-[4px] text-[9px] leading-[12px] uppercase font-['Geist_Mono',monospace] bg-[#0E2620]/[0.08] rounded-full text-[#0E2620] whitespace-nowrap">
          {item.badgeTag || item.category || 'Equipment'}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-['DM_Serif_Text',serif] text-[20px] leading-[130%] text-[#14211D]">
          {item.name}
        </h3>
        <p className="font-['Geist',sans-serif] text-[13px] leading-[150%] text-[#4A5E59]">
          {item.description}
        </p>
      </div>
      <span className="font-['Geist_Mono',monospace] text-[11px] font-semibold text-[#C0913F]">
        View models →
      </span>
    </motion.button>
  );

  const renderMobileDarkCard = (item: FleetCategory) => {
    // Backhoe Loaders & Wheel Loaders: show the same single image in all
    // three slots on mobile (per request), instead of mixing in the
    // generic construction/equipment filler photos used elsewhere.
    const sameImageOnly = item.id === 'backhoe-loaders' || item.id === 'wheel-loaders';
    const stripImages = sameImageOnly
      ? [item.image, item.image, item.image]
      : [item.image, item.image2 || '/weltwissen/construction.jpg', item.image3 || '/weltwissen/equipment.jpg'];

    return (
      <motion.button
        type="button"
        key={item.id}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        onClick={() => onSelectCategory(item)}
        className="group flex flex-col gap-4 p-5 w-full bg-[#0E2620] border border-[#C6A15B] rounded-xl text-left"
      >
        <div className="flex flex-row gap-2 p-2 bg-[#0B211A] rounded-[10px] w-full h-[96px]">
          {stripImages.map((src, i) => (
            <div key={i} className="h-full w-full overflow-hidden rounded-md bg-gray-800">
              <img
                src={src}
                alt={i === 0 ? item.name : ''}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <h3 className="font-['DM_Serif_Text',serif] text-[20px] leading-[130%] text-[#FAF9F5]">
              {item.name}
            </h3>
            <span className="px-[10px] py-[4px] text-[9px] leading-[12px] uppercase font-['Geist_Mono',monospace] bg-[#C6A15B] rounded-full text-[#0B211A] whitespace-nowrap">
              {item.badgeTag || item.category || 'Equipment'}
            </span>
          </div>
          <p className="font-['Geist',sans-serif] text-[13px] leading-[150%] text-[#E5DEC9]">
            {item.description}
          </p>
        </div>
      </motion.button>
    );
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-[#FAF9F5] text-[#14211D]">

      {/* Header Section */}
      <header className="flex flex-col gap-6 px-6 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-20 w-full bg-[#F5EFE2] sm:bg-[#FAF6EE] border-b border-[#D1C9B7]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
          {/* Breadcrumb */}
          <div className="flex flex-row items-center gap-2 text-[10px] sm:text-xs font-['Geist_Mono',monospace]">
            <span className="text-[#4A5E59] uppercase">Home</span>
            <span className="text-[#C6A15B]">//</span>
            <span className="text-[#14211D] uppercase">Fleet &amp; Equipment</span>
          </div>

          {/* Section Label */}
          <div className="flex flex-row items-center gap-3">
            <div className="w-4 h-[1px] bg-[#C6A15B]" />
            <span className="font-['Geist_Mono',monospace] font-normal sm:font-semibold text-[10px] sm:text-xs uppercase text-[#C6A15B]">
              Fleet & Equipment
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['DM_Serif_Text',serif] font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-[120%] sm:leading-[110%] text-[#14211D]">
            What's in the fleet?
          </h1>

          {/* Description */}
          <p className="font-['Geist',sans-serif] text-[14px] sm:text-[18px] leading-[150%] sm:leading-[160%] text-[#4A5E59] max-w-[760px]">
            A well-maintained fleet of heavy machinery, lifting equipment and transport solutions supporting industrial, construction and infrastructure projects across Saudi Arabia.
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="flex flex-col gap-5 sm:gap-6 px-5 py-8 sm:px-10 sm:py-14 lg:px-20 lg:py-20 w-full">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 sm:gap-6">

          {/* ===== Mobile-only fleet stack (below sm) ===== */}
          <div className="flex sm:hidden flex-col gap-5 w-full">
            {mobileFleetOrder.map(({ item, variant }) =>
              item ? (variant === 'dark' ? renderMobileDarkCard(item) : renderMobilePlainCard(item)) : null
            )}
          </div>

          {/* ===== Desktop / tablet layout (sm and up) — unchanged ===== */}
          <div className="hidden sm:contents">

            {/* Row 1: Featured + First 2 Cards */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:flex lg:flex-row lg:gap-6">

              {/* Excavators (Featured Dark Card) */}
              {featuredCategory && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectCategory(featuredCategory)}
                  className="group flex flex-col justify-between gap-4 p-5 sm:p-6 w-full md:col-span-2 lg:flex-[720_720_0%] lg:min-w-0 min-h-[280px] sm:min-h-[314px] bg-[#0E2620] border border-[#C0913F] shadow-lg rounded-xl text-left"
                >
                  {/* Image Strip */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0B1F1A] rounded-lg h-[140px] sm:h-[192px] w-full">
                    {[
                      featuredCategory.image,
                      featuredCategory.image2 || '/weltwissen/construction.jpg',
                      featuredCategory.image3 || '/weltwissen/equipment.jpg'
                    ].map((src, idx) => (
                      <div key={idx} className="h-full w-full overflow-hidden rounded-md bg-gray-800">
                        <img
                          src={src}
                          alt={idx === 0 ? featuredCategory.name : ''}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between items-center gap-2">
                      <h3 className="font-['DM_Serif_Text',serif] text-lg sm:text-xl text-[#FAF9F5]">
                        {featuredCategory.name}
                      </h3>
                      <span className="font-['Geist_Mono',monospace] font-bold text-xs sm:text-sm text-[#C0913F] transition-colors group-hover:text-[#DDBC73] whitespace-nowrap">
                        View Equipment →
                      </span>
                    </div>
                    <p className="font-['Geist_Mono',monospace] text-xs sm:text-sm text-[#FAF9F5] opacity-90 line-clamp-2">
                      {featuredCategory.description}
                    </p>
                  </div>
                </motion.button>
              )}

              {/* First Row Items (Dump Trucks & Cranes) */}
              {firstRowCategories.map((item, index) => (
                <motion.button
                  type="button"
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index + 1) * 0.08 }}
                  onClick={() => onSelectCategory(item)}
                  className="group flex flex-col gap-3 p-5 w-full lg:flex-[256_256_0%] lg:min-w-0 min-h-[260px] sm:min-h-[314px] bg-[#FAF9F5] border border-[#D1C9B7] shadow-md rounded-xl text-left transition-all duration-200 hover:bg-[#0E2620] hover:border-[#C6A15B] hover:-translate-y-0.5 hover:shadow-[0px_10px_22px_-10px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] bg-[#FAF6EE] rounded group-hover:bg-transparent group-hover:border-transparent transition-colors">
  {getCategoryIcon(item)}
</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-['DM_Serif_Text',serif] text-lg text-[#0E2620] group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-['Geist_Mono',monospace] text-xs text-[#C0913F] group-hover:text-[#C6A15B] group-hover:opacity-90 transition-colors">
                      {item.badgeTag || item.category || 'Heavy Machinery'}
                    </span>
                  </div>
                  <p className="font-['Inter',sans-serif] text-sm text-[#595E57] group-hover:text-[#BFC4BF] flex-grow line-clamp-3 transition-colors">
                    {item.description}
                  </p>
                  <span className="font-['Geist_Mono',monospace] text-xs text-[#0E2620] opacity-70 group-hover:opacity-80 group-hover:text-white transition-colors">
                    View Equipment →
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Middle Grid (4 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {middleCategories.map((item, index) => (
                <motion.button
                  type="button"
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
                  onClick={() => onSelectCategory(item)}
                  className="group flex flex-col gap-3 p-5 w-full min-h-[240px] sm:min-h-[280px] bg-[#FAF9F5] border border-[#D1C9B7] shadow-md rounded-xl text-left transition-all duration-200 hover:bg-[#0E2620] hover:border-[#C6A15B] hover:-translate-y-0.5 hover:shadow-[0px_10px_22px_-10px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] bg-[#FAF6EE] rounded group-hover:bg-transparent group-hover:border-transparent transition-colors">
  {getCategoryIcon(item)}
</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-['DM_Serif_Text',serif] text-lg text-[#0E2620] group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-['Geist_Mono',monospace] text-xs text-[#C0913F] group-hover:text-[#C6A15B] group-hover:opacity-90 transition-colors">
                      {item.badgeTag || item.category || 'Equipment'}
                    </span>
                  </div>
                  <p className="font-['Inter',sans-serif] text-sm text-[#595E57] group-hover:text-[#BFC4BF] flex-grow line-clamp-3 transition-colors">
                    {item.description}
                  </p>
                  <span className="font-['Geist_Mono',monospace] text-xs text-[#0E2620] opacity-70 group-hover:opacity-80 group-hover:text-white transition-colors">
                    View Equipment →
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Final Featured Card (Generators & Compressors) */}
            {finalCategory && (
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                onClick={() => onSelectCategory(finalCategory)}
                className="group flex flex-col justify-between gap-4 p-5 sm:p-6 w-full min-h-[260px] sm:min-h-[300px] bg-[#0E2620] border border-[#C0913F] shadow-lg rounded-xl text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0B1F1A] rounded-lg h-auto sm:h-[180px] w-full">
                  {[
                    finalCategory.image,
                    '/weltwissen/motor_fleet.png',
                    '/weltwissen/motor_2_fleet.png'
                  ].map((src, idx) => (
                    <div key={idx} className="h-[120px] sm:h-full w-full overflow-hidden rounded-md bg-gray-800">
                      <img
                        src={src}
                        alt={idx === 0 ? finalCategory.name : ''}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-['DM_Serif_Text',serif] text-lg sm:text-xl text-[#FAF9F5]">
                      {finalCategory.name}
                    </h3>

                    <p className="font-['Geist_Mono',monospace] text-xs sm:text-sm text-[#FAF9F5] opacity-90 max-w-2xl">
                      {finalCategory.description}
                    </p>
                    <span className="font-['Geist_Mono',monospace] font-bold text-xs sm:text-sm text-[#C0913F] transition-colors group-hover:text-[#DDBC73]">
                      View Equipment →
                    </span>
                  </div>
                  {finalCategory.badgeTag && (
                    <span className="rounded-full bg-[#C6A15B] px-3 py-1 font-['Geist_Mono',monospace] text-xs font-semibold text-[#0B211A]">
                      {finalCategory.badgeTag}
                    </span>
                  )}
                </div>
              </motion.button>
            )}

          </div>

        </div>
      </section>

      {/* Fleet Advantage Section */}
      <section className="w-full border-t border-[#1D4137] bg-[#0E2620] sm:bg-[#082920] px-5 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-24 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 sm:gap-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-['Geist_Mono',monospace] text-[10px] sm:text-xs font-normal sm:font-semibold uppercase tracking-wider text-[#C6A15B]">
              <span className="h-[1px] w-4 bg-[#C6A15B]" />
              The WELTWISSEN Fleet Advantage
            </div>
            <h2 className="font-['DM_Serif_Text',serif] text-[24px] sm:text-[36px] lg:text-[44px] leading-[125%] sm:leading-normal text-white">
              The WELTWISSEN Fleet Advantage
            </h2>
          </div>

          {/* ===== Mobile-only advantages stack (below sm) ===== */}
          <div className="flex sm:hidden flex-col gap-4 w-full">
            {/* Item 1 (Featured) */}
            {FLEET_ADVANTAGES.slice(0, 1).map((advantage) => (
              <div
                key={advantage.number}
                className="flex flex-col gap-4 rounded-xl border border-[#C6A15B] bg-[#0E2620] p-6"
              >
                <div className="flex flex-row items-center justify-between">
                  <span className="font-['Geist_Mono',monospace] text-[12px] font-bold text-[#C6A15B]">
                    {advantage.number}
                  </span>
                  <span className="px-[10px] py-[4px] text-[9px] leading-[12px] uppercase font-['Geist_Mono',monospace] bg-[#0B211A] border border-[#C6A15B] rounded-full text-[#C6A15B] whitespace-nowrap">
                    Ready to deploy
                  </span>
                </div>
                <h3 className="font-['DM_Serif_Text',serif] text-[20px] leading-[130%] text-white">
                  {advantage.title}
                </h3>
                <p className="font-['Geist',sans-serif] text-[14px] leading-[150%] text-[#E5DEC9]">
                  {advantage.description}
                </p>
              </div>
            ))}

            {/* Items 2 and 3 (Total 3) */}
            {FLEET_ADVANTAGES.slice(1, 3).map((advantage) => (
              <div
                key={advantage.number}
                className="flex flex-col gap-2 rounded-xl border border-[#1E4137] bg-[#123329] p-5"
              >
                <div className="flex flex-row items-center gap-2">
                  <span className="font-['Geist_Mono',monospace] text-[14px] leading-[18px] text-[#C6A15B]">
                    {advantage.number}
                  </span>
                  <h3 className="font-['DM_Serif_Text',serif] text-[16px] leading-[130%] text-white">
                    {advantage.title}
                  </h3>
                </div>
                <p className="font-['Geist',sans-serif] text-[13px] leading-[150%] text-[#E5DEC9]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* ===== Desktop / tablet layout (sm and up) ===== */}
          {/* FIX: hero + supporting column now default to a stacked column
              on tablet (sm–lg) instead of a fixed-height flex row, since
              at those widths neither child had a flex-basis and could be
              pushed past the viewport by long content. Row layout with
              explicit flex-basis only kicks in at lg and up. */}
          <div className="hidden sm:flex flex-col lg:flex-row items-stretch lg:items-start gap-6 w-full max-w-[1280px]">

            {/* Hero Card (01) */}
            {FLEET_ADVANTAGES.slice(0, 1).map((advantage) => (
              <div
                key={advantage.number}
                className="relative flex flex-col justify-between p-8 rounded-[16px] bg-[#0E2620] border border-[#C0913F] shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.2)] overflow-hidden w-full min-w-0 lg:flex-[760_760_0%] lg:min-w-0 min-h-[220px] shrink-0"
              >
                {/* Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#C0913F]" />

                {/* Badge 01 */}
                <div className="absolute right-4 top-4 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#C0913F]">
                  <span className="font-['Geist_Mono',monospace] text-[14px] font-bold text-[#0E2620] leading-[18px]">
                    {advantage.number}
                  </span>
                </div>

                {/* Hero Top Content */}
                <div className="flex flex-col gap-[12px] pr-10 min-w-0">
                  <h3 className="font-['DM_Serif_Text',serif] text-[28px] leading-[38px] text-white">
                    {advantage.title}
                  </h3>
                  <p className="font-['Geist',sans-serif] text-[14px] leading-[160%] text-[#F5EFE2]">
                    {advantage.description}
                  </p>
                </div>

                {/* Highlight Strip — FIX: min-h instead of fixed h, both
                    labels forced to one line with whitespace-nowrap, and
                    min-w-0 on the icon+label group so it can shrink
                    instead of overflowing the card on tablet widths. */}
                <div className="flex flex-row items-center justify-between gap-2 px-4 py-[12px] min-h-[42px] rounded-[12px] bg-[#0B211A] border border-[#C0913F]/20">
                  <div className="flex flex-row items-center gap-[10px] min-w-0">
                    <TruckIcon className="h-[18px] w-[18px] text-[#C0913F] shrink-0" />
                    <span className="font-['Geist_Mono',monospace] text-[12px] font-bold uppercase tracking-wider text-[#C0913F] leading-[16px] whitespace-nowrap">
                      SITE-READY INVENTORY
                    </span>
                  </div>
                  <span className="font-['Geist',sans-serif] text-[13px] text-[#F5EFE2] leading-[17px] whitespace-nowrap">
                    Ready to deploy
                  </span>
                </div>
              </div>
            ))}

            {/* Supporting Cards Column (02, 03, 04) */}
            <div className="flex flex-col gap-6 w-full min-w-0 lg:flex-[520_520_0%] lg:min-w-0">
              {FLEET_ADVANTAGES.slice(1, 4).map((advantage) => (
                <div
                  key={advantage.number}
                  className="flex flex-col justify-between p-6 rounded-[14px] bg-[#0E2620] border border-[#C0913F]/20 shadow-[0px_14px_30px_-12px_rgba(0,0,0,0.15)] min-h-[138px] w-full"
                >
                  {/* Row Header */}
                  <div className="flex flex-row items-center gap-[12px] h-[32px]">
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#C0913F]/10">
                      <span className="font-['Geist_Mono',monospace] text-[13px] font-bold text-[#C0913F] leading-[17px]">
                        {advantage.number}
                      </span>
                    </div>
                    <h3 className="font-['DM_Serif_Text',serif] text-[20px] leading-[27px] text-white truncate">
                      {advantage.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-['Geist',sans-serif] text-[14px] leading-[160%] text-[#F5EFE2]">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full border-t border-[#D1C9B7] bg-[#F5EFE2] sm:bg-[#FAF6EE] px-6 py-12 sm:px-10 sm:py-12 lg:px-20 lg:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-['DM_Serif_Text',serif] font-bold text-2xl sm:text-3xl lg:text-4xl leading-[125%] sm:leading-normal text-[#0E2620] sm:text-[#14211D]">
              Need equipment on site?
            </h2>
            <p className="mt-2 font-['Geist',sans-serif] text-xs xs:text-base leading-[150%] xs:leading-normal text-[#4A5E59]">
              Speak with our team about equipment availability, rental options and project requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex h-11 items-center gap-2
                         bg-[#C6A15B] border border-[#C6A15B] px-6
                         font-['Geist_Mono',monospace] text-xs font-semibold uppercase
                         text-[#0B211A] transition-all duration-300
                         hover:bg-[#0E2620] hover:border-[#C0913F] hover:text-[#F5EFE2]"
            >
              <span>Request a Quote</span>
              <ArrowRight
                className="h-4 w-4 text-[#0B211A] transition-colors duration-300 group-hover:text-[#F5EFE2]"
                strokeWidth={2.5}
              />
            </button>

            <button
              onClick={onTalkToTeam}
              className="flex md:hidden w-full sm:w-auto justify-center h-11 items-center gap-2 border border-[#0B211A] bg-[#C6A15B] px-3.5 py-3.5 font-['Geist_Mono',monospace] text-xs font-semibold uppercase text-[#0B211A] transition-colors duration-300 hover:bg-[#0B211A] hover:text-white hover:border-[#0B211A]"
            >
              Talk to Our Team
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[14px] w-[14px] shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14m-6-6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};