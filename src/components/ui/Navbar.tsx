import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#expertise', labelFr: 'Expertises', labelEn: 'Expertise' },
    { href: '#secteurs', labelFr: 'Secteurs', labelEn: 'Sectors' },
    { href: '#methode', labelFr: 'Méthode', labelEn: 'Method' },
    { href: '#apropos', labelFr: 'À propos', labelEn: 'About' },
    { href: '#contact', labelFr: 'Contact', labelEn: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#02006F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#02006F] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.png"
              alt="Noga Process"
              className="h-10 w-auto object-contain bg-white/90 p-1.5 rounded-lg"
            />
          </a>

          {/* Desktop Nav Links - Minimum 16px Font Size */}
          <nav className="hidden md:flex items-center space-x-8 font-display font-bold text-[16px]">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap ${
                  idx === 0
                    ? 'nav-link-active'
                    : 'text-white hover:text-[#FFC000]'
                }`}
              >
                {lang === 'fr' ? link.labelFr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Actions: Compact FR/EN Switcher & Yellow Gold CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Compact Language Toggle */}
            <div className="flex items-center bg-[#1F2366] border border-white/20 rounded-full p-0.5 font-display font-bold text-[14px]">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === 'fr'
                    ? 'bg-[#FFC000] text-[#02006F]'
                    : 'text-white hover:text-[#FFC000]'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === 'en'
                    ? 'bg-[#FFC000] text-[#02006F]'
                    : 'text-white hover:text-[#FFC000]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Bright Gold Yellow CTA Button - Minimum 16px Font Size */}
            <button
              onClick={onOpenContact}
              className="btn-yellow px-5 py-2.5 text-[16px] font-extrabold flex items-center space-x-2 shadow-md rounded-xl"
            >
              <span>{lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => onLanguageChange(lang === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1 rounded-full bg-[#FFC000] text-[#02006F] font-extrabold text-[14px]"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FFC000]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#02006F] border-b border-white/10 px-4 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-display font-bold text-[17px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#FFC000] py-1"
              >
                {lang === 'fr' ? link.labelFr : link.labelEn}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full btn-yellow py-3.5 text-[16px] font-extrabold rounded-xl"
          >
            {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
          </button>
        </div>
      )}
    </header>
  );
};
