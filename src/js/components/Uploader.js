export class Uploader {
  constructor(inputFileEl, {
    inputFileMetaSel,
    inputFileMetaTitleSel,
    inputFileResetBtnSel
  }) {
    this._inputFileEl = inputFileEl;
    this._inputFileHolder = inputFileEl.parentNode;
    this._inputFileMeta = this._inputFileHolder.querySelector(inputFileMetaSel);
    this._inputFileMetaTitle = this._inputFileHolder.querySelector(inputFileMetaTitleSel);
    this._inputFileResetBtn = this._inputFileHolder.querySelector(inputFileResetBtnSel);
  }

  setEventListeners() {
    this._inputFileEl.addEventListener('change', e => {
      this._inputFileMetaTitle.textContent = e.target.files[0].name;
      this._inputFileMeta.style.display = 'block';
    });

    this._inputFileResetBtn.addEventListener('click', e => {
      this._inputFileEl.value = null;
      this._inputFileMeta.style = null;
      this._inputFileMetaTitle.textContent = '';
    });
  }
}
