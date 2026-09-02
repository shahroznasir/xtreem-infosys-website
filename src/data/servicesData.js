export const servicesData = [
  {
    id: "infrastructure-amc",
    title: "IT Infrastructure Maintenance (AMC)",
    category: "Core Maintenance",
    badge: "24/7 SLA Available",
    image: "/assets/solutions/solution-amc.jpg",
    shortDesc: "End-to-end Annual Maintenance Contracts (AMC) to keep enterprise hardware, workstations, and server environments operating at peak performance with zero downtime.",
    fullDesc: "We provide bespoke Comprehensive and Non-Comprehensive Annual Maintenance Contracts customized for high-density enterprise offices, call centers, and government institutions across Delhi NCR. Our certified engineers perform routine preventive audits, board-level repairs, firmware updates, and instant on-site parts replacement.",
    features: [
      "Comprehensive (Labor + Spares) & Non-Comprehensive AMC models",
      "Scheduled monthly preventive maintenance & health audits",
      "Guaranteed 2-hour response SLA for critical server & workstation breakdowns",
      "Original OEM genuine spare parts replacement with warranty",
      "Standby backup machines during lengthy hardware repairs",
      "Centralized ticketing system and monthly health diagnostic reports"
    ],
    icon: "ShieldCheck",
    color: "from-amber-500/20 to-yellow-500/10",
    borderGlow: "group-hover:border-amber-400/40"
  },
  {
    id: "facility-management",
    title: "IT Facility Management (FMS)",
    category: "On-Site Operations",
    badge: "Dedicated Engineers",
    image: "/assets/solutions/solution-fms.jpg",
    shortDesc: "Dedicated, highly trained on-site engineers and facility managers to handle day-to-day enterprise IT operations, user helpdesks, and infrastructure orchestration.",
    fullDesc: "Ensure smooth corporate day-to-day operations with our resident IT Facility Management Services (FMS). We deploy certified Level-1, Level-2, and Level-3 systems administrators directly at your corporate premises to oversee user troubleshooting, network uptime, conference room setups, and asset lifecycle tracking.",
    features: [
      "Dedicated resident IT support engineers stationed at your office",
      "L1/L2/L3 helpdesk ticket logging, resolution, and escalation management",
      "New employee IT asset provisioning, OS staging, and onboarding setup",
      "Conference room AV, video conferencing & hybrid workspace management",
      "Software license compliance, OS patch updates, and inventory tracking",
      "Direct owner escalation matrix for immediate operational alignment"
    ],
    icon: "Building2",
    color: "from-blue-500/20 to-indigo-500/10",
    borderGlow: "group-hover:border-blue-400/40"
  },
  {
    id: "networking-solutions",
    title: "Enterprise Networking Management",
    category: "Connectivity & Racks",
    badge: "High-Speed & Secure",
    image: "/assets/solutions/solution-network.jpg",
    shortDesc: "End-to-end design, structured cabling, rack management, enterprise routing, switching, and Wi-Fi 6 deployments engineered for 99.99% network reliability.",
    fullDesc: "From structured Cat6/Cat6A/Fiber optic cabling and patch panel dressing to multi-VLAN switching, firewall configuration, and multi-access-point Wi-Fi 6 architectures, we design and manage high-throughput networks tailored for high-demand business environments.",
    features: [
      "Structured copper & fiber optic network cabling and rack dressing",
      "Enterprise router, core switch, and PoE access point configuration",
      "Seamless corporate Wi-Fi coverage with guest portal authentication",
      "VLAN segregation for voice, data, guest, and surveillance traffic",
      "Bandwidth throttling, QoS optimization & dual-WAN load balancing",
      "24/7 network connectivity monitoring & proactive link failover"
    ],
    icon: "Network",
    color: "from-cyan-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-cyan-400/40"
  },
  {
    id: "security-solutions",
    title: "Endpoint Security & Antivirus Defense",
    category: "Cybersecurity",
    badge: "Zero-Trust Ready",
    image: "/assets/solutions/solution-security.jpg",
    shortDesc: "Multi-layered virus protection, endpoint detection, automated data backup systems, and perimeter security to safeguard your corporate data and workstations.",
    fullDesc: "Protect your enterprise digital assets against ransomware, phishing, malware, and unauthorized data leakage. We deploy centralized enterprise endpoint security solutions across all corporate laptops and desktops, complete with automated real-time definition updates, USB port control, and off-site cloud backups.",
    features: [
      "Centralized cloud-managed enterprise antivirus & EDR deployment",
      "Real-time ransomware shielding and behavioral exploit prevention",
      "USB and removable media data loss prevention (DLP) policies",
      "Automated local and cloud data backup configurations",
      "Hardware firewall installation & intrusion prevention rules (IPS)",
      "Vulnerability assessment and routine OS security patch updates"
    ],
    icon: "Lock",
    color: "from-emerald-500/20 to-green-500/10",
    borderGlow: "group-hover:border-emerald-400/40"
  },
  {
    id: "oem-installation",
    title: "Commercial Fleet Staging & Lifecycle Support",
    category: "Lifecycle & RMA",
    badge: "Multi-Brand Certified",
    image: "/assets/solutions/solution-hardware.jpg",
    shortDesc: "Authorized commercial fleet distribution, professional unboxing, enterprise staging, OEM warranty claim handling, and lifecycle extension for Acer and premier global brands.",
    fullDesc: "Eliminate the headache of dealing with multiple vendor warranty channels. As a premier authorized commercial enterprise partner for Acer and multi-vendor infrastructure specialist, we serve as your single point of contact for new hardware deployment, OEM warranty registration, on-site part RMA claims, and post-warranty cost-effective maintenance for Acer, Dell, HP, Lenovo, Apple, Cisco, and Canon systems.",
    features: [
      "Bulk enterprise hardware unboxing, staging, and asset tagging",
      "Authorized Acer commercial distribution & OEM warranty coordination",
      "Post-warranty extended maintenance & board-level repairs",
      "Hardware upgrades (NVMe SSDs, RAM expansion, GPU acceleration)",
      "Eco-friendly e-waste disposal and legacy hardware trade-in support",
      "Multi-brand cross-platform expertise (Windows, macOS, Linux)"
    ],
    icon: "Wrench",
    color: "from-purple-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-purple-400/40"
  }
];

