/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var dataNameContainers = document.querySelectorAll('[data-container]');

function openMore(name) {
  _toConsumableArray(dataNameContainers).filter(function (container) {
    container.dataset.container === name ? container.classList.toggle('open') : '';
  });
}

function changeBtn(btn) {
  if (!btn.classList.contains('read-more--open')) {
    btn.classList.add('read-more--open');
    btn.textContent = "Скрыть";
  } else {
    btn.classList.remove('read-more--open');
    btn.textContent = "Показать все";
  }
}

document.addEventListener('click', function (e) {
  openMore(e.target.dataset.name);

  if (e.target.classList.contains('read-more')) {
    changeBtn(e.target);
  }
});

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {

var slider = document.querySelector(".swiper");
var swiper;

function createSlider() {
  if (window.innerWidth < 767 && !slider.classList.contains('swiper-initialized')) {
    return swiper = new Swiper(slider, {
      loop: true,
      width: 272,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  if (window.innerWidth > 767 && slider.classList.contains('swiper-initialized')) {
    return swiper.destroy();
  }
}

createSlider();
window.addEventListener('resize', function () {
  createSlider();
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/Lenovo.png */ "./img/logotips/Lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/Samsung.png */ "./img/logotips/Samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/apple.png */ "./img/logotips/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/ViewSonic.png */ "./img/logotips/ViewSonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/bosh.png */ "./img/logotips/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/hp.png */ "./img/logotips/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/acer.png */ "./img/logotips/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logotips/sony.png */ "./img/logotips/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <title>Сервис центр</title>\r\n</head>\r\n<body>\r\n<div class=\"sidebar-left\">\r\n  <div class=\"sidebar-left__wrapper container\">\r\n    <div class=\"sidebar-left__main-menu main-menu\">\r\n      <div class=\"main-menu__top\">\r\n        <div class=\"main-menu__top-header\">\r\n          <button class=\"main-menu__btn main-menu__btn-burger-close btn--reset\" aria-label=\"Открыть меню\"></button>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Логотип компании\" class=\"main-menu__logo\">\r\n          <button class=\"main-menu__btn main-menu__btn-search btn--reset\" aria-label=\"Открыть меню\"></button>\r\n        </div>\r\n        <ul class=\"main-menu__list\">\r\n          <li class=\"main-menu__item main-menu__item--active\"><a href=\"#\" class=\"main-menu__link\">Ремонт техники</a>\r\n          </li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Услуги и сервисы</a>\r\n          </li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Корпоративным клиентам</a></li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Продавцам техники</a></li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Партнерам</a></li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Производителям</a></li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Наши сервисные центры</a></li>\r\n          <li class=\"main-menu__item\"><a href=\"#\" class=\"main-menu__link\">Контакты</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"main-menu__bottom\">\r\n        <div class=\"main-menu__btn-wrapper\">\r\n          <button class=\"main-menu__btn main-menu__btn-call btn--reset\" aria-label=\"Заказать звонок\"></button>\r\n          <button class=\"main-menu__btn main-menu__btn-chat btn--reset\" aria-label=\"Обратная связь\"></button>\r\n          <button class=\"main-menu__btn main-menu__btn-profile btn--reset\" aria-label=\"Профиль\"></button>\r\n        </div>\r\n        <div class=\"main-menu__contact-wrapper contact\">\r\n          <p class=\"contact__mail\">mail@cps.com</p>\r\n          <p class=\"contact__tel\">8 800 890 8900</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-menu__lang\">\r\n        <button class=\"main-menu__lang-btn main-menu__lang-btn--active btn--reset\">RU</button>\r\n        <button class=\"main-menu__lang-btn btn--reset\">EN</button>\r\n        <button class=\"main-menu__lang-btn btn--reset\">CH</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<header class=\"header\">\r\n  <div class=\"header__wrapper container\">\r\n    <div class=\"header__upper-menu upper-menu\">\r\n      <div class=\"upper-menu__left\">\r\n        <button class=\"upper-menu__btn upper-menu__btn-burger btn--reset\" aria-label=\"Открыть меню\"></button>\r\n        <div class=\"upper-menu__left-splitter\"></div>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Логотип компании\" class=\"upper-menu__logo\">\r\n      </div>\r\n      <div class=\"upper-menu__right\">\r\n        <button class=\"upper-menu__btn upper-menu__btn-call btn--reset\" aria-label=\"Заказать звонок\"></button>\r\n        <button class=\"upper-menu__btn upper-menu__btn-chat btn--reset\" aria-label=\"Обратная связь\"></button>\r\n        <button class=\"upper-menu__btn upper-menu__btn-profile btn--reset\" aria-label=\"Профиль\"></button>\r\n        <div class=\"upper-menu__right-splitter\"></div>\r\n        <button class=\"upper-menu__btn upper-menu__btn-repair btn--reset\" aria-label=\"Оставить заявку\"></button>\r\n        <button class=\"upper-menu__btn upper-menu__btn-checkstatus btn--reset\"\r\n                aria-label=\"Проверить статус ремонта\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<main>\r\n  <section class=\"services container\">\r\n    <div class=\"services__header services-header\">\r\n      <h1 class=\"visually-hidden\">Компания по ремонту техники CPS</h1>\r\n      <h2 class=\"services-header__title title\">Услуги и сервисы</h2>\r\n      <div class=\"services-header__btn-container\">\r\n        <div class=\"services-header__btn-wrapper\">\r\n          <button class=\"services-header__btn btn--reset\">Оставить заявку</button>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Оставить заявку\" class=\"services-header__btn-img\">\r\n        </div>\r\n        <div class=\"services-header__btn-wrapper\">\r\n          <button class=\"services-header__btn btn--reset\">Статус ремонта</button>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Проверить статус ремонта\" class=\"services-header__btn-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"services-header__menu\">\r\n        <ul class=\"services-header__list\">\r\n          <li class=\"services-header__item services-header__item--active\"><a href=\"#\"\r\n                                                                             class=\"services-header__link\">Ремонтируемые\r\n            бренды</a></li>\r\n          <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Ремонтируемые устройства</a>\r\n          </li>\r\n          <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Цены на услуги</a></li>\r\n          <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Адреса сервисных центров</a>\r\n          </li>\r\n          <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Специальные цены</a></li>\r\n          <li class=\"services-header__item\"><a href=\"#\" class=\"services-header__link\">Отзывы</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"services__description services-description\">\r\n      <div class=\"services-description__box\">\r\n        <div class=\"services-description__text \">\r\n          <p class=\"services-description__par\">Мы являемся авторизованным сервисным центром по ремонту техники Dell.\r\n            Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>\r\n          <p class=\"services-description__par\">Мы успешно работаем с 1992 года и заслужили репутацию надежного\r\n            партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются\r\n            по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>\r\n        </div>\r\n        <div class=\"services-description__more-box\">\r\n          <button class=\"services-description__read-more btn--reset\">Читать далее</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"brands\">\r\n    <div class=\"brands__header container\">\r\n      <h2 class=\"brands__title title\">Ремонт техники различных брендов</h2>\r\n    </div>\r\n    <div class=\"swiper container\">\r\n      <div class=\"swiper-wrapper brands__wrapper\" data-container=\"brands\">\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide brands__item--hp\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n        <div class=\"brands__item swiper-slide\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Логотип компании\" class=\"brands__item-img\">\r\n          <button class=\"brands__item-btn btn--reset\"></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"swiper-pagination\"></div>\r\n    </div>\r\n    <div class=\"brands__more-box container\">\r\n      <button class=\"brands__read-more read-more btn--reset\" data-name=\"brands\">Показать все</button>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/logotips/Lenovo.png":
/*!*********************************!*\
  !*** ./img/logotips/Lenovo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Lenovo.png";

/***/ }),

/***/ "./img/logotips/Samsung.png":
/*!**********************************!*\
  !*** ./img/logotips/Samsung.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Samsung.png";

/***/ }),

/***/ "./img/logotips/ViewSonic.png":
/*!************************************!*\
  !*** ./img/logotips/ViewSonic.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ViewSonic.png";

/***/ }),

/***/ "./img/logotips/acer.png":
/*!*******************************!*\
  !*** ./img/logotips/acer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/logotips/apple.png":
/*!********************************!*\
  !*** ./img/logotips/apple.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/logotips/bosh.png":
/*!*******************************!*\
  !*** ./img/logotips/bosh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/logotips/hp.png":
/*!*****************************!*\
  !*** ./img/logotips/hp.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/logotips/sony.png":
/*!*******************************!*\
  !*** ./img/logotips/sony.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map