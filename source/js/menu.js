var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');
var navMain = document.querySelector('.main-nav');
var logoTop = document.querySelector('.page-hdr__logo-img');

navToggle.classList.remove('main-nav__toggle--nojs');
navClose.classList.remove('main-nav__close--nojs');

navClose.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed')
  logoTop.classList.add('page-hdr__logo-img--top')
});

navToggle.addEventListener('click', function() {
  navMain.classList.remove('main-nav--closed')
  logoTop.classList.remove('page-hdr__logo-img--top')
});
