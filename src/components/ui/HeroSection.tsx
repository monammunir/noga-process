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
    <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-24 bg-[#02006F] bg-noga-grid overflow-hidden">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,192,0,0.2) 0%, rgba(31,35,102,0.35) 60%, transparent 80%)'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FFC000]/10 border border-[#FFC000]/30 text-[#FFC000] font-sans text-[14px] font-bold tracking-wide"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              <span>{lang === 'fr' ? 'Ingénierie & Procédés Industriels CAPEX' : 'CAPEX Industrial Process Engineering'}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-[38px] sm:text-[50px] lg:text-[58px] text-white tracking-tight leading-[1.1]"
            >
              {lang === 'fr' ? (
                <>
                  Vos projets industriels.<br />
                  <span className="text-[#FFC000]">De la conception</span><br />
                  à la mise en service.
                </>
              ) : (
                <>
                  Your industrial projects.<br />
                  <span className="text-[#FFC000]">From engineering design</span><br />
                  to commissioning.
                </>
              )}
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[17px] sm:text-[18px] text-white/90 leading-[1.65] font-sans max-w-xl"
            >
              {lang === 'fr'
                ? 'NOGA-PROCESS accompagne vos projets CAPEX industriels avec une expertise intégrée en ingénierie des procédés, qualification, validation et commissioning.'
                : 'NOGA-PROCESS supports your industrial CAPEX projects with integrated expertise in process engineering, qualification, validation, and commissioning.'}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenContact}
                className="btn-yellow h-13 px-7 text-[16px] font-extrabold flex items-center justify-center space-x-2 shadow-lg hover:scale-105 transition-transform rounded-xl cursor-pointer"
              >
                <span>{lang === 'fr' ? 'Diagnostiquer mon projet CAPEX' : 'Discuss Your Project'}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <a
                href="#expertise"
                className="btn-navy h-13 px-7 text-[16px] font-extrabold flex items-center justify-center text-white bg-[#1F2366] hover:bg-[#151747] border border-white/30 hover:scale-105 transition-transform rounded-xl cursor-pointer"
              >
                <span>{lang === 'fr' ? 'Découvrir nos expertises' : 'Discover Our Expertise'}</span>
              </a>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] sm:text-[15px] text-white/90 font-sans"
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

          </motion.div>

          {/* Right Column: Floating 3D lab.glb Model Scene */}
          <div className="lg:col-span-6 w-full h-full min-h-[460px] lg:min-h-[560px]">
            <HeroLabScene />
          </div>

        </div>
      </div>
    </section>
  );
};
