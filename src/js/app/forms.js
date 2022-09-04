import Inputmask from 'inputmask';
import classie from 'desandro-classie';
import {Counter} from '../components/Counter';
import {Uploader} from '../components/Uploader';
import {formConfig, formPaneConfig, formUploaderConfig, inputCounterConfig} from '../utils/constants';

const formsArr = Array.from(document.querySelectorAll(formConfig.el));
formsArr.forEach(formsArrEl => {
  const phoneInput = formsArrEl.querySelector('[name*="phone"]');
  if(phoneInput) {
    Inputmask({
      mask: '+7 (999) 999-99-99',
          showMaskOnHover: false,
    }).mask(phoneInput);
  }
});

const formUploadersArr = Array.from(document.querySelectorAll(formConfig.uploaderSel));
formUploadersArr.forEach(formUploadersArrEl => {
  const formUploader = new Uploader(formUploadersArrEl, formUploaderConfig);
  formUploader.setEventListeners();
});

const formFieldsArr = Array.from(document.querySelectorAll(formConfig.fieldSel));
function onInputFocus(e) {
  classie.add(e.target, formConfig.fieldActiveClass);
}
function onInputBlur(e) {
  if(e.target.value.trim() === '') {
    classie.remove(e.target, formConfig.fieldActiveClass);
  }
};

formFieldsArr.forEach(formFieldsArrEl => {
  if(formFieldsArrEl.value.trim() !== '') {
    classie.add(formFieldsArrEl, formConfig.fieldActiveClass);
  }
  formFieldsArrEl.addEventListener('focus', onInputFocus);
  formFieldsArrEl.addEventListener('blur', onInputBlur);
});

const inputCountersArr = Array.from(document.querySelectorAll(formConfig.inputCounterSel));
inputCountersArr.forEach(inputCountersArrEl => {
  const inputCounter = new Counter(inputCountersArrEl, inputCounterConfig);
  inputCounter.init();
  inputCounter.setEventListeners();
});

const formPaneTogglersArr = Array.from(document.querySelectorAll(formPaneConfig.toggler));
formPaneTogglersArr.forEach(formPaneTogglersArrEl => {
  formPaneTogglersArrEl.addEventListener('click', e => {
    e.preventDefault();
    const params = {
      toggler: e.target,
      pane: e.target.parentNode.querySelector(formPaneConfig.el)
    }
    params.toggler.classList.toggle(formPaneConfig.togglerActiveClass);
    params.pane.classList.toggle(formPaneConfig.elActiveClass);
  });
});
