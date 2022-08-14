const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
    hamburger.classList.toggle('active');
});


let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.backgroundColor = '#fff'
        navbar.style.boxShadow = '0 3px 3px #e9eef2'
        navbar.style.height = '80px'
    } else {
        navbar.style.top = "-85px";
    }

    if (window.scrollY === 0) {
        navbar.style.removeProperty('background-color')
        navbar.style.removeProperty('box-shadow')
        navbar.style.height = '100px'
    }
    prevScrollpos = currentScrollPos;
}


