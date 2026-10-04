import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  Building,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Enterprise IT AMC Contract',
    assetCount: '25 - 100 Assets',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {}
  };

  const phones = companyInfo.phones || [
    { display: "+91 88604 84613", raw: "918860484613" },
    { display: "+91 95407 34565", raw: "919540734565" }
  ];
  const address = companyInfo.address || {};

  return (
    <section id="contact" className="py-10 sm:py-16 border-t bg-[#F8FAFC] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-50 border-amber-200 text-[#B38728]">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Consultation &amp; Dispatch Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            Partner with Xtreem Infosys
          </h2>
          <p className="text-base text-slate-600">
            Initiate a zero-cost infrastructure health audit or speak directly with our senior technical leadership.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-9 border shadow-xl space-y-8 bg-white border-slate-200"
          >
            
            <div>
              <h3 className="text-xl font-bold mb-2 font-sans text-slate-900">
                New Delhi Operations Headquarters
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">
                Directly serving corporate offices, government institutions, and industrial hubs across the entire Delhi National Capital Region.
              </p>
            </div>

            {/* Coordinates List */}
            <div className="space-y-4 text-xs">
              
              {/* Address */}
              <div className="p-4 rounded-2xl border flex items-start gap-3.5 bg-white border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#B38728] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Registered Address</div>
                  <p className="mt-0.5 leading-relaxed text-slate-600">
                    {address.full}
                  </p>
                  <span className="text-[11px] text-[#B38728] font-semibold mt-1 block">
                    Near Jamia Millia Islamia / Jasola District Center
                  </span>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="p-4 rounded-2xl border flex items-start gap-3.5 bg-white border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Direct Helplines</div>
                  <div className="flex flex-col gap-1 mt-1 font-mono text-xs">
                    <a href={`tel:${phones[0].raw}`} className="text-emerald-700 font-bold hover:underline">
                      {phones[0].display} (Primary Dispatch)
                    </a>
                    {phones[1] && (
                      <a href={`tel:${phones[1].raw}`} className="text-slate-600 hover:underline">
                        {phones[1].display} (Technical Support)
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl border flex items-start gap-3.5 bg-white border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Official Inquiries</div>
                  <a href={`mailto:${companyInfo.email}`} className="mt-0.5 block font-mono text-sky-700 hover:underline">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Leadership / Owner Info from PPT */}
              <div className="p-4 rounded-2xl border flex items-start gap-3.5 bg-white border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Managing Leadership</div>
                  <p className="mt-0.5 text-slate-600">
                    <strong>{companyInfo.owner}</strong> — {companyInfo.designation}
                  </p>
                </div>
              </div>

            </div>

            {/* Delhi NCR Rapid Hubs */}
            <div className="p-4 rounded-2xl border bg-slate-50 border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B38728] mb-2">
                <Clock className="w-4 h-4" />
                <span>Delhi NCR Response Zones (&lt; 2 Hours SLA)</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {['South Delhi', 'Okhla Ind. Area', 'Jasola', 'Nehru Place', 'Connaught Place', 'Noida Sec 62', 'Gurugram Cyber Hub', 'Faridabad'].map((zone) => (
                  <span key={zone} className="px-2.5 py-1 rounded-lg border bg-white border-slate-200 text-slate-700 shadow-sm font-medium">
                    {zone}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Lead Engine Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-9 border shadow-xl bg-white border-slate-200"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Consultation Request Received!
                </h3>
                <p className="text-sm max-w-md mx-auto leading-relaxed text-slate-600">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior infrastructure engineer will contact you within 2 business hours to schedule your preliminary audit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#D4AF37] hover:bg-[#FDE68A] transition-all shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-sans text-slate-900">
                    Request an AMC Proposal / IT Audit
                  </h3>
                  <p className="text-xs mt-1 text-slate-500">
                    Please provide your organizational details for an expedited technical response.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Enterprises Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                    >
                      <option>Enterprise IT AMC Contract</option>
                      <option>IT Facility Management &amp; Resident Engineers</option>
                      <option>Enterprise Networking &amp; Structured Cabling</option>
                      <option>Cybersecurity &amp; Endpoint Protection</option>
                      <option>OEM Certified Installation &amp; Warranty Logistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                      Fleet Size (Endpoints)
                    </label>
                    <select
                      value={formData.assetCount}
                      onChange={(e) => setFormData({ ...formData, assetCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                    >
                      <option>Under 25 Assets</option>
                      <option>25 - 100 Assets</option>
                      <option>100 - 300 Assets</option>
                      <option>300 - 1,000+ Assets</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700">
                    Requirement Notes / Infrastructure Scope
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Provide details about current hardware, SLA expectations, or pain points..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-xs transition-colors outline-none focus:border-[#B38728] resize-none bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit RFP / Audit Request
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}