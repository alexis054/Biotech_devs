// Inicialización de AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
});
