import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas({ isDark = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx;
    try {
      ctx = canvas.getContext('2d');
    } catch (e) {
      return;
    }
    if (!ctx) return;

    let animationFrameId;

    let width = (canvas.width = window.innerWidth || 1200);
    let height = (canvas.height = window.innerHeight || 800);

    const handleResize = () => {
      try {
        width = canvas.width = window.innerWidth || 1200;
        height = canvas.height = window.innerHeight || 800;
      } catch (e) {}
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const handleMouseMove = (e) => {
      try {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } catch (e) {}
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const particleCount = Math.min(width > 768 ? 55 : 25, 70);
    const particles = [];

    const colors = isDark 
      ? ['rgba(212, 175, 55, ', 'rgba(56, 189, 248, ', 'rgba(245, 158, 11, ', 'rgba(255, 255, 255, ']
      : ['rgba(197, 155, 39, ', 'rgba(2, 132, 199, ', 'rgba(15, 23, 42, '];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        try {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${this.colorBase}${this.alpha})`;
          ctx.shadowBlur = isDark ? 6 : 0;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
          ctx.fill();
        } catch (e) {}
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connect = () => {
      try {
        const maxDistance = 130;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              const opacity = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.1);
              ctx.strokeStyle = isDark 
                ? `rgba(212, 175, 55, ${opacity})`
                : `rgba(100, 116, 139, ${opacity})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }

          if (mouse.x !== null && mouse.y !== null) {
            const dx = particles[a].x - mouse.x;
            const dy = particles[a].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const opacity = (1 - dist / mouse.radius) * (isDark ? 0.3 : 0.15);
              ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${opacity})` : `rgba(2, 132, 199, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      } catch (e) {}
    };

    const render = () => {
      try {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        connect();
        animationFrameId = requestAnimationFrame(render);
      } catch (e) {}
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}