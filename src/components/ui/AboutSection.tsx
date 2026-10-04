import React from 'react';
import { FOUNDER_MESSAGE, COMPANY_INFO } from '../../data/content';
import { Language } from '../../types';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="apropos" className="py-20 lg:py-24 bg-[#F7F8FC] text-[#111827] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photography & White Metrics Cards with Blue Hover Glow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 bg-white">
              <img
                src="/images/pharma.jpg"
                alt="Noga Process Ingénierie Industrielle"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Verified Metrics - White Cards with Deep Blue Glow */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 sm:p-5 bg-white text-[#02006F] rounded-2xl border border-gray-200/80 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_25px_rgba(2,0,111,0.2)] hover:-translate-y-1 transition-all duration-300 space-y-1 group cursor-pointer">
                <span className="block font-display font-black text-[20px] sm:text-[22px] text-[#02006F]">185k€ → 150M€</span>
                <span className="font-sans text-[14px] sm:text-[15px] text-[#64748B] font-medium block">Échelle de projets</span>
              </div>
              <div className="p-4 sm:p-5 bg-white text-[#02006F] rounded-2xl border border-gray-200/80 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_25px_rgba(2,0,111,0.2)] hover:-translate-y-1 transition-all duration-300 space-y-1 group cursor-pointer">
                <span className="block font-display font-black text-[20px] sm:text-[22px] text-[#02006F]">15 km</span>
                <span className="font-sans text-[14px] sm:text-[15px] text-[#64748B] font-medium block">Réseaux fluides</span>
              </div>
              <div className="p-4 sm:p-5 bg-white text-[#02006F] rounded-2xl border border-gray-200/80 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_25px_rgba(2,0,111,0.2)] hover:-translate-y-1 transition-all duration-300 space-y-1 group cursor-pointer">
                <span className="block font-display font-black text-[20px] sm:text-[22px] text-[#02006F]">20+ ans</span>
                <span className="font-sans text-[14px] sm:text-[15px] text-[#64748B] font-medium block">Expérience terrain</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark-Blue Quotation Panel Focal Point */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#02006F]">
              {lang === 'fr' ? 'Découvrir Noga-Process' : 'About Noga-Process'}
            </span>

            <h2 className="font-display font-black text-[32px] sm:text-[42px] text-[#02006F] tracking-tight leading-[1.15]">
              {lang === 'fr'
                ? 'Architecte des procédés industriels & partenaire de décision CAPEX'
                : 'Industrial Process Architect & CAPEX Decision Partner'}
            </h2>

            {/* Dark Blue Quotation Panel Focal Point */}
            <div className="p-8 sm:p-10 bg-[#1F2366] text-white rounded-2xl border-l-4 border-l-[#FFC000] border-y border-r border-white/10 shadow-md hover:shadow-[0_0_35px_rgba(255,192,0,0.25)] hover:-translate-y-1 transition-all duration-300 space-y-4 cursor-pointer group">
              <p className="font-display font-black text-[20px] sm:text-[22px] text-white italic leading-snug">
                “{lang === 'fr' ? FOUNDER_MESSAGE.quoteFr : FOUNDER_MESSAGE.quoteEn}”
              </p>
              <p className="font-sans text-[17px] sm:text-[18px] text-white/90 leading-[1.65]">
                {lang === 'fr' ? FOUNDER_MESSAGE.bodyFr : FOUNDER_MESSAGE.bodyEn}
              </p>
              <div className="pt-2 font-display font-extrabold text-[15px] text-[#FFC000]">
                {FOUNDER_MESSAGE.author} · {lang === 'fr' ? FOUNDER_MESSAGE.experience : FOUNDER_MESSAGE.experienceEn}
              </div>
            </div>

            {/* Office Locations */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-[16px] text-[#334155]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FFC000] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-display font-extrabold text-[16px] text-[#02006F]">Siège Social Lille :</strong>
                  <span className="text-[#525866] text-[15px] sm:text-[16px]">{COMPANY_INFO.address}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FFC000] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-display font-extrabold text-[16px] text-[#02006F]">Bureaux Lesquin :</strong>
                  <span className="text-[#525866] text-[15px] sm:text-[16px]">{COMPANY_INFO.officeAddress}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
