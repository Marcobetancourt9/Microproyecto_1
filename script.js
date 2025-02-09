const menuIcon = document.getElementById('menuIcon');
const menuContainer = document.getElementById('menuContainer');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    menuContainer.style.right = '0'; // Muestra el menú
    menuIcon.style.display = 'none'; // Oculta el icono del menú
});

closeMenu.addEventListener('click', () => {
    menuContainer.style.right = '-350px'; // Oculta el menú
    setTimeout(() => {
        menuIcon.style.display = 'block'; // Muestra el icono del menú después de cerrar
    }, 300); // Ajusta el tiempo según la duración de la transición
});

menuContainer.addEventListener('click', (event) => {
    if (event.target === menuContainer) {
        menuContainer.style.right = '-350px'; // Oculta el menú si se hace clic fuera del contenido
        setTimeout(() => {
            menuIcon.style.display = 'block'; // Muestra el icono del menú después de cerrar
        }, 300); // Ajusta el tiempo según la duración de la transición
    }
});