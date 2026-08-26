import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FleetPage } from './pages/FleetPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { FleetEquipmentModal } from './components/EquipmentModal';
import { ContactSuccessOverlay } from './components/ContactSuccessOverlay';
import { Chatbot } from './components/Chatbot';
import { trackEvent } from './utils/analytics';
import type { FleetCategory } from './data/websiteData';
import { SITE_URL, DEFAULT_OG_IMAGE, getSeoForPath } from './seoConfig';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // Derived from the URL so every page has its own real address (/, /services, ...)
  const activeTab = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');
  const handleNavigateTab = (tab: string) => {
    navigate(tab === 'home' ? '/' : `/${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const seo = getSeoForPath(location.pathname);
  const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`;

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('Construction');
  const [quoteInitialEquipment, setQuoteInitialEquipment] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<FleetCategory | null>(null);
  const [isSuccessOverlayOpen, setIsSuccessOverlayOpen] = useState<boolean>(false);
  const [successRefCode, setSuccessRefCode] = useState<string>('WW-2026-889');

  // Automatic 10-Second Enquiry Popup logic
  useEffect(() => {
    const timer = setTimeout(() => {
      const sessionState = sessionStorage.getItem('weltwissen_quote_session');
      if (!sessionState) {
        setQuoteInitialService('Construction');
        setQuoteInitialEquipment('');
        setIsQuoteModalOpen(true);
        sessionStorage.setItem('weltwissen_quote_session', 'auto_opened');
        trackEvent('quote_popup_opened');
      }
    }, 30000); // EXACTLY 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = handleNavigateTab;

  // NEW — navigates straight to the matching discipline section on the Services page
  const handleSelectDiscipline = (id: string) => {
    navigate(`/services#${id}`);
  };

  const handleOpenQuoteModal = (service?: string, equipment?: string) => {
    if (service) setQuoteInitialService(service);
    if (equipment) setQuoteInitialEquipment(equipment);
    setIsQuoteModalOpen(true);
  };

  const handleEquipmentModalQuoteRequest = (categoryName: string) => {
    setSelectedEquipment(null);
    handleOpenQuoteModal('Equipment Rental', categoryName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B211A] text-white selection:bg-[#C68B59] selection:text-[#0B211A] relative">
      {/* Per-page SEO tags: unique title/description/canonical/OG per route */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Helmet>

      {/* Top Fixed Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Dynamic View — each tab now has a real URL via react-router */}
      <main className="grow w-full">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={handleNavigate}
                onOpenQuote={() => handleOpenQuoteModal()}
                onSelectCategory={(cat) => setSelectedEquipment(cat)}
                onSelectSector={() => handleNavigate('industries')}
                onSelectDiscipline={handleSelectDiscipline}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenQuote={() => handleOpenQuoteModal()}
                onTalkToTeam={() => handleNavigate('contact')}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/fleet"
            element={
              <FleetPage
                onSelectCategory={(cat) => setSelectedEquipment(cat)}
                onOpenQuote={() => handleOpenQuoteModal()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            }
          />
          <Route
            path="/industries"
            element={<IndustriesPage />}
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenQuote={() => handleOpenQuoteModal()}
                onTalkToTeam={() => handleNavigate('contact')}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onSubmitSuccess={() => {
                  setSuccessRefCode(`WW-2026-${Math.floor(100 + Math.random() * 900)}`);
                  setIsSuccessOverlayOpen(true);
                }}
              />
            }
          />
          {/* Unknown paths fall back to the homepage instead of a blank screen */}
          <Route
            path="*"
            element={
              <HomePage
                onNavigate={handleNavigate}
                onOpenQuote={() => handleOpenQuoteModal()}
                onSelectCategory={(cat) => setSelectedEquipment(cat)}
                onSelectSector={() => handleNavigate('industries')}
                onSelectDiscipline={handleSelectDiscipline}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavigate} />

      {/* WELTWISSEN AI Chatbot Floating Widget */}
      <Chatbot onOpenQuoteModal={handleOpenQuoteModal} />

      {/* ONE Single Reusable QuoteModal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteInitialService}
        initialEquipment={quoteInitialEquipment}
        onSuccess={(refCode) => {
          setSuccessRefCode(refCode);
          setIsSuccessOverlayOpen(true);
        }}
      />

      {/* One reusable Fleet detail overlay */}
      <FleetEquipmentModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
        onRequestQuote={handleEquipmentModalQuoteRequest}
      />

      {/* Success Confirmation Overlay */}
      <ContactSuccessOverlay
        isOpen={isSuccessOverlayOpen}
        onClose={() => setIsSuccessOverlayOpen(false)}
        refCode={successRefCode}
      />
    </div>
  );
}

export default App;