document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Captura los valores de los inputs
    const nombre = document.querySelector("input[placeholder='Nombre y Apellido']").value;
    const asistencia = document.getElementById("opciones").value;
    const mensaje = document.querySelector("input[placeholder='Escribe tu mensaje']").value;

    // Enviar los datos a la hoja de Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbyGg12pcxQ6orUj0-MPB4RsTMTClbPHy9VYR9mug3LmjRhfl8uMB4B9MNh3TwDYIOfZuw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `nombre=${encodeURIComponent(nombre)}&asistencia=${encodeURIComponent(asistencia)}&mensaje=${encodeURIComponent(mensaje)}`
    })
    .then(response => response.json())
    .then(data => {

        console.log("Datos enviados exitosamente:", data);
        alert("¡Gracias por confirmar!");
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al confirmar la asistencia.");
    });
});