import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/content';
import { Language } from '../../types';
import { Phone, Mail, MapPin, ExternalLink, Calculator, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactAndToolsProps {
  lang: Language;
}

export const ContactAndTools: React.FC<ContactAndToolsProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#02006F] text-white bg-noga-grid overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Calculation Tools Banner with Light Blue Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 65, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 p-8 sm:p-10 rounded-2xl bg-white text-[#02006F] border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md hover:border-[#38BDF8] hover:shadow-[0_18px_45px_rgba(56,189,248,0.45)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-xl bg-[#FFC000]/15 text-[#02006F] border border-[#FFC000]/40 flex-shrink-0">
              <Calculator className="w-7 h-7 text-[#02006F] group-hover:text-[#38BDF8] transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display font-black text-[22px] sm:text-[24px] text-[#02006F] group-hover:text-[#38BDF8] transition-colors duration-300">
                {lang === 'fr' ? 'Outils de Calcul Procédés Industriels' : 'Industrial Process Calculation Tools'}
              </h3>
              <p className="text-[17px] sm:text-[18px] text-[#475569] mt-1 font-sans leading-[1.65]">
                {lang === 'fr'
                  ? 'Contrôlez gratuitement vos hypothèses de débit, HMT pompe, pertes de charge et échanges thermiques.'
                  : 'Verify flow rate, pump head (HMT), head loss, and thermal balance assumptions.'}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.calculatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow h-12 px-6 text-[16px] font-extrabold flex items-center space-x-2 whitespace-nowrap flex-shrink-0 rounded-xl text-[#02006F] hover:scale-105 transition-transform shadow-md cursor-pointer"
          >
            <span>{lang === 'fr' ? 'Accéder aux outils de calcul' : 'Access Calculators'}</span>
            <ExternalLink className="w-4.5 h-4.5" />
          </a>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info Cards with Light Blue Hover Glow */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#FFC000]">
              {lang === 'fr' ? 'Échange & Consultation CAPEX' : 'CAPEX Consultation'}
            </span>

            <h2 className="font-display font-black text-[32px] sm:text-[42px] text-white tracking-tight leading-[1.15]">
              {lang === 'fr' ? 'Parlons de votre projet.' : 'Let’s Discuss Your Project.'}
            </h2>

            <p className="text-[17px] sm:text-[18px] text-white/90 leading-[1.65] font-sans">
              {lang === 'fr'
                ? 'Profitez d’un premier échange technique pour cadrer vos besoins, identifier les angles morts de votre installation et sécuriser votre planning.'
                : 'Connect with an engineer to clarify your project scope, identify technical risks, and secure your schedule.'}
            </p>

            <div className="space-y-4 pt-2 font-sans text-[16px]">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#1F2366] border border-white/15 hover:border-[#38BDF8] hover:shadow-[0_15px_40px_rgba(56,189,248,0.45)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <Phone className="w-5 h-5 text-[#FFC000] group-hover:text-[#38BDF8] transition-colors duration-300" />
                <div>
                  <span className="text-white/70 block text-[13px] uppercase font-bold">Téléphone</span>
                  <span className="text-white group-hover:text-[#38BDF8] transition-colors duration-300 font-bold text-[17px]">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#1F2366] border border-white/15 hover:border-[#38BDF8] hover:shadow-[0_15px_40px_rgba(56,189,248,0.45)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <Mail className="w-5 h-5 text-[#FFC000] group-hover:text-[#38BDF8] transition-colors duration-300" />
                <div>
                  <span className="text-white/70 block text-[13px] uppercase font-bold">Email</span>
                  <span className="text-white group-hover:text-[#38BDF8] transition-colors duration-300 font-bold text-[17px]">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#1F2366] border border-white/15 hover:border-[#38BDF8] hover:shadow-[0_15px_40px_rgba(56,189,248,0.45)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <ExternalLink className="w-5 h-5 text-[#FFC000] group-hover:text-[#38BDF8] transition-colors duration-300" />
                <div>
                  <span className="text-white/70 block text-[13px] uppercase font-bold">WhatsApp</span>
                  <span className="text-white group-hover:text-[#38BDF8] transition-colors duration-300 font-bold text-[17px]">Échanger sur WhatsApp →</span>
                </div>
              </a>
            </div>

            <div className="p-5 rounded-xl bg-[#1F2366]/60 border border-white/10 space-y-2 text-[15px] sm:text-[16px] text-white/90 font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#FFC000] flex-shrink-0 mt-0.5" />
                <span>Siège : {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#FFC000] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeAddress}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Form Panel with Light Blue Glow */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.12 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white text-[#111827] border border-gray-200/80 shadow-xl hover:border-[#38BDF8] hover:shadow-[0_18px_45px_rgba(56,189,248,0.45)] hover:-translate-y-2 transition-all duration-500">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="w-14 h-14 text-[#FFC000] mx-auto" />
                  <h3 className="font-display font-black text-[24px] text-[#02006F]">
                    {lang === 'fr' ? 'Message envoyé' : 'Message Sent'}
                  </h3>
                  <p className="text-[17px] text-[#475569] font-sans">
                    {lang === 'fr'
                      ? 'Un ingénieur NOGA-PROCESS prendra contact avec vous dans les plus brefs délais.'
                      : 'A NOGA-PROCESS engineer will get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-yellow px-6 py-3 text-[16px] font-extrabold uppercase rounded-xl text-[#02006F] cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full h-13 px-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Nom *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full h-13 px-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Email Professionnel *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-13 px-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-13 px-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Société / Site industriel</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-13 px-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[15px] font-extrabold text-[#02006F] mb-1.5">Votre message / Projet *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-[#F8FAFC] border border-gray-300 text-[16px] text-[#111827] focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-yellow w-full h-13 text-[16px] font-black uppercase tracking-wide flex items-center justify-center space-x-2 rounded-xl shadow-md text-[#02006F] hover:scale-102 transition-transform cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>{lang === 'fr' ? 'Transmettre ma demande' : 'Submit Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
