/**Cuando hago click en .button, la clase .nav activa el TOGGLE 'activo' */
const menu = document.querySelector('.menu');
const nav    = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

// // Obtén referencias a los elementos del DOM
// const submitButton = document.querySelector('.buttonSend');
// const userIcon = document.getElementById('user-icon');
// const loginButton = document.querySelector('.login');
// const registerButton = document.querySelector('.register');

// // Agrega un manejador de evento para el formulario de inicio de sesión
// submitButton.addEventListener('click', function (event) {
//   event.preventDefault(); // Evita la recarga de la página por defecto

//   // Realiza la redirección a index.html (puedes omitir esta línea si deseas redirigir después del envío)
//   window.location.href = './../index.html';

//   // Oculta los botones de inicio de sesión y registro
//   loginButton.style.display = 'none';
//   registerButton.style.display = 'none';

//   // Muestra el icono de usuario
//   userIcon.style.display = 'block';
// });