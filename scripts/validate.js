// включаем визуальные атрибуты невалидного ввода
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`); // спан ошибки
  errorMessage.textContent = errorMessageText; // вносим текст ошибки от браузера
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass); // включаем красный боттом на инпуте
}

// выключаем визуальные атрибуты невалидного ввода
const hideError = (form, input, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = ''; // удаляем текст ошибки
  errorMessage.classList.remove(errorMessageClass); // делаем видимым спан ошибки
  input.classList.remove(inputErrorClass); // выключаем красный боттом на инпуте
}

// Есть ли невалидный инпут в массиве inputs
const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid); // Берем массив из NodeList
}

// Делаем недоступной кнопку сабмита, если есть невалидный инпут
const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass); // выключаем кнопку сабмит
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButtonClass); // включаем кнопку сабмит
    button.disabled = false;
  }
}

// Читаем свойство valid инпута
const checkInputValidity = (form, input, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) { // читаем свойство valid
    showError(form, input, input.validationMessage, errorClass, inputErrorClass); // показываем спан с ошибкой
  } else {
    hideError(form, input, errorClass, inputErrorClass); // выключаем спан с ошибкой
  }
}

// установка слушателей на все инпуты
const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputs = form.querySelectorAll(inputSelector); // собираем все инпуты
  const submitButton = form.querySelector(submitButtonSelector); // берем кнопку сабмит
  inputs.forEach((input) => {
    input.addEventListener('input', () => {  // вешаем слушателей на каждый инпут
      checkInputValidity(form, input, rest); // проверка валидности
      toggleButtonError(inputs, submitButton, inactiveButtonClass); // включение кнопки сабмита
    });
  });
}

// включение валидации на странице
const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector); // собираем все формы
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setInputListeners(form, rest); // вешаем слушателей на конкретную форму из forms
  });
}

const resetValidation = () => {

}
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });


enableValidation(validationConfig);
