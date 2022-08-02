const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
})


