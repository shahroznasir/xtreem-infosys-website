/**
 * XTREEM INFOSYS — Main Application Script v2.0
 * High-End: Preloader · Custom Cursor · Scroll Reveal · Active Nav ·
 *           3D Tilt · Tabs · Modal · Form · Copy · Toast · Testimonials
 */

/* ==========================================================================
   PRELOADER
   ========================================================================== */
(function () {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  function dismissPreloader() {
    preloader.classList.add('preloader-done');
    document.body.style.overflow = '';
  }

  document.body.style.overflow = 'hidden';

  if (document.readyState === 'complete') {
    setTimeout(dismissPreloader, 1500);
  } else {
    window.addEventListener('load', () => setTimeout(dismissPreloader, 600));
  }
})();


document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     CANVAS INIT
     ========================================================================== */
  let canvasInstance = null;
  if (typeof initNetworkCanvas === 'function') {
    canvasInstance = initNetworkCanvas('network-canvas');
  }

  /* ==========================================================================
     CUSTOM CURSOR
     ========================================================================== */
  const cursorRing = document.getElementById('custom-cursor');
  const cursorDot  = document.getElementById('custom-cursor-dot');

  if (cursorRing && cursorDot && window.matchMedia('(hover: hover)').matches) {
    document.body.classList.add('custom-cursor-active');

    let ringX = 0, ringY = 0;
    let dotX  = 0, dotY  = 0;
    let mx = 0, my = 0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function animateCursor() {
      // Dot follows instantly
      dotX += (mx - dotX) * 0.95;
      dotY += (my - dotY) * 0.95;
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top  = dotY + 'px';

      // Ring follows with lag
      ringX += (mx - ringX) * 0.12;
      ringY += (my - ringY) * 0.12;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';

      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Expand ring on interactive elements
    const hoverTargets = 'a, button, .luxury-card, .hw-tab-btn, .testimonial-dot, label[for], input[type=range]';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'));
    });

    document.addEventListener('mouseleave', () => {
      cursorRing.style.opacity = '0';
      cursorDot.style.opacity  = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorRing.style.opacity = '1';
      cursorDot.style.opacity  = '1';
    });
  }


  /* ==========================================================================
     THEME SWITCHING (Dark / Light)
     ========================================================================== */
  const themeToggleBtn       = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  const navLogoImg           = document.getElementById('nav-logo-img');
  const footerLogoImg        = document.getElementById('footer-logo-img');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('xtreem-theme', theme);

    if (canvasInstance) canvasInstance.updateTheme(theme);

    const isLight = theme === 'light';
    if (navLogoImg)    navLogoImg.src    = 'assets/images/x-emblem.png';
    if (footerLogoImg) footerLogoImg.src = isLight ? 'assets/images/logo-light.png' : 'assets/images/logo-dark.jpg';

    document.querySelectorAll('.theme-icon').forEach(ic => {
      ic.className = isLight ? 'fa-solid fa-moon theme-icon' : 'fa-solid fa-sun theme-icon';
    });

    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  const savedTheme = localStorage.getItem('xtreem-theme') || 'dark';
  setTheme(savedTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  if (themeToggleBtn)       themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);


  /* ==========================================================================
     FLOATING CAPSULE NAVBAR SCROLL EFFECT + ACTIVE SECTION HIGHLIGHT
     ========================================================================== */
  const navbar      = document.getElementById('main-nav');
  const navLinks    = document.querySelectorAll('.nav-capsule-link, .nav-link-underline');
  const sections    = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active section detection
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 160) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav-active');
      }
    });
  });


  /* ==========================================================================
     MOBILE MENU — Smooth Slide
     ========================================================================== */
  const mobileMenuBtn   = document.getElementById('mobile-menu-btn');
  const mobileMenu      = document.getElementById('mobile-menu');
  const mobileNavLinks  = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('menu-open');
      if (isOpen) {
        mobileMenu.classList.remove('menu-open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
      } else {
        mobileMenu.classList.add('menu-open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark text-xl"></i>';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
      });
    });
  }


  /* ==========================================================================
     SCROLL REVEAL — IntersectionObserver
     ========================================================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Immediately reveal elements already in viewport on load
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('revealed');
        revealObserver.unobserve(el);
      }
    });
  }, 200);

  // Process connector animation
  const processConnectorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.process-connector').forEach((el, i) => {
          setTimeout(() => el.classList.add('connected'), i * 400);
        });
        processConnectorObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  const processSection = document.getElementById('process');
  if (processSection) processConnectorObserver.observe(processSection);


  /* ==========================================================================
     STATS COUNT-UP + GLOW
     ========================================================================== */
  const statCounters = document.querySelectorAll('.stat-count');
  let statsCounted   = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;

        // Expand dividers
        document.querySelectorAll('.stat-divider').forEach(d => d.classList.add('expanded'));

        statCounters.forEach(counter => {
          const target    = parseFloat(counter.getAttribute('data-target'));
          const prefix    = counter.getAttribute('data-prefix') || '';
          const suffix    = counter.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          const duration  = 2200;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed  = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease     = 1 - Math.pow(1 - progress, 3);
            const val      = ease * target;

            counter.textContent = prefix + (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = prefix + (isDecimal ? target.toFixed(1) : target) + suffix;
              // Glow effect after count completes
              setTimeout(() => counter.classList.add('glowing'), 100);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) statsObserver.observe(statsSection);


  /* ==========================================================================
     DYNAMIC CURSOR SPOTLIGHT ON LUXURY CARDS
     ========================================================================== */
  document.querySelectorAll('.luxury-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ==========================================================================
     3D PERSPECTIVE TILT ON SERVICE & LUXURY CARDS
     ========================================================================== */
  document.querySelectorAll('.service-card, .luxury-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;
      const rotX    = ((y - centerY) / centerY) * -3.5;
      const rotY    = ((x - centerX) / centerX) * 3.5;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  /* ==========================================================================
     HARDWARE MATRIX TABS
     ========================================================================== */
  const hardwareTabs     = document.querySelectorAll('.hw-tab-btn');
  const hardwareContents = document.querySelectorAll('.hw-tab-content');

  hardwareTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      hardwareTabs.forEach(t => {
        t.classList.remove('active-tab');
        t.classList.add('border-transparent', 'text-slate-400');
      });
      btn.classList.add('active-tab');
      btn.classList.remove('border-transparent', 'text-slate-400');

      hardwareContents.forEach(panel => {
        if (panel.id === 'hw-panel-' + tabId) {
          panel.classList.remove('hidden');
          panel.classList.add('animate-fadeIn');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('animate-fadeIn');
        }
      });
    });
  });


  /* ==========================================================================
     TESTIMONIALS CAROUSEL
     ========================================================================== */
  const track        = document.getElementById('testimonial-track');
  const dots         = document.querySelectorAll('.testimonial-dot');
  const prevBtn      = document.getElementById('testimonial-prev');
  const nextBtn      = document.getElementById('testimonial-next');
  let currentSlide   = 0;
  let autoSlideTimer = null;

  function goToSlide(index) {
    const total = dots.length;
    currentSlide = (index + total) % total;
    if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  function startAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 5500);
  }

  if (track && dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i); startAutoSlide(); });
    });
    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startAutoSlide(); });

    goToSlide(0);
    startAutoSlide();

    // Swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goToSlide(currentSlide + (diff > 0 ? 1 : -1)); startAutoSlide(); }
    });
  }


  /* ==========================================================================
     COPY TO CLIPBOARD
     ========================================================================== */
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check text-green-400"></i> Copied!';
        showToast(`Copied: ${text}`);
        setTimeout(() => { btn.innerHTML = orig; }, 2200);
      });
    });
  });


  /* ==========================================================================
     TOAST NOTIFICATION
     ========================================================================== */
  function showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-slate-900/95 text-white border border-amber-400/30 shadow-2xl backdrop-blur-md flex items-center gap-3 transition-all duration-400 transform translate-y-20 opacity-0 text-sm font-medium';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-400"></i> ${message}`;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  }


  /* ==========================================================================
     SERVICE MODALS
     ========================================================================== */
  const serviceModalsData = {
    'infra-amc': {
      title: 'IT Infrastructure Maintenance & AMC',
      subtitle: 'Comprehensive & Non-Comprehensive Enterprise AMC Solutions',
      icon: 'fa-server',
      content: `
        <p class="mb-4 text-slate-300 leading-relaxed">Xtreem Infosys provides end-to-end Annual Maintenance Contracts designed to eliminate unplanned IT downtime and prolong enterprise hardware lifecycle across Delhi NCR.</p>
        <h4 class="text-amber-400 font-semibold mb-2">Key Service Offerings:</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
          <li><strong>Comprehensive AMC:</strong> Covers preventative maintenance, round-the-clock emergency support, and certified replacement parts at zero added cost.</li>
          <li><strong>Non-Comprehensive AMC:</strong> Provides regular scheduled maintenance, rapid engineer dispatch, and component replacement at subsidized cost.</li>
          <li><strong>Scheduled Preventive Audits:</strong> Thermal imaging, dust purge, cable dressing, and firmware updates.</li>
          <li><strong>Standby Buffer Hardware:</strong> Critical spares deployed on-premise to ensure zero workflow interruption.</li>
        </ul>
        <div class="p-4 rounded-lg bg-slate-800/60 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-3">
          <i class="fa-solid fa-shield-halved text-lg"></i>
          <span>Guaranteed 2 to 4-hour SLA response time with dedicated account engineer assignment.</span>
        </div>`
    },
    'fms': {
      title: 'IT Facility Management Services (FMS)',
      subtitle: 'On-Site Resident IT Engineers & Helpdesk Operations',
      icon: 'fa-headset',
      content: `
        <p class="mb-4 text-slate-300 leading-relaxed">We place certified, trained L1, L2, and L3 IT professionals directly at your office premises to handle daily operations, user helpdesk queries, and enterprise IT administration.</p>
        <h4 class="text-amber-400 font-semibold mb-2">Capabilities:</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
          <li><strong>Dedicated Resident Engineers:</strong> On-site daily IT staff aligned with your company's operating hours.</li>
          <li><strong>IT Asset & Inventory Tracking:</strong> Barcode logging, warranty lifecycle tracking, and procurement auditing.</li>
          <li><strong>Enterprise Helpdesk SLA:</strong> Rapid ticket resolution for OS issues, email configuration, printers, and user permissions.</li>
          <li><strong>Executive VIP Support:</strong> White-glove expedited support for boardroom and C-suite technical setups.</li>
        </ul>`
    },
    'networking': {
      title: 'Enterprise Networking & Infrastructure',
      subtitle: 'Design, Deployment, Routing, Switching & Structured Cabling',
      icon: 'fa-network-wired',
      content: `
        <p class="mb-4 text-slate-300 leading-relaxed">From multi-floor enterprise cabling to high-density Wi-Fi 6 and redundant firewall setups, Xtreem Infosys architects robust enterprise networks.</p>
        <h4 class="text-amber-400 font-semibold mb-2">Solutions:</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
          <li><strong>Structured Cabling & Rack Dressing:</strong> Cat6/Cat6A & Single/Multi-mode Fiber optic installations.</li>
          <li><strong>Switching & Routing:</strong> Multi-gigabit managed switches (Cisco, Aruba, D-Link, Netgear).</li>
          <li><strong>Secure VPN & Remote Access:</strong> Site-to-site IPsec tunnels and encrypted telecommuter access.</li>
          <li><strong>Network Bandwidth Optimization:</strong> QoS configuration, traffic prioritization, and failover ISP integration.</li>
        </ul>`
    },
    'security': {
      title: 'Endpoint Security & Data Protection',
      subtitle: 'Multi-Layered Virus Protection & Automated Backup',
      icon: 'fa-shield-virus',
      content: `
        <p class="mb-4 text-slate-300 leading-relaxed">Safeguard enterprise confidential data against ransomware, zero-day threats, and hardware failures with enterprise-grade cybersecurity management.</p>
        <h4 class="text-amber-400 font-semibold mb-2">Coverage:</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
          <li><strong>Centralized Endpoint Protection:</strong> Managed antivirus, malware quarantine, and patch distribution.</li>
          <li><strong>Automated Data Backup & Recovery:</strong> Hybrid on-premise and cloud backup protocols with rapid restore.</li>
          <li><strong>Firewall Configuration:</strong> Deep packet inspection, web content filtering, and intrusion prevention.</li>
        </ul>`
    },
    'warranty': {
      title: 'Installation & OEM Warranty Support',
      subtitle: 'Certified Multi-Brand Deployment & Post-Warranty Lifecycles',
      icon: 'fa-screwdriver-wrench',
      content: `
        <p class="mb-4 text-slate-300 leading-relaxed">We bridge the gap between major hardware OEMs (Dell, HP, Lenovo, Apple, Cisco) and your organization, managing warranty claims, RMA escalations, and certified part replacements.</p>
        <h4 class="text-amber-400 font-semibold mb-2">Services:</h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
          <li><strong>Turnkey Hardware Commissioning:</strong> Unboxing, custom image cloning, domain joining, and software staging.</li>
          <li><strong>Direct OEM Warranty Coordination:</strong> Fast-track RMA logistics and original manufacturer part procurement.</li>
          <li><strong>Post-Warranty Maintenance:</strong> Extending hardware lifecycle cost-effectively beyond OEM end-of-life dates.</li>
        </ul>`
    }
  };

  const modalContainer    = document.getElementById('service-modal');
  const modalBody         = document.getElementById('service-modal-body');
  const modalClose        = document.getElementById('service-modal-close');
  const modalTriggerBtns  = document.querySelectorAll('.btn-service-detail');

  modalTriggerBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const data = serviceModalsData[btn.getAttribute('data-service')];
      if (data && modalBody && modalContainer) {
        modalBody.innerHTML = `
          <div class="flex items-center gap-4 mb-6 border-b border-amber-500/20 pb-4">
            <div class="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl flex-shrink-0">
              <i class="fa-solid ${data.icon}"></i>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-white">${data.title}</h3>
              <p class="text-amber-400 text-xs md:text-sm">${data.subtitle}</p>
            </div>
          </div>
          <div class="text-slate-200">${data.content}</div>
          <div class="mt-8 flex flex-wrap gap-4 pt-4 border-t border-slate-800">
            <a href="#contact" class="btn-gold text-sm py-2.5 px-6" onclick="document.getElementById('service-modal').classList.add('hidden')">
              <i class="fa-solid fa-file-invoice"></i> Request SLA Quote
            </a>
            <button class="btn-luxury-outline text-sm py-2.5 px-6" onclick="document.getElementById('service-modal').classList.add('hidden')">Close</button>
          </div>`;
        modalContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalClose && modalContainer) {
    const closeModal = () => {
      modalContainer.classList.add('hidden');
      document.body.style.overflow = '';
    };
    modalClose.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', e => { if (e.target === modalContainer) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }


  /* ==========================================================================
     CONTACT FORM — Floating Labels + Validation + Success
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      // Validate required fields
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('border-red-500/60');
          setTimeout(() => field.classList.remove('border-red-500/60'), 2500);
        }
      });

      if (!valid) {
        contactForm.classList.add('form-shake');
        setTimeout(() => contactForm.classList.remove('form-shake'), 600);
        return;
      }

      const submitBtn  = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
      submitBtn.disabled = true;

      setTimeout(() => {
        const formContainer = document.getElementById('contact-form-container');
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Proposal Request Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        submitBtn.style.color = '#fff';
        if (formContainer) {
          formContainer.style.boxShadow = '0 0 0 2px rgba(16,185,129,0.3), 0 25px 50px -12px rgba(0,0,0,0.75)';
        }
        showToast('Thank you! Our technical lead will contact you within 2 business hours.');

        setTimeout(() => {
          contactForm.reset();
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled  = false;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          if (formContainer) formContainer.style.boxShadow = '';
        }, 4000);
      }, 1200);
    });
  }

  /* ==========================================================================
     FAQ ACCORDION INTERACTION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const icon   = item.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('faq-open');

      // Close all items
      faqItems.forEach(other => {
        const otherAns  = other.querySelector('.faq-answer');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherAns) {
          otherAns.classList.remove('faq-open');
          otherAns.style.maxHeight = null;
          otherAns.style.opacity = '0';
        }
        if (otherIcon) {
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (!isOpen && answer) {
        answer.classList.add('faq-open');
        answer.style.maxHeight = (answer.scrollHeight + 30) + 'px';
        answer.style.opacity = '1';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const firstAns = faqItems[0].querySelector('.faq-answer');
    const firstIcon = faqItems[0].querySelector('.faq-icon');
    if (firstAns) {
      firstAns.classList.add('faq-open');
      firstAns.style.maxHeight = (firstAns.scrollHeight + 30) + 'px';
      firstAns.style.opacity = '1';
      if (firstIcon) firstIcon.style.transform = 'rotate(180deg)';
    }
  }

  /* ==========================================================================
     BACK TO TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Expose showToast globally for AMC calculator usage
  window.showToast = showToast;

}); // end DOMContentLoaded