export const hardwareMatrix = [
  {
    category: "Laptops & Notebooks",
    icon: "Laptop",
    image: "/assets/hardware/hardware-laptops.jpg",
    description: "Enterprise ultrabooks, mobile workstations, and executive laptops.",
    brands: ["Acer TravelMate / Swift Pro (Primary)", "Dell Latitude / XPS", "HP EliteBook / ProBook", "Lenovo ThinkPad", "Apple MacBook Pro"],
    supportScope: ["Screen replacement", "Keyboard & battery swap", "Motherboard chip-level repair", "OS & driver staging"],
    amcAvailable: true
  },
  {
    category: "Desktops & Workstations",
    icon: "MonitorCheck",
    image: "/assets/hardware/hardware-desktops.jpg",
    description: "Heavy-duty CAD workstations, rendering rigs, and office desktops.",
    brands: ["Acer Veriton Enterprise (Primary)", "Dell OptiPlex / Precision", "HP ProDesk / Z-Series", "Lenovo ThinkCentre", "Custom Workstations"],
    supportScope: ["SMPS power repair", "RAM & SSD upgrades", "Graphics card testing", "Thermal paste servicing"],
    amcAvailable: true
  },
  {
    category: "All-in-One (AIO) Systems",
    icon: "Tv",
    image: "/assets/hardware/hardware-aio.jpg",
    description: "Space-saving elegant desktops for executive desks and reception counters.",
    brands: ["Acer Aspire / Veriton AIO (Primary)", "Dell OptiPlex AIO", "HP EliteOne", "Lenovo IdeaCentre AIO", "Apple iMac"],
    supportScope: ["Panel repair", "Internal inverter repair", "Storage cloning", "Preventive dust cleanup"],
    amcAvailable: true
  },
  {
    category: "Monitors & Pro Displays",
    icon: "Monitor",
    image: "/assets/hardware/hardware-monitors.jpg",
    description: "Multi-monitor trading setups, color-accurate design screens, and conference displays.",
    brands: ["Acer Commercial & Nitro Displays (Primary)", "Dell UltraSharp", "LG Commercial", "Samsung ViewFinity", "BenQ Pro"],
    supportScope: ["Backlight repair", "Port replacement (HDMI/DP/Type-C)", "Stand assembly", "Calibration"],
    amcAvailable: true
  },
  {
    category: "Projectors & Smart AV",
    icon: "Projector",
    image: "/assets/hardware/hardware-projectors.jpg",
    description: "Conference room 4K laser projectors, motorized screens, and audio-visual setups.",
    brands: ["Acer Laser & Corporate Projectors (Primary)", "Epson Laser", "BenQ Corporate", "Sony Professional", "Optoma"],
    supportScope: ["Lamp replacement", "Optical engine alignment", "Ceiling mount alignment", "Wireless casting setup"],
    amcAvailable: true
  },
  {
    category: "Servers & Network Racks",
    icon: "Server",
    image: "/assets/hardware/hardware-servers.jpg",
    description: "Rackmount servers, managed PoE switches, patch panels, and enterprise firewalls.",
    brands: ["Acer Altos Enterprise Servers (Primary)", "Dell PowerEdge", "HPE ProLiant", "Cisco Catalyst", "Fortinet FortiGate", "Ubiquiti UniFi"],
    supportScope: ["RAID array rebuilds", "Port patching & tagging", "UPS battery bank replacement", "Firmware security updates"],
    amcAvailable: true
  }
];

