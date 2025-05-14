'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); // limitação do "querySelector": seletor com múltiplos elementos vai selecionar só o 1º elemento
const btnsOpenModal = document.querySelectorAll('.show-modal'); // retorna NodeList com todos elementos
// console.log(btnsOpenModal);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    console.log('test');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);
}

// btnCloseModal.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

btnCloseModal.addEventListener('click', closeModal); // especialmente sem () pois quer iniciar somente ao clicar no botão

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log('test');
    // console.log(e);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // console.log('test');
        // if (!modal.classList.contains('hidden')) {
        closeModal(); // dessa vez será preciso chamá-la
    }
});
