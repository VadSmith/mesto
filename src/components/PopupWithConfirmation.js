import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleConfirmButtonClick, api) {
    super(popupSelector);
    this._api = api;
    this._confirmButton = this._popup.querySelector('.popup__button');
    this._handleConfirmButtonClick = handleConfirmButtonClick;
  }

  setEventListeners() {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._handleConfirmButtonClick(this._cardObject, this._cardInstance);
    })
  }

  open(cardObject, cardInstance) {
    super.open();
    this._cardObject = cardObject;
    this._cardInstance = cardInstance;
  }
}
