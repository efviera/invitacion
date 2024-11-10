document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir el envío normal del formulario

    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("opciones").value,
      attendance: document.getElementById("mensaje").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyrTmX_DACQUgO2WtQ2lE8_KS_gn5yYH0YljRYsLzbKU1iK4ghLx2CyvBSgZ3z0-D3ZxQ/exec", { // Aquí va tu URL del script
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        alert("¡Confirmación enviada con éxito!");
      }
    })
    .catch(error => {
      alert("Hubo un error al enviar la confirmación. Inténtalo de nuevo.");
    });
  });