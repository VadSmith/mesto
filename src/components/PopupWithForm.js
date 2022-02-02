import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handler) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handler = handler;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handler(this._getInputValues());
    this.close();
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener(
      'submit',
      (evt) => { this._handleSubmit(evt) });
  }

  removeEventListeners() {
    console.log('enter removeEventListeners');
    this._form.removeEventListener('submit', (evt) => {
      this._handleSubmit(evt);
    })
  }
}
