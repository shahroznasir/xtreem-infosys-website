import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Server, 
  MapPin, 
  Play,
  Pause,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Radio,
  Cpu,
  Thermometer,
  HardDrive
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenQuoteModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeConsoleTab, setActiveConsoleTab] = useState(0); // 0: Live Telemetry, 1: Rack Status, 2: NCR Dispatch

  // Equalized slide data for 100% uniform height across all 4 slides
  const slides = [
    {
      id: 0,
      badge: "Delhi NCR Premier AMC",
      title: "Empower Enterprises with Mission-Critical Infrastructure",
      highlightWord: "Zero Downtime.",
      kickerTitle: "Enterprise AMC & Facility Management",
      kickerDesc: "End-to-end multi-vendor maintenance, standby buffer hardware & contractual 99.9% uptime SLA across Delhi NCR.",
      primaryCta: "Calculate AMC Budget",
      primaryHref: "#amc-calculator",
      secondaryCta: "Explore Tech Solutions",
      secondaryHref: "#solutions",
      statsKicker: "5,000+ Active Endpoints Protected",
      slaBadge: "< 2-Hour SLA"
    },
    {
      id: 1,
      badge: "Enterprise Device Fleets",
      title: "Scale Acer, Dell, HP, Lenovo & Apple Fleets",
      highlightWord: "PAN-NCR Staging.",
      kickerTitle: "Commercial Hardware Care & Warranty Support",
      kickerDesc: "Motherboard chip-level BGA repairs, panel replacements, battery swaps & certified OEM warranty logistics.",
      primaryCta: "Explore Hardware Scope",
      primaryHref: "#hardware",
      secondaryCta: "Request Device Quote",
      secondaryAction: () => onOpenQuoteModal("Commercial Device Fleet AMC"),
      statsKicker: "Acer • Dell • HP • Lenovo • Apple Certified",
      slaBadge: "45+ Buffer Units"
    },
    {
      id: 2,
      badge: "Core Enterprise Networks",
      title: "Build an Enterprise IT Infrastructure That Threats Can't Stop",
      highlightWord: "Zero Risk.",
      kickerTitle: "Structured Cabling & Endpoint Cyber Defense",
      kickerDesc: "High-density rack patching, managed PoE switching, Fortinet firewalls & centralized endpoint cyber defense.",
      primaryCta: "Book Free Security Audit",
      primaryAction: () => onOpenQuoteModal("Infrastructure & Security Audit"),
      secondaryCta: "WhatsApp Direct Line",
      secondaryHref: `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Xtreem Infosys! I am interested in Enterprise Networking & Endpoint Security.")}`,
      statsKicker: "Fortinet & Cisco Network Architecture",
      slaBadge: "Zero Data-Loss"
    },
    {
      id: 3,
      badge: "Resident IT Staffing",
      title: "Station Certified Resident Engineers Inside Your Premises",
      highlightWord: "Dedicated L1/L2.",
      kickerTitle: "IT Facility Management Services (FMS)",
      kickerDesc: "Trained, verified, and technically certified engineers managing your day-to-day office IT operations.",
      primaryCta: "Deploy Resident Engineers",
      primaryAction: () => onOpenQuoteModal("IT Facility Management (FMS) Engineers"),
      secondaryCta: "View Client Portfolio",
      secondaryHref: "#clients",
      statsKicker: "Serving C-DOT, Greenlam & Concentrix",
      slaBadge: "Full-Time Coverage"
    }
  ];

  const SLIDE_DURATION = 4800; // 4.8 seconds

  // Continuous Autoplay loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, slides.length]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide] || slides[0];

  return (
    <section 
      id="hero" 
      className="relative flex items-center pt-20 sm:pt-28 pb-8 sm:pb-12 bg-[#F8FAF9] overflow-hidden border-b border-slate-200"
    >
      
      {/* LAYER 2: Infrastructure Photograph (Pre-blended Cleanroom Server Pods at 9% opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="/assets/hero/hero-datacenter-clean.png" 
          alt="" 
          className="w-full h-full object-cover object-right opacity-[0.88] filter brightness-[1.01] contrast-[0.98]"
        />
      </div>

      {/* LAYER 3: Fine Technical Grid (3-4% Subconscious Opacity) */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-[0.04] pointer-events-none"></div>

      {/* LAYER 4: Multi-Point Soft Gold & Clean White Light Zone Auroras */}
      {/* 1. Soft Gold Glow near Headline lower-right */}
      <div className="absolute top-[38%] left-[26%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-[#D4AF37]/3 to-transparent blur-[100px] pointer-events-none"></div>

      {/* 2. White Light Zone Wash behind SLA Card (Clean Enterprise SaaS separation) */}
      <div className="absolute top-1/2 right-[6%] -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-white/85 blur-[95px] pointer-events-none"></div>

      {/* 3. Soft Luxury Gold Aura around SLA Card perimeter */}
      <div className="absolute top-[20%] right-[4%] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#D4AF37]/12 via-[#D4AF37]/3 to-transparent blur-[110px] pointer-events-none"></div>

      {/* 4. Faint Gold Glow near bottom CTA area */}
      <div className="absolute bottom-4 left-[18%] w-[380px] h-[260px] rounded-full bg-gradient-to-tr from-[#D4AF37]/8 via-transparent to-transparent blur-[85px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main 2-Column Banner Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column: Rich & Spacious Executive Layout with Locked Uniform Height */}
          <div className="lg:col-span-7 flex flex-col relative space-y-5 sm:space-y-6">
            
            {/* Butter-Smooth Framer Motion Cross-Fade Transition (Locked Identical Height Container) */}
            <div className="relative min-h-[500px] sm:min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4 sm:space-y-5"
                >
                  
                  {/* Top Pill / Badge (Zero Overflow Guarantee) */}
                  <div className="inline-flex items-center justify-between gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-md max-w-full">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 relative shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-900 font-sans whitespace-nowrap">
                        {slide.badge}
                      </span>
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0 whitespace-nowrap">
                      {slide.slaBadge}
                    </span>
                  </div>

                  {/* Giant Bold Headline Container (Locked Uniform Height) */}
                  <div className="min-h-[148px] sm:min-h-[155px] xl:min-h-[175px] flex flex-col justify-start">
                    <h1 className="text-[32px] sm:text-4xl xl:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] font-sans">
                      {slide.title}{' '}
                      <span className="gold-gradient-text inline sm:block font-serif italic font-bold text-[32px] sm:text-4xl xl:text-5xl mt-1 tracking-normal">
                        {slide.highlightWord}
                      </span>
                    </h1>
                  </div>

                  {/* Team Computers Style Spacious Kicker Card (Locked Uniform Height) */}
                  <div className="h-[175px] sm:h-[180px] p-5 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FDE68A] via-[#D4AF37] to-[#B38728]"></div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 font-sans tracking-tight">
                          {slide.kickerTitle}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-[#B38728] uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shrink-0 ml-2">
                          0{currentSlide + 1} / 0{slides.length}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                        {slide.kickerDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B38728] pt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{slide.statsKicker}</span>
                    </div>
                  </div>

                  {/* CTAs: Full Luxurious Mobile Stack Enlarged to Fill Downwards */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
                    {slide.primaryHref ? (
                      <a
                        href={slide.primaryHref}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 sm:py-5 min-h-[54px] rounded-full text-sm font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-[0_14px_35px_rgba(212,175,55,0.52)] hover:shadow-[0_18px_42px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group text-center"
                      >
                        <Calculator className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenQuoteModal(slide.modalContext)}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 sm:py-5 min-h-[54px] rounded-full text-sm font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-[0_14px_35px_rgba(212,175,55,0.52)] hover:shadow-[0_18px_42px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group text-center"
                      >
                        <ShieldCheck className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                        <span>{slide.primaryCta}</span>
                        <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}

                    {slide.secondaryHref ? (
                      <a
                        href={slide.secondaryHref}
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-4.5 min-h-[50px] rounded-full text-sm font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 shadow-md transition-all text-center"
                      >
                        <span>{slide.secondaryCta}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ) : (
                      <button
                        onClick={slide.secondaryAction}
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-4.5 min-h-[50px] rounded-full text-sm font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 shadow-md transition-all text-center"
                      >
                        <span>{slide.secondaryCta}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Pagination & Visual Autoplay Progress Bar */}
            <div className="pt-4 sm:pt-6 mt-1 sm:mt-3 flex items-center justify-between border-t border-slate-200/80 pr-14 sm:pr-0">
              
              {/* Autoplay Slide Indicators with Framer Motion Progress Fill */}
              <div className="flex items-center gap-2 sm:gap-3">
                {slides.map((s, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 ${
                        isActive 
                          ? 'w-10 sm:w-16 bg-slate-200' 
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      {isActive && isPlaying ? (
                        <motion.div
                          key={`prog-${currentSlide}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B38728] rounded-full"
                        />
                      ) : isActive ? (
                        <div className="h-full w-full bg-[#B38728] rounded-full" />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {/* Controls: Play/Pause Toggle & Prev/Next Arrows (Hidden on Web View) */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 sm:p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm transition-colors"
                  title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
                  aria-label={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#B38728]" />}
                </button>

                <button
                  onClick={prevSlide}
                  className="p-2 sm:p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 sm:p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 shadow-sm transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Extraordinary Interactive NOC Operations Center (5 Cols) */}
          <div className="lg:col-span-5 relative group pt-2 lg:pt-0">
            {/* White Radial Light Zone + Soft Gold Accent behind SLA Card */}
            <div className="absolute -inset-6 rounded-3xl bg-white/85 blur-2xl pointer-events-none"></div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/95 via-[#D4AF37]/15 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-white/95 backdrop-blur-2xl border border-white/90 relative overflow-hidden group hover:border-[#C59B27]/40 transition-all duration-300">
              
              {/* Ambient Specular Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"></div>

              {/* Console Header with Live NOC Beacon */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center text-[#B38728] shadow-sm shrink-0">
                    <Server className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider font-sans text-slate-950 truncate">
                      Enterprise SLA Center
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                      Delhi NCR Dispatch NOC &bull; 24/7 Active
                    </p>
                  </div>
                </div>
                <span className="shrink-0 whitespace-nowrap px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[10.5px] sm:text-[11px] font-mono text-emerald-800 font-extrabold flex items-center gap-1.5 shadow-xs">
                  <span className="flex h-2 w-2 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>LIVE SLA</span>
                </span>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 text-xs font-bold">
                <button
                  onClick={() => setActiveConsoleTab(0)}
                  className={`py-2 rounded-xl transition-all ${
                    activeConsoleTab === 0 
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  SLA Metrics
                </button>
                <button
                  onClick={() => setActiveConsoleTab(1)}
                  className={`py-2 rounded-xl transition-all ${
                    activeConsoleTab === 1 
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Rack Health
                </button>
                <button
                  onClick={() => setActiveConsoleTab(2)}
                  className={`py-2 rounded-xl transition-all ${
                    activeConsoleTab === 2 
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  NCR Hubs
                </button>
              </div>

              {/* Tab 0: High-Impact Stat Blocks & Telemetry */}
              {activeConsoleTab === 0 && (
                <div className="space-y-4 animate-slide-content">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm group-hover:border-amber-200 transition-colors">
                      <div className="text-3xl font-extrabold font-mono text-slate-950">
                        99.98<span className="text-[#B38728] text-xl">%</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-1">Uptime SLA</div>
                      <div className="text-[11px] text-slate-500">Contractual guarantee</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-sm group-hover:border-sky-200 transition-colors">
                      <div className="text-3xl font-extrabold text-sky-600 font-mono">
                        &lt; 2 <span className="text-base font-normal text-slate-700">Hrs</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-1">Emergency Arrival</div>
                      <div className="text-[11px] text-slate-500">Across Delhi NCR</div>
                    </div>
                  </div>

                  {/* Progress & Live Endpoints Bar */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-700 font-semibold flex items-center gap-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-[#B38728]" />
                        Monitored Hardware Endpoints
                      </span>
                      <span className="font-mono font-bold text-[#B38728]">5,420+ Units</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 via-[#D4AF37] to-[#B38728] rounded-full w-[95%]"></div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Mean Time to Respond: &lt; 38 min</span>
                      <span className="text-emerald-700 font-bold">100% Operational</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 1: Live Hardware Rack Telemetry */}
              {activeConsoleTab === 1 && (
                <div className="space-y-3 animate-slide-content text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2.5 font-mono shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        RACK-01: POWEREDGE &amp; CISCO
                      </span>
                      <span>NCR-SOUTH-01</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Dell PowerEdge Core:</span>
                      <span className="text-emerald-400 font-bold">LOAD 18% &bull; OPTIMAL</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Cisco 48-Port PoE Switch:</span>
                      <span className="text-emerald-400 font-bold">48/48 LINK UP</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">FortiGate 100F Firewall:</span>
                      <span className="text-emerald-400 font-bold">0 INTRUSIONS</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Thermometer className="w-3.5 h-3.5 text-sky-600" /> Temp:
                      </span>
                      <span className="font-mono font-bold text-slate-900">21.4°C</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-[#B38728]" /> APC UPS:
                      </span>
                      <span className="font-mono font-bold text-emerald-700">100% ONLINE</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Regional Dispatch Hubs */}
              {activeConsoleTab === 2 && (
                <div className="space-y-3 animate-slide-content">
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-800 space-y-2">
                    <div className="font-bold text-[#B38728] flex items-center gap-1.5">
                      <Radio className="w-4 h-4 text-[#B38728] animate-pulse" />
                      <span>Dedicated NCR Engineer Deployment Hubs</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Engineers permanently stationed within 15 minutes of major corporate corridors for instant SLA adherence.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> South Delhi HQ
                    </span>
                    <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Okhla Ind. Area
                    </span>
                    <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Noida Sec-62
                    </span>
                    <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Gurugram Cyber Hub
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom OEM Footnote */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium">OEM Certified: <strong className="text-slate-900 font-semibold">Acer Commercial</strong> • Dell • HP • Lenovo • Apple • Cisco</span>
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ONLINE
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}