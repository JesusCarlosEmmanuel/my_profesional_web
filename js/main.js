// Certificates data mapping from directory content
const certificados = [
    { name: "Microsoft SC-900", file: "Ceritificado Microsoft SC-900.pdf", type: "pdf" },
    { name: "Microsoft AZ-900 (Azure Fundamentals)", file: "Certificado Microsoft AZ-900_AzureFundamentals.pdf", type: "pdf" },
    { name: "Microsoft MS-900", file: "Certificado Microsoft MS-900.pdf", type: "pdf" },
    { name: "Microsoft SC-900 (Imagen)", file: "Certificado Microsoft_SC900.jpeg", type: "image" },
    { name: "Guía de Inicio YouTube", file: "Certificado guía de inicio YouTube.pdf", type: "pdf" },
    { name: "Full Stack BigSchool", file: "Certificado-Jesus-Emmanuel-Jimenez-Carlos-BigSchool.pdf", type: "pdf" },
    { name: "ICEMéxico Método 566", file: "Constancia_ICEMéxico_Método566.pdf", type: "pdf" },
    { name: "LinkedIn Full Stack", file: "Linkedin_Certificado_Fundamentos_Desarrollo web Full Stack.pdf", type: "pdf" },
    { name: "LinkedIn Full Stack / Frontend", file: "Linkedin_CertificadoDeFinalizacion_Fundamentos del desarrollo web Full Stack o Frontend.pdf", type: "pdf" },
    { name: "Constancia Jesús Jiménez - Método 566", file: "constancia_jesus_jimenez_Método_566.pdf", type: "pdf" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Generate Certificate Cards
    const certGrid = document.querySelector('.cert-grid');
    
    if (certGrid) {
        certificados.forEach(cert => {
            const iconClass = cert.type === 'pdf' ? 'bx bxs-file-pdf' : 'bx bxs-image';
            const card = document.createElement('a');
            card.href = `./assets/certificados/${encodeURIComponent(cert.file)}`;
            card.target = '_blank';
            card.className = 'cert-card glass-panel';
            
            card.innerHTML = `
                <i class='${iconClass}'></i>
                <h3>${cert.name}</h3>
                <span class="btn-small">Ver Certificado</span>
            `;
            
            certGrid.appendChild(card);
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
