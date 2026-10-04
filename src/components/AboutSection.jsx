import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight, 
  Award, 
  CheckCircle2,
  Server,
  Network,
  Cpu,
  Sparkles,
  MapPin,
  Radio
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AboutSection({ onOpenQuoteModal }) {
  const stats = [
    { digit: "2021", unit: "", title: "Founded in New Delhi", desc: "Corporate Registration 24-09-2021" },
    { digit: "99.9", unit: "%", title: "Guaranteed Uptime SLA", desc: "Contractual High-Availability" },
    { digit: "< 2", unit: "Hrs", title: "Emergency Response SLA", desc: "Rapid On-Site Arrival in Delhi NCR" },
    { digit: "5,000", unit: "+", title: "Hardware Endpoints", desc: "Laptops, Desktops, AIOs & Servers" },
    { digit: "10", unit: "+", title: "Marquee Enterprise Clients", desc: "C-DOT, Greenlam, Concentrix & more" }
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/50 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Story & Corporate Engineering Facility Photo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
          
          {/* Left Column: Narrative & Credentials */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#B38728] block">
              Our Story &bull; Who We Are
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-sans tracking-tight leading-tight">
              About Us
            </h2>

            <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-sans leading-snug">
              We are the engineering force behind mission-critical enterprise IT infrastructure across Delhi NCR.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              Founded in 2021 and headquartered in New Delhi, <strong>Xtreem Infosys</strong> is an IT infrastructure, authorized commercial distribution, and facility management company serving enterprise and public-sector clients across Delhi NCR. Led by <strong>Asif</strong>, we provide end-to-end maintenance contracts, IT facility management, and networking management, backed by security solutions and authorized enterprise warranty &amp; distribution support for <strong>Acer Commercial</strong> and leading global OEMs—helping organisations keep their IT operations reliable, secure, and running smoothly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#B38728] flex items-center justify-center font-bold text-xs shrink-0">
                  ISO
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Standardized Workflows</div>
                  <div className="text-[11px] text-slate-500">Tier-1 OEM SLA compliance</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                  GST
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Tax Compliant</div>
                  <div className="text-[11px] text-slate-500">ITC invoice eligible</div>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenQuoteModal('Corporate Presentation & Overview')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Request Corporate Overview</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Mission-Critical Datacenter & NOC Operations Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-950 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 liquid-glass-sheen">
              {/* High-Tech Enterprise Datacenter & NOC Image */}
              <img 
                src="/assets/about/about-datacenter-noc.webp" 
                alt="Xtreem Infosys Mission-Critical IT Infrastructure & NOC Command Center" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-105"
                loading="lazy"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent"></div>

              {/* Top Corner Live Status Badge */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-cyan-400/30 text-white shadow-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-200">
                  Enterprise NOC &bull; Live
                </span>
              </div>

              {/* Top Right SLA Tag */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] text-slate-950 shadow-md">
                  &lt; 2-Hr SLA
                </span>
              </div>

              {/* Bottom Caption Glass Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/15 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FDE68A]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Delhi NCR Engineering &amp; Staging Hub</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    24/7 SLA
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                  Powering mission-critical IT infrastructure for C-DOT, Greenlam, Concentrix &amp; enterprise leaders.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Team Computers Style Stats Slider / Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-4">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#C59B27]/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-4xl font-extrabold font-mono text-slate-950 group-hover:text-[#B38728] transition-colors flex items-baseline gap-0.5">
                <span>{st.digit}</span>
                {st.unit && <span className="text-lg sm:text-2xl text-[#B38728]">{st.unit}</span>}
              </div>

              <div className="text-xs font-bold text-slate-900 mt-2 font-sans">
                {st.title}
              </div>

              <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                {st.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-6 border-t border-slate-200">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B38728] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-sans">OEM Genuine Spares</h4>
              <p className="text-xs text-slate-600 mt-1">100% brand-certified replacement parts for Dell, HP, Lenovo &amp; Apple with warranty guarantee.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-sans">&lt; 2-Hour Rapid SLA</h4>
              <p className="text-xs text-slate-600 mt-1">Direct regional dispatch hubs in South Delhi, Okhla, Jasola, Noida &amp; Gurugram for immediate on-site arrival.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-sans">100% Tax Compliant</h4>
              <p className="text-xs text-slate-600 mt-1">Active GSTIN (07BVIPA7562H1ZI) registration allowing full corporate Input Tax Credit (ITC).</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
