// Asigna el evento click solo al botón de la capilla
document.getElementById("capilla").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/SgmE7T4tfKKVRyUa7", "_blank");
});

// Asigna el evento click solo al botón del club
document.getElementById("club").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/jkbfx1ytrXgk5UWK7", "_blank");
});

// Asigna el evento click solo al botón del álbum
document.getElementById("album").addEventListener("click", function() {
    window.open("https://onelifesocial.page.link/SjMX", "_blank");
});

// Reproduce el audio automáticamente cuando el contenido está cargado
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("tema");
    audio.play().catch(function(error) {
        console.log("El navegador bloqueó el autoplay");
    });
});

document.getElementById("conf").addEventListener("click", function(){
    window.open("https://forms.gle/HLpzmEnbfoqyXiod8", "_blank");
});