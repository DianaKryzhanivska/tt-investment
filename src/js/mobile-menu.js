import * as bodyScrollLock from 'body-scroll-lock';

const mobileMenu = document.querySelector('.menu-container');
const openMenuBtn = document.querySelector('.burger-button');
const closeMenuBtn = document.querySelector('.menu-container .close-button');
const menuLinks = document.querySelectorAll(
  '.nav-list-mobile .nav-item-mobile'
);

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', toggleMenu);
});

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', 'false');
  disableBodyScroll(document.body);
});
