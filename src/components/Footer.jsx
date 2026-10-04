import React from 'react';
import { companyInfo } from '../data/companyData';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const compliance = companyInfo.compliance || {};
  const address = companyInfo.address || {};
  const phones = companyInfo.phones || [
    { display: "+91 88604 84613", raw: "918860484613" },
    { display: "+91 96545 88656", raw: "919654588656" }
  ];

  return (
    <footer className="bg-[#0A132B] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid (Team Computers Style Multi-Column Footer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Official Brand Identity (Logo + Xtreem Infosys Typography as in Navbar) */}
            <a href="#" className="flex items-center gap-3 group shrink-0 py-0.5" title="Xtreem Infosys">
              <img 
                src="/assets/xtreem-dark-logo.png" 
                alt="Xtreem Infosys Official Logo" 
                className="h-10 sm:h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
              
              <div className="flex flex-col justify-center whitespace-nowrap">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.06em] text-white group-hover:text-[#D4AF37] transition-colors leading-none">
                  XTREEM
                </span>
                <span className="text-[9px] sm:text-[9.5px] font-sans font-bold tracking-[0.28em] text-[#D4AF37] uppercase mt-1 leading-none">
                  — INFOSYS —
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {companyInfo.shortDesc || "Enterprise IT Infrastructure & Facility Management company serving premier corporate and public-sector organizations across Delhi NCR since 2021."}
            </p>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-[11px] text-amber-300 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>GSTIN: {compliance.gstin} (100% Tax Compliant)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Tech Solutions</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">IT Infrastructure AMC</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">IT Facility Management (FMS)</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">Enterprise Networking &amp; Cabling</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">Endpoint Security &amp; Antivirus</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">OEM Staging &amp; Warranty Logistics</a></li>
              <li><a href="#hardware" className="hover:text-amber-300 transition-colors">Hardware Maintenance Scope</a></li>
            </ul>
          </div>

          {/* Col 3: Industry & Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Company</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">Our Services</a></li>
              <li><a href="#clients" className="hover:text-amber-300 transition-colors">Client Portfolio</a></li>
              <li><a href="#industries" className="hover:text-amber-300 transition-colors">Industry Reach</a></li>
              <li><a href="#hardware" className="hover:text-amber-300 transition-colors">Hardware Maintenance</a></li>
              <li><a href="#why-us" className="hover:text-amber-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#amc-calculator" className="hover:text-amber-300 text-amber-300 transition-colors font-medium">AMC Calculator</a></li>
              <li><a href="#compliance" className="hover:text-amber-300 transition-colors">Compliance Vault</a></li>
            </ul>
          </div>

          {/* Col 4: South Delhi Headquarters (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">South Delhi HQ</h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-light">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{address.full || "N-86, Abul Fazal Enclave, Jamia Nagar, South Delhi, New Delhi - 110025"}</span>
              </p>
              <p className="font-mono text-amber-300 font-medium flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`tel:${phones[0].raw}`} className="hover:underline">{phones[0].display}</a>
              </p>
              <p className="font-mono text-slate-300 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
              </p>
              <div className="pt-2 text-[11px] text-slate-400">
                Leadership: <strong className="text-white">{companyInfo.owner}</strong> ({companyInfo.designation})
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Statutory Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-light">
          <div>
            &copy; 2021 &ndash; 2026 <strong>Xtreem Infosys</strong>. All rights reserved. Registered in New Delhi.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>GSTIN: <strong className="text-amber-300">{compliance.gstin}</strong></span>
            <span>&bull;</span>
            <span>PAN: <strong className="text-white">{compliance.pan}</strong></span>
            <span>&bull;</span>
            <span>Bank: <strong className="text-white">{compliance.bankName}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}