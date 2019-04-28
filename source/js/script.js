var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');
var navMain = document.querySelector('.main-nav');
var searchMap = document.querySelector('.search__map-img');
var searchMapMarker = document.querySelector('.search__map-marker');
var searchMapGoogle = document.querySelector('.search__map');
var logoTop = document.querySelector('.page-hdr__logo-img');

navToggle.classList.remove('main-nav__toggle--nojs');
navClose.classList.remove('main-nav__close--nojs');
searchMapGoogle.classList.remove('search__map--nojs');
searchMap.classList.add('search__map--nojs');
searchMapMarker.classList.add('search__map--nojs');

navClose.addEventListener('click', function() {
  navMain.classList.add('main-nav--closed')
  logoTop.classList.add('page-hdr__logo-img--top')
});

navToggle.addEventListener('click', function() {
  navMain.classList.remove('main-nav--closed')
  logoTop.classList.remove('page-hdr__logo-img--top')
});
