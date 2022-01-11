const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
class FormValidator {
  // constructor(form, validationConfig) {
  constructor() {
    // this._form = form;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  // const validationConfig = {
  //   formSelector: '.popup__form',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__button',
  //   inactiveButtonClass: 'popup__button_disabled',
  //   inputErrorClass: 'popup__input_type_error',
  //   errorClass: 'popup__error_visible'
  // }

  // включаем визуальные атрибуты невалидного ввода
  _showError(form, input, errorMessageText) {
    const errorMessage = form.querySelector(`#${input.id}-error`); // спан ошибки
    errorMessage.textContent = errorMessageText; // вносим текст ошибки от браузера
    errorMessage.classList.add(this._errorMessageClass);
    input.classList.add(this._inputErrorClass); // включаем красный боттом на инпуте
  }

  // выключаем визуальные атрибуты невалидного ввода
  _hideError(form, input) {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = ''; // удаляем текст ошибки
    errorMessage.classList.remove(this._errorMessageClass); // делаем видимым спан ошибки
    input.classList.remove(this._inputErrorClass); // выключаем красный боттом на инпуте
  }

  // Есть ли невалидный инпут в массиве inputs
  _hasInvalidInput(inputs) {
    return Array.from(inputs).some((el) => !el.validity.valid); // Берем массив из NodeList
  }

  // Делаем недоступной кнопку сабмита, если есть невалидный инпут
  _toggleButtonError(inputs, button) {
    if (this._hasInvalidInput(inputs)) {
      button.classList.add(this._inactiveButtonClass); // выключаем кнопку сабмит
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass); // включаем кнопку сабмит
      button.disabled = false;
    }
  }

  // Читаем свойство valid инпута
  // _checkInputValidity(form, input, { inputErrorClass, errorClass }) {
  _checkInputValidity(form, input) {
    if (!input.validity.valid) { // читаем свойство valid
      this._showError(form, input, input.validationMessage, this._errorClass, this._inputErrorClass); // показываем спан с ошибкой
    } else {
      this._hideError(form, input, this._errorClass, this._inputErrorClass); // выключаем спан с ошибкой
    }
  }

  // установка слушателей на все инпуты
  // _setInputListeners(form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) {
  _setInputListeners(form) {
    const inputs = form.querySelectorAll(this._inputSelector); // собираем все инпуты
    const submitButton = form.querySelector(this._submitButtonSelector); // берем кнопку сабмит
    inputs.forEach((input) => {
      input.addEventListener('input', () => {  // вешаем слушателей на каждый инпут
        this._checkInputValidity(form, input); // проверка валидности
        this._toggleButtonError(inputs, submitButton, this._inactiveButtonClass); // включение кнопки сабмита
      });
    });
  }

  // enableValidation({ formSelector, ...rest }) {
  enableValidation() {
    const forms = document.querySelectorAll(this._formSelector); // собираем все формы
    forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      this._setInputListeners(form); // вешаем слушателей на конкретную форму из forms
    });
  }

  // resetValidation(form, { inputSelector, submitButtonSelector, errorMessageClass, inputErrorClass, inactiveButtonClass }) {
  resetValidation(form) {
    const submitButton = form.querySelector(this._submitButtonSelector);
    const inputs = form.querySelectorAll(this._inputSelector);
    inputs.forEach((input) => {
      this._hideError(form, input);
    })
    this._toggleButtonError(inputs, submitButton);
  }

}


// enableValidation(validationConfig);
export default FormValidator;
