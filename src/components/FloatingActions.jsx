import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Xtreem Infosys! I am reaching out from your website for Enterprise IT Infrastructure support.")}`;
  const phone = (companyInfo.phones && companyInfo.phones[0]) ? companyInfo.phones[0].raw : '918860484613';

  return (
    <div className="fixed bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">
      {/* Scroll To Top (Smooth slide in on scroll) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg hover:border-[#C59B27] text-slate-700 hover:text-slate-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-all animate-fadeIn"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}

      {/* 24/7 Rapid Phone Call Button (Premium Gold Executive) */}
      <a
        href={`tel:${phone}`}
        className="relative group w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white hover:bg-amber-50/90 border-2 border-[#D4AF37] text-[#B38728] hover:text-[#996515] flex items-center justify-center shadow-[0_6px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.55)] hover:scale-108 active:scale-95 transition-all duration-300"
        title="Call 24/7 Rapid Helpline (+91 88604 84613)"
        aria-label="Call 24/7 Rapid Helpline"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:rotate-12 transition-transform duration-200" />
      </a>

      {/* Real Official WhatsApp Logo Button (Luxury Vibrancy) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#38E07B] text-white flex items-center justify-center shadow-[0_6px_22px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.7)] hover:scale-108 active:scale-95 transition-all duration-300"
        title="Chat on WhatsApp Direct Line"
        aria-label="Chat on WhatsApp Direct Line"
      >
        {/* Active Pulse Beacon */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-rose-500 border-2 border-white"></span>
        </span>

        {/* Authentic Official WhatsApp Vector Icon */}
        <svg 
          viewBox="0 0 32 32" 
          className="w-5 h-5 sm:w-7 sm:h-7 fill-white drop-shadow-xs group-hover:scale-105 transition-transform"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.48 2.022 7.785L.68 31.32l7.733-1.31A15.908 15.908 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.43 0-4.717-.655-6.7-1.802l-.48-.28-4.993.845.857-4.87-.31-.497A13.268 13.268 0 012.667 16C2.667 8.647 8.647 2.667 16 2.667S29.333 8.647 29.333 16 23.353 29.333 16 29.333zm7.324-9.87c-.402-.2-2.378-1.173-2.747-1.307-.369-.133-.637-.2-.906.2-.268.402-1.04 1.307-1.275 1.575-.235.268-.469.302-.871.101-.402-.2-1.7-.626-3.238-1.998-1.198-1.068-2.006-2.388-2.241-2.79-.235-.402-.025-.62.176-.82.181-.18.402-.469.603-.703.201-.235.268-.402.402-.67.134-.268.067-.502-.034-.703-.1-.2-.905-2.18-1.24-2.984-.326-.784-.658-.677-.905-.69-.235-.012-.503-.015-.771-.015s-.704.101-1.072.502c-.369.402-1.408 1.376-1.408 3.353 0 1.978 1.441 3.889 1.642 4.157.201.268 2.836 4.331 6.87 6.074.96.414 1.71.662 2.294.848.964.306 1.842.263 2.535.16.773-.116 2.378-.972 2.713-1.91.335-.938.335-1.742.235-1.91-.101-.168-.369-.268-.771-.469z" />
        </svg>
      </a>
    </div>
  );
}