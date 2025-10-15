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

// This file contains the JavaScript code for the landing page.
// You can add functionality such as event listeners or DOM manipulation here.

document.addEventListener("DOMContentLoaded", () => {
  const demoForm = document.getElementById("demo-form");
  if (demoForm) {
    const demoResult = document.getElementById("demo-result");
    const spinner = document.getElementById("spinner");
    const submitText = document.getElementById("submit-text");
    const submitButton = document.getElementById("submit-button");
    demoResult.style.display = "none";
    spinner.style.display = "none";

    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get("user");

    if (userParam) {
      document.getElementById("usuario").value = userParam;
    }

    if (userParam === "testpropulse") {
      // Pre-fill the form with test data
      document.getElementById("crm").value = "Sperant";
      document.getElementById("documento").value = "auto-12345";
      document.getElementById("fecha-creacion").value = "2023-08-15";
      document.getElementById("genero").value = "Masculino";
      document.getElementById("canal-entrada").value = "Digital";
      document.getElementById("canal-entrada-detalle").value = "whatsapp";
      document.getElementById("rango-edad").value = "26-35";
      document.getElementById("interacciones-visita").value = 4;
      document.getElementById("interacciones-proforma").value = 3;
      document.getElementById("interacciones-whatsapp").value = 3;
      document.getElementById("interacciones-otras").value = 1;
    }

    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      spinner.style.display = "inline-block";
      submitText.style.display = "none";
      submitButton.disabled = true;

      const formData = new FormData(demoForm);
      const fields = {};
      for (const [key, value] of formData.entries()) {
        fields[key] = value;
      }

      const BASE_URL = "http://127.0.0.1:8000/api";
      fetch(`${BASE_URL}/predict/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields)
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            alert("Error: " + data.error);
            return;
          }

          const prediction = data.prediction;
          const probability = (prediction * 100).toFixed(2);
          document.getElementById("demo-result-value").innerText = `${probability}%`;
          demoResult.style.display = "block";
          demoResult.scrollIntoView({ behavior: "smooth", block: "start" });
        })
        .catch(error => {
          alert("Error: " + error);
        })
        .finally(() => {
          spinner.style.display = "none";
          submitText.style.display = "inline";
          submitButton.disabled = false;
        });
    });
  }
});
