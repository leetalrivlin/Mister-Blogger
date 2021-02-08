'use strict';

function toggleMenu(elBtn) {
    document.body.classList.toggle('menu-open');
    elBtn.innerText = (document.body.classList.contains('menu-open')) ? 'X' : '☰';
}

function openModal() {
    let elModal = document.querySelector('.modal');
    elModal.style.display = 'block';
    let elShadow = document.querySelector('.full-screen-shadow');
    elShadow.style.visibility = 'visible';
}

function closeModal() {
    let elModal = document.querySelector('.modal');
    elModal.style.display = 'none';
    let elShadow = document.querySelector('.full-screen-shadow');
    elShadow.style.visibility = 'hidden';
}