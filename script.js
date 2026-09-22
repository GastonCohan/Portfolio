// La navegacion usa anclas nativas (<a href="#seccion">) con
// scroll-behavior: smooth en el CSS. El navegador re-ancla el destino
// si el alto de la pagina cambia mientras baja, cosa que aca pasa
// porque las imagenes cargan en diferido.

// Menu mobile: muestra u oculta la navegacion en pantallas chicas.
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    const abierto = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(abierto));
});

// Al tocar un link en mobile, cerramos el menu.
navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});
