const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', scrollNavbar)

function scrollNavbar() {
   if (window.scrollY > navbar.offsetHeight + 200) {
    navbar.classList.add('show');
   }else {
    navbar.classList.remove('show')
   }
}