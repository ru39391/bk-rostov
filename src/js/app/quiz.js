import {Quiz} from '../components/Quiz';

const quizEl = document.querySelector('.quiz');
const quizConfig = {
  quizElActiveClass: 'quiz_active',
  quizWrapperSel: '.quiz__wrapper',
  quizPaneSel: '.quiz__pane',
  quizPaneActiveClass: 'quiz__pane_active',
  quizBtnPrevSel: '.quiz__prev',
  quizBtnNextSel: '.quiz__next',
  quizProgressSel: '.quiz__progress-runner',
  quizCurrentSel: '.quiz__pagination-current'
};
const quizFormConfig = {
  togglerSel: '.toggler',
  inputSel: '.form__field',
  btnSubmitSel: '.quiz__submit'
};

if(quizEl) {
  const quiz = new Quiz(quizEl, quizConfig, quizFormConfig);
  quiz.setEventListeners();
}
