import { scrollerConfig } from '../utils/constants';
import Swiper, { Navigation } from 'swiper';

const projectsEl = document.querySelector('.projects__slides');
if(projectsEl) {
  new Swiper(projectsEl, {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
      prevEl: projectsEl.parentNode.querySelector(scrollerConfig.scrollerBtnPrevSelector),
      nextEl: projectsEl.parentNode.querySelector(scrollerConfig.scrollerBtnNextSelector),
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
    },
  });
}
