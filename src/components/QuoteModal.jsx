import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [service, setService] = useState(initialService || 'Enterprise IT AMC Maintenance');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 }
        });
      }
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-9 border shadow-2xl space-y-5 sm:space-y-6 bg-white border-slate-200 text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full transition-colors bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-sans text-slate-900">
              Proposal Request Logged!
            </h3>
            <p className="text-xs max-w-sm mx-auto leading-relaxed text-slate-600">
              Our team will review your requirements for <strong>{service}</strong> and deliver an itemized SLA proposal to <strong>{email || phone}</strong> within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#D4AF37] hover:bg-[#FDE68A] transition-all shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-[#B38728] mb-2">
                <Sparkles className="w-3 h-3" />
                Priority Corporate Dispatch
              </div>
              <h3 className="text-xl font-bold font-sans text-slate-900">
                Request Formal AMC Quote
              </h3>
              <p className="text-xs text-slate-500">
                Get customized pricing, SLA benchmarks, and standby unit allocations.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1 text-slate-700">Selected Service / Requirement</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">Work Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none focus:border-[#B38728] bg-slate-50 border-slate-200 text-slate-900"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Generate Formal SLA Quote
            </button>
          </form>
        )}

      </div>
    </div>
  );
}