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

      const BASE_URL = "https://wk3jq9pk-8000.uks1.devtunnels.ms/api";
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
