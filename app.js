const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
})

// window.addEventListener('scroll', () => {
//     navbar.classList.toggle('sticky', window.scrollY > 0);
// })

let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.backgroundColor = '#fff'
    } else {
        navbar.style.top = "-100px";
    }

    if (window.scrollY === 0) {
        navbar.style.removeProperty('background-color')
    }
    prevScrollpos = currentScrollPos;
}


