import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PracticeAreasSection from './components/PracticeAreasSection';
import DifferentialsSection from './components/DifferentialsSection';
import EthicsSection from './components/EthicsSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

/**
 * Componente principal da aplicação
 * Site institucional da Redlien Advocacia
 */
function App() {
  return (
    <div className="App">
      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <DifferentialsSection />
        <EthicsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Componentes flutuantes */}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

export default App;
