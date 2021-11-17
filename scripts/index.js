console.log('script loaded');
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupOverlay = popup.querySelector('.popup__overlay');

// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__occupation'); // Воспользуйтесь инструментом .querySelector()

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', close);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  profileJob.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  // Вставьте новые значения с помощью textContent
  closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
