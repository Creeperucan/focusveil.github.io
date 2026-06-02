window.FocusVeilI18n = (function () {

    function available() {
        return Object.keys(window.FocusVeilLangs || {});
    }

    function get(code) {
        return (window.FocusVeilLangs || {})[code] || null;
    }

    function t(code, key) {
        const lang = get(code);
        return lang ? lang[key] : '';
    }

    return { available, get, t };
})();