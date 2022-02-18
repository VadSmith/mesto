class FormValidator {
  constructor(form, formClasses) {
    this._form = form;
    this._formSelector = formClasses.formSelector;
    this._inputSelector = formClasses.inputSelector;
    this._submitButtonSelector = formClasses.submitButtonSelector;
    this._inactiveButtonClass = formClasses.inactiveButtonClass;
    this._inputErrorClass = formClasses.inputErrorClass;
    this._errorClass = formClasses.errorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputs = this._form.querySelectorAll(this._inputSelector);
  }

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
  _hasInvalidInput() {
    return Array.from(this._inputs).some((el) => !el.validity.valid); // Берем массив из NodeList
  }

  // Делаем недоступной кнопку сабмита, если есть невалидный инпут
  _toggleSubmitButton() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass); // выключаем кнопку сабмит
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass); // включаем кнопку сабмит
      this._submitButton.disabled = false;
    }
  }

  // Читаем свойство valid инпута
  _checkInputValidity(form, input) {
    if (!input.validity.valid) { // читаем свойство valid
      this._showError(form, input, input.validationMessage, this._errorClass, this._inputErrorClass); // показываем спан с ошибкой
    } else {
      this._hideError(form, input, this._errorClass, this._inputErrorClass); // выключаем спан с ошибкой
    }
  }

  // установка слушателей на все инпуты
  _setInputListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {  // вешаем слушателей на каждый инпут
        this._checkInputValidity(this._form, input); // проверка валидности
        this._toggleSubmitButton(); // включение кнопки сабмита
      });
    });
  }

  resetValidation() {
    this._inputs.forEach((input) => {
      this._hideError(this._form, input);
    })
    this._toggleSubmitButton();
  }

  enableValidation() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setInputListeners();
    this.resetValidation();
  }

}

export default FormValidator;
