// ===== VARIABLES GLOBALES =====
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// ===== NAVIGATION MOBILE =====
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animation du menu hamburger
    const bars = mobileMenu.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
}

// ===== ÉVÉNEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Menu mobile
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Fermer le menu mobile lors du clic en dehors
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
    
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Animation au scroll
    initScrollAnimations();
    
    // Smooth scroll pour les liens internes
    initSmoothScroll();
});

// ===== GESTION DU FORMULAIRE DE CONTACT =====
function handleContactForm(e) {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validation des champs requis
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Validation de l'email
    if (!isValidEmail(data.email)) {
        showNotification('Veuillez saisir une adresse email valide.', 'error');
        return;
    }
    
    // Simulation
