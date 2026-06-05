// ==========================================
// TYPING EFFECT - Terminal
// ==========================================
const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');
const texts = [
    "Soy Juan Didy, estudiante de Arquitectura de Plataformas y Servicios de TIC.",
    "Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.",
    "Actualmente trabajando en proyectos como SISGESA, ARKIT System y Sistema de Reportes Comunitarios.",
    "Busco mi primera oportunidad profesional para aportar mi energía y seguir aprendiendo."
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing effect when About section is visible
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            type();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (typingText) {
    observer.observe(typingText);
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('max-h-0');
        mobileMenu.classList.toggle('opacity-0');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('max-h-0');
        mobileMenu.classList.add('opacity-0');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// ==========================================
// SKILL CARDS INTERACTIVE TOGGLE
// ==========================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    const toggleBtn = card.querySelector('.toggle-btn');
    
    card.addEventListener('click', (e) => {
        // Prevent toggling twice if button is clicked
        if (e.target === toggleBtn || toggleBtn.contains(e.target)) {
            const isActive = card.classList.contains('active');
            
            // Close all other cards
            skillCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.toggle-btn').textContent = '+';
                }
            });
            
            // Toggle current card
            if (isActive) {
                card.classList.remove('active');
                toggleBtn.textContent = '+';
            } else {
                card.classList.add('active');
                toggleBtn.textContent = '×';
            }
        }
    });
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-background-card/95', 'backdrop-blur-sm', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-background-card/95', 'backdrop-blur-sm', 'shadow-lg');
    }
});

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const animateOnScroll = document.querySelectorAll('.animate-fade-in-up');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

animateOnScroll.forEach(el => {
    el.style.animationPlayState = 'paused';
    scrollObserver.observe(el);
});