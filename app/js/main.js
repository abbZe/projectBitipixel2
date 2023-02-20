'use strict'
// Theme switcher
let themeButtonLight = document.querySelector('.button__light-theme');
let themeButtonDark = document.querySelector('.button__dark-theme');

themeButtonDark.onclick = function () {
  document.body.classList.add('dark-theme');
  themeButtonDark.classList.add('active-button');
  themeButtonLight.classList.remove('active-button');
};

themeButtonLight.onclick = function () {
  document.body.classList.remove('dark-theme');
  themeButtonDark.classList.remove('active-button');
  themeButtonLight.classList.add('active-button');
};

// Side-menu switcher
let hamburger = document.querySelector('.button__hamburger');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.onclick = function () {
  mobileNav.classList.toggle('hidden');
  hamburger.classList.toggle('active-button');
};

// Gallery
let photoPreviews = document.querySelectorAll('.preview-item');
let activePhoto = document.querySelector('.gallery__active-photo');

for (let photoPreview of photoPreviews) {
  
  photoPreview.onclick = function () {
    activePhoto.src = photoPreview.querySelector('img').src;

    let activePreview = document.querySelector('.active-preview');
    activePreview.classList.remove('active-preview');
    photoPreview.classList.add('active-preview');
  }
};