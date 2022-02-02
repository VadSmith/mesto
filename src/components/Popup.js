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
    document.addEventListener('keyup', this._handleEscClose); // Обработка ESC
    // this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keyup', this._handleEscClose);
    // this._removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _removeEventListeners() {
    this._popupOverlay.removeEventListener('click', this.close); // закрытие по оверлэй
    this._popupCloseButton.removeEventListener('click', this.close);
  }

  setEventListeners() {
    this._popupOverlay.addEventListener('click', this.close); // закрытие по оверлэй
    this._popupCloseButton.addEventListener('click', this.close); //
  }

}


