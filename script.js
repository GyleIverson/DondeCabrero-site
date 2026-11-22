const translations = {
  en: {
    title: "DondeCabreo",
    subtitle: "Where is the cabrero? Fresh goat milk near you",
    heroText: "Hundreds of cabreros roam Guatemala City selling fresh goat milk. DondeCabreo shows you their real-time location and predicts when they will be near you. Install the PWA and never guess the route again.",
    ctaDownload: "Install PWA",
    howTitle: "How it works",
    forDrinkers: "For Drinkers",
    forDrinkersText: "Open the app, see the map, and get alerts when a shepherd is nearby or coming soon. Get fresh milk without searching.",
    forCabreros: "The Cabreros",
    forCabrerosText: "Shepherds share their route from the Cabrero App. You only see where they are and when they arrive.",
    benefitsTitle: "Why DondeCabreo?",
    benefits: [
      "Real-time map of nearby cabreros",
      "Arrival prediction based on their routes",
      "Install as a PWA: works on your phone without an app store",
      "Supports local goat milk producers"
    ],
    footerNote: "PWA available now. Works on Android and iOS. Hosted on GitHub & Cloudflare.",
    termsLink: "Terms of Use",
    privacyLink: "Privacy Policy",
    back: "← Back to DondeCabreo"
  },
  es: {
    title: "DondeCabreo",
    subtitle: "¿Dónde está el cabrero? Leche fresca cerca de ti",
    heroText: "Cientos de cabreros recorren Ciudad de Guatemala vendiendo leche de cabra fresca. DondeCabreo te muestra su ubicación en tiempo real y predice cuándo pasarán cerca de ti. Instala la PWA y nunca más adivines la ruta.",
    ctaDownload: "Instalar PWA",
    howTitle: "Cómo funciona",
    forDrinkers: "Para Bebedores",
    forDrinkersText: "Abre la app, ve el mapa y recibe alertas cuando un cabrero esté cerca o llegue pronto. Compra leche fresca sin buscar.",
    forCabreros: "Los Cabreros",
    forCabrerosText: "Los cabreros comparten su ruta desde la App Cabrero. Tú solo ves dónde están y cuándo llegan.",
    benefitsTitle: "¿Por qué DondeCabreo?",
    benefits: [
      "Mapa en tiempo real de cabreros cercanos",
      "Predicción de llegada según sus rutas",
      "Instala como PWA: funciona en el teléfono sin tienda",
      "Apoya a productores locales de leche de cabra"
    ],
    footerNote: "PWA disponible ahora. Funciona en Android e iOS. Alojado en GitHub y Cloudflare.",
    termsLink: "Términos de Uso",
    privacyLink: "Política de Privacidad",
    back: "← Volver a DondeCabreo"
  }
};

let currentLang = localStorage.getItem('dondecabreo-lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dondecabreo-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] && !Array.isArray(translations[lang][key])) {
      el.textContent = translations[lang][key];
    }
  });
  // Update benefits list if present
  const list = document.getElementById('benefits-list');
  if (list) {
    list.innerHTML = '';
    translations[lang].benefits.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      list.appendChild(li);
    });
  }
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  if (typeof window.onLangChange === 'function') window.onLangChange(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  // Allow legal pages to hook in
  if (typeof window.onLangChange === 'function') window.onLangChange(currentLang);
});