export const comparisonPoints = [
  {
    feature: "Guaranteed SLA Response",
    xtreem: "2-Hour Emergency Response with Dedicated Hotline",
    others: "Next-Day or Unpredictable Callback"
  },
  {
    feature: "Statutory & Tax Invoicing",
    xtreem: "100% Verified GSTIN Invoices with Input Tax Credit",
    others: "Cash/Unregistered Receipts"
  },
  {
    feature: "On-Site Facility Engineers",
    xtreem: "Certified Resident L1/L2 Engineers Stationed at Premises",
    others: "Freelance / Ad-hoc On-Call Technicians"
  },
  {
    feature: "OEM Genuine Spare Parts",
    xtreem: "Brand-Certified Genuine Components with Warranty",
    others: "Used / Duplicate Refurbished Parts"
  },
  {
    feature: "Standby Equipment Support",
    xtreem: "Immediate Backup Machine Provided During Critical Repairs",
    others: "Business Downtime Until Machine Repaired"
  },
  {
    feature: "Preventive Maintenance",
    xtreem: "Scheduled Monthly Deep Health Checks & Thermal Audits",
    others: "Reactive Only (Fix when broken)"
  }
];

export const faqs = [
  {
    q: "What types of AMC contracts does Xtreem Infosys offer?",
    a: "We offer both Comprehensive AMC (covering all labor, service visits, and replacement spare parts) and Non-Comprehensive AMC (covering unlimited breakdown visits, preventive maintenance, and labor, with parts charged at discounted OEM prices)."
  },
  {
    q: "How quickly can your engineers respond to a breakdown in Delhi NCR?",
    a: "Our standard SLA ensures a 2-hour on-site arrival for critical server and network emergencies across South Delhi, Central Delhi, Noida, and Gurugram, backed by instant remote diagnostic support within 15 minutes."
  },
  {
    q: "Do you supply standby machines during repairs?",
    a: "Yes. For mission-critical servers, core switches, and executive workstations, we maintain a staging buffer of over 45+ standby units to ensure zero downtime while internal chip-level repairs are performed."
  }
];