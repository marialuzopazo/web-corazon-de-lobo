// Menu del celu 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navList.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Cerrar el menu 
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
// Form funcional con EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar mensaje de carga
        const submitBtn = this.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Configuración de EmailJS (REEMPLAZÁ CON TUS DATOS REALES)
        emailjs.init("service_euok49g"); // Tu Public Key de EmailJS
        
        // Enviar el formulario (REEMPLAZÁ CON TUS DATOS REALES)
        emailjs.sendForm('service_euok49g', 'template_tu_template_id', this)
            .then(function() {
                alert('¡Gracias por tu consulta! Te contactaremos pronto.');
                contactForm.reset();
            }, function(error) {
                alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contactanos directamente por WhatsApp.');
                console.error('Error EmailJS:', error);
            })
            .finally(function() {
                // Restaurar botón
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}
    
    // Scroll para header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--color-white)';
            header.style.backdropFilter = 'none';
        }
    });
});
