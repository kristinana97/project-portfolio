const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__item_link');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');

}

navLink.forEach(link => link.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
}
