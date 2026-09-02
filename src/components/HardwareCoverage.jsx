import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Tv, 
  Monitor, 
  Projector, 
  Server, 
  CheckCircle2, 
  Wrench, 
  ShieldAlert, 
  Cpu, 
  Sparkles,
  Award,
  Check,
  MonitorCheck
} from 'lucide-react';
import { hardwareMatrix } from '../data/servicesData';

export default function HardwareCoverage({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = {
    Laptop: Laptop,
    MonitorCheck: MonitorCheck,
    Tv: Tv,
    Monitor: Monitor,
    Projector: Projector,
    Server: Server
  };

  const matrix = hardwareMatrix || [];
  const current = matrix[activeTab] || matrix[0] || {};
  const CurrentIcon = iconMap[current.icon] || Laptop;

  return (
    <section id="hardware" className="relative py-10 sm:py-16 overflow-hidden bg-[#F8FAFC]">
      
      {/* Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none aurora-orb-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-50 border-amber-200 text-[#B38728]">
            <Cpu className="w-3.5 h-3.5" />
            Hardware &amp; OEM Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            IT Infrastructure We Maintain
          </h2>
          <p className="text-base text-slate-600">
            Certified multi-brand maintenance, original OEM components, motherboard chip-level repair capabilities, and warranty RMA assistance across Delhi NCR.
          </p>
        </motion.div>

        {/* Tab Selector: Luxury 2-Col Grid on Mobile, Centered Capsule Bar on Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          {/* Mobile 2-Column Luxury Micro-Dashboard (Visible on < sm) */}
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {matrix.map((item, idx) => {
              const TabIcon = iconMap[item.icon] || Laptop;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.category || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] text-slate-950 shadow-[0_6px_20px_rgba(212,175,55,0.45)] scale-[1.02] font-black'
                      : 'bg-white/95 backdrop-blur-md text-slate-700 border border-slate-200/90 shadow-xs hover:border-amber-300 font-bold'
                  }`}
                >
                  <div className={`p-1.5 rounded-xl shrink-0 ${isActive ? 'bg-black/10 text-slate-950' : 'bg-amber-50 text-[#B38728]'}`}>
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs leading-tight line-clamp-2">
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop & Tablet Centered Capsule Bar (Visible on >= sm) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {matrix.map((item, idx) => {
              const TabIcon = iconMap[item.icon] || Laptop;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.category || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] text-slate-950 shadow-[0_4px_18px_rgba(212,175,55,0.4)] scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 shadow-sm hover:text-slate-950 hover:border-[#C59B27]/40'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-[#B38728]'}`} />
                  <span>{item.category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Hardware Display Card with Real Hardware Photography */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-5 sm:p-10 shadow-xl border bg-white border-slate-200"
          >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Scope (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center shadow-sm bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300 text-[#B38728] shrink-0">
                  <CurrentIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B38728] font-bold uppercase tracking-wider">
                    OEM Certified Maintenance Scope
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900">
                    {current.category}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                {current.description}
              </p>

              {/* Supported Brands */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-800">
                  Supported OEM Brands &amp; Series
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(current.brands || current.supportedBrands || []).map((brand, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3 py-1 rounded-full border text-xs font-semibold bg-slate-50 border-slate-200 text-slate-800 shadow-xs"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Covered Failure Points & Maintenance Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-800">
                  Maintenance &amp; Engineering Checklist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(current.supportScope || current.commonIssues || []).map((issue, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                      <span className="text-slate-700 font-medium">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(`AMC for ${current.category}`)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Get AMC Quote for {current.category}
                </button>
              </div>

            </div>

            {/* Right Card: High-Definition Device Photography & SLA Specs (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* High-Resolution Hardware Fleet Photo with Liquid Glass Sheen */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-slate-900 border border-slate-200 shadow-lg group liquid-glass-sheen">
                <img 
                  src={current.image} 
                  alt={current.category} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                  <span className="text-[#FDE68A] font-mono">{current.category} Staging Lab</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/80 font-mono">100% Genuine</span>
                </div>
              </div>

              {/* SLA & Turnaround Box */}
              <div className="p-5 rounded-2xl border space-y-3 bg-slate-50 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B38728]">
                    SLA &amp; Turnaround Time
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                    RAPID RESOLUTION
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">On-Site Diagnosis</span>
                    <span className="font-semibold text-slate-900">&lt; 2 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Standby Unit Provision</span>
                    <span className="font-semibold text-emerald-700">Within 4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Component Level Repair</span>
                    <span className="font-semibold text-slate-900">24 - 48 Hours</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border text-[11px] font-semibold flex items-center gap-2 bg-amber-50 border-amber-200 text-amber-900">
                  <Wrench className="w-3.5 h-3.5 text-[#B38728] shrink-0" />
                  <span>100% Genuine OEM Spares with Warranty</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}