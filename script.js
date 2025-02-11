// Animación de fondo neuronal
class NeuralNetwork {
    constructor() {
        this.initThreeJS();
        this.createNeuralConnections();
    }

    initThreeJS() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('.neural-background').appendChild(this.renderer.domElement);
    }

    createNeuralConnections() {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        const positions = new Float32Array(/* ... */);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.lines = new THREE.LineSegments(geometry, material);
        this.scene.add(this.lines);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.lines.rotation.x += 0.001;
        this.lines.rotation.y += 0.001;
        this.renderer.render(this.scene, this.camera);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    const neuralNetwork = new NeuralNetwork();
    neuralNetwork.animate();

    // Efectos de entrada de formulario
    document.querySelectorAll('.terminal-input').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.textShadow = '0 0 10px var(--neon-green)';
        });
    });

    // Envío de formulario
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        document.querySelector('.terminal-header').innerHTML = `
            <span class="success-message">
                Mensaje transmitido con éxito!
                <div class="loading-dots">
                    <div class="dot-pulse"></div>
                </div>
            </span>
        `;
    });
});
