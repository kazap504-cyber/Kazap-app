/* ============================================================
   KAZAP — i18n.js
   Module de traduction FR / EN / Fon / Yoruba pour le frontend (navigateur)
   Version client de i18n.backend.js — utilise window, pas de
   require ni module.exports.

   T-08 : ce fichier est désormais le miroir exact et complet du
   dictionnaire I18N_DICT codé en dur dans le script inline de
   index.html (source de vérité, ~ligne 7542). Objectif : que le
   résultat affiché soit toujours correct et complet dans les 4
   langues, peu importe quel script s'exécute en dernier.

   Usage :
     t('pricing.title')              // traduit selon currentLang
     setLanguage('en')               // change la langue + re-render
   ============================================================ */

(function () {
  'use strict';

  // ─── Dictionnaire de traductions (miroir de I18N_DICT dans index.html) ───
  const KAZAP_I18N = {
    fr: {
      'nav.accueil':'Accueil','nav.boutique':'Boutique','nav.outils':'Outils','nav.parametres':'Paramètres','nav.tarifs':'Tarifs',
      'dashboard.title':'Tableau de bord','dashboard.activeProducts':'Produits actifs','dashboard.callsHandledByIA':'Appels pris par IA',
      'dashboard.callsReceivedRealtime':'Appels reçus (temps réel)','dashboard.rdvFixedToday':"RDV fixés aujourd'hui",
      'dashboard.rdvToday':'RDV du jour','dashboard.rdvTotal':'RDV total','dashboard.topProducts':'Top produits','dashboard.viewAll':'Voir tout →',
      'pricing.tag':'Tarifs','pricing.title':'Un prix simple,',
      'pricing.sub':'Commencez gratuitement, sans engagement. Changez de formule à tout moment depuis votre espace.',
      'pricing.basique.name':'Basique','pricing.basique.desc':'Pour démarrer en solo','pricing.basique.f1':'Boutique en ligne complète',
      'pricing.basique.f2':'Assistant IA pour vos appels','pricing.basique.f3':'Agenda et rappels SMS',
      'pricing.pro.name':'Pro','pricing.pro.desc':'Pour développer vos ventes','pricing.pro.f1':'Tout Basique, en plus grand',
      'pricing.pro.f2':"Plus d'appels IA et de SMS",'pricing.pro.f3':'Analytics avancées',
      'pricing.premium.name':'Premium','pricing.premium.desc':'Pour les boutiques à fort volume','pricing.premium.f1':'Tout Pro, en illimité',
      'pricing.premium.f2':'Support prioritaire','pricing.premium.f3':'Fonctionnalités avancées',
      'pricing.popular':'★ Le plus populaire','pricing.perMonth':'FCFA/mois','pricing.cta':"Commencer l'essai gratuit",
      'pricing.trialNote':"14 jours d'essai gratuit, sans carte bancaire.",
      'pricing.moreOptionsNote':'Formules hebdomadaire et annuelle disponibles depuis votre espace.',
      'settings.title':'Paramètres','settings.subtitle':'Gérez votre compte et votre boutique',
      'shop.myShop':'Ma Boutique','shop.yourShop':'Votre boutique','shop.myProducts':'Mes produits','shop.newProduct':'+ Nouveau produit',
      'shop.newRdv':'+ Nouveau RDV','shop.addFirstProduct':'Ajoutez votre premier produit !','shop.all':'Toutes','shop.delivered':'Livrées',
      'shop.category':'Catégorie','shop.view':'Voir','shop.copy':'Copier','shop.subtitle':'Gérez votre vitrine, vos produits et votre profil',
      'table.id':'ID','table.date':'Date','table.product':'Produit','table.status':'Statut','table.total':'Total',
      'table.client':'Client','table.actions':'Actions',
      'orders.title':'Commandes','orders.subtitle':'Toutes les commandes de votre boutique','orders.pending':'En attente',
      'orders.confirmed':'Confirmées','orders.cancelled':'Annulées','orders.search':' Rechercher…','orders.empty':"Aucune commande pour l'instant",
      'orders.noneFound':'Aucune commande trouvée',
      'order.takenByIA':"Prise en charge par l'IA",'order.confirm':'Confirmer','order.reject':'Rejeter','order.changeStatus':'Changer…',
      'order.actionShip':'Expédier','order.actionDeliver':'Livré','order.actionCancel':'Annuler',
      'order.status.pending':'En attente','order.status.confirmed':'Confirmée','order.status.processing':'En prépa.',
      'order.status.shipped':'Expédiée','order.status.delivered':'Livrée','order.status.cancelled':'Annulée',
      'agenda.title':'Agenda Intelligent','agenda.subtitle':'Gérez vos rendez-vous clients','agenda.noRdv':'Aucun RDV pour cette date',
      // ── L-01 Bloc 1 : nouvelles clés ──────────────────────────────────────────
      'ia.title':'Assistant IA','ia.subtitle':'Configurez votre assistant IA personnel',
      'ia.status':'Statut','ia.availability':'Disponibilité','ia.knowledge':'Base de connaissance','ia.recentCalls':'Appels récents',
      'analytics.title':'Analytiques','analytics.subtitle':'Performance de votre boutique',
      'abo.title':'Abonnement','abo.subtitle':'Gérez votre plan et votre facturation',
      'abo.active':'Actif','abo.trial':'Essai','abo.inactive':'Inactif',
      // ── L-02 Bloc 1 : nouvelles clés (tableau comparatif, statut expiré, périodes) ──
      'abo.expired':'Expiré',
      'period.week':'/semaine','period.month':'/mois','period.year':'/an',
      'compare.feat.shop':'Boutique en ligne','compare.feat.catalog':'Catalogue produits',
      'compare.feat.catalog.basique':'10 produits','compare.feat.catalog.pro':'50 produits',
      'compare.feat.orders':'Commandes en ligne','compare.feat.mobileMoney':'Paiement Mobile Money',
      'compare.feat.iaAssistant':'Assistant IA 24h/24','compare.feat.iaCalls':'Appels IA',
      'compare.feat.iaCalls.pro':'60 min/mois','compare.feat.iaCalls.premium':'Illimités',
      'compare.feat.agenda':'Agenda intelligent','compare.feat.smsReminders':'Rappels SMS clients',
      'compare.feat.iaCallSummary':"Résumé d'appel IA",'compare.feat.multilang':'Multi-langue (Fr/En/Fon)',
      'compare.feat.analytics':'Analytics avancées','compare.feat.support':'Support',
      'compare.support.basique':'Email','compare.support.pro':'Email/WhatsApp','compare.support.premium':'Prioritaire 24h/24',
      'compare.choosePlan':'Choisir ce plan',
      'settings.profile':'Profil','settings.hours':'Horaires','settings.voip':'VoIP','settings.lang':'Langue',
      'dashboard.greeting':'Bonjour','dashboard.daySummary':'Voici le résumé de votre journée',
      'cal.months':'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
      'cal.days':'L,M,M,J,V,S,D',
      'shop.noProduct':'Aucun produit','shop.unlimited':'Illimité',
      'trial.title':'Période d\'essai','trial.expired':'Votre essai a expiré','trial.cta':'Choisir un plan →',
      'btn.save':'Sauvegarder','btn.cancel':'Annuler','btn.add':'Ajouter','btn.edit':'Modifier',
      'btn.delete':'Supprimer','btn.confirm':'Confirmer','btn.close':'Fermer',

          /* ── IA conversationnelle (texte démo / UI) — conservées de l'ancienne version ── */
          'ia.welcomeMsgFallback': 'Bonjour ! Comment puis-je vous aider ?',
          'ia.speakDemo.feminin':  'Bonjour, je suis votre assistante Kazap, comment puis-je vous aider ?',
          'ia.speakDemo.masculin': 'Bonjour, je suis votre assistant Kazap, comment puis-je vous aider ?'
    },

    en: {
      'nav.accueil':'Home','nav.boutique':'Shop','nav.outils':'Tools','nav.parametres':'Settings','nav.tarifs':'Pricing',
      'dashboard.title':'Dashboard','dashboard.activeProducts':'Active products','dashboard.callsHandledByIA':'Calls handled by AI',
      'dashboard.callsReceivedRealtime':'Calls received (real-time)','dashboard.rdvFixedToday':'Appointments set today',
      'dashboard.rdvToday':'Appointments today','dashboard.rdvTotal':'Total appointments','dashboard.topProducts':'Top products','dashboard.viewAll':'View all →',
      'pricing.tag':'Pricing','pricing.title':'Simple pricing,',
      'pricing.sub':'Start for free, no commitment. Change your plan anytime from your dashboard.',
      'pricing.basique.name':'Basic','pricing.basique.desc':'To get started solo','pricing.basique.f1':'Full online shop',
      'pricing.basique.f2':'AI assistant for your calls','pricing.basique.f3':'Calendar and SMS reminders',
      'pricing.pro.name':'Pro','pricing.pro.desc':'To grow your sales','pricing.pro.f1':'Everything in Basic, bigger',
      'pricing.pro.f2':'More AI calls and SMS','pricing.pro.f3':'Advanced analytics',
      'pricing.premium.name':'Premium','pricing.premium.desc':'For high-volume shops','pricing.premium.f1':'Everything in Pro, unlimited',
      'pricing.premium.f2':'Priority support','pricing.premium.f3':'Advanced features',
      'pricing.popular':'★ Most popular','pricing.perMonth':'FCFA/month','pricing.cta':'Start free trial',
      'pricing.trialNote':'14-day free trial, no credit card required.',
      'pricing.moreOptionsNote':'Weekly and annual plans available from your dashboard.',
      'settings.title':'Settings','settings.subtitle':'Manage your account and shop',
      'shop.myShop':'My Shop','shop.yourShop':'Your shop','shop.myProducts':'My products','shop.newProduct':'+ New product',
      'shop.newRdv':'+ New appointment','shop.addFirstProduct':'Add your first product!','shop.all':'All','shop.delivered':'Delivered',
      'shop.category':'Category','shop.view':'View','shop.copy':'Copy','shop.subtitle':'Manage your storefront, products, and profile',
      'table.id':'ID','table.date':'Date','table.product':'Product','table.status':'Status','table.total':'Total',
      'table.client':'Client','table.actions':'Actions',
      'orders.title':'Orders','orders.subtitle':'All orders for your shop','orders.pending':'Pending',
      'orders.confirmed':'Confirmed','orders.cancelled':'Cancelled','orders.search':' Search…','orders.empty':'No orders yet',
      'orders.noneFound':'No orders found',
      'order.takenByIA':'Handled by AI','order.confirm':'Confirm','order.reject':'Reject','order.changeStatus':'Change…',
      'order.actionShip':'Ship','order.actionDeliver':'Delivered','order.actionCancel':'Cancel',
      'order.status.pending':'Pending','order.status.confirmed':'Confirmed','order.status.processing':'Processing',
      'order.status.shipped':'Shipped','order.status.delivered':'Delivered','order.status.cancelled':'Cancelled',
      'agenda.title':'Smart Calendar','agenda.subtitle':'Manage your customer appointments','agenda.noRdv':'No appointments for this date',
      // ── L-01 Bloc 1 : nouvelles clés ──────────────────────────────────────────
      'ia.title':'AI Assistant','ia.subtitle':'Configure your personal AI assistant',
      'ia.status':'Status','ia.availability':'Availability','ia.knowledge':'Knowledge base','ia.recentCalls':'Recent calls',
      'analytics.title':'Analytics','analytics.subtitle':'Your shop performance',
      'abo.title':'Subscription','abo.subtitle':'Manage your plan and billing',
      'abo.active':'Active','abo.trial':'Trial','abo.inactive':'Inactive',
      // ── L-02 Bloc 1 : new keys (comparison table, expired status, periods) ──
      'abo.expired':'Expired',
      'period.week':'/week','period.month':'/month','period.year':'/year',
      'compare.feat.shop':'Online shop','compare.feat.catalog':'Product catalog',
      'compare.feat.catalog.basique':'10 products','compare.feat.catalog.pro':'50 products',
      'compare.feat.orders':'Online orders','compare.feat.mobileMoney':'Mobile Money payment',
      'compare.feat.iaAssistant':'AI assistant 24/7','compare.feat.iaCalls':'AI calls',
      'compare.feat.iaCalls.pro':'60 min/month','compare.feat.iaCalls.premium':'Unlimited',
      'compare.feat.agenda':'Smart calendar','compare.feat.smsReminders':'SMS reminders for clients',
      'compare.feat.iaCallSummary':'AI call summary','compare.feat.multilang':'Multi-language (Fr/En/Fon)',
      'compare.feat.analytics':'Advanced analytics','compare.feat.support':'Support',
      'compare.support.basique':'Email','compare.support.pro':'Email/WhatsApp','compare.support.premium':'Priority 24/7',
      'compare.choosePlan':'Choose this plan',
      'settings.profile':'Profile','settings.hours':'Hours','settings.voip':'VoIP','settings.lang':'Language',
      'dashboard.greeting':'Hello','dashboard.daySummary':'Here is your day summary',
      'cal.months':'January,February,March,April,May,June,July,August,September,October,November,December',
      'cal.days':'M,T,W,T,F,S,S',
      'shop.noProduct':'No products','shop.unlimited':'Unlimited',
      'trial.title':'Trial period','trial.expired':'Your trial has expired','trial.cta':'Choose a plan →',
      'btn.save':'Save','btn.cancel':'Cancel','btn.add':'Add','btn.edit':'Edit',
      'btn.delete':'Delete','btn.confirm':'Confirm','btn.close':'Close',

          /* ── IA conversationnelle (texte démo / UI) — conservées de l'ancienne version ── */
          'ia.welcomeMsgFallback': 'Hello! How can I help you?',
          'ia.speakDemo.feminin':  'Hello, I am your Kazap assistant, how can I help you?',
          'ia.speakDemo.masculin': 'Hello, I am your Kazap assistant, how can I help you?'
    },

    // ── Fon (fon) — copié depuis I18N_DICT.fon de index.html (T-06/T-08) ──
    fon: {
      'nav.accueil':'Axɔsú xwé','nav.boutique':'Axɔ́sɔ́','nav.outils':'Nukúnkpléví lɛ','nav.parametres':'Ðɛɖɛɖɛ','nav.tarifs':'Akwɛ lɛ',
      'dashboard.title':'Tɛn kpɔ́n','dashboard.activeProducts':'Nǔ e ɖò azɔ́ wɛ lɛ','dashboard.callsHandledByIA':'Wɛn e IA yí lɛ',
      'dashboard.callsReceivedRealtime':'Wɛn e wá din lɛ','dashboard.rdvFixedToday':'Gbè klewun lɛ égbé',
      'dashboard.rdvToday':'Gbè klewun égbé','dashboard.rdvTotal':'Gbè klewun bǐ','dashboard.topProducts':'Nǔ e jó hú lɛ','dashboard.viewAll':'Kpɔ́n bǐ →',
      'pricing.tag':'Akwɛ lɛ','pricing.title':'Akwɛ e bɔwǔ,',
      'pricing.sub':'Jɛ jí fífá, mɛ ɖě ma sɛ́n hwiɖe ó. Ðyɔ azɔ́wiwa towe hwebínu sín tɛn towe mɛ.',
      'pricing.basique.name':'Bǐbɛ́mɛ','pricing.basique.desc':'Bo jɛ jí ɖokponɔ','pricing.basique.f1':'Axɔ́sɔ́ kpɛvi e gbló bǐ',
      'pricing.basique.f2':'Mɛsɛnzɛ́ IA nú wɛn we lɛ','pricing.basique.f3':'Hwenu tɛn kpɔ́n kpo SMS flínflín kpó',
      'pricing.pro.name':'Pro','pricing.pro.desc':'Bo dó sukpɔ́ azɔ́ towe','pricing.pro.f1':'Bǐbɛ́mɛ bǐ, gãngǎn ɖě',
      'pricing.pro.f2':'Wɛn IA gegě kpó SMS gegě kpó','pricing.pro.f3':'Numɛsɔ́ é jɔ hú',
      'pricing.premium.name':'Premium','pricing.premium.desc':'Nú axɔ́sɔ́ e nyí nǔ gegě lɛ','pricing.premium.f1':'Pro bǐ, ma ɖó dogbó ó',
      'pricing.premium.f2':'Alɔdó e jɛ nukɔn','pricing.premium.f3':'Nukúnkpléví ɖaxó lɛ',
      'pricing.popular':'★ É jɔ hú bǐ','pricing.perMonth':'FCFA/sun','pricing.cta':'Jɛ jí ahwan e ma sɔ akwɛ ó',
      'pricing.trialNote':'Azǎn 14 e ma sɔ akwɛ ó, kaadi akwɛ ɖě ma byɔ ó.',
      'pricing.moreOptionsNote':'Akwɛ aklunɔzán kpó xwe kpó ɖò te sín tɛn towe mɛ.',
      'settings.title':'Ðɛɖɛɖɛ','settings.subtitle':'Kpé nukún ɖó akɔ́n towe kpó axɔ́sɔ́ towe kpó jí',
      'shop.myShop':'Axɔ́sɔ́ ce','shop.yourShop':'Axɔ́sɔ́ towe','shop.myProducts':'Nǔ ce lɛ','shop.newProduct':'+ Nǔ yɔyɔ́',
      'shop.newRdv':'+ Gbè klewun yɔyɔ́','shop.addFirstProduct':'Dɔn nǔ ce nukɔntɔn!','shop.all':'Bǐ lɛ','shop.delivered':'É wá yi xwé',
      'shop.category':'Hagbɛ́','shop.view':'Kpɔ́n','shop.copy':'Klɔ́','shop.subtitle':'Kpé nukún ɖó axɔ́sɔ́ towe, nǔ towe lɛ kpó akɔ́n towe kpó jí',
      'table.id':'ID','table.date':'Azǎn','table.product':'Nǔ','table.status':'Tɛn','table.total':'Bǐ kɛjɛ',
      'table.client':'Mɛsɛ́n','table.actions':'Azɔ́ lɛ',
      'orders.title':'Nǔ e byɔ lɛ','orders.subtitle':'Nǔ e byɔ lɛ bǐ sín axɔ́sɔ́ towe mɛ','orders.pending':'É ɖò te wɛ',
      'orders.confirmed':'É ɖó gbɔn','orders.cancelled':'É gbɔ́n','orders.search':' Dín…','orders.empty':'Nǔ ɖě byɔ ǎ kpɔ́n',
      'orders.noneFound':'Nǔ e byɔ lɛ ɖě ɖ ǎ',
      'order.takenByIA':'IA wɛ yí','order.confirm':'Ðó gbɔn','order.reject':'Gbɛ́','order.changeStatus':'Ðyɔ…',
      'order.actionShip':'Sɛ́dó','order.actionDeliver':'É wá yi xwé','order.actionCancel':'Gbɔ́n',
      'order.status.pending':'É ɖò te wɛ','order.status.confirmed':'É ɖó gbɔn','order.status.processing':'É ɖò bɔbɔ wɛ',
      'order.status.shipped':'É sɛ́ dó','order.status.delivered':'É wá yi xwé','order.status.cancelled':'É gbɔ́n',
      'agenda.title':'Tɛn klewun nǔnywɛ','agenda.subtitle':'Kpé nukún ɖó gbè klewun mɛsɛ́n lɛ tɔn jí','agenda.noRdv':'Gbè klewun ɖě ɖ ǎ nú azǎn elɔ',
      // ── L-01 Bloc 1 : nouvelles clés ──────────────────────────────────────────
      'ia.title':'Mɛsɛnzɛ́ IA','ia.subtitle':'Configurez votre assistant IA personnel',
      'ia.status':'Tɛn','ia.availability':'Ðò te nú gbɔn','ia.knowledge':'Nǔ e tuùn lɛ','ia.recentCalls':'Wɛn e wá ɖíɖó lɛ',
      'analytics.title':'Numɛsɔ́','analytics.subtitle':'Performance de votre boutique',
      'abo.title':'Akwɛ dó jí','abo.subtitle':'Gérez votre plan et votre facturation',
      'abo.active':'É ɖò azɔ́ wɛ','abo.trial':'Ahwan','abo.inactive':'É ma ɖò azɔ́ wɛ ó',
      // ── L-02 Bloc 1 : clés yɔyɔ́ (tableau comparatif, statut expiré, périodes) ──
      'abo.expired':'É fó',
      'period.week':'/aklunɔzán','period.month':'/sun','period.year':'/xwe',
      'compare.feat.shop':'Axɔ́sɔ́ ee ɖò ɛntɛnɛti jí','compare.feat.catalog':'Kataloku nǔ lɛ tɔn',
      'compare.feat.catalog.basique':'Nǔ 10','compare.feat.catalog.pro':'Nǔ 50',
      'compare.feat.orders':'Nǔ byɔbyɔ ɖò ɛntɛnɛti jí','compare.feat.mobileMoney':'Akwɛ-bibɔ gbɔn telefɔnu jí (Mobile Money)',
      'compare.feat.iaAssistant':'Mɛsɛnzɛ́ IA azǎn 24 mɛ bǐ','compare.feat.iaCalls':'Wɛn IA lɛ',
      'compare.feat.iaCalls.pro':'60 min/sun','compare.feat.iaCalls.premium':'Ma ɖó dogbó ó',
      'compare.feat.agenda':'Tɛn klewun nǔnywɛ','compare.feat.smsReminders':'SMS flínflín nú mɛsɛ́n lɛ',
      'compare.feat.iaCallSummary':'Wɛn IA tɔn kpɔ́ndéwú','compare.feat.multilang':'Gbè gegě (Fr/En/Fon)',
      'compare.feat.analytics':'Numɛsɔ́ é jɔ hú','compare.feat.support':'Alɔdó',
      'compare.support.basique':'Imɛli','compare.support.pro':'Imɛli/WhatsApp','compare.support.premium':'Alɔdó nukɔntɔn azǎn 24 mɛ bǐ',
      'compare.choosePlan':'Sɔ azɔ́wiwa elɔ',
      'settings.profile':'Akɔ́n','settings.hours':'Hwenu azɔ́','settings.voip':'VoIP','settings.lang':'Gbè',
      'dashboard.greeting':'Mɔ̌ wɛ','dashboard.daySummary':'Voici le résumé de votre journée',
      'cal.months':'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
      'cal.days':'L,M,M,J,V,S,D',
      'shop.noProduct':'Nǔ ɖě ɖ ǎ','shop.unlimited':'Ma ɖó dogbó ó',
      'trial.title':'Hwenu ahwan','trial.expired':'Ahwan towe fó','trial.cta':'Sɔ azɔ́wiwa →',
      'btn.save':'Dó hwɛ̌','btn.cancel':'Gbɔ́n','btn.add':'Dɔn','btn.edit':'Ðyɔ',
      'btn.delete':'Sɔ́ ɖó hwlɛn','btn.confirm':'Ðó gbɔn','btn.close':'Gbɔ́'
    },

    // ── Yoruba (yor) — copié depuis I18N_DICT.yor de index.html (T-06/T-08) ──
    yor: {
      'nav.accueil':'Ilé','nav.boutique':'Ìtajà','nav.outils':'Irinṣẹ́','nav.parametres':'Ètò','nav.tarifs':'Owó iṣẹ́',
      'dashboard.title':'Pánẹ́ẹ̀lì','dashboard.activeProducts':'Àwọn ọjà tí ń ṣiṣẹ́','dashboard.callsHandledByIA':'Àwọn ìpè tí AI mú',
      'dashboard.callsReceivedRealtime':'Àwọn ìpè tí ó wọlé (àkókò gan-an)','dashboard.rdvFixedToday':'Ìpàdé tí a ṣètò lónìí',
      'dashboard.rdvToday':'Ìpàdé lónìí','dashboard.rdvTotal':'Gbogbo ìpàdé','dashboard.topProducts':'Ọjà tí ó tà jùlọ','dashboard.viewAll':'Wo gbogbo rẹ̀ →',
      'pricing.tag':'Owó iṣẹ́','pricing.title':'Owó tí ó rọrùn,',
      'pricing.sub':'Bẹ̀rẹ̀ lófẹ̀ẹ́, láìsí àdéhùn. Yí ètò rẹ padà nígbàkúgbà láti orí pánẹ́ẹ̀lì rẹ.',
      'pricing.basique.name':'Ìpilẹ̀ṣẹ̀','pricing.basique.desc':'Láti bẹ̀rẹ̀ ní ọ̀túnṣe','pricing.basique.f1':'Ìtajà orí ayélujára kíkún',
      'pricing.basique.f2':'Olùrànlọ́wọ́ AI fún àwọn ìpè rẹ','pricing.basique.f3':'Kàlẹ́ńdà àti ìránti SMS',
      'pricing.pro.name':'Pro','pricing.pro.desc':'Láti gbé ọjà rẹ ga','pricing.pro.f1':'Gbogbo Ìpilẹ̀ṣẹ̀, ní títóbi sí i',
      'pricing.pro.f2':'Ìpè AI àti SMS sí i','pricing.pro.f3':'Ìtúpalẹ̀ tí ó pọ̀ sí i',
      'pricing.premium.name':'Premium','pricing.premium.desc':'Fún àwọn ìtajà títóbi','pricing.premium.f1':'Gbogbo Pro, láìní opin',
      'pricing.premium.f2':'Ìrànlọ́wọ́ àkọ́kọ́','pricing.premium.f3':'Àwọn ẹ̀yà tí ó ti gòkè',
      'pricing.popular':'★ Èyí tí ó gbajúmọ̀ jùlọ','pricing.perMonth':'FCFA/oṣù','pricing.cta':'Bẹ̀rẹ̀ àdánwò ọ̀fẹ́',
      'pricing.trialNote':'Ọjọ́ 14 àdánwò ọ̀fẹ́, láìsí káàdì ìsanwó.',
      'pricing.moreOptionsNote':'Ètò ọ̀sọ̀ọ̀sẹ̀ àti ti ọdọọdún wà láti orí pánẹ́ẹ̀lì rẹ.',
      'settings.title':'Ètò','settings.subtitle':'Ṣàkóso àkáǔntì àti ìtajà rẹ',
      'shop.myShop':'Ìtajà mi','shop.yourShop':'Ìtajà rẹ','shop.myProducts':'Àwọn ọjà mi','shop.newProduct':'+ Ọjà tuntun',
      'shop.newRdv':'+ Ìpàdé tuntun','shop.addFirstProduct':'Fi ọjà àkọ́kọ́ rẹ kún!','shop.all':'Gbogbo rẹ̀','shop.delivered':'Tí a fi jíṣẹ́',
      'shop.category':'Ẹ̀ka','shop.view':'Wò','shop.copy':'Daakọ','shop.subtitle':'Ṣàkóso ìtajà rẹ, àwọn ọjà rẹ àti àkáǔntì rẹ',
      'table.id':'ID','table.date':'Ọjọ́','table.product':'Ọjà','table.status':'Ipò','table.total':'Àpapọ̀',
      'table.client':'Oníbàárà','table.actions':'Ìṣe',
      'orders.title':'Àwọn àṣẹ','orders.subtitle':'Gbogbo àwọn àṣẹ tí ìtajà rẹ rí gbà','orders.pending':'Tí ń dúró',
      'orders.confirmed':'Tí a jẹrìísí','orders.cancelled':'Tí a fagilé','orders.search':' Wá…','orders.empty':'Kò sí àṣẹ kankan síbẹ̀',
      'orders.noneFound':'A kò rí àṣẹ kankan',
      'order.takenByIA':'AI ni ó mú','order.confirm':'Jẹrìísí','order.reject':'Kọ̀','order.changeStatus':'Yí padà…',
      'order.actionShip':'Fi ránṣẹ́','order.actionDeliver':'Tí a fi jíṣẹ́','order.actionCancel':'Fagilé',
      'order.status.pending':'Tí ń dúró','order.status.confirmed':'Tí a jẹrìísí','order.status.processing':'Ní ìmúrasílẹ̀',
      'order.status.shipped':'Tí a fi ránṣẹ́','order.status.delivered':'Tí a fi jíṣẹ́','order.status.cancelled':'Tí a fagilé',
      'agenda.title':'Kàlẹ́ńdà Ọlọ́gbọ́n','agenda.subtitle':'Ṣàkóso àwọn ìpàdé oníbàárà rẹ','agenda.noRdv':'Kò sí ìpàdé fún ọjọ́ yìí',
      // ── L-01 Bloc 1 : nouvelles clés ──────────────────────────────────────────
      'ia.title':'Olùrànlọ́wọ́ AI','ia.subtitle':'Configurez votre assistant IA personnel',
      'ia.status':'Ipò','ia.availability':'Wíwà','ia.knowledge':'Ìmọ̀ àkójọ','ia.recentCalls':'Àwọn ìpè tí ó ṣẹ̀ṣẹ̀',
      'analytics.title':'Ìtúpalẹ̀','analytics.subtitle':'Performance de votre boutique',
      'abo.title':'Ìforúkọsilẹ̀','abo.subtitle':'Gérez votre plan et votre facturation',
      'abo.active':'Tí ń ṣiṣẹ́','abo.trial':'Àdánwò','abo.inactive':'Tí kò ṣiṣẹ́',
      // ── L-02 Bloc 1 : àwọn bọtìnì tuntun (tábìlì ìfiwéra, ipò tí parí, àkókò) ──
      'abo.expired':'Ti parí',
      'period.week':'/ọ̀sọ̀ọ̀sẹ̀','period.month':'/oṣù','period.year':'/ọdún',
      'compare.feat.shop':'Ìtajà orí ayélujára','compare.feat.catalog':'Àkójọpọ̀ ọjà',
      'compare.feat.catalog.basique':'Ọjà 10','compare.feat.catalog.pro':'Ọjà 50',
      'compare.feat.orders':'Àṣẹ orí ayélujára','compare.feat.mobileMoney':'Ìsanwó Mobile Money',
      'compare.feat.iaAssistant':'Olùrànlọ́wọ́ AI ní wákàtí 24','compare.feat.iaCalls':'Ìpè AI',
      'compare.feat.iaCalls.pro':'Ìṣẹ́jú 60/oṣù','compare.feat.iaCalls.premium':'Láìní opin',
      'compare.feat.agenda':'Kàlẹ́ńdà Ọlọ́gbọ́n','compare.feat.smsReminders':'Ìránti SMS fún àwọn oníbàárà',
      'compare.feat.iaCallSummary':'Àkópọ̀ ìpè AI','compare.feat.multilang':'Èdè púpọ̀ (Fr/En/Fon)',
      'compare.feat.analytics':'Ìtúpalẹ̀ tí ó pọ̀ sí i','compare.feat.support':'Ìrànlọ́wọ́',
      'compare.support.basique':'Ímeèlì','compare.support.pro':'Ímeèlì/WhatsApp','compare.support.premium':'Àkọ́kọ́ ní wákàtí 24',
      'compare.choosePlan':'Yan ètò yìí',
      'settings.profile':'Ìfọkànsìn','settings.hours':'Àwọn wákàtí','settings.voip':'VoIP','settings.lang':'Èdè',
      'dashboard.greeting':'Ẹ káàárọ̀','dashboard.daySummary':'Voici le résumé de votre journée',
      'cal.months':'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
      'cal.days':'M,T,W,T,F,S,S',
      'shop.noProduct':'Kò sí ọjà','shop.unlimited':'Láìní opin',
      'trial.title':'Àkókò àdánwò','trial.expired':'Àdánwò rẹ ti parí','trial.cta':'Yan ètò kan →',
      'btn.save':'Fipamọ́','btn.cancel':'Fagilé','btn.add':'Fi kún','btn.edit':'Ṣàtúnṣe',
      'btn.delete':'Parẹ́','btn.confirm':'Jẹrìísí','btn.close':'Páde'
    }
  };

  // ─── Langue courante ───────────────────────────────────────────────────
  // Persistée en localStorage, repli sur 'fr' (langue par défaut de KAZAP).
  let storedLang = null;
  try { storedLang = window.localStorage.getItem('kazap_lang'); } catch (e) { /* localStorage indisponible */ }
  window.currentLang = (['fr', 'en', 'fon', 'yor'].includes(storedLang)) ? storedLang : 'fr';

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
  // Utilisée par les boutons FR/EN/FON/YOR (onclick="setLanguage('fr')").
  window.setLanguage = function (lang) {
    if (!['fr', 'en', 'fon', 'yor'].includes(lang)) return;
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
