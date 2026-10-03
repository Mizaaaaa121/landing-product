import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import BuiltForBusiness from './components/BuiltForBusiness';
import WebsitePreview from './components/WebsitePreview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PurchaseModal from './components/PurchaseModal';
import DemoModal from './components/DemoModal';
import { landingData } from './data/landingData';

export default function App() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleGetKit = () => {
    window.open(landingData.checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveDemo = () => {
    setDemoModalOpen(true);
  };

  return (
    <div className="landing-app">
      <Navbar onGetKit={handleGetKit} />

      <main id="main-content">
        <Hero
          heroData={landingData.hero}
          onGetKit={handleGetKit}
          onLiveDemo={handleLiveDemo}
        />

        <WhatYouGet items={landingData.whatYouGet} />

        <BuiltForBusiness categories={landingData.categories} />

        <WebsitePreview
          previews={landingData.previews}
          onLiveDemo={handleLiveDemo}
        />

        <Features features={landingData.features} />

        <HowItWorks steps={landingData.howItWorks} />

        <Pricing
          pricingData={landingData.pricing}
          onGetKit={handleGetKit}
        />

        <FAQ faqs={landingData.faq} />

        <FinalCTA onGetKit={handleGetKit} />
      </main>

      <Footer />

      {/* Modals */}
      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
