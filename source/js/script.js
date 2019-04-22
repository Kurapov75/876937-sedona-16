var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');
var navMain = document.querySelector('.main-nav');

navToggle.classList.remove('main-nav__toggle--nojs');
navClose.classList.remove('main-nav__close--nojs');

navClose.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed')
});

navToggle.addEventListener('click', function() {
  navMain.classList.remove('main-nav--closed')
});
