export const scrollerConfig = {
  scrollerBtnPrevSelector: '.swiper-nav__item_dir_prev',
  scrollerBtnNextSelector: '.swiper-nav__item_dir_next',
  scrollerPagination: '.swiper-pagination'
}

export const quizConfig = {
  quizElActiveClass: 'quiz_active',
  quizWrapperSel: '.quiz__wrapper',
  quizPaneSel: '.quiz__pane',
  quizPaneActiveClass: 'quiz__pane_active',
  quizBtnPrevSel: '.quiz__prev',
  quizBtnNextSel: '.quiz__next',
  quizProgressSel: '.quiz__progress-runner',
  quizCurrentSel: '.quiz__pagination-current'
};

export const quizFormConfig = {
  togglerSel: '.toggler',
  inputSel: '.form__field',
  btnSubmitSel: '.quiz__submit'
};

export const formConfig = {
  el: 'form',
  uploaderSel: '.form__uploader',
  fieldSel: '.form__field',
  fieldActiveClass: 'form__field_active'
};

export const formUploaderConfig = {
  inputFileMetaSel: '.form__uploader-meta',
  inputFileMetaTitleSel: '.form__uploader-filename',
  inputFileResetBtnSel: '.form__uploader-reset'
};

export function toggleClassName(togglerEl, {targetSel, classNameActive}) {
  const el = {
    target: togglerEl.closest(targetSel),
    className: classNameActive
  };
  el.target.classList.toggle(el.className);
}
