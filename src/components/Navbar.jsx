import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calculator, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Clients', href: '#clients' },
    { label: 'AMC Calculator', href: '#amc-calculator', isSpecial: true },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Contact', href: '#contact' },
  ];

  const phone = (companyInfo.phones && companyInfo.phones[0]) 
    ? companyInfo.phones[0] 
    : { display: "+91 88604 84613", raw: "918860484613" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-4">
      {/* Capsule with generous padding to guarantee zero bleeding over rounded caps */}
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_12px_35px_-5px_rgba(15,23,42,0.08)]' 
          : 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-sm'
      }`}>
        
        {/* Left: Refined & Polished Official Brand Identity */}
        <a href="#" className="flex items-center gap-3 group shrink-0 py-0.5" title="Xtreem Infosys">
          {/* Official Logo Artwork */}
          <img 
            src="/assets/xtreem-official-logo.png" 
            alt="Xtreem Infosys Logo" 
            className="h-10 sm:h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
          />
          
          {/* Clean Executive Typography */}
          <div className="flex flex-col justify-center whitespace-nowrap">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.06em] text-slate-950 group-hover:text-[#B38728] transition-colors leading-none">
              XTREEM
            </span>
            <span className="text-[9px] sm:text-[9.5px] font-sans font-bold tracking-[0.28em] text-[#B38728] uppercase mt-1 leading-none">
              — INFOSYS —
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links (Responsive spacing) */}
        <nav className="hidden xl:flex items-center gap-0.5 sm:gap-1 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-2.5 py-1.5 rounded-full text-[12px] font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                link.isSpecial 
                  ? 'text-amber-900 bg-amber-50/90 border border-amber-300 hover:bg-amber-100 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/90'
              }`}
            >
              {link.isSpecial && <Calculator className="w-3.5 h-3.5 text-[#B38728] shrink-0" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Medium Screen Nav (1024px to 1279px): Essential links */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 shrink-0">
          {[
            { label: 'Solutions', href: '#solutions' },
            { label: 'Clients', href: '#clients' },
            { label: 'Hardware', href: '#hardware' },
            { label: 'AMC Calc', href: '#amc-calculator', isSpecial: true },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-2.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                link.isSpecial 
                  ? 'text-amber-900 bg-amber-50/90 border border-amber-300 hover:bg-amber-100' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/90'
              }`}
            >
              {link.isSpecial && <Calculator className="w-3.5 h-3.5 text-[#B38728] shrink-0" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Spotlighted Phone Line & Formal Quote Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          
          {/* Luminous Spotlighted Contact Number Pill */}
          <a 
            href={`tel:${phone.raw}`}
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-50/90 via-emerald-50/80 to-amber-50/90 border-2 border-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.35)] hover:shadow-[0_0_26px_rgba(212,175,55,0.55)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap shrink-0 group"
            title="Direct Rapid On-Site Helpline (24/7 Active)"
          >
            {/* Live Radar Ping Pulse */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            {/* Helpline Tag */}
            <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-600 text-white leading-none font-sans shrink-0">
              24/7
            </span>

            {/* Phone Icon */}
            <Phone className="w-3.5 h-3.5 text-[#B38728] group-hover:rotate-12 transition-transform shrink-0" />

            {/* Bold Monospace Phone Number */}
            <span className="font-mono text-xs font-black text-slate-950 group-hover:text-[#B38728] transition-colors whitespace-nowrap tracking-tight">
              {phone.display}
            </span>
          </a>

          {/* Request AMC Quote Button - Positioned with safe inner margin */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0 group"
          >
            <span className="relative flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-current shrink-0" />
              Request Quote
            </span>
          </button>
        </div>

        {/* Mobile Menu & Quote Toggle */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenQuoteModal()}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#D4AF37] rounded-full shadow-sm whitespace-nowrap"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Clean & Organized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-5 shadow-2xl animate-fadeIn text-slate-800">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center justify-between transition-colors ${
                  link.isSpecial 
                    ? 'text-amber-950 bg-amber-50 border border-amber-200' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isSpecial && <Calculator className="w-4 h-4 text-amber-700" />}
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${phone.raw}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold bg-amber-50 border border-amber-300 text-slate-900 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C59B27]" />
                Call Helpline: {phone.display}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md"
              >
                Request Custom AMC Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}