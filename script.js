const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    header.classList.toggle('menu-open');
});

const rutas = {
    'btn-infante': 'https://forms.gle/5BwnG9id6LnCp4CJ6',
    'btn-adulto': 'https://forms.gle/udTfcmVotEDZH6pK6',
    'btn-pareja': 'https://forms.gle/MtTFLkrxYC1f6KYx8',
    'btn-sexologia': 'https://forms.gle/JjqFWosojTJ7G83y5',
    'btn-drogodependencia': 'https://forms.gle/QjxyBf1nj4Y6vg3J8',
    'btn-alimentacion': 'https://forms.gle/zxa1SpzBZYnbLkcSA',
    'btn-deporte': 'https://forms.gle/CFKv7LMPzJwLdzfC8 ',
    'btn-taller1': 'construccion.html',
    'btn-taller2': 'construccion.html'
};

Object.keys(rutas).forEach(id => {
    const boton = document.getElementById(id);

    if (boton) {
        boton.addEventListener('click', () => {
            window.location.href = rutas[id];
        });
    }
});
