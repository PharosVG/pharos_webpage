const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    header.classList.toggle('menu-open');
});

const botones = [
    'btn-infante',
    'btn-adulto',
    'btn-pareja',
    'btn-sexologia',
    'btn-drogodependencia',
    'btn-deporte',
    'btn-taller1',
    'btn-taller2'
];

botones.forEach(id => {
    const boton = document.getElementById(id);
    if (boton) {
        boton.addEventListener('click', () => {
            window.location.href = "construccion.html";
        });
    }
});