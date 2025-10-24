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
            
            // Configuración de EmailJS
            emailjs.init("service_euok49g"); // Reemplazar con tu User ID de EmailJS
            
            // Enviar el formulario
            emailjs.sendForm('service_euok49g', 'tu_template_id', this)
                .then(function() {
                    alert('¡Gracias por tu consulta! Te contactaremos pronto.');
                    contactForm.reset();
                }, function(error) {
                    alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
                    console.error('Error:', error);
                });
        });
    }
    
    // Scroll
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
