import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector('.popup__full-photo');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(card) {
    super.open();
    this._popupPhoto.src = card.link;
    this._popupPhoto.alt = card.alt;
    this._popupCaption.textContent = card.name;
  }

}
