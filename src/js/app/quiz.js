import {Quiz} from '../components/Quiz';
import {quizConfig, quizFormConfig} from '../utils/constants';

const quizEl = document.querySelector('.quiz');
if(quizEl) {
  const quiz = new Quiz(quizEl, quizConfig, quizFormConfig);
  quiz.setEventListeners();
}
