export class Quiz {
  constructor(quizEl, {
    quizElActiveClass,
    quizWrapperSel,
    quizPaneSel,
    quizPaneActiveClass,
    quizBtnPrevSel,
    quizBtnNextSel,
    quizProgressSel,
    quizCurrentSel
  }, {
    togglerSel,
    inputSel,
    btnSubmitSel
  }) {
    this._quizEl = quizEl;
    this._quizElActiveClass = quizElActiveClass;
    this._quizWrapper = this._quizEl.querySelector(quizWrapperSel);
    this._quizPanesArr = Array.from(this._quizEl.querySelectorAll(quizPaneSel));
    this._quizPaneActiveClass = quizPaneActiveClass;
    this._quizBtnPrev = this._quizEl.querySelector(quizBtnPrevSel);
    this._quizBtnNextSel = quizBtnNextSel;
    this._quizBtnNextArr = Array.from(this._quizEl.querySelectorAll(quizBtnNextSel));
    this._quizProgress = this._quizEl.querySelector(quizProgressSel);
    this._quizCurrent = this._quizEl.querySelector(quizCurrentSel);

    this._togglerSel = togglerSel;
    this._inputSel = inputSel;
    this._btnSubmit = this._quizEl.querySelector(btnSubmitSel);
  }

  _slideWrapper(index) {
    this._quizWrapper.style.transform = `translateX(-${100*index}%)`;
  }

  _runProggress(index) {
    const minWidth = 100/this._quizBtnNextArr.length;
    this._quizProgress.textContent = `${index*minWidth}%`;
    this._quizProgress.style.width = `${index*minWidth}%`;
  }

  _removeClassName(el, className) {
    el.classList.remove(className);
  }

  _addClassName(el, className) {
    el.classList.add(className);
  }

  _changeSlide(params, className) {
    const paneConfig = {
      indexCurrent: params.current,
      indexTarget: params.target,
      paneCurrent: this._quizPanesArr[params.current],
      paneTarget: this._quizPanesArr[params.target]
    }
    const {indexTarget, paneCurrent, paneTarget} = paneConfig;
    this._slideWrapper(indexTarget);
    this._addClassName(paneTarget, className);
    this._removeClassName(paneCurrent, className);
    this._runProggress(indexTarget);
    this._quizCurrent.textContent = `0${indexTarget}`;
  }

  setEventListeners() {
    this._quizBtnNextArr.forEach((currentBtnNext, currentBtnNextIndex, btnNextArr) => {
      currentBtnNext.addEventListener('click', e => {
        e.preventDefault();
        const indexConfig = {
          current: currentBtnNextIndex,
          target: currentBtnNextIndex + 1,
        }
        this._addClassName(this._quizEl, this._quizElActiveClass);
        this._changeSlide(indexConfig, this._quizPaneActiveClass);
      });
    });

    this._quizBtnPrev.addEventListener('click', e => {
      e.preventDefault();
      const currentIndex = this._quizPanesArr.indexOf(this._quizEl.querySelector(`.${this._quizPaneActiveClass}`));
      const indexConfig = {
        current: currentIndex,
        target: currentIndex - 1,
      }
      if(currentIndex === 1) {
        this._removeClassName(this._quizEl, this._quizElActiveClass);
      }
      this._changeSlide(indexConfig, this._quizPaneActiveClass);
    });

    this._quizPanesArr.forEach((pane, paneIndex, panesArr) => {
      const togglersArray = Array.from(pane.querySelectorAll(this._togglerSel));
      if(togglersArray.length) {
        togglersArray.forEach((toggler, togglerIndex, togglerArr) => {
          toggler.addEventListener('change', e => {
            if(e.target.checked) {
              switch(Boolean(pane.querySelector(this._quizBtnNextSel))) {
                case true:
                  pane.querySelector(this._quizBtnNextSel).disabled = false;
                  break;
                case false:
                  this._btnSubmit.disabled = false;
                  break;
              }
            };
          });
        });
      }
    });
  }
}
