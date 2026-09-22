function scrollToSection(selector) {
    const el = document.querySelector(selector);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cada link del nav hace scroll suave a su seccion.
// El optional chaining evita que rompa si algun elemento no existe.
const navLinks = [
    ['link-home', '#top'],
    ['link-work', '#work'],
    ['link-projects', '#projects'],
    ['link-about', '#footer'],
];

navLinks.forEach(([id, target]) => {
    document.getElementById(id)?.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(target);
    });
});

// Menu mobile: muestra/oculta la navegacion en pantallas chicas.
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Al tocar un link en mobile, cerramos el menu.
navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});
