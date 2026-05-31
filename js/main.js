// ═══════════════════════════════════════════════════════════════
//  js/main.js  ·  FocusVeil
//  ─ Yıldız alanı animasyonu
//  ─ TR / EN dil geçişi
//  ─ Özellik kartı render
//  ─ SSS accordion
//  ─ Scroll reveal (IntersectionObserver)
//  ─ Navbar scroll efekti
// ═══════════════════════════════════════════════════════════════

'use strict';

/* ─── DURUM ──────────────────────────────────────────────── */
let currentLang = 'en';   // ← Varsayılan dil ('tr' veya 'en')

/* ═══════════════════════════════════════════════════════════
   1. DİL YÖNETİCİSİ
═══════════════════════════════════════════════════════════ */

function applyLanguage(lang) {
    if (!window.FocusVeilI18n?.[lang]) return;
    currentLang = lang;
    const t = window.FocusVeilI18n[lang];

    // html lang özelliğini güncelle
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

    // data-i18n özelliği olan tüm elemanları güncelle
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Dil düğmesi durumlarını güncelle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    // Dinamik içerikleri yeniden oluştur
    renderFeatureCards(t);
    renderFaq(t);
}

/* ═══════════════════════════════════════════════════════════
   2. ÖZELLİK KARTLARI
═══════════════════════════════════════════════════════════ */

function renderFeatureCards(t) {
    const grid = document.getElementById('features-grid');
    if (!grid || !Array.isArray(t.features)) return;

    grid.innerHTML = t.features.map((card, i) => `
    <article
      class="feature-card reveal"
      role="listitem"
      style="transition-delay:${i * 75}ms"
    >
      <div class="card-icon" aria-hidden="true">${card.icon}</div>
      <h3 class="card-title">${card.title}</h3>
      <p  class="card-desc">${card.desc}</p>
    </article>
  `).join('');

    // Yeni kartları observer'a bağla
    reObserve();
}

/* ═══════════════════════════════════════════════════════════
   3. SSS ACCORDION
═══════════════════════════════════════════════════════════ */

function renderFaq(t) {
    const list = document.getElementById('faq-list');
    if (!list || !Array.isArray(t.faq)) return;

    list.innerHTML = t.faq.map((item, i) => `
    <div
      class="faq-item reveal"
      role="listitem"
      style="transition-delay:${i * 55}ms"
    >
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-a-${i}"
        id="faq-q-${i}"
      >
        <span>${item.q}</span>
        <svg
          class="faq-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        class="faq-answer"
        id="faq-a-${i}"
        role="region"
        aria-labelledby="faq-q-${i}"
        aria-hidden="true"
      >
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

    // Accordion olay dinleyicileri
    list.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => toggleFaq(btn));
    });

    reObserve();
}

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    const list = item.closest('.faq-list');

    // Tümünü kapat
    list.querySelectorAll('.faq-item').forEach(it => {
        it.classList.remove('open');
        it.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        it.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
    });

    // Seçileni aç (zaten açıksa kapalı kalır)
    if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq-answer').setAttribute('aria-hidden', 'false');
    }
}

/* ═══════════════════════════════════════════════════════════
   4. SCROLL REVEAL  (IntersectionObserver)
═══════════════════════════════════════════════════════════ */

let revealObserver = null;

function initReveal() {
    revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    reObserve();
}

function reObserve() {
    if (!revealObserver) return;
    document.querySelectorAll('.reveal:not(.visible)')
        .forEach(el => revealObserver.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   5. NAVBAR SCROLL EFEKTİ
═══════════════════════════════════════════════════════════ */

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    let ticking = false;

    const update = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   6. DİL BUTONLARI
═══════════════════════════════════════════════════════════ */

function initLangSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang && lang !== currentLang) applyLanguage(lang);
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   7. YILDIZ ALANI KANVASI
═══════════════════════════════════════════════════════════ */

function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, stars = [], shooters = [], rafId;

    /* ── Yıldızları oluştur ── */
    function buildStars() {
        stars = [];
        const count = Math.floor((W * H) / 3200);

        for (let i = 0; i < count; i++) {
            const tier = Math.random();          // 0-1: küçük → büyük
            const radius = tier < .65
                ? Math.random() * .5 + .15          // küçük
                : tier < .9
                    ? Math.random() * .7 + .5          // orta
                    : Math.random() * .8 + 1.0;        // parlak

            // Mor-beyaz renk paleti
            const colorRoll = Math.random();
            let color;
            if (colorRoll > .88) color = '232,121,249';   // pembe-mor
            else if (colorRoll > .76) color = '167,139,250';   // soft mor
            else color = '225,215,255';   // soğuk beyaz

            stars.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: radius,
                base: Math.random() * .6 + .15,
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * .55 + .15,
                color
            });
        }
    }

    /* ── Kayan yıldız doğur ── */
    function maybeSpawnShooter() {
        if (Math.random() < .0018 && shooters.length < 4) {
            shooters.push({
                x: Math.random() * W * .75,
                y: Math.random() * H * .45,
                vx: 3.5 + Math.random() * 5,
                vy: 1.8 + Math.random() * 2.2,
                len: 70 + Math.random() * 110,
                alpha: 1
            });
        }
    }

    /* ── Çerçeve çiz ── */
    function draw(ts) {
        ctx.clearRect(0, 0, W, H);

        /* Sabit yıldızlar */
        for (const s of stars) {
            const twinkle = Math.sin(ts * s.speed * .001 + s.phase);
            const alpha = s.base * (.55 + .45 * (twinkle + 1) / 2);

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${s.color},${alpha.toFixed(3)})`;
            ctx.fill();
        }

        /* Kayan yıldızlar */
        maybeSpawnShooter();
        shooters = shooters.filter(s => s.alpha > 0);
        for (const s of shooters) {
            s.x += s.vx;
            s.y += s.vy;
            s.alpha -= .014;

            const g = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * .38);
            g.addColorStop(0, `rgba(232,180,255,${s.alpha.toFixed(3)})`);
            g.addColorStop(1, 'rgba(168,85,247,0)');

            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x - s.len, s.y - s.len * .38);
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.4;
            ctx.stroke();
        }

        rafId = requestAnimationFrame(draw);
    }

    /* ── Boyutlandırma ── */
    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        buildStars();
    }

    window.addEventListener('resize', () => {
        cancelAnimationFrame(rafId);
        resize();
        rafId = requestAnimationFrame(draw);
    }, { passive: true });

    resize();
    rafId = requestAnimationFrame(draw);
}

/* ═══════════════════════════════════════════════════════════
   8. PÜRÜZSÜZ KAYDIRMA (nav linkleri için)
═══════════════════════════════════════════════════════════ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   9. BAŞLAT
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initNavbar();
    initLangSwitch();
    initSmoothScroll();
    initReveal();

    // Varsayılan dili uygula (i18n.js yüklü olmalı)
    applyLanguage(currentLang);
});