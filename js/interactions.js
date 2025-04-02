// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Basic Mobile Menu
const mobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
};

