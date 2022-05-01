"use strict";

const dataNameContainers = document.querySelectorAll('[data-container]');
const dataNameModal = document.querySelectorAll('[data-modal]');
const body = document.body;
const burger = document.querySelector('.upper-menu__btn-burger');
const closeBtn = document.querySelector('.main-menu__btn-burger-close');
const sidebar = document.querySelector('.sidebar-left');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

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

function toggleLeftSidebar () {
    sidebar.classList.toggle('sidebar-left--open');
    overlay.classList.toggle('overlay--open');
}

function toggleModal(btn) {
    [...dataNameModal].forEach(modalEl => {
        if (btn === modalEl.dataset.modal && modalEl.classList.contains('modal-wrapper--open')) {
            modal.classList.remove('modal--open');
            modalEl.classList.remove('modal-wrapper--open');
            body.classList.remove('disable-scroll');
            if (window.innerWidth >= 1440) {
                overlay.classList.remove('overlay--open');
            }
        } else if (btn === modalEl.dataset.modal && !modalEl.classList.contains('modal-wrapper--open')) {
            modal.classList.add('modal--open');
            modalEl.classList.add('modal-wrapper--open');
            body.classList.add('disable-scroll');
            if (window.innerWidth >= 1440) {
                overlay.classList.add('overlay--open');
            }
        }
    })
}

function closeOverlay() {
        [...dataNameModal].forEach(modalEl => {
            modal.classList.remove('modal--open');
            modalEl.classList.remove('modal-wrapper--open');
            body.classList.remove('disable-scroll');
            overlay.classList.remove('overlay--open');
        });
        sidebar.classList.remove('sidebar-left--open');
}

document.addEventListener('click', (e) => {
    openMore(e.target.dataset.name);

    if (e.target.classList.contains('read-more')) {
        changeBtn(e.target)
    }
})

burger.addEventListener('click', () => {
    toggleLeftSidebar();
})

closeBtn.addEventListener('click', () => {
    toggleLeftSidebar();
})

document.addEventListener('click', (e) => {
    toggleModal(e.target.dataset.btn);
})

overlay.addEventListener('click', (e) => {
    if(e.target === overlay) {
        closeOverlay()
    }
})

document.addEventListener('keydown', (e) => {
    if( e.code === "Escape" && overlay.classList.contains('overlay--open')) {
        closeOverlay()
    }
})

