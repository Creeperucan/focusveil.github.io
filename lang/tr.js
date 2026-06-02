/* ═══════════════════════════════════════════════════════════
   lang/tr.js  ·  Focusveil  ·  Türkçe
═══════════════════════════════════════════════════════════ */
(function () {
    window.FocusVeilLangs = window.FocusVeilLangs || {};
    window.FocusVeilLangs['tr'] = {

        label: 'Türkçe',
        dir: 'ltr',

        nav_features: 'Özellikler',
        nav_faq: 'SSS',

        hero_tagline: "Dikkat dağıtıcıları bir perdeyle kapat.<br>Gerçek odağını keşfet.",
        hero_desc: "Web'deki tüm dikkat dağıtıcıları bir tıkla engelle. Hafif, hızlı ve gizlilik dostu.",
        cta_btn: "GitHub'dan İndir",
        hero_note: "Ücretsiz &nbsp;·&nbsp; Hesap gerektirmez",

        features_label: "Neler Yapıyor?",
        features_title: "Focusveil'in Gücü",
        features_subtitle: "Tüm dikkat dağıtıcılara karşı tek kalkan.",

        // 404.html
        err_title: "Bu sayfa uzayda kaybolmuş&hellip;",
        err_desc: "Aradığınız sayfa bulunamadı. Taşınmış, silinmiş veya hiç var olmamış olabilir.",
        err_back: "Ana Sayfaya Dön",

        // why.html
        hero_title: "Gitmene üzüldük.<br><span>Focusveil</span> seni özleyecek.",
        hero_sub: `Odaklanma yolculuğun burada bitmek zorunda değil. Bir şeyler yolunda gitmediyse,
        bunu öğrenmek isteriz — ve daha da çok, geri dönmeni isteriz.`,
        hero_feedback_trigger: `Geri Bildirim Gönder <i class="fa-solid fa-arrow-down"></i>`,

        reasons_title: "Neleri geride bırakıyorsun",
        reasons_title_sub: "Focusveil'i farklı kılan neydi",

        bugs: "🐛 Çok fazla hata",
        missing: "🧩 Eksik özellikler",
        slow: "⚡ Tarayıcımı yavaşlattı",
        confusing: "😵 Kullanımı karmaşıktı",
        temporary: "🔄 Sadece ara veriyorum",
        other: "💬 Diğer",

        feedback_title: "Nedenini bizimle paylaşır mısın?",
        feedback_sub: "Geri bildirimlerin, Focusveil'i herkes için daha iyi hale getirmemize yardımcı oluyor.",
        send_feedback: `<i class="fa-regular fa-paper-plane" aria-hidden="true"></i> Geri bildirimi gönder`,
        feedback_thanks: "Geri bildirim için teşekkürler!",
        feedback_placeholder: "Eklemek istediğiniz başka bir şey var mı?",

        reinstall_btn: `<i class="fa-brands fa-github" aria-hidden="true"></i> Focusveil'i Tekrar İndir
                    <svg class="reinstall-arrow" viewBox="0 0 20 20" width="14" height="14" fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                </svg>`,

        cta_label: "Fikrini mi değiştirdin?",

        features: [
            {
                icon: "<i class='fa-solid fa-eye-low-vision'></i>",
                title: "Dikkat Engelleyici",
                desc: "Sosyal medya, videolar veya istediğin tüm siteleri anında ve tamamen engelleyebilirsin."
            },
            {
                icon: "<i class='fa-solid fa-hourglass-end'></i>",
                title: "Pomodoro",
                desc: "Pomodoro tekniğiyle çalış. Odak sürelerini ve mola aralıklarını ayarla, alarmlarla takip et."
            },
            {
                icon: "<i class='fa-brands fa-youtube' style='color:#ff4444'></i>",
                title: "YouTube Sistemi",
                desc: "YouTube anasayfada ve videolarda önerilen videolar gizlenir. İstediğin kanalı beyaz listeye ekleyebilirsin."
            },
            {
                icon: "<i class='fa-solid fa-clock'></i>",
                title: "Saatler Arası Odaklanma",
                desc: "Belirlediğin saatler arasında odak modu otomatik devreye girer."
            },
            {
                icon: "<i class='fa-solid fa-compress'></i>",
                title: "Odaklanmaya Zorlama",
                desc: "Odak modunu kapatmak kasıtlı olarak uzun ve zahmetli — iki kez düşünürsün."
            },
            {
                icon: "<i class='fa-solid fa-feather'></i>",
                title: "Tamamen Özelleştirilebilir",
                desc: "Eklenti içerisindeki her şey — zamanlayıcılar, listeler, temalar — tamamen özelleştirilebilir."
            }
        ],

        faq_label: "SSS",
        faq_title: "Sık Sorulan Sorular",

        faq: [
            {
                q: "Focusveil ücretsiz mi?",
                a: "Evet, tamamen ücretsiz. Yakın gelecekte de böyle bir planımız bulunmamaktadır."
            },
            {
                q: "Neden ücretsiz?",
                a: "Böyle bir eklenti arıyordum ve istediğim özellikler ya eksik ya bozuk ya da güvenilmez oluyordu. Bu yüzden hobi olarak kendim yapmaya karar verdim."
            },
            {
                q: "Hangi tarayıcıları destekliyor?",
                a: "Şu an için Chromium tabanlı tarayıcıları (Brave, Chrome, Edge vb.) desteklemektedir. Firefox için şuanlık bir planımız bulunmamaktadır."
            },
            {
                q: "Farklı odak profilleri oluşturabilir miyim?",
                a: "Şuanlık mevcut değil ama ileride eklemeyi düşünüyoruz."
            },
            {
                q: "Sorun bildirmek veya öneride bulunmak için ne yapabilirim?",
                a: "GitHub sayfamızdan issue açabilirsiniz."
            }
        ],

        footer_copy: "© 2025 Focusveil. Tüm hakları saklıdır.",
        footer_privacy: "Gizlilik Politikası",
        footer_contact: "İletişim"
    };
})();