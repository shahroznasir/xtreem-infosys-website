/**
 * XTREEM INFOSYS - Interactive AMC & FMS Cost Estimator
 * Empowers prospective enterprise clients to estimate maintenance contracts.
 */

document.addEventListener('DOMContentLoaded', () => {
  const laptopsInput = document.getElementById('calc-laptops');
  const laptopsVal = document.getElementById('calc-laptops-val');
  const serversInput = document.getElementById('calc-servers');
  const serversVal = document.getElementById('calc-servers-val');
  const networkInput = document.getElementById('calc-network');
  const networkVal = document.getElementById('calc-network-val');
  
  const contractTypeInputs = document.querySelectorAll('input[name="calc-contract-type"]');
  const slaTierInputs = document.querySelectorAll('input[name="calc-sla-tier"]');

  const estMonthlyEl = document.getElementById('calc-est-monthly');
  const estAnnualEl = document.getElementById('calc-est-annual');
  const estEngineersEl = document.getElementById('calc-est-engineers');
  const estSlaEl = document.getElementById('calc-est-sla');
  const estVisitsEl = document.getElementById('calc-est-visits');
  const applyQuoteBtn = document.getElementById('calc-apply-quote-btn');
  const fleetRatioEl = document.getElementById('calc-fleet-ratio');
  const barLaptops = document.getElementById('ratio-bar-laptops');
  const barServers = document.getElementById('ratio-bar-servers');
  const barNetwork = document.getElementById('ratio-bar-network');

  function updateSliderFill(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const pct = ((val - min) / (max - min)) * 100;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const trackUnfilled = isLight ? '#CBD5E1' : 'rgba(255, 255, 255, 0.08)';
    const gradStart = isLight ? '#B88E18' : '#D4AF37';
    const gradEnd   = isLight ? '#805E09' : '#F3D079';
    slider.style.background = `linear-gradient(to right, ${gradStart} 0%, ${gradEnd} ${pct}%, ${trackUnfilled} ${pct}%, ${trackUnfilled} 100%)`;
  }

  window.addEventListener('themeChanged', () => {
    if (laptopsInput) updateSliderFill(laptopsInput);
    if (serversInput) updateSliderFill(serversInput);
    if (networkInput) updateSliderFill(networkInput);
  });

  function calculateQuote() {
    if (!laptopsInput) return;

    const laptops = parseInt(laptopsInput.value) || 0;
    const servers = parseInt(serversInput.value) || 0;
    const networks = parseInt(networkInput.value) || 0;

    updateSliderFill(laptopsInput);
    updateSliderFill(serversInput);
    updateSliderFill(networkInput);

    if (laptopsVal) laptopsVal.textContent = laptops;
    if (serversVal) serversVal.textContent = servers;
    if (networkVal) networkVal.textContent = networks;

    // Visual fleet ratio calculation
    const totalDevices = laptops + servers + networks;
    if (totalDevices > 0) {
      const pLap = Math.round((laptops / totalDevices) * 100);
      const pSrv = Math.round((servers / totalDevices) * 100);
      const pNet = Math.max(0, 100 - pLap - pSrv);

      if (fleetRatioEl) fleetRatioEl.textContent = `${pLap}% Workstations · ${pSrv}% Servers · ${pNet}% Network`;
      if (barLaptops) barLaptops.style.width = `${pLap}%`;
      if (barServers) barServers.style.width = `${pSrv}%`;
      if (barNetwork) barNetwork.style.width = `${pNet}%`;
    }

    let contractType = 'comprehensive';
    contractTypeInputs.forEach(input => {
      if (input.checked) contractType = input.value;
    });

    let slaTier = 'enterprise';
    slaTierInputs.forEach(input => {
      if (input.checked) slaTier = input.value;
    });

    // Base rates in INR
    let ratePerPc = 350; // monthly base per PC/Laptop
    let ratePerServer = 1800; // monthly base per Server
    let ratePerNetwork = 950; // monthly base per Switch/Router

    if (contractType === 'non-comprehensive') {
      ratePerPc = 180;
      ratePerServer = 900;
      ratePerNetwork = 500;
    } else if (contractType === 'fms') {
      ratePerPc = 450;
      ratePerServer = 2200;
      ratePerNetwork = 1200;
    }

    const slaMultiplier = slaTier === 'critical-247' ? 1.35 : 1.0;

    const totalDevices = laptops + servers + networks;
    const rawMonthly = ((laptops * ratePerPc) + (servers * ratePerServer) + (networks * ratePerNetwork)) * slaMultiplier;
    
    // Scale discount for large enterprise fleets
    let discount = 1.0;
    if (totalDevices > 100) discount = 0.88;
    else if (totalDevices > 50) discount = 0.94;

    const finalMonthly = Math.max(Math.round((rawMonthly * discount) / 500) * 500, 3500);
    const finalAnnual = finalMonthly * 12;

    // Engineers calculation
    let engineers = 'On-Demand SLA Support';
    if (contractType === 'fms' || totalDevices >= 100) {
      const engCount = Math.max(1, Math.ceil(totalDevices / 120));
      engineers = `${engCount} Dedicated Resident Engineer${engCount > 1 ? 's' : ''}`;
    } else if (totalDevices >= 40) {
      engineers = 'Dedicated Lead Engineer + Standby SLA';
    }

    // SLA display
    const slaText = slaTier === 'critical-247' ? '< 2 Hours (24x7 Critical)' : '< 4 Hours (8x5 Business)';
    const visitsText = totalDevices > 60 ? 'Bi-Weekly / 24 per Year' : 'Monthly / 12 per Year';

    if (estMonthlyEl) estMonthlyEl.textContent = '₹' + finalMonthly.toLocaleString('en-IN') + ' / mo';
    if (estAnnualEl) estAnnualEl.textContent = '₹' + finalAnnual.toLocaleString('en-IN') + ' / yr';
    if (estEngineersEl) estEngineersEl.textContent = engineers;
    if (estSlaEl) estSlaEl.textContent = slaText;
    if (estVisitsEl) estVisitsEl.textContent = visitsText;
  }

  // Bind input listeners
  [laptopsInput, serversInput, networkInput].forEach(inp => {
    if (inp) inp.addEventListener('input', calculateQuote);
  });

  contractTypeInputs.forEach(inp => inp.addEventListener('change', calculateQuote));
  slaTierInputs.forEach(inp => inp.addEventListener('change', calculateQuote));

  // Initial calc
  calculateQuote();

  // Apply to contact form button
  if (applyQuoteBtn) {
    applyQuoteBtn.addEventListener('click', () => {
      const laptops = laptopsInput ? laptopsInput.value : 0;
      const servers = serversInput ? serversInput.value : 0;
      const networks = networkInput ? networkInput.value : 0;
      
      let contractType = 'Comprehensive AMC';
      contractTypeInputs.forEach(input => {
        if (input.checked) {
          if (input.value === 'comprehensive') contractType = 'Comprehensive AMC';
          else if (input.value === 'non-comprehensive') contractType = 'Non-Comprehensive AMC';
          else if (input.value === 'fms') contractType = 'IT Facility Management (Resident FMS)';
        }
      });

      const messageBox = document.getElementById('contact-message');
      const serviceSelect = document.getElementById('contact-service');
      
      if (serviceSelect) {
        serviceSelect.value = contractType.includes('Facility') ? 'facility-management' : 'amc-maintenance';
      }

      if (messageBox) {
        messageBox.value = `Hello Xtreem Infosys Team,

I configured an estimate for our organisation:
- Fleet: ${laptops} Workstations/Laptops, ${servers} Servers, ${networks} Network devices
- Contract Type: ${contractType}
- Estimated Scope: ${estMonthlyEl ? estMonthlyEl.textContent : ''}

Please share the formal quotation and SLA terms.`;
      }

      // Smooth scroll to contact section
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        // Pulse effect on form
        const formContainer = document.getElementById('contact-form-container');
        if (formContainer) {
          formContainer.classList.add('pulse-border');
          setTimeout(() => formContainer.classList.remove('pulse-border'), 3000);
        }
      }
    });
  }

  // Instant WhatsApp Quote Dispatch
  const whatsappQuoteBtn = document.getElementById('calc-whatsapp-quote-btn');
  if (whatsappQuoteBtn) {
    whatsappQuoteBtn.addEventListener('click', () => {
      const laptops = laptopsInput ? laptopsInput.value : 0;
      const servers = serversInput ? serversInput.value : 0;
      const networks = networkInput ? networkInput.value : 0;

      let contractType = 'Comprehensive AMC';
      contractTypeInputs.forEach(input => {
        if (input.checked) {
          if (input.value === 'comprehensive') contractType = 'Comprehensive AMC';
          else if (input.value === 'non-comprehensive') contractType = 'Non-Comprehensive AMC';
          else if (input.value === 'fms') contractType = 'IT Facility Management (Resident FMS)';
        }
      });

      const scope = estMonthlyEl ? estMonthlyEl.textContent : '';
      const msg = `Hello XTREEM INFOSYS Team,\n\nI generated an AMC Quote on your portal:\n• Fleet: ${laptops} Workstations, ${servers} Servers, ${networks} Network Units\n• Plan: ${contractType}\n• Est. Cost: ${scope}\n\nPlease dispatch the detailed SLA agreement & proposal.`;
      window.open(`https://wa.me/918860484613?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
});
