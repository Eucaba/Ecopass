/**Cuando hago click en .button, la clase .nav activa el TOGGLE 'activo' */
const menu = document.querySelector('.menu');
const nav    = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('activo')
})