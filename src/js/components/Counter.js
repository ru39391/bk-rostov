export class Counter {
  constructor(inputHolderEl, {
    inputSel,
    counterLabelSel,
    counterLabelActiveClass,
    btnAddSel,
    btnRemoveSel
  }) {
    this._inputHolderEl = inputHolderEl;
    this._inputSel = this._inputHolderEl.querySelector(inputSel);
    this._counterLabelSel = this._inputHolderEl.querySelector(counterLabelSel);
    this._counterLabelActiveClass = counterLabelActiveClass;
    this._btnAddSel = this._inputHolderEl.querySelector(btnAddSel);
    this._btnRemoveSel = this._inputHolderEl.querySelector(btnRemoveSel);
  }

  _setLableActive(value) {
    this._counterLabelSel.textContent = value;
    if(value === 0) {
      this._btnRemoveSel.disabled = true;
      this._counterLabelSel.classList.remove(this._counterLabelActiveClass);
    } else {
      this._btnRemoveSel.disabled = false;
      this._counterLabelSel.classList.add(this._counterLabelActiveClass);
    }
  }

  _changeInputValue(interval) {
    let valueCurrent = Number(this._inputSel.value);
    valueCurrent += interval;
    this._inputSel.value = valueCurrent;
    this._setLableActive(valueCurrent);
  }

  init() {
    this._setLableActive(Number(this._inputSel.value));
  }

  setEventListeners() {
    this._btnRemoveSel.addEventListener('click', e => {
      e.preventDefault();
      this._changeInputValue(-1);
    });

    this._btnAddSel.addEventListener('click', e => {
      e.preventDefault();
      this._changeInputValue(1);
    });
  }
}
