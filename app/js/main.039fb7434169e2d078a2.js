(()=>{"use strict";var e,t={697:()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.querySelectorAll("[data-container]"),r=document.querySelectorAll("[data-modal]"),o=document.querySelector(".upper-menu__btn-burger"),i=document.querySelector(".main-menu__btn-burger-close"),a=document.querySelector(".sidebar-left"),s=document.querySelector(".overlay"),c=document.querySelector(".modal");function l(){a.classList.toggle("sidebar-left--open"),s.classList.toggle("overlay--open")}function d(t){e(r).forEach((function(e){t===e.dataset.modal&&e.classList.contains("modal-wrapper--open")?(c.classList.remove("modal--open"),e.classList.remove("modal-wrapper--open"),window.innerWidth>=1440&&s.classList.remove("overlay--open")):t!==e.dataset.modal||e.classList.contains("modal-wrapper--open")||(c.classList.add("modal--open"),e.classList.add("modal-wrapper--open"),window.innerWidth>=1440&&s.classList.add("overlay--open"))}))}document.addEventListener("click",(function(t){var r,o;r=t.target.dataset.name,e(n).forEach((function(e){return e.dataset.container===r?e.classList.toggle("open"):""})),t.target.classList.contains("read-more")&&((o=t.target).classList.contains("read-more--open")?(o.classList.remove("read-more--open"),o.textContent="Показать все"):(o.classList.add("read-more--open"),o.textContent="Скрыть"))})),document.addEventListener("click",(function(e){d(e.target.dataset.btn),e.target.classList.contains("read-more")&&d(e.target)})),o.addEventListener("click",(function(){l()})),i.addEventListener("click",(function(){l()}))},868:(e,t,n)=>{n(483);var r=n(370),o=n.n(r),i=new URL(n(418),n.b),a=new URL(n(375),n.b),s=new URL(n(143),n.b),c=new URL(n(905),n.b),l=new URL(n(544),n.b),d=new URL(n(357),n.b),p=new URL(n(435),n.b),u=new URL(n(346),n.b),f=new URL(n(801),n.b),m=new URL(n(980),n.b),b=new URL(n(120),n.b),w=new URL(n(230),n.b),g=new URL(n(700),n.b),v=o()(i),L=o()(a),y=o()(s),h=o()(c),x=o()(l),S=o()(d),U=o()(p),R=o()(u);o()(f),o()(m),o()(b),o()(w),o()(g);var O=n(6),k=document.querySelectorAll(".swiper-default"),E=document.querySelectorAll(".swiper-price");k.forEach((function(e){var t;function n(){if(window.innerWidth<=767&&!e.classList.contains("swiper-initialized"))return t=new O.ZP(e,{loop:!0,width:272,slidesPerView:1,spaceBetween:16,modules:[O.tl],pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});window.innerWidth>767&&e.classList.contains("swiper-initialized")&&t.destroy()}n(),window.addEventListener("resize",(function(){n()}))})),E.forEach((function(e){var t;function n(){if(window.innerWidth<=767&&!e.classList.contains("swiper-initialized"))return t=new O.ZP(e,{loop:!0,width:292,slidesPerView:1,spaceBetween:16,modules:[O.tl],pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});window.innerWidth>767&&e.classList.contains("swiper-initialized")&&t.destroy()}n(),window.addEventListener("resize",(function(){n()}))}));n(697)},905:(e,t,n)=>{e.exports=n.p+"img/checkstatus.65c0d421785a09435d9b.svg"},375:(e,t,n)=>{e.exports=n.p+"img/logo.8988ae4be0a7f98a8573.svg"},357:(e,t,n)=>{e.exports=n.p+"img/Lenovo.7e6d319b489073b82cfe.png"},435:(e,t,n)=>{e.exports=n.p+"img/Samsung.ae09ec98ccdbfe24f1f5.png"},801:(e,t,n)=>{e.exports=n.p+"img/ViewSonic.1ee82e60a9e7e3f4bc12.png"},230:(e,t,n)=>{e.exports=n.p+"img/acer.dc5c0a65bea36085a7e8.png"},346:(e,t,n)=>{e.exports=n.p+"img/apple.918fa835e5defd13468e.png"},980:(e,t,n)=>{e.exports=n.p+"img/bosh.b53e5840db3db26cfc67.png"},120:(e,t,n)=>{e.exports=n.p+"img/hp.0d1e9ad7d8b91ae14346.png"},700:(e,t,n)=>{e.exports=n.p+"img/sony.e74fec982ec50fb90835.png"},544:(e,t,n)=>{e.exports=n.p+"img/picture.b9f943fb08716b80456c.jpg"},143:(e,t,n)=>{e.exports=n.p+"img/repair.1a391734d700e965015a.svg"},418:(e,t,n)=>{e.exports=n.p+"img/favicon.dd04f1d2e7bcff0473fe.ico"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,i]=e[d],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",(()=>{r.b=document.baseURI||self.location.href;var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[489],(()=>r(868)));o=r.O(o)})();