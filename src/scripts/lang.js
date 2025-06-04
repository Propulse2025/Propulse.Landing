// lang.js
const translations = {
  es: {
    "nav-inicio": "Inicio",
    "nav-clientes": "Clientes",
    "nav-servicios": "Servicios",
    "nav-equipo": "Equipo",
    "nav-contacto": "Contacto",
    "nav-demo-btn": "Solicita una demo",
    "main-heading": "Predicciones que cierran ventas inmobiliarias más rápido",
    "main-desc":
      "Identifica a los clientes listos para comprar con tecnología predictiva impulsada por IA",
    "demo-btn": "Solicita una demo ahora",
    "video-btn": "Ver video",
    "sku-heading":
      "Soluciones inteligentes para entender y anticipar el mercado inmobiliario",
    "sku-desc":
      "Combinamos analítica predictiva y datos especializados para ayudarte a optimizar tus ventas y decisiones comerciales",
    "predictpro-title": "Análisis Predictivo de Compra | PredictPro",
    "predictpro-desc":
      "Optimiza tus ventas priorizando leads mediante la predicción de la probabilidad de compra de los clientes. Utiliza inteligencia artificial para maximizar la efectividad de tu equipo de ventas.",
    "marketvision-title": "Inteligencia de Mercado Inmobiliario | MarketVision",
    "marketvision-desc":
      "Proveemos scraping de datos y reportes especializados para respaldar decisiones estratégicas basadas en información detallada del mercado. Obtén insights precisos y actualizados para tomar decisiones más competitivas.",
    "hunter-title": "Análisis de Precios Inmobiliarios | Smart Property Hunter",
    "hunter-desc":
      "Ayudamos a inversionistas a encontrar inmuebles subvalorados mediante inteligencia artificial, anticipándose al mercado y maximizando su retorno. Detecta oportunidades antes que el resto y mejora tu estrategia de inversión con datos precisos.",
    "clientes-title1": "Algunos de nuestros clientes",
    "clientes-title2": "Quienes confian en nosotros",
    "team-title": "Conoce al equipo",
    "footer-nav-title": "Navegacion",
    "footer-nav-inicio": "Inicio",
    "footer-nav-clientes": "Clientes",
    "footer-nav-servicios": "Servicios",
    "footer-nav-equipo": "Equipo",
    "footer-nav-contacto": "Contacto",
    "footer-support-title": "Soporte",
    "footer-privacy": "Política de privacidad",
    "footer-terms": "Términos y Condiciones",
    "footer-contact-title": "Contactanos",
  },
  en: {
    "nav-inicio": "Home",
    "nav-clientes": "Clients",
    "nav-servicios": "Services",
    "nav-equipo": "Team",
    "nav-contacto": "Contact",
    "nav-demo-btn": "Request a demo",
    "main-heading": "Predictions that close real estate sales faster",
    "main-desc":
      "Identify customers ready to buy with AI-powered predictive technology",
    "demo-btn": "Request a demo now",
    "video-btn": "Watch video",
    "sku-heading":
      "Smart solutions to understand and anticipate the real estate market",
    "sku-desc":
      "We combine predictive analytics and specialized data to help you optimize your sales and business decisions",
    "predictpro-title": "Purchase Predictive Analysis | PredictPro",
    "predictpro-desc":
      "Optimize your sales by prioritizing leads through predicting customer purchase probability. Use AI to maximize your sales team’s effectiveness.",
    "marketvision-title": "Real Estate Market Intelligence | MarketVision",
    "marketvision-desc":
      "We provide data scraping and specialized reports to support strategic decisions based on detailed market information. Get accurate and updated insights to make more competitive decisions.",
    "hunter-title": "Real Estate Price Analysis | Smart Property Hunter",
    "hunter-desc":
      "We help investors find undervalued properties using AI, anticipating the market and maximizing returns. Detect opportunities before others and improve your investment strategy with precise data.",
    "clientes-title1": "Some of our clients",
    "clientes-title2": "Who trust us",
    "team-title": "Meet the team",
    "footer-nav-title": "Navigation",
    "footer-nav-inicio": "Home",
    "footer-nav-clientes": "Clients",
    "footer-nav-servicios": "Services",
    "footer-nav-equipo": "Team",
    "footer-nav-contacto": "Contact",
    "footer-support-title": "Support",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms & Conditions",
    "footer-contact-title": "Contact us",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.getElementById("lang-switcher");
  let userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.startsWith("es") ? "es" : "en";
  if (switcher) {
    switcher.value = userLang;
    switcher.addEventListener("change", function () {
      setLanguage(this.value);
    });
    setLanguage(switcher.value);
  }
});
