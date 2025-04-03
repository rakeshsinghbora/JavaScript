'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=> btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//Smooth Scrolling 

const btnScroll=document.querySelector('.btn--scroll-to');
const section1=document.getElementById('section--1');

btnScroll.addEventListener('click',(e)=>{

  //Modern way compatible with new Browser
  // section1.scrollIntoView({behavior:'smooth'});


  //Old School
  const section1Coordinates=section1.getBoundingClientRect();

  window.scrollTo({
    left:section1Coordinates.left +window.pageXOffset,
    top:section1Coordinates.top +window.pageYOffset,
    behavior:'smooth'
  });
});
