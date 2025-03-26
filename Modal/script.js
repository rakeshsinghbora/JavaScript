'use strict';

const modalButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton=document.querySelector('.close-modal');

const removeHidden = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', removeHidden);
}

closeModalButton.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);

document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        addHidden();
    }
});