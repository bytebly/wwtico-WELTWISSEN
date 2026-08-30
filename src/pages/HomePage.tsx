import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { DivisionsSection } from '../components/DivisionsSection';
import { AboutSection } from '../components/AboutSection';
import { FleetSection } from '../components/FleetSection';
import { SectorsSection } from '../components/SectorsSection';
import { WhyWeltwissenSection } from '../components/WhyWeltwissenSection';
import { CtaSection } from '../components/CtaSection';
import type { FleetCategory, IndustrySector } from '../data/websiteData';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenQuote: () => void;
  onSelectCategory: (category: FleetCategory) => void;
  onSelectSector: (sector: IndustrySector) => void;
  onSelectDiscipline: (id: string) => void; // NEW
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectCategory,
  onSelectSector,
  onSelectDiscipline, // NEW
}) => {
  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection 
        onExploreServices={() => onNavigate('services')} 
        onViewFleet={() => onNavigate('fleet')} 
      />

      {/* 01 // WHAT WE DO */}
      <DivisionsSection 
        onSelectDiscipline={onSelectDiscipline} 
      />

      {/* 02 // BUILT ON PRECISION */}
      <AboutSection/>

      {/* 03 // FLEET & EQUIPMENT — hidden on mobile per mobile spec, unchanged on tablet/desktop  // className="max-sm:hidden" use this to hide in mobile*/}
      <div>  
        <FleetSection 
          onViewFleet={() => onNavigate('fleet')}
          onSelectCategory={onSelectCategory}
        />
      </div>

      {/* 04 // INDUSTRIES WE SERVE — hidden on mobile per mobile spec, unchanged on tablet/desktop */}
      <div>
        <SectorsSection 
          onSelectSector={(sec) => {
            onSelectSector(sec);
            onNavigate('industries');
          }} 
        />
      </div>

      {/* 05 // WHY WELTWISSEN */}
      <WhyWeltwissenSection />

      {/* 06 // GET IN TOUCH */}
      <CtaSection 
        sectionNumber="06"
        hideTalkToTeamMobile={true}
        onTalkToTeam={() => onNavigate('contact')}
        onGetQuote={onOpenQuote}
      />
    </div>
  );
};