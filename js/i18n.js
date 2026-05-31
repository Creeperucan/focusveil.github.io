// ═══════════════════════════════════════════════════════════════
//  js/i18n.js  ·  FocusVeil
// ───────────────────────────────────────────────────────────────
//
//  ⭐ BU DOSYA TÜM METİNLERİ İÇERİR — BURADAN DÜZENLEYEBİLİRSİN
//
//  • tr: {}   →  Türkçe metinler
//  • en: {}   →  İngilizce metinler
//
//  ÖZELLİK KARTLARI → her dilin altındaki features: [] dizisi
//  SSS SORULARI     → her dilin altındaki faq: []      dizisi
//
// ═══════════════════════════════════════════════════════════════

window.FocusVeilI18n = {

    /* ────────────────────────────────────────────────────────
       TÜRKÇE
    ──────────────────────────────────────────────────────── */
    tr: {

        /* Navigasyon */
        nav_features: "Özellikler",
        nav_faq: "SSS",

        /* Hero bölümü */
        badge_text: "Chrome Uzantısı",
        hero_tagline: "Dikkat dağıtıcıları bir perdeyle kapat.<br>Gerçek odağını keşfet.",
        hero_desc: "Web'deki tüm dikkat dağıtıcıları bir tıkla engelle. Hafif, hızlı ve gizlilik dostu.",
        cta_btn: "GitHub'dan İndir",
        hero_note: "Ücretsiz &nbsp;·&nbsp; Hesap gerektirmez",

        /* Özellikler bölümü başlıkları */
        features_label: "Neler Yapıyor?",
        features_title: "FocusVeil'in Gücü",
        features_subtitle: "Tüm dikkat dağıtıcılara karşı tek kalkan.",

        /* ──────────────────────────────────────────────────────
           ÖZELLİK KARTLARI
           ─ icon  : emoji veya SVG dizisi
           ─ title : kart başlığı
           ─ desc  : kart açıklaması
           Kart eklemek/çıkarmak için bu diziyi düzenle.
        ────────────────────────────────────────────────────── */
        features: [
            {
                icon: "<i class='fa-solid fa-eye-low-vision' style='color: white;'></i>",
                title: "Dikkat Engelleyici",
                desc: "Sosyal medya, videolar veya herhangi istediğin tüm siteleri engelleyebilirsin."
            },
            {
                icon: "<i class='fa-solid fa-hourglass-end' style='color: white;'></i>",
                title: "Pomodoro",
                desc: "Pomodoro tekniğiyle çalış. Odak sürelerini ve mola aralıklarını dilediğin gibi ayarla, alarmlarla takip et."
            },
            {
                icon: "<i class='fa-brands fa-youtube' style='color: red;'></i>",
                title: "YouTube Sistemi",
                desc: "YouTube anasayfada ve videolarda gözüken önerilen videolar gizlenir. İstediğin kanalı beyaz listeye ekleyebilirsin."
            },
            {
                icon: "<i class='fa-solid fa-clock' style='color: white;'></i>",
                title: "Saatler Arası Odaklanma",
                desc: "Belirli saatler arasında odak modu otomatik devreye girer ve belirlediğin siteler açılır."
            },
            {
                icon: "<i class='fa-solid fa-compress' style='color: white;'></i>",
                title: "Odaklanmaya Zorlama",
                desc: "Odak modunu kapatmak uzun ve zahmetli bir iş."
            },
            {
                icon: "<i class='fa-solid fa-feather' style='color: white;'></i>",
                title: "Tamamen Özelleştirilebir.",
                desc: "Eklenti içerisindeki her şey tamamen özelleştirilebilir."
            }
        ],

        /* SSS bölümü başlıkları */
        faq_label: "SSS",
        faq_title: "Sık Sorulan Sorular",

        /* ──────────────────────────────────────────────────────
           SSS SORULARI
           ─ q : soru metni
           ─ a : cevap metni
           Soru eklemek/çıkarmak için bu diziyi düzenle.
        ────────────────────────────────────────────────────── */
        faq: [
            {
                q: "FocusVeil ücretsiz mi?",
                a: "Evet, tamamen ücretsiz. Ayrıca yakın gelecektede böyle bir planımız bulunmamaktadır."
            },
            {
                q: "Neden ücretsiz?",
                a: "Açıkçası böyle bir eklenti arıyordum ve istediğim özellikler ya eksik ya bozuk ya da düzgün veya güvenilmez oluyorlardı. Bende bundan dolayı hobi olarak kendim yapmaya karar verdim."
            },
            {
                q: "Hangi tarayıcıları destekliyor?",
                a: "Şu an için Chromium (Brave, Choreme, Edge vb.) tabanlı tarayıcıları desteklemektedir. Firefox için şuanlık herhangi bir planımız bulunmamaktadır."
            },
            {
                q: "Farklı odak profilleri oluşturabilir miyim?",
                a: "Şuanlık için böyle bir şey mevcut değil ama ekleme düşüncemiz mevcut."
            },
            {
                q: "Sorun bildirmek veya öneride bulunmak için ne yapabilirim?",
                a: "GitHub sayfamızdan issue açabilirsiniz."
            }
        ],

        /* Footer */
        footer_copy: "© 2025 Focusveil. Tüm hakları saklıdır.",
        footer_privacy: "Gizlilik Politikası",
        footer_contact: "İletişim"
    },


    /* ────────────────────────────────────────────────────────
       İNGİLİZCE
    ──────────────────────────────────────────────────────── */
    en: {

        /* Navigation */
        nav_features: "Features",
        nav_faq: "FAQ",

        /* Hero section */
        badge_text: "Chrome Extension",
        hero_tagline: "Draw the veil over distractions.<br>Discover your true focus.",
        hero_desc: "Block every web distraction with one click. Lightweight, fast, and privacy-first.",
        cta_btn: "Download from GitHub",
        hero_note: "Free &nbsp;·&nbsp; No account required",

        /* Features section headings */
        features_label: "What Does It Do?",
        features_title: "The Power of Focusveil",
        features_subtitle: "One shield against all distractions.",

        /* ──────────────────────────────────────────────────────
           FEATURE CARDS
           ─ icon  : emoji or SVG string
           ─ title : card heading
           ─ desc  : card body text
           Add or remove items to change the card grid.
        ────────────────────────────────────────────────────── */
        features: [
            {
                icon: "<i class='fa-solid fa-eye-low-vision' style='color: white;'></i>",
                title: "Distraction Blocker",
                desc: "You can block social media, videos, or any websites you want."
            },
            {
                icon: "<i class='fa-solid fa-hourglass-end' style='color: white;'></i>",
                title: "Pomodoro",
                desc: "Work using the Pomodoro technique. Customize focus sessions and break intervals as you like, and track them with alarms."
            },
            {
                icon: "<i class='fa-brands fa-youtube' style='color: red;'></i>",
                title: "YouTube System",
                desc: "Recommended videos on the YouTube homepage and video pages are hidden. You can add any channel you want to the whitelist."
            },
            {
                icon: "<i class='fa-solid fa-clock' style='color: white;'></i>",
                title: "Scheduled Focus Mode",
                desc: "Focus mode automatically activates between specific hours and opens the websites you choose."
            },
            {
                icon: "<i class='fa-solid fa-compress' style='color: white;'></i>",
                title: "Forced Focus",
                desc: "Disabling focus mode is a long and tedious process."
            },
            {
                icon: "<i class='fa-solid fa-feather' style='color: white;'></i>",
                title: "Fully Customizable",
                desc: "Everything inside the extension can be fully customized."
            }
        ],

        /* FAQ section headings */
        faq_label: "FAQ",
        faq_title: "Frequently Asked Questions",

        /* ──────────────────────────────────────────────────────
           FAQ ITEMS
           ─ q : question text
           ─ a : answer text
           Add or remove items to change the FAQ list.
        ────────────────────────────────────────────────────── */
        faq: [
            {
                q: "Is Focusveil free?",
                a: "Yes, it's completely free. We also have no plans to change that in the foreseeable future."
            },
            {
                q: "Why is it free?",
                a: "To be honest, I was looking for an extension like this myself, but the ones I found were either missing features, broken, poorly made, or unreliable. So I decided to build my own as a hobby project."
            },
            {
                q: "Which browsers are supported?",
                a: "Currently, it supports Chromium-based browsers (Brave, Chrome, Edge, etc.). We do not have any plans for Firefox support at the moment."
            },
            {
                q: "Can I create different focus profiles?",
                a: "This feature is not available at the moment, but we are considering adding it in the future."
            },
            {
                q: "How can I report a bug or make a suggestion?",
                a: "You can open an issue on our GitHub page."
            }
        ],

        /* Footer */
        footer_copy: "© 2025 Focusveil. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_contact: "Contact"
    }

};