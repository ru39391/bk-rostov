import { scrollerConfig, toggleClassName } from '../utils/constants';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const promoScroller = document.querySelector('.promo');
if(promoScroller) {
  new Swiper(promoScroller, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: promoScroller.querySelector(scrollerConfig.scrollerBtnPrevSelector),
      nextEl: promoScroller.querySelector(scrollerConfig.scrollerBtnNextSelector),
    },
    pagination: {
      el: promoScroller.querySelector(scrollerConfig.scrollerPagination),
      clickable: true
    },
  });
}
