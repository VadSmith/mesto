export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOverlay = this._popup.querySelector('.popup__overlay');
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    // this._removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _removeEventListeners() {
    document.removeEventListener('keyup', this._handleEscClose);
    this._popupOverlay.removeEventListener('click', this.close); // закрытие по оверлэй
    this._popupCloseButton.removeEventListener('click', this.close);
  }

  setEventListeners() {
    document.addEventListener('keyup', this._handleEscClose, { once: true }); // Обработка ESC
    this._popupOverlay.addEventListener('click', this.close, { once: true }); // закрытие по оверлэй
    this._popupCloseButton.addEventListener('click', this.close, { once: true }); //
  }

}


