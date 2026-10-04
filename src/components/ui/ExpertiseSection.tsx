import React, { useState } from 'react';
import { SERVICES, REAL_CASE_ANECDOTE, ADVANCED_TECHS } from '../../data/content';
import { Language, ServiceItem } from '../../types';
import { ArrowUpRight, Check, X, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExpertiseSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ lang, onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="expertise" className="py-20 lg:py-24 bg-[#F7F8FC] text-[#111827] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Financial Warning Banner: White background, Deep Blue hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white text-[#02006F] p-7 sm:p-8 rounded-2xl border-l-4 border-l-[#FFC000] border border-gray-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_30px_rgba(2,0,111,0.2)] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-start space-x-4 max-w-3xl">
            <div className="p-3 bg-[#FFC000]/15 rounded-xl text-[#FFC000] border border-[#FFC000]/40 flex-shrink-0">
              <AlertTriangle className="w-6.5 h-6.5 text-[#02006F]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-display font-black text-[20px] sm:text-[22px] text-[#02006F]">
                {lang === 'fr' ? REAL_CASE_ANECDOTE.titleFr : REAL_CASE_ANECDOTE.titleEn}
              </h4>
              <p className="text-[17px] sm:text-[18px] text-[#334155] leading-[1.65] font-sans">
                {lang === 'fr' ? REAL_CASE_ANECDOTE.bodyFr : REAL_CASE_ANECDOTE.bodyEn}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenContact}
            className="btn-yellow h-12 px-6 text-[16px] font-extrabold whitespace-nowrap flex-shrink-0 shadow-md rounded-xl text-[#02006F] hover:scale-105 transition-transform"
          >
            {lang === 'fr' ? 'Diagnostic 30 min offert' : 'Free 30-min Diagnostic'}
          </button>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left space-y-2"
        >
          <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#02006F] block">
            {lang === 'fr' ? 'Nos Expertises Métier' : 'Our Engineering Expertise'}
          </span>
          <h2 className="font-display font-black text-[32px] sm:text-[42px] text-[#02006F] tracking-tight leading-[1.15]">
            {lang === 'fr'
              ? 'Une ingénierie des procédés intégrée, de l’étude amont à la mise en service.'
              : 'Integrated process engineering, from front-end design to plant commissioning.'}
          </h2>
        </motion.div>

        {/* Editorial Service Rows: Deep Blue hover glow */}
        <div className="space-y-5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-7 lg:p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_30px_rgba(2,0,111,0.2)] hover:-translate-y-1.5 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Numbering on left */}
              <div className="lg:col-span-1 font-display font-black text-[26px] text-[#FFC000] group-hover:text-[#02006F] transition-colors">
                0{index + 1}
              </div>

              {/* Category & Title */}
              <div className="lg:col-span-4 space-y-1">
                <span className="font-display font-extrabold text-[14px] uppercase text-[#02006F] tracking-wider block">
                  {lang === 'fr' ? service.category : service.categoryEn}
                </span>
                <h3 className="font-display font-black text-[22px] sm:text-[24px] text-[#02006F] group-hover:text-[#1F2366] transition-colors leading-snug">
                  {lang === 'fr' ? service.title : service.titleEn}
                </h3>
              </div>

              {/* Body Content Description */}
              <div className="lg:col-span-5 text-[17px] sm:text-[18px] text-[#475569] leading-[1.65] font-sans">
                {lang === 'fr' ? service.shortDesc : service.shortDescEn}
              </div>

              {/* Action Link */}
              <div className="lg:col-span-2 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="inline-flex items-center space-x-1 font-display font-black text-[16px] text-[#02006F] group-hover:text-[#1F2366] transition-colors tracking-wide"
                >
                  <span>{lang === 'fr' ? 'EN SAVOIR PLUS' : 'LEARN MORE'}</span>
                  <ArrowUpRight className="w-4.5 h-4.5 ml-0.5 text-[#02006F] group-hover:text-[#1F2366] transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Technologies: Deep Blue hover glow */}
        <div className="pt-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl space-y-1"
          >
            <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#02006F]">
              {lang === 'fr' ? 'L’Ingénierie Pensée pour 2030' : 'Advanced Engineering Tech'}
            </span>
            <h3 className="font-display font-black text-[28px] sm:text-[34px] text-[#02006F]">
              {lang === 'fr' ? 'Technologies avancées & Relevés de précision' : 'Advanced Tech & High-Precision Surveys'}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANCED_TECHS.map((tech, idx) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1F2366] text-white p-7 rounded-2xl border border-white/10 shadow-sm hover:border-[#FFC000] hover:shadow-[0_0_30px_rgba(255,192,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <h4 className="font-display font-black text-[22px] text-[#FFC000] group-hover:text-white transition-colors leading-snug">
                    {lang === 'fr' ? tech.titleFr : tech.titleEn}
                  </h4>
                  <p className="text-[17px] sm:text-[18px] text-white/90 leading-[1.65] font-sans">
                    {lang === 'fr' ? tech.descFr : tech.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#02006F]/80 backdrop-blur-md animate-fadeIn">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 text-[#111827] max-w-2xl w-full p-8 rounded-2xl shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[14px] uppercase font-extrabold text-[#02006F] tracking-wider font-display">
              {lang === 'fr' ? selectedService.category : selectedService.categoryEn}
            </span>

            <h3 className="font-display font-black text-[26px] sm:text-[30px] text-[#02006F]">
              {lang === 'fr' ? selectedService.title : selectedService.titleEn}
            </h3>

            <p className="text-[#475569] text-[17px] sm:text-[18px] leading-[1.65] font-sans">
              {lang === 'fr' ? selectedService.fullDesc : selectedService.fullDescEn}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-[14px] uppercase font-extrabold text-[#02006F] tracking-wider font-display">
                {lang === 'fr' ? 'Livrables & Périmètre Technologique :' : 'Deliverables & Scope:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === 'fr' ? selectedService.deliverables : selectedService.deliverablesEn).map((d, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F7F8FC] border border-gray-200 text-[15px] text-[#02006F] font-semibold font-sans">
                    <Check className="w-4.5 h-4.5 text-[#FFC000] flex-shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl bg-gray-100 text-[15px] font-semibold text-gray-700 hover:bg-gray-200 font-sans"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="btn-yellow px-6 py-2.5 text-[16px] font-extrabold rounded-xl text-[#02006F]"
              >
                {lang === 'fr' ? 'Contactez-nous' : 'Contact Us'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
