import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleConfirmButtonClick) {
    // constructor(popupSelector, handleConfirmButtonClick) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__button');
    this._handleConfirmButtonClick = handleConfirmButtonClick;
    // this._cardElementToDelete = cardElementToDelete;
  }

  setEventListeners() {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._handleConfirmButtonClick(this._cardObject);
      super.close();
    })
  }

  open(cardObject) {
    super.open();
    this._cardObject = cardObject;
  }
}
