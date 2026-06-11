const translations = {
  en: {
    title: "Haven",
    home: "Home",
    services: "Services",
    features: "Features",
    about: "About",
    stats: "Stats",
    contact: "Contact Us",
    join: "Join",
    heroTitle: "Haven",
    heroDescription: "A community of developers and students where you can interact and make the team. Explore the science-tech related projects and works.",
    activeChat: "Active Chat",
    ticketing: "Ticketing",
    funnyBots: "Funny Bots",
    advertisement: "Advertisement",
    giveaways: "Giveaways",
    servicesTitle: "Services",
    servicesDescription: "We provide you different services to you like",
    supportTitle: "Support",
    supportText: "We give 24/7 active support to you. You may ask any kind of help realted codings or any others. You can  also report members.",
    engagementTitle: "Engagement",
    engagementText: "We have active chats & you can enjoy chating with our members. You can make friends and work together.",
    gamesEventsTitle: "Games & Events",
    gamesEventsText: "We organize differents events in stage channel. Also, we play many games together with our members. Winner will get awesome gift.",
    featuresTitle: "Our Awesome Features To Serve You",
    featuresDescription: "We make it easiest for you through the different facilities",
    promoteAccount: "Promote your social account",
    acceptSuggestions: "Accept your suggestions",
    freeDomain: "Provide you free doamin",
    openSource: "Open Source Code",
    aboutTitle: "What We Do",
    aboutDescription: "Many peoples are bored staying home and doing nothing. Our goal is to create an interactive community where you can create and build ideas in the science and technology sectors.",
    ticketSystem: "Ticket System",
    ticketText: "We accept all the ticket you have opened and review it.",
    workflow: "Workflow",
    workflowText: "We will help you to complete your project and solve your errors.",
    youtubeVideo: "Youtube Video",
    youtubeText: "We will make installization tutorial of open source code.",
    customerFeedback: "Customer Feedback Surveys",
    customerFeedbackText: "We will review and make our community better by seeing feedback",
    joinServer: "join our server",
    doLots: "We do lots of new things make sure to",
    statsTitle: "Stats",
    activeMembers: "Active Members",
    activeCount: "1250",
    memberCount: "members",
    totalMembers: "Total member of our server",
    totalCount: "3060",
    textVoiceChat: "Text & Voice Chat",
    channelCount: "20+",
    channels: "channels",
    rolesCount: "50+",
    roles: "roles",
    roleColors: "with colors",
    supportTitle: "24/7 Customer Support",
    supportDescription: "Our team is here to provide you with personalized and outstanding service. We also offer a range of self-learning tools in our support center:",
    joinUs: "Join Us",
    copyright: "© 2022",
    allRightsReserved: "All rights reserved by",
    privacyPolicy: "Privacy Policy",
    security: "Security",
    termsConditions: "Terms & Conditions",
    backToTop: "Back to top"
  },
  it: {
    title: "Haven",
    home: "Home",
    services: "Servizi",
    features: "Caratteristiche",
    about: "Chi Siamo",
    stats: "Statistiche",
    contact: "Contattaci",
    join: "Entra",
    heroTitle: "Haven",
    heroDescription: "Una comunità di sviluppatori e studenti dove puoi interagire e fare squadra. Esplora i progetti e i lavori legati alla scienza e alla tecnologia.",
    activeChat: "Chat Attiva",
    ticketing: "Sistema Ticket",
    funnyBots: "Bot Divertenti",
    advertisement: "Pubblicità",
    giveaways: "Giveaway",
    servicesTitle: "Servizi",
    servicesDescription: "Ti forniamo diversi servizi come",
    supportTitle: "Supporto",
    supportText: "Ti diamo supporto attivo 24/7. Puoi chiedere qualsiasi tipo di aiuto relativo a codifica o altro. Puoi anche segnalare i membri.",
    engagementTitle: "Coinvolgimento",
    engagementText: "Abbiamo chat attive e puoi divertirti a chattare con i nostri membri. Puoi fare amicizie e lavorare insieme.",
    gamesEventsTitle: "Giochi e Eventi",
    gamesEventsText: "Organizziamo diversi eventi nel canale stage. Inoltre, giochiamo a molti giochi insieme ai nostri membri. Il vincitore riceverà un regalo fantastico.",
    featuresTitle: "Le Nostre Caratteristiche Straordinarie",
    featuresDescription: "Ti lo rendiamo più facile attraverso diverse strutture",
    promoteAccount: "Promuovi il tuo account social",
    acceptSuggestions: "Accetta i tuoi suggerimenti",
    freeDomain: "Fornisci il tuo dominio gratuito",
    openSource: "Codice Open Source",
    aboutTitle: "Cosa Facciamo",
    aboutDescription: "Molte persone si annoiano stando a casa senza fare nulla. Il nostro obiettivo è creare una comunità interattiva dove puoi creare e costruire idee nei settori della scienza e della tecnologia.",
    ticketSystem: "Sistema Ticket",
    ticketText: "Accettiamo tutti i ticket che hai aperto e li esaminiamo.",
    workflow: "Flusso di Lavoro",
    workflowText: "Ti aiuteremo a completare il tuo progetto e risolvere i tuoi errori.",
    youtubeVideo: "Video Youtube",
    youtubeText: "Faremo un tutorial di installazione del codice open source.",
    customerFeedback: "Sondaggi di Feedback Clienti",
    customerFeedbackText: "Esamineremo e miglioreremo la nostra comunità vedendo i feedback",
    joinServer: "unisciti al nostro server",
    doLots: "Facciamo molte cose nuove, assicurati di",
    statsTitle: "Statistiche",
    activeMembers: "Membri Attivi",
    activeCount: "1250",
    memberCount: "membri",
    totalMembers: "Totale membri del nostro server",
    totalCount: "3060",
    textVoiceChat: "Chat Testuale e Vocale",
    channelCount: "20+",
    channels: "canali",
    rolesCount: "50+",
    roles: "ruoli",
    roleColors: "con colori",
    supportTitle: "Supporto Clienti 24/7",
    supportDescription: "Il nostro team è qui per fornirvi un servizio personalizzato e eccezionale. Offriamo anche una serie di strumenti di autoapprendimento nel nostro centro di supporto:",
    joinUs: "Unisciti a Noi",
    copyright: "© 2022",
    allRightsReserved: "Tutti i diritti riservati da",
    privacyPolicy: "Politica sulla Privacy",
    security: "Sicurezza",
    termsConditions: "Termini e Condizioni",
    backToTop: "Torna in alto"
  }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  updatePageContent();
}

function getTranslation(key) {
  return translations[currentLanguage][key] || translations['en'][key];
}

function updatePageContent() {
  // Update title
  document.title = getTranslation('title');
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = getTranslation(key);
  });
  
  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updatePageContent);