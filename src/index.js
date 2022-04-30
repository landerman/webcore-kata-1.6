"use strict";

const dataNameContainers = document.querySelectorAll('[data-container]');
const burger = document.querySelector('.upper-menu__btn-burger');
const closeBurger = document.querySelector('.main-menu__btn-burger-close');
const sidebar = document.querySelector('.sidebar-left');
const overlay = document.querySelector('.overlay');

function openMore(name) {
    [...dataNameContainers].forEach(container => {
       return container.dataset.container === name ? container.classList.toggle('open') : '';
    })
}

function changeBtn(btn) {
    if (!btn.classList.contains('read-more--open')) {
        btn.classList.add('read-more--open');
        btn.textContent = "Скрыть"
    } else {
        btn.classList.remove('read-more--open');
        btn.textContent = "Показать все"
    }
}

document.addEventListener('click', e => {
    openMore(e.target.dataset.name);

    if (e.target.classList.contains('read-more')) {
        changeBtn(e.target)
    }
})


function toggleLeftSidebar () {
    sidebar.classList.toggle('sidebar-left--open');
    overlay.classList.toggle('overlay--open');
}
burger.addEventListener('click', () => {
    toggleLeftSidebar();
})

closeBurger.addEventListener('click', () => {
    toggleLeftSidebar();
})