// ===== MENU MOBILE =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});

// ===== FORM CONTATO =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.');
            return;
        }
        
        // Construct WhatsApp message
        const whatsappNumber = '5511954351021';
        const serviceMap = {
            'dpvat': 'DPVAT',
            'inss': 'INSS',
            'seguros': 'Seguros Diversos',
            'outros': 'Outros'
        };
        
        const serviceText = service ? `Serviço: ${serviceMap[service] || service}\n` : '';
        
        const whatsappMessage = `Olá Power Perícias! 👋\n\n` +
                              `*Nome:* ${name}\n` +
                              `*E-mail:* ${email}\n` +
                              `*Telefone:* ${phone || 'Não informado'}\n` +
                              `${serviceText}` +
                              `*Mensagem:*\n${message}`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Feedback
        contactForm.reset();
        alert('Mensagem enviada! Você será redirecionado ao WhatsApp para continuar o atendimento.');
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== ANIMATED COUNTER (optional enhancement) =====
// This is a simple observer for future use
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
}

// ===== YEAR IN FOOTER =====
const yearElements = document.querySelectorAll('.footer-bottom p:first-child');
yearElements.forEach(el => {
    const year = new Date().getFullYear();
    el.textContent = el.textContent.replace('2026', year);
});