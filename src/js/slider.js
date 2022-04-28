import Swiper, {Pagination} from 'swiper';

const sliders = document.querySelectorAll(".swiper");

sliders.forEach((slider) => {
  let swiper;
  function createSlider() {
    if (window.innerWidth <= 767 && !slider.classList.contains('swiper-initialized')) {
      return swiper = new Swiper(slider, {
        loop: true,
        width: 272,
        slidesPerView: 1,
        spaceBetween: 16,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });
    }

    if (window.innerWidth > 767 && slider.classList.contains('swiper-initialized')) swiper.destroy()
  }

  createSlider()

  window.addEventListener('resize', () => {
    createSlider();
  });
})
