/* ============================================================
   KAZAP — i18n.js
   Module de traduction FR / EN pour le frontend (navigateur)
   Version client de i18n.backend.js — utilise window, pas de
   require ni module.exports.

   Usage :
     t('pricing.title')              // traduit selon currentLang
     setLanguage('en')               // change la langue + re-render
   ============================================================ */

(function () {
  'use strict';

  // ─── Dictionnaire de traductions (miroir de i18n.backend.js) ─────────────
  const KAZAP_I18N = {
    fr: {
      /* ── Navigation ── */
      'nav.accueil':    'Accueil',
      'nav.boutique':   'Boutique',
      'nav.outils':     'Outils',
      'nav.parametres': 'Paramètres',
      'nav.tarifs':     'Tarifs',

      /* ── Dashboard ── */
      'dashboard.title':                  'Tableau de bord',
      'dashboard.callsHandledByIA':       'Appels pris par IA',
      'dashboard.rdvFixedToday':          'RDV fixés aujourd\'hui',
      'dashboard.viewAll':                'Voir tout →',
      'dashboard.rdvToday':               'RDV du jour',
      'dashboard.callsReceivedRealtime':  'Appels reçus (temps réel)',
      'dashboard.rdvTotal':               'RDV total',
      'dashboard.activeProducts':         'Produits actifs',
      'dashboard.topProducts':            'Top produits',

      /* ── Boutique ── */
      'shop.myShop':          'Ma Boutique',
      'shop.yourShop':        'Votre boutique',
      'shop.category':        'Catégorie',
      'shop.copy':             'Copier',
      'shop.view':             'Voir',
      'shop.myProducts':      'Mes produits',
      'shop.newProduct':      '+ Nouveau produit',
      'shop.addFirstProduct': 'Ajoutez votre premier produit !',
      'shop.all':              'Toutes',
      'shop.delivered':        'Livrées',
      'shop.newRdv':           '+ Nouveau RDV',

      /* ── Table ── */
      'table.date':    'Date',
      'table.id':      'ID',
      'table.product': 'Produit',
      'table.status':  'Statut',
      'table.total':   'Total',

      /* ── Commandes IA ── */
      'order.takenByIA': 'Commande prise par l\'IA lors d\'un appel',
      'order.confirm':   'Confirmer la commande et notifier le client par SMS',
      'order.reject':    'Rejeter la commande et notifier le client par SMS',

      /* ── Paramètres ── */
      'settings.title':    'Paramètres',
      'settings.subtitle': 'Gérez votre compte et votre boutique',

      /* ── Tarifs (landing page) ── */
      'pricing.tag':              'Tarifs',
      'pricing.title':            'Un prix simple,<br>qui s\'adapte à votre business',
      'pricing.sub':              'Commencez gratuitement, sans engagement. Changez de formule à tout moment depuis votre espace.',
      'pricing.perMonth':         'FCFA/mois',
      'pricing.popular':          '★ Le plus populaire',
      'pricing.cta':              'Commencer l\'essai gratuit',
      'pricing.trialNote':        '14 jours d\'essai gratuit, sans carte bancaire.',
      'pricing.moreOptionsNote':  ' Formules hebdomadaire et annuelle disponibles depuis votre espace.',

      'pricing.basique.name': 'Basique',
      'pricing.basique.desc': 'Pour démarrer en solo',
      'pricing.basique.f1':   'Boutique en ligne complète',
      'pricing.basique.f2':   'Assistant IA pour vos appels',
      'pricing.basique.f3':   'Agenda et rappels SMS',

      'pricing.pro.name': 'Pro',
      'pricing.pro.desc': 'Pour développer vos ventes',
      'pricing.pro.f1':   'Tout Basique, en plus grand',
      'pricing.pro.f2':   'Plus d\'appels IA et de SMS',
      'pricing.pro.f3':   'Analytics avancées',

      'pricing.premium.name': 'Premium',
      'pricing.premium.desc': 'Pour les boutiques à fort volume',
      'pricing.premium.f1':   'Tout Pro, en illimité',
      'pricing.premium.f2':   'Support prioritaire',
      'pricing.premium.f3':   'Fonctionnalités avancées',

      /* ── IA conversationnelle (texte démo / UI) ── */
      'ia.welcomeMsgFallback': 'Bonjour ! Comment puis-je vous aider ?',
      'ia.speakDemo.feminin':  'Bonjour, je suis votre assistante Kazap, comment puis-je vous aider ?',
      'ia.speakDemo.masculin': 'Bonjour, je suis votre assistant Kazap, comment puis-je vous aider ?'
    },

    en: {
      /* ── Navigation ── */
      'nav.accueil':    'Home',
      'nav.boutique':   'Shop',
      'nav.outils':     'Tools',
      'nav.parametres': 'Settings',
      'nav.tarifs':     'Pricing',

      /* ── Dashboard ── */
      'dashboard.title':                  'Dashboard',
      'dashboard.callsHandledByIA':       'Calls handled by AI',
      'dashboard.rdvFixedToday':          'Appointments booked today',
      'dashboard.viewAll':                'View all →',
      'dashboard.rdvToday':               'Today\'s appointments',
      'dashboard.callsReceivedRealtime':  'Calls received (real-time)',
      'dashboard.rdvTotal':               'Total appointments',
      'dashboard.activeProducts':         'Active products',
      'dashboard.topProducts':            'Top products',

      /* ── Boutique ── */
      'shop.myShop':          'My Shop',
      'shop.yourShop':        'Your shop',
      'shop.category':        'Category',
      'shop.copy':             'Copy',
      'shop.view':             'View',
      'shop.myProducts':      'My products',
      'shop.newProduct':      '+ New product',
      'shop.addFirstProduct': 'Add your first product!',
      'shop.all':              'All',
      'shop.delivered':        'Delivered',
      'shop.newRdv':           '+ New appointment',

      /* ── Table ── */
      'table.date':    'Date',
      'table.id':      'ID',
      'table.product': 'Product',
      'table.status':  'Status',
      'table.total':   'Total',

      /* ── Commandes IA ── */
      'order.takenByIA': 'Order taken by AI during a call',
      'order.confirm':   'Confirm the order and notify the customer by SMS',
      'order.reject':    'Reject the order and notify the customer by SMS',

      /* ── Paramètres ── */
      'settings.title':    'Settings',
      'settings.subtitle': 'Manage your account and your shop',

      /* ── Pricing (landing page) ── */
      'pricing.tag':              'Pricing',
      'pricing.title':            'Simple pricing,<br>built for your business',
      'pricing.sub':              'Start for free, no commitment. Change your plan anytime from your dashboard.',
      'pricing.perMonth':         'FCFA/month',
      'pricing.popular':          '★ Most popular',
      'pricing.cta':              'Start free trial',
      'pricing.trialNote':        '14-day free trial, no credit card required.',
      'pricing.moreOptionsNote':  ' Weekly and yearly plans available from your dashboard.',

      'pricing.basique.name': 'Basic',
      'pricing.basique.desc': 'To get started solo',
      'pricing.basique.f1':   'Full online shop',
      'pricing.basique.f2':   'AI assistant for your calls',
      'pricing.basique.f3':   'Calendar and SMS reminders',

      'pricing.pro.name': 'Pro',
      'pricing.pro.desc': 'To grow your sales',
      'pricing.pro.f1':   'Everything in Basic, scaled up',
      'pricing.pro.f2':   'More AI calls and SMS',
      'pricing.pro.f3':   'Advanced analytics',

      'pricing.premium.name': 'Premium',
      'pricing.premium.desc': 'For high-volume shops',
      'pricing.premium.f1':   'Everything in Pro, unlimited',
      'pricing.premium.f2':   'Priority support',
      'pricing.premium.f3':   'Advanced features',

      /* ── IA conversationnelle (texte démo / UI) ── */
      'ia.welcomeMsgFallback': 'Hello! How can I help you?',
      'ia.speakDemo.feminin':  'Hello, I am your Kazap assistant, how can I help you?',
      'ia.speakDemo.masculin': 'Hello, I am your Kazap assistant, how can I help you?'
    }
  };

  // ─── Langue courante ───────────────────────────────────────────────────
  // Persistée en localStorage, repli sur 'fr' (langue par défaut de KAZAP).
  let storedLang = null;
  try { storedLang = window.localStorage.getItem('kazap_lang'); } catch (e) { /* localStorage indisponible */ }
  window.currentLang = (storedLang === 'en' || storedLang === 'fr') ? storedLang : 'fr';

  // ─── Fonction de traduction ────────────────────────────────────────────
  // t('cle') → renvoie la traduction dans la langue courante.
  // Repli sur le français si la clé est absente de la langue cible,
  // puis sur la clé elle-même si elle n'existe nulle part (jamais de undefined affiché).
  window.t = function (key) {
    const dict = KAZAP_I18N[window.currentLang] || KAZAP_I18N.fr;
    if (dict[key] !== undefined) return dict[key];
    if (KAZAP_I18N.fr[key] !== undefined) return KAZAP_I18N.fr[key];
    return key;
  };

  // ─── Changement de langue ──────────────────────────────────────────────
  // Utilisée par les boutons FR/EN (onclick="setLanguage('fr')").
  window.setLanguage = function (lang) {
    if (lang !== 'fr' && lang !== 'en') return;
    window.currentLang = lang;
    try { window.localStorage.setItem('kazap_lang', lang); } catch (e) { /* localStorage indisponible */ }
    if (typeof window.renderTranslations === 'function') window.renderTranslations();
    if (typeof window.changeLanguage === 'function') window.changeLanguage(lang);
  };

  // ─── Application initiale des traductions au chargement ────────────────
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.renderTranslations === 'function') window.renderTranslations();
  });
})();
