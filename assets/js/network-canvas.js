/**
 * XTREEM INFOSYS - Interactive Cyber Network Canvas
 * Visualizes Enterprise IT Infrastructure, Routers, Packets & Server Nodes.
 */

class NetworkCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.packets = [];
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 160 };
    this.isRunning = false;
    this.theme = document.documentElement.getAttribute('data-theme') || 'dark';

    this.init();
  }

  init() {
    this.resize();
    this.createNodes();
    this.setupEventListeners();
    this.start();
  }

  resize() {
    this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;
  }

  createNodes() {
    this.nodes = [];
    // Adjust density based on screen size
    const nodeCount = Math.floor((this.width * this.height) / 14000);
    const count = Math.min(Math.max(nodeCount, 30), 80);

    for (let i = 0; i < count; i++) {
      const isServer = Math.random() < 0.18; // 18% are enterprise "server" nodes
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: isServer ? Math.random() * 2.5 + 3.5 : Math.random() * 1.5 + 1.8,
        isServer: isServer,
        pulse: Math.random() * Math.PI * 2,
        color: isServer ? '#D4AF37' : (Math.random() > 0.4 ? '#E5C583' : '#38BDF8')
      });
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createNodes();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Observer to pause when not visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isRunning) this.start();
        } else {
          this.stop();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.canvas);
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  updateTheme(theme) {
    this.theme = theme;
  }

  spawnPacket(nodeA, nodeB) {
    if (this.packets.length < 18 && Math.random() < 0.03) {
      this.packets.push({
        from: nodeA,
        to: nodeB,
        progress: 0,
        speed: Math.random() * 0.015 + 0.012,
        color: nodeA.isServer || nodeB.isServer ? '#F3D079' : '#38BDF8'
      });
    }
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const isLight = this.theme === 'light';
    const baseLineAlpha = isLight ? 0.12 : 0.16;

    // Update and draw connections
    for (let i = 0; i < this.nodes.length; i++) {
      const nodeA = this.nodes[i];

      // Update position
      nodeA.x += nodeA.vx;
      nodeA.y += nodeA.vy;

      // Bounce boundaries
      if (nodeA.x < 0 || nodeA.x > this.width) nodeA.vx *= -1;
      if (nodeA.y < 0 || nodeA.y > this.height) nodeA.vy *= -1;

      // Mouse interactivity
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - nodeA.x;
        const dy = this.mouse.y - nodeA.y;
        const dist = Math.hypot(dx, dy);
        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 0.6;
          nodeA.x -= (dx / dist) * force;
          nodeA.y -= (dy / dist) * force;
        }
      }

      // Connect with other nodes
      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeB = this.nodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dist = Math.hypot(dx, dy);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * baseLineAlpha;
          this.ctx.beginPath();
          this.ctx.moveTo(nodeA.x, nodeA.y);
          this.ctx.lineTo(nodeB.x, nodeB.y);
          
          if (nodeA.isServer || nodeB.isServer) {
            this.ctx.strokeStyle = isLight ? `rgba(184, 142, 24, ${alpha * 1.5})` : `rgba(212, 175, 55, ${alpha * 1.6})`;
            this.ctx.lineWidth = 1.2;
          } else {
            this.ctx.strokeStyle = isLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(56, 189, 248, ${alpha})`;
            this.ctx.lineWidth = 0.8;
          }
          this.ctx.stroke();

          // Chance to spawn traveling packet
          this.spawnPacket(nodeA, nodeB);
        }
      }
    }

    // Draw packets
    for (let p = this.packets.length - 1; p >= 0; p--) {
      const pkt = this.packets[p];
      pkt.progress += pkt.speed;

      if (pkt.progress >= 1) {
        this.packets.splice(p, 1);
        continue;
      }

      const px = pkt.from.x + (pkt.to.x - pkt.from.x) * pkt.progress;
      const py = pkt.from.y + (pkt.to.y - pkt.from.y) * pkt.progress;

      this.ctx.beginPath();
      this.ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      this.ctx.fillStyle = pkt.color;
      this.ctx.shadowColor = pkt.color;
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset
    }

    // Draw nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      node.pulse += 0.04;

      this.ctx.beginPath();
      const radius = node.isServer ? node.radius + Math.sin(node.pulse) * 0.8 : node.radius;
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = node.color;
      
      if (node.isServer) {
        this.ctx.shadowColor = node.color;
        this.ctx.shadowBlur = 12;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Server outer ring
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, radius + 4 + Math.sin(node.pulse) * 2, 0, Math.PI * 2);
        this.ctx.strokeStyle = isLight ? 'rgba(184, 142, 24, 0.3)' : 'rgba(212, 175, 55, 0.4)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      } else {
        this.ctx.fill();
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  updateTheme(theme) {
    this.theme = theme;
    const isLight = theme === 'light';
    this.nodes.forEach(node => {
      if (node.isServer) {
        node.color = isLight ? '#B88E18' : '#D4AF37';
      } else {
        node.color = isLight ? (Math.random() > 0.4 ? '#9B7512' : '#0284C7') : (Math.random() > 0.4 ? '#E5C583' : '#38BDF8');
      }
    });
  }
}

// Global instance helper
window.initNetworkCanvas = function(canvasId = 'network-canvas') {
  return new NetworkCanvas(canvasId);
};
