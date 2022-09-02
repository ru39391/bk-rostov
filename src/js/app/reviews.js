import { scrollerConfig, toggleClassName } from '../utils/constants';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const reviewsEl = document.querySelector('.reviews__slides');
if(reviewsEl) {
  new Swiper(reviewsEl, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 2,
    spaceBetween: 36,
    loop: true,
    /*
    autoplay: {
      delay: 3000,
    },
    */
    navigation: {
      prevEl: reviewsEl.parentNode.querySelector(scrollerConfig.scrollerBtnPrevSelector),
      nextEl: reviewsEl.parentNode.querySelector(scrollerConfig.scrollerBtnNextSelector),
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      },
    },
  });
}

const reviewsReadmoreTogglerArr = Array.from(document.querySelectorAll('.reviews__readmore'));
reviewsReadmoreTogglerArr.forEach(reviewsReadmoreTogglerArrEl => {
  reviewsReadmoreTogglerArrEl.addEventListener('click', e => {
    e.preventDefault();
    toggleClassName(e.target, {
      targetSel: '.reviews__item',
      classNameActive: 'reviews__item_active'
    });
  });
});
