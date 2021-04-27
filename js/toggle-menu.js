const toggleMenu = document.querySelector('.toggle-menu');
const headerMenu = document.querySelector('.header-menu');

toggleMenu.addEventListener('click', function() {
    const rolling = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
    toggleMenu.setAttribute('aria-expanded', !rolling);
    document.body.classList.toggle('cross');
    headerMenu.hidden = !headerMenu.hidden;
})