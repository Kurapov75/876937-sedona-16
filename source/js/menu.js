var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var logoTop = document.querySelector('.page-hdr__logo-img');

navMain.classList.add('main-nav--closed');
logoTop.classList.add('page-hdr__logo-img--top');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle')) {
    navMain.classList.remove('main-nav--closed');
    logoTop.classList.remove('page-hdr__logo-img--top');
    navToggle.classList.add('main-nav__close');
    navToggle.classList.remove('main-nav__toggle');
  }
  else {
    navMain.classList.add('main-nav--closed');
    logoTop.classList.add('page-hdr__logo-img--top');
    navToggle.classList.remove('main-nav__close');
    navToggle.classList.add('main-nav__toggle');
  }
});
