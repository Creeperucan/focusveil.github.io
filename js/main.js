/* Language */
let currentLang = 'en';

function applyLanguage(lang) {
    const t = window.FocusVeilI18n.get(lang);
    if (!t) return;
    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir || 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    syncDropdownLabel(lang);
    renderFeatureCards(t);
    renderFaq(t);
}

/* Language select */
function buildLangSelect() {
    const list = document.getElementById('lang-list');
    if (!list) return;

    const langs = window.FocusVeilI18n.available();

    list.innerHTML = langs.map(code => {
        const info = window.FocusVeilI18n.get(code);
        return `<li
      class="lang-option"
      role="option"
      data-lang="${code}"
      tabindex="0"
      aria-selected="false"
    ><span class="lo-name">${info.label}</span></li>`;
    }).join('');
}

/* Cards */

function renderFeatureCards(t) {
    const grid = document.getElementById('features-grid');
    if (!grid || !Array.isArray(t.features)) return;

    grid.innerHTML = t.features.map((card, i) => `
    <article
      class="feature-card reveal"
      role="listitem"
      style="transition-delay:${i * 70}ms"
    >
      <div class="card-icon" aria-hidden="true">${card.icon}</div>
      <h3 class="card-title">${card.title}</h3>
      <p  class="card-desc">${card.desc}</p>
    </article>
  `).join('');

    reObserve();
}

/* FAQ */

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
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer" id="faq-a-${i}"
           role="region" aria-labelledby="faq-q-${i}" aria-hidden="true">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

    list.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => toggleFaq(btn));
    });

    reObserve();
}

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    const list = item.closest('.faq-list');

    list.querySelectorAll('.faq-item').forEach(it => {
        it.classList.remove('open');
        it.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        it.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
    });

    if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq-answer').setAttribute('aria-hidden', 'false');
    }
}

/* Scroll reveal */
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
        { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    );
    reObserve();
}

function reObserve() {
    if (!revealObserver) return;
    document.querySelectorAll('.reveal:not(.visible)')
        .forEach(el => revealObserver.observe(el));
}

/* Navigation */
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

/* Language Select-Menu */

function initLangSelect() {
    const dropdown = document.getElementById('lang-dropdown');
    const trigger = document.getElementById('lang-trigger');
    const list = document.getElementById('lang-list');
    const label = document.getElementById('lang-label');
    if (!dropdown || !trigger || !list) return;

    function openDropdown() {
        dropdown.classList.add('open');
        dropdown.setAttribute('aria-expanded', 'true');
        const active = list.querySelector('.lang-option.selected') || list.querySelector('.lang-option');
        if (active) active.focus();
    }

    function closeDropdown() {
        dropdown.classList.remove('open');
        dropdown.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    }

    function selectLang(code) {
        applyLanguage(code);
        list.querySelectorAll('.lang-option').forEach(opt => {
            const active = opt.dataset.lang === code;
            opt.classList.toggle('selected', active);
            opt.setAttribute('aria-selected', String(active));
        });
        const info = window.FocusVeilI18n.get(code);
        if (label && info) label.textContent = info.label;
        closeDropdown();
    }
    trigger.addEventListener('click', e => { e.stopPropagation(); toggleDropdown(); });
    list.addEventListener('click', e => {
        const opt = e.target.closest('.lang-option');
        if (opt?.dataset.lang) selectLang(opt.dataset.lang);
    });
    trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDropdown(); }
        if (e.key === 'Escape') closeDropdown();
    });

    list.addEventListener('keydown', e => {
        const opts = [...list.querySelectorAll('.lang-option')];
        const focus = document.activeElement;
        const idx = opts.indexOf(focus);
        if (e.key === 'ArrowDown') { e.preventDefault(); opts[(idx + 1) % opts.length]?.focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); opts[(idx - 1 + opts.length) % opts.length]?.focus(); }
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (focus?.dataset.lang) selectLang(focus.dataset.lang);
        }
        if (e.key === 'Escape') { closeDropdown(); trigger.focus(); }
        if (e.key === 'Tab') closeDropdown();
    });
    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) closeDropdown();
    });
}

/* applyLanguage label updater */
const _origApply = applyLanguage;
function syncDropdownLabel(lang) {
    const label = document.getElementById('lang-label');
    const info = window.FocusVeilI18n.get(lang);
    if (label && info) label.textContent = info.label;
    // Seçili sınıfı güncelle
    const list = document.getElementById('lang-list');
    if (list) {
        list.querySelectorAll('.lang-option').forEach(opt => {
            const active = opt.dataset.lang === lang;
            opt.classList.toggle('selected', active);
            opt.setAttribute('aria-selected', String(active));
        });
    }
}

/* Stars System */

function initParallaxStars() {
    function makeShadows(n, color) {
        const parts = [];
        for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            parts.push(`${x}px ${y}px ${color}`);
        }
        return parts.join(', ');
    }

    const small = makeShadows(700, '#FFF');
    const medium = makeShadows(200, '#FFF');
    const big = makeShadows(100, '#FFF');
    const s1 = document.getElementById('stars');
    const s2 = document.getElementById('stars2');
    const s3 = document.getElementById('stars3');
    if (!s1 || !s2 || !s3) return;

    s1.style.boxShadow = small;
    s2.style.boxShadow = medium;
    s3.style.boxShadow = big;

    const style = document.createElement('style');
    style.textContent = `
    #stars::after  { box-shadow: ${small};  }
    #stars2::after { box-shadow: ${medium}; }
    #stars3::after { box-shadow: ${big};    }
  `;
    document.head.appendChild(style);
}

/* Smooth scroll */

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

/* Start */

document.addEventListener('DOMContentLoaded', () => {
    initParallaxStars();
    initNavbar();
    buildLangSelect();
    initLangSelect();
    initSmoothScroll();
    initReveal();

    const browserLang = (navigator.language || 'en')
        .split('-')[0]
        .toLowerCase();

    const available = window.FocusVeilI18n.available();

    const lang = available.includes(browserLang)
        ? browserLang
        : 'en';

    applyLanguage(lang);
});