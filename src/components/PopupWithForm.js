import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handler) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handler = handler;
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  renderLoading(isLoading, buttonText) {

    if (isLoading) this._popupSubmitButton.textContent = buttonText;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handler(this._getInputValues());
  }

  close() {
    super.close();
  }
  formReset() {
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener(
      'submit',
      (evt) => { this._handleSubmit(evt) });
  }
}
