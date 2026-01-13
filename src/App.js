import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LightsoundSection from './components/LightsoundSection';
import VEOSection from './components/VEOSection';
import UseCasesSection from './components/UseCasesSection';
import TechnologySection from './components/TechnologySection';
import BackingSection from './components/BackingSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-kineton-black text-kineton-white">
        <Navbar />
        <main>
          <Hero />
          <LightsoundSection />
          <VEOSection />
          <UseCasesSection />
          <TechnologySection />
          <BackingSection />
          <WaitlistSection />
        </main>
        <Footer />
        <div className="noise-overlay" />
      </div>
    </ThemeProvider>
  );
}

export default App;