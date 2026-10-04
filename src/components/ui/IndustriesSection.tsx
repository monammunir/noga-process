import React from 'react';
import { INDUSTRIES } from '../../data/content';
import { Language } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface IndustriesSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ lang, onOpenContact }) => {
  const industryImages: Record<string, string> = {
    pharma: '/images/pharma.jpg',
    biotechnologie: '/images/biotech.jpg',
    cosmetique: '/images/cosmetics.jpg',
    'agro-alimentaire': '/images/agro.jpg',
    'chimie-fine': '/images/finechem.jpg'
  };

  const row1 = INDUSTRIES.slice(0, 3);
  const row2 = INDUSTRIES.slice(3, 5);

  const renderCard = (ind: typeof INDUSTRIES[0], idx: number) => {
    const imgSrc = industryImages[ind.id] || ind.image;
    return (
      <motion.div
        key={ind.id}
        initial={{ opacity: 0, y: 70, scale: 0.93 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.12 }}
        transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white text-[#111827] rounded-2xl overflow-hidden border border-gray-200/80 shadow-md hover:border-[#38BDF8] hover:shadow-[0_18px_45px_rgba(56,189,248,0.45)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between group cursor-pointer"
      >
        <div>
          {/* Photographic Header */}
          <div className="h-56 sm:h-64 overflow-hidden relative bg-gray-100">
            <img
              src={imgSrc}
              alt={ind.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute bottom-4 left-5 right-5 text-white font-display font-black text-[22px] sm:text-[24px] leading-tight group-hover:text-[#FFC000] transition-colors duration-300">
              {lang === 'fr' ? ind.title : ind.titleEn}
            </span>
          </div>

          <div className="p-6 sm:p-7 space-y-3">
            <span className="font-display font-extrabold text-[14px] uppercase text-[#02006F] tracking-wider block">
              {lang === 'fr' ? ind.subtitle : ind.subtitleEn}
            </span>
            <p className="font-sans text-[17px] sm:text-[18px] text-[#475569] leading-[1.65]">
              {lang === 'fr' ? ind.desc : ind.descEn}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-7 pt-0 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-1.5 font-display font-black text-[16px] text-[#02006F] group-hover:text-[#38BDF8] tracking-wide transition-colors duration-300"
          >
            <span>{lang === 'fr' ? 'ÉCHANGER SUR UN PROJET' : 'DISCUSS A PROJECT'}</span>
            <ArrowUpRight className="w-5 h-5 text-[#02006F] group-hover:text-[#38BDF8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="secteurs" className="py-20 lg:py-24 bg-[#EEF1FF] text-[#111827] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-2"
        >
          <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#02006F] block">
            {lang === 'fr' ? 'Secteurs d’Activité' : 'Target Industries'}
          </span>
          <h2 className="font-display font-black text-[32px] sm:text-[42px] text-[#02006F] tracking-tight leading-[1.15]">
            {lang === 'fr'
              ? 'Accompagnement d’exigence dans vos environnements réglementés.'
              : 'Demanding engineering solutions for regulated sectors.'}
          </h2>
        </motion.div>

        {/* Industry Layout */}
        <div className="space-y-8">
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {row1.map((ind, idx) => renderCard(ind, idx))}
          </div>

          {/* Row 2: 2 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {row2.map((ind, idx) => renderCard(ind, idx + 3))}
          </div>
        </div>

      </div>
    </section>
  );
};
