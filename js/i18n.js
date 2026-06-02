// ═══════════════════════════════════════════════════════════════
//  js/i18n.js  ·  Focusveil
//  ─ Dil yöneticisi: window.FocusVeilLangs'ı okur
//  ─ Yeni bir dil eklemek için:
//      1. lang/xx.js oluştur  (lang/en.js'i şablon olarak kullan)
//      2. index.html'e <script src="lang/xx.js"></script> ekle
//      3. Bitti — select kutusu otomatik güncellenir
// ═══════════════════════════════════════════════════════════════

window.FocusVeilI18n = (function () {

    /** Kayıtlı tüm dil kodlarını döndürür ['en', 'tr', ...] */
    function available() {
        return Object.keys(window.FocusVeilLangs || {});
    }

    /** Belirli bir dil nesnesini döndürür */
    function get(code) {
        return (window.FocusVeilLangs || {})[code] || null;
    }

    /** Dil nesnesinden bir anahtar değeri okur */
    function t(code, key) {
        const lang = get(code);
        return lang ? lang[key] : '';
    }

    return { available, get, t };
})();