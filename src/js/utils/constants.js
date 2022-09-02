export const scrollerConfig = {
  scrollerBtnPrevSelector: '.swiper-nav__item_dir_prev',
  scrollerBtnNextSelector: '.swiper-nav__item_dir_next',
  scrollerPagination: '.swiper-pagination'
}

export function toggleClassName(togglerEl, {targetSel, classNameActive}) {
  const el = {
    target: togglerEl.closest(targetSel),
    className: classNameActive
  };
  el.target.classList.toggle(el.className);
}
