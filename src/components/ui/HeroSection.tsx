import React from 'react';
import { Language } from '../../types';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroLabScene } from '../3d/HeroLabScene';

interface HeroSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenContact }) => {
  return (
    <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-28 bg-[#02006F] bg-noga-grid overflow-hidden min-h-[680px] lg:min-h-[760px] flex items-center justify-center">
      
      {/* Background 3D Lab Model Scene (lab.glb) */}
      <HeroLabScene />

      {/* Hero Centered Content Overlay */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFC000]/15 border border-[#FFC000]/40 text-[#FFC000] font-sans text-[14px] font-bold tracking-wide pointer-events-auto backdrop-blur-md shadow-lg"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-[#FFC000]" />
            <span>{lang === 'fr' ? 'Ingénierie & Procédés Industriels CAPEX' : 'CAPEX Industrial Process Engineering'}</span>
          </motion.div>

          {/* Hero Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-[38px] sm:text-[50px] lg:text-[58px] text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-lg"
          >
            {lang === 'fr' ? (
              <>
                Vos projets industriels.<br />
                <span className="text-[#FFC000]">De la conception</span> à la mise en service.
              </>
            ) : (
              <>
                Your industrial projects.<br />
                <span className="text-[#FFC000]">From engineering design</span> to commissioning.
              </>
            )}
          </motion.h1>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[17px] sm:text-[18px] text-white/95 leading-[1.65] font-sans max-w-2xl text-center drop-shadow-md"
          >
            {lang === 'fr'
              ? 'NOGA-PROCESS accompagne vos projets CAPEX industriels avec une expertise intégrée en ingénierie des procédés, qualification, validation et commissioning.'
              : 'NOGA-PROCESS supports your industrial CAPEX projects with integrated expertise in process engineering, qualification, validation, and commissioning.'}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 pointer-events-auto"
          >
            <button
              onClick={onOpenContact}
              className="btn-yellow h-13 px-8 text-[16px] font-extrabold flex items-center justify-center space-x-2 shadow-2xl hover:scale-105 transition-transform rounded-xl cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Diagnostiquer mon projet CAPEX' : 'Discuss Your Project'}</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>

            <a
              href="#expertise"
              className="btn-navy h-13 px-8 text-[16px] font-extrabold flex items-center justify-center text-white bg-[#1F2366]/90 hover:bg-[#1F2366] border border-white/30 hover:scale-105 transition-transform rounded-xl backdrop-blur-md cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Découvrir nos expertises' : 'Discover Our Expertise'}</span>
            </a>
          </motion.div>

          {/* Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] sm:text-[15px] text-white/90 font-sans pointer-events-auto bg-[#02006F]/60 px-6 py-2.5 rounded-full border border-white/15 backdrop-blur-md shadow-md"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FFC000]" />
              <span>Pharmaceutique & Biotech</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FFC000]" />
              <span>Cosmétique & Agroalimentaire</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#FFC000]" />
              <span>Chimie Fine & Spécialités</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
