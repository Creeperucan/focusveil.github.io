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

// Parallax yıldız gölgelerini üret (main.js ile aynı mantık)
(function () {
    function makeShadows(n) {
        const parts = [];
        for (let i = 0; i < n; i++) {
            parts.push(Math.floor(Math.random() * 2000) + 'px ' +
                Math.floor(Math.random() * 2000) + 'px #FFF');
        }
        return parts.join(', ');
    }

    const small = makeShadows(700);
    const medium = makeShadows(200);
    const big = makeShadows(100);

    document.getElementById('stars').style.boxShadow = small;
    document.getElementById('stars2').style.boxShadow = medium;
    document.getElementById('stars3').style.boxShadow = big;

    const style = document.createElement('style');
    style.textContent =
        '#stars::after  { box-shadow: ' + small + '; }' +
        '#stars2::after { box-shadow: ' + medium + '; }' +
        '#stars3::after { box-shadow: ' + big + '; }';
    document.head.appendChild(style);
})();