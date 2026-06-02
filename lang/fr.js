/* ═══════════════════════════════════════════════════════════
   lang/fr.js  ·  Focusveil  ·  Français
═══════════════════════════════════════════════════════════ */
(function () {
    window.FocusVeilLangs = window.FocusVeilLangs || {};
    window.FocusVeilLangs['fr'] = {

        label: 'Français',
        dir: 'ltr',

        nav_features: 'Fonctionnalités',
        nav_faq: 'FAQ',

        hero_tagline: "Posez le voile sur les distractions.<br>Découvrez votre vraie concentration.",
        hero_desc: "Bloquez chaque distraction web en un clic. Léger, rapide et respectueux de la vie privée.",
        cta_btn: "Télécharger depuis GitHub",
        hero_note: "Gratuit &nbsp;·&nbsp; Aucun compte requis",

        features_label: "Que fait-il ?",
        features_title: "La puissance de Focusveil",
        features_subtitle: "Un bouclier contre toutes les distractions.",

        // 404.html
        err_title: "Cette page s'est perdue dans l'espace&hellip;",
        err_desc: "La page que vous recherchez n'existe pas. Elle a peut-être été déplacée, supprimée ou n'a jamais existé.",
        err_back: "Retour à l'accueil",

        // why.html
        hero_title: `Nous sommes désolés de vous voir partir.<br><span>Focusveil</span> vous manquera.`,
        hero_sub: `Votre parcours de concentration n'a pas besoin de s'arrêter ici. Si quelque chose ne fonctionnait pas,
        nous aimerions le savoir — et nous aimerions encore plus vous revoir.`,
        hero_feedback_trigger: `Envoyer un Commentaire <i class="fa-solid fa-arrow-down"></i>`,

        reasons_title: "Voici ce que vous laissez derrière vous",
        reasons_title_sub: "Ce qui rendait Focusveil différent",

        bugs: "🐛 Trop de bugs",
        missing: "🧩 Fonctionnalités manquantes",
        slow: "⚡ A ralenti mon navigateur",
        confusing: "😵 Était confus à utiliser",
        temporary: "🔄 Je fais juste une pause",
        other: "💬 Autre",

        feedback_title: "Voulez-vous nous dire pourquoi ?",
        feedback_sub: "Vos commentaires nous aident à améliorer Focusveil pour tout le monde.",
        send_feedback: `<i class="fa-regular fa-paper-plane" aria-hidden="true"></i> Envoyer un commentaire`,
        feedback_thanks: "Merci pour votre commentaire!",
        feedback_placeholder: "Avez-vous autre chose à ajouter?",

        reinstall_btn: `<i class="fa-brands fa-github" aria-hidden="true"></i> Focusveil Réinstaller
                    <svg class="reinstall-arrow" viewBox="0 0 20 20" width="14" height="14" fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                </svg>`,

        cta_label: "Vous avez changé d'avis?",

        features: [
            {
                icon: "<i class='fa-solid fa-eye-low-vision'></i>",
                title: "Bloqueur de distractions",
                desc: "Bloquez les réseaux sociaux, vidéos ou tout site web instantanément et complètement."
            },
            {
                icon: "<i class='fa-solid fa-hourglass-end'></i>",
                title: "Minuterie Pomodoro",
                desc: "Travaillez avec la technique Pomodoro. Personnalisez les intervalles et suivez-les avec des alarmes."
            },
            {
                icon: "<i class='fa-brands fa-youtube' style='color:#ff4444'></i>",
                title: "Système YouTube",
                desc: "Les vidéos recommandées sur YouTube sont masquées. Ajoutez vos chaînes favorites à la liste blanche."
            },
            {
                icon: "<i class='fa-solid fa-clock'></i>",
                title: "Mode focus planifié",
                desc: "Le mode focus s'active automatiquement pendant les heures que vous définissez."
            },
            {
                icon: "<i class='fa-solid fa-compress'></i>",
                title: "Focus forcé",
                desc: "Désactiver le mode focus est délibérément long et fastidieux — vous y réfléchirez à deux fois."
            },
            {
                icon: "<i class='fa-solid fa-feather'></i>",
                title: "Entièrement personnalisable",
                desc: "Tout dans l'extension — minuteries, listes, thèmes — peut être entièrement personnalisé."
            }
        ],

        faq_label: "FAQ",
        faq_title: "Questions fréquemment posées",

        faq: [
            {
                q: "Focusveil est-il gratuit ?",
                a: "Oui, entièrement gratuit. Nous n'avons aucun plan pour changer cela dans un avenir prévisible."
            },
            {
                q: "Pourquoi est-il gratuit ?",
                a: "Je cherchais moi-même une telle extension, mais tout ce que je trouvais était incomplet, cassé ou peu fiable. J'ai donc décidé de le créer comme projet de hobby."
            },
            {
                q: "Quels navigateurs sont pris en charge ?",
                a: "Actuellement tous les navigateurs basés sur Chromium (Brave, Chrome, Edge, etc.). Le support Firefox n'est pas prévu pour l'instant."
            },
            {
                q: "Puis-je créer différents profils de focus ?",
                a: "Pas encore, mais nous envisageons de l'ajouter dans une future mise à jour."
            },
            {
                q: "Comment signaler un bug ou suggérer une fonctionnalité ?",
                a: "Ouvrez simplement un issue sur notre page GitHub — chaque retour est apprécié !"
            }
        ],

        footer_copy: "© 2025 Focusveil. Tous droits réservés.",
        footer_privacy: "Politique de confidentialité",
        footer_contact: "Contact"
    };
})();