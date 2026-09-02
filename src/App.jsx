import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import ClientTicker from './components/ClientTicker';
import IndustryReach from './components/IndustryReach';
import HardwareCoverage from './components/HardwareCoverage';
import WhyChooseUs from './components/WhyChooseUs';
import AmcCalculator from './components/AmcCalculator';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import QuoteModal from './components/QuoteModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState('');

  const handleOpenQuoteModal = (serviceName = '') => {
    setModalInitialService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#C59B27]/25 selection:text-amber-950 overflow-x-hidden antialiased">
      
      {/* 1. Team Computers Style Navigation Header */}
      <Navbar 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* 2. Team Computers Style Dynamic Multi-Slide Hero Banner */}
      <Hero 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* 3. Team Computers Style "About Us" Section */}
      <AboutSection 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 4. Explore Our Tech Solutions (Slide 3) */}
      <SolutionsSection 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 6. Marquee Enterprise Trust Wall */}
      <ClientTicker />

      {/* 7. Team Computers Style "Industry Reach" */}
      <IndustryReach 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 8. Hardware & OEM Maintenance Scope (Slide 4) */}
      <HardwareCoverage 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 9. Why Choose Us / Comparative Matrix */}
      <WhyChooseUs 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 10. Interactive Enterprise AMC Budget Estimator */}
      <AmcCalculator 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 11. Corporate Governance & Statutory Compliance (Slides 6 & 7) */}
      <ComplianceSection 
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 12. Contact Us / Regional Hubs */}
      <ContactSection />

      {/* 13. Team Computers Style Mega Footer */}
      <Footer />

      {/* Floating Speed Actions (WhatsApp + Helpline + Top) */}
      <FloatingActions />

      {/* Interactive Quote Booking Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={modalInitialService}
      />

    </div>
  );
}