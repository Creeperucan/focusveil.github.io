/* ═══════════════════════════════════════════════════════════
   lang/en.js  ·  Focusveil  ·  English
   ─ Bu dosyayı kopyala → yeni bir dil dosyası oluştur
   ─ window.FocusVeilLangs['xx'] = { label, ...keys }
═══════════════════════════════════════════════════════════ */
(function () {
    window.FocusVeilLangs = window.FocusVeilLangs || {};
    window.FocusVeilLangs['en'] = {

        label: 'English',           // Select-box'ta görünen ad
        dir: 'ltr',               // Metin yönü: 'ltr' veya 'rtl'

        nav_features: 'Features',
        nav_faq: 'FAQ',

        hero_tagline: "Draw the veil over distractions.<br>Discover your true focus.",
        hero_desc: "Block every web distraction with one click. Lightweight, fast, and privacy-first.",
        cta_btn: "Download from GitHub",
        hero_note: "Free &nbsp;·&nbsp; No account required",

        features_label: "What Does It Do?",
        features_title: "The Power of Focusveil",
        features_subtitle: "One shield against all distractions.",

        // 404.html
        err_title: "This page is lost in space&hellip;",
        err_desc: "The page you're looking for doesn't exist. It may have been moved, deleted, or never existed at all.",
        err_back: "Back to Home",

        // why.html
        hero_title: `We're sorry to see you go.<br><span>Focusveil</span> will miss you.`,
        hero_sub: `Your focus journey doesn't have to end here. If something wasn't working,
        we'd love to know — and we'd love even more to have you back.`,
        hero_feedback_trigger: "Send Feedback",

        reasons_title: "Here's what you're leaving behind",
        reasons_title_sub: "What made Focusveil different",

        bugs: "🐛 Too many bugs",
        missing: "🧩 Missing features",
        slow: "⚡ Slowed my browser",
        confusing: "😵 Confusing to use",
        temporary: "🔄 Just taking a break",
        other: "💬 Other",

        feedback_title: "Mind telling us why?",
        feedback_sub: "Your feedback helps us make Focusveil better for everyone.",
        send_feedback: `Send feedback`,
        feedback_thanks: "Thanks for the feedback!",
        feedback_placeholder: "Any extra thoughts?",

        reinstall_btn: `Reinstall Focusveil`,
        cta_label: "Changed your mind?",

        features: [
            {
                icon: "<i class='fa-solid fa-eye-low-vision'></i>",
                title: "Distraction Blocker",
                desc: "Block social media, videos, or any websites you want — instantly and completely."
            },
            {
                icon: "<i class='fa-solid fa-hourglass-end'></i>",
                title: "Pomodoro Timer",
                desc: "Work with the Pomodoro technique. Customize focus and break intervals, track them with alarms."
            },
            {
                icon: "<i class='fa-brands fa-youtube' style='color:#ff4444'></i>",
                title: "YouTube System",
                desc: "Recommended videos on YouTube are hidden. Whitelist your favourite channels easily."
            },
            {
                icon: "<i class='fa-solid fa-clock'></i>",
                title: "Scheduled Focus Mode",
                desc: "Focus mode activates automatically between the hours you set."
            },
            {
                icon: "<i class='fa-solid fa-compress'></i>",
                title: "Forced Focus",
                desc: "Disabling focus mode is deliberately long and tedious — you'll think twice."
            },
            {
                icon: "<i class='fa-solid fa-feather'></i>",
                title: "Fully Customizable",
                desc: "Everything inside the extension — timers, lists, themes — can be fully customized."
            }
        ],

        faq_label: "FAQ",
        faq_title: "Frequently Asked Questions",

        faq: [
            {
                q: "Is Focusveil free?",
                a: "Yes, completely free. We have no plans to change that in the foreseeable future."
            },
            {
                q: "Why is it free?",
                a: "I was looking for an extension like this myself, but everything I found was either missing features, broken, or unreliable. So I built it as a hobby project."
            },
            {
                q: "Which browsers are supported?",
                a: "Currently all Chromium-based browsers (Brave, Chrome, Edge, etc.). Firefox support is not planned at the moment."
            },
            {
                q: "Can I create different focus profiles?",
                a: "Not yet, but it's something we're considering for a future update."
            },
            {
                q: "How can I report a bug or suggest a feature?",
                a: "Open an issue on our GitHub page — every bit of feedback is appreciated!"
            }
        ],
    };
})();