// Funcionalidad para revelar respuestas en la sección de práctica
function mostrarRespuesta() {
    const respuesta = document.getElementById('respuesta');
    if (respuesta.style.display === 'none' || respuesta.style.display === '') {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}

// Simulación de Buscador Interno
function buscarTema() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    
    // Lógica básica para redirigir según la palabra clave
    // En un sitio real, esto filtraría elementos del DOM o usaría un archivo JSON
    if(input.includes("derivada") || input.includes("calculo")) {
        window.location.href = "tema-calculo.html";
    } else if (input !== "") {
        alert("Buscando: " + input + "... (Funcionalidad a expandir conectando con tus archivos HTML)");
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}

// Manejo del formulario de contacto y protección Anti-Spam
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita recargar la página
            
            // Verificación del Honeypot (Seguridad básica)
            // Si un bot llena el campo invisible, el envío se cancela en silencio
            const honeypot = document.getElementById('honeypot').value;
            if (honeypot !== "") {
                console.log("Spam detectado.");
                return;
            }

            // Aquí integrarías un servicio gratuito como Formspree o Formcarry 
            // para enviar el correo desde GitHub Pages, ya que GH Pages no tiene backend.
            alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.");
            form.reset();
        });
    }
});