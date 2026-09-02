import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Radio, 
  Zap, 
  Layers, 
  Headphones, 
  GraduationCap, 
  Plane, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function IndustryReach({ onOpenQuoteModal }) {
  const industries = [
    {
      sector: "Government & Telecom R&D",
      client: "Center for Development of Telematics (C-DOT)",
      icon: Radio,
      scope: "Hardware maintenance, lab testing workstation support & high-reliability network connectivity.",
      badge: "Govt of India"
    },
    {
      sector: "Global Manufacturing & Exports",
      client: "Greenlam Industries Limited",
      icon: Layers,
      scope: "Plant IT infrastructure maintenance, executive device lifecycle & multi-site facility support.",
      badge: "Public Listed"
    },
    {
      sector: "Global Customer Experience & Tech",
      client: "Concentrix",
      icon: Headphones,
      scope: "High-density call center workstation support, rapid parts replacement & zero-downtime SLA.",
      badge: "Fortune 500"
    },
    {
      sector: "Core Energy & Power Generation",
      client: "RattanIndia Power Pvt. Ltd.",
      icon: Zap,
      scope: "Mission-critical office IT networks, server rack maintenance & hardware lifecycle care.",
      badge: "Energy Titan"
    },
    {
      sector: "IT Infrastructure & Support",
      client: "Sysnet Global Technologies",
      icon: Building,
      scope: "Strategic enterprise AMC contracts, backup equipment logistics & technical troubleshooting.",
      badge: "Tech Pioneer"
    },
    {
      sector: "Apex National Education Governance",
      client: "NIEPA",
      icon: GraduationCap,
      scope: "Campus computer lab maintenance, projector AV systems & structured fiber networking.",
      badge: "Ministry of Education"
    },
    {
      sector: "Aerospace & Drone Robotics",
      client: "Neosky Pvt. Ltd.",
      icon: Plane,
      scope: "High-performance graphics workstations, drone flight station computing & secure storage.",
      badge: "Deep Tech"
    },
    {
      sector: "Digital Engineering & Solutions",
      client: "Neotech Pvt. Ltd.",
      icon: Cpu,
      scope: "Developer laptop fleet management, endpoint security enforcement & rapid engineer dispatch.",
      badge: "Enterprise"
    }
  ];

  return (
    <section id="industries" className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Team Computers Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-[#B38728]">
            <Building className="w-3.5 h-3.5" />
            Industry Reach &amp; Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-950">
            Powering Diverse Industry Sectors Across Delhi NCR
          </h2>
          <p className="text-base text-slate-600">
            Every industry has unique SLA requirements. We configure tailored IT support protocols built specifically for your sector's operational rhythm.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#C59B27]/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B38728] group-hover:bg-[#B38728] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 font-sans group-hover:text-[#B38728] transition-colors">
                    {ind.sector}
                  </h3>

                  <div className="text-xs font-extrabold text-[#B38728] mt-1 mb-2.5">
                    {ind.client}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SLA Verified
                  </span>
                  <button
                    onClick={() => onOpenQuoteModal(`AMC Solution for ${ind.sector}`)}
                    className="font-bold text-[#B38728] hover:text-amber-900 flex items-center gap-1 group/btn"
                  >
                    <span>View Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
