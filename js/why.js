let currentLang = "en";

function applyLanguage(lang) {
    if (!window.FocusVeilI18n) return;

    const translations = window.FocusVeilI18n.get(lang);
    if (!translations) return;

    currentLang = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = translations.dir || "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if (translations[key] !== undefined) {
            el.innerHTML = translations[key];
        }
    });

    // Placeholder çevirici - Güvenli sürüm
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        if (el) { // Elementin var olduğundan emin oluyoruz
            const key = el.dataset.i18nPlaceholder;
            if (translations[key] !== undefined) {
                el.placeholder = translations[key];
            }
        }
    });

    renderFeatureCards(translations);
}

document.addEventListener("DOMContentLoaded", () => {
    const browserLang = (navigator.language || "en")
        .split("-")[0]
        .toLowerCase();

    const available = window.FocusVeilI18n.available();

    const lang = available.includes(browserLang)
        ? browserLang
        : "en";

    applyLanguage(lang);
});

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
      style="transition-delay:${i * 70}ms"
    >
      <div class="card-icon" aria-hidden="true">${card.icon}</div>
      <h3 class="card-title">${card.title}</h3>
      <p  class="card-desc">${card.desc}</p>
    </article>
  `).join('');

    reObserve();
}

/* ── Parallax stars ────────────────────────────────────── */
(function () {
    function makeShadows(n) {
        const p = [];
        for (let i = 0; i < n; i++)
            p.push(Math.floor(Math.random() * 2000) + 'px ' + Math.floor(Math.random() * 2000) + 'px #FFF');
        return p.join(', ');
    }
    const s = makeShadows(700), m = makeShadows(200), b = makeShadows(100);
    document.getElementById('stars').style.boxShadow = s;
    document.getElementById('stars2').style.boxShadow = m;
    document.getElementById('stars3').style.boxShadow = b;
    const st = document.createElement('style');
    st.textContent =
        '#stars::after{box-shadow:' + s + '}' +
        '#stars2::after{box-shadow:' + m + '}' +
        '#stars3::after{box-shadow:' + b + '}';
    document.head.appendChild(st);
})();

/* ── Reason pills ──────────────────────────────────────── */
document.querySelectorAll('.pick-label').forEach(label => {
    label.addEventListener('click', () => {
        document.querySelectorAll('.pick-label').forEach(l => l.classList.remove('checked'));
        label.classList.add('checked');
    });
});

/* ── Send feedback (GitHub issues) ────────────────────── */
document.getElementById('send-btn').addEventListener('click', () => {
    const reason = document.querySelector('.pick-label.checked input')?.value || '';
    const text = document.getElementById('feedback-text').value.trim();
    if (!reason && !text) return;

    /*
      ╔══════════════════════════════════════════════════════════════╗
      ║  GitHub Issues URL'ini kendi repo adresinle güncelle:        ║
      ║  https://github.com/KULLANICI/REPO/issues/new               ║
      ╚══════════════════════════════════════════════════════════════╝
    */
    const body = encodeURIComponent(
        '**Removal reason:** ' + (reason || 'not specified') + '\n\n' +
        '**Additional feedback:**\n' + (text || '—')
    );
    const title = encodeURIComponent('[Uninstall Feedback] ' + (reason || 'general'));
    const url = `https://github.com/Creeperucan/Focusveil-extension/issues/new?title=${title}&body=${body}&labels=feedback`;

    window.open(url, '_blank', 'noopener');

    const btn = document.getElementById('send-btn');
    btn.classList.add('sent');
    btn.setAttribute("data-i18n", "feedback_thanks");
    btn.innerHTML = `<i class="fa-solid fa-check" aria-hidden="true"></i> ${window.FocusVeilI18n.t(currentLang, "feedback_thanks")}`;
});