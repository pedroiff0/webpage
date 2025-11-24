/* Animated colliding dots background
   - Canvas-based, lightweight particle system
   - Only runs when theme is dark (html[data-theme="dark"]) or prefers-color-scheme: dark
   - Respects prefers-reduced-motion
   - Self-starts and observes theme changes to enable/disable
*/
(function () {
  if (typeof window === 'undefined') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // don't animate if user prefers reduced motion

  const BULLET_RED = '#D7263D';
  const BULLET_PURPLE = '#5E2A7E';

  let canvas = null;
  let ctx = null;
  let particles = [];
  let rafId = null;
  let width = 0;
  let height = 0;

  const NUM = 28; // number of particles (reasonable perf)

  function createCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas');
    canvas.className = 'dark-dots-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.18';
    canvas.style.mixBlendMode = 'screen';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    initParticles();
  }

  function removeCanvas() {
    if (!canvas) return;
    cancelAnimationFrame(rafId);
    rafId = null;
    particles = [];
    canvas.remove();
    canvas = null;
    ctx = null;
  }

  function resize() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initParticles() {
    particles = [];
    for (let i = 0; i < NUM; i++) {
      const r = rand(2, 8);
      particles.push({
        x: rand(r, width - r),
        y: rand(r, height - r),
        vx: rand(-0.4, 0.4),
        vy: rand(-0.4, 0.4),
        r: r,
        color: i % 2 === 0 ? BULLET_RED : BULLET_PURPLE,
      });
    }
  }

  function step() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    // update
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      // bounce edges
      if (p.x - p.r < 0) { p.x = p.r; p.vx *= -1; }
      if (p.x + p.r > width) { p.x = width - p.r; p.vx *= -1; }
      if (p.y - p.r < 0) { p.y = p.r; p.vy *= -1; }
      if (p.y + p.r > height) { p.y = height - p.r; p.vy *= -1; }
    }

    // simple collisions (O(n^2), small N ok)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minDist = a.r + b.r;
        if (dist < minDist) {
          // resolve overlap
          const overlap = (minDist - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;
          // swap velocities projection (approx elastic collision for equal mass)
          const dvx = b.vx - a.vx;
          const dvy = b.vy - a.vy;
          const impact = dvx * nx + dvy * ny;
          if (impact < 0) {
            const impulse = impact;
            a.vx += nx * impulse;
            a.vy += ny * impulse;
            b.vx -= nx * impulse;
            b.vy -= ny * impulse;
          }
        }
      }
    }

    // draw connections & particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      // draw glow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
      grad.addColorStop(0, hexToRgba(p.color, 0.9));
      grad.addColorStop(0.2, hexToRgba(p.color, 0.45));
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
      ctx.fill();

      // small solid core
      ctx.fillStyle = hexToRgba(p.color, 1);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    rafId = requestAnimationFrame(step);
  }

  function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function shouldEnable() {
    // Enable animation for both light and dark themes by default.
    // Still respects prefers-reduced-motion (handled earlier).
    return true;
  }

  function startIfNeeded() {
    if (!shouldEnable()) { removeCanvas(); return; }
    if (!canvas) {
      createCanvas();
    }
    if (!rafId) rafId = requestAnimationFrame(step);
  }

  // handle resize
  let resizeTimer = null;
  function onResize() {
    if (!canvas) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      initParticles();
    }, 150);
  }

  // watch for theme changes (data-theme attribute) and for system theme changes
  const mo = new MutationObserver(() => startIfNeeded());

  function init() {
    if (typeof document === 'undefined') return;
    window.addEventListener('resize', onResize);
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      try { mq.addEventListener('change', startIfNeeded); } catch (e) { mq.addListener(startIfNeeded); }
    }
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    // kickoff
    startIfNeeded();
  }

  // init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
