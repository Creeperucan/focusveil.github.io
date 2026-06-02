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