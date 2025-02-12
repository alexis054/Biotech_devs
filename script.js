// Inicialización de AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

document.addEventListener('DOMContentLoaded', () => {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Partículas cargadas correctamente.');
    });

    // Ajustar el canvas de particles.js para que ocupe toda la sección del hero
    const particlesCanvas = document.querySelector('#particles-js canvas');
    if (particlesCanvas) {
        particlesCanvas.style.position = 'absolute';
        particlesCanvas.style.top = '0';
        particlesCanvas.style.left = '0';
        particlesCanvas.style.width = '100%';
        particlesCanvas.style.height = '100%';
    }

    AOS.init({
        duration: 1000,
        once: true,
    });
});


document.addEventListener('DOMContentLoaded', () => {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Partículas cargadas correctamente.');
    });

    AOS.init({
        duration: 1000,
        once: true,
    });
});

// Filtrado de proyectos
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Remover clase activa de todas las tarjetas
        document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');

        // Mostrar sección de proyectos
        document.getElementById('projects').style.display = 'block';

        // Filtrar proyectos
        document.querySelectorAll('.project-card').forEach(project => {
            if(project.dataset.category === category) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    });
});

// Función para ocultar proyectos
window.hideProjects = () => {
    document.getElementById('projects').style.display = 'none';
    document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
}

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
});



