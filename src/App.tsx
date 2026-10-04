import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { ExpertiseSection } from './components/ui/ExpertiseSection';
import { IndustriesSection } from './components/ui/IndustriesSection';
import { MethodSection } from './components/ui/MethodSection';
import { AboutSection } from './components/ui/AboutSection';
import { ContactAndTools } from './components/ui/ContactAndTools';
import { Footer } from './components/ui/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('fr');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#02006F] text-[#F8FAFC] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Sequence */}
      <main className="flex-grow">
        {/* 1. Hero: Clean B2B Industrial Engineering presentation */}
        <HeroSection lang={lang} onOpenContact={scrollToContact} />

        {/* 2. Expertise: Warm-white background; editorial service rows */}
        <ExpertiseSection lang={lang} onOpenContact={scrollToContact} />

        {/* 3. Industries: Verified photography with five concise industry links */}
        <IndustriesSection lang={lang} onOpenContact={scrollToContact} />

        {/* 4. Method: One clean process sequence */}
        <MethodSection lang={lang} />

        {/* 5. About: Real company information and authentic image */}
        <AboutSection lang={lang} />

        {/* 6. Contact and tools: Clear project CTA, compact tools link and contact form */}
        <ContactAndTools lang={lang} />
      </main>

      {/* 7. Footer: Restrained navigation and verified company details */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;
