'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); // limitação do "querySelector": seletor com múltiplos elementos vai selecionar só o 1º elemento
const btnsOpenModal = document.querySelectorAll('.show-modal'); // retorna NodeList com todos elementos
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
}