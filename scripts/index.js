const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Заснеженное ущелье в горах'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Река зимой'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Вид на несколько девятиэтажек городского квартала'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Поляна у подножия горы'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Железная дорога среди леса уходит вдаль'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Скалистый утес на берегу Байкала'
  }
];

const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const templateEl = document.querySelector('.template-element');
const elementsContainer = document.querySelector('.elements');
// const popupOverlay = popup.querySelector('.popup__overlay');

// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()

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
// popupOverlay.addEventListener('click', closePopup);
// popup.addEventListener('click', closePopup);

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



function render() {
  const elementsHTML = initialCards.map((card) => {
    // console.log(card);
    return getElement(card);
  });
  elementsContainer.append(...elementsHTML);
}

function getElement(card) {
  const newCard = templateEl.content.cloneNode(true);
  const photo = newCard.querySelector('.element__photo');
  const title = newCard.querySelector('.element__title');

  photo.setAttribute('src', card.link);
  photo.setAttribute('alt', card.alt);
  title.textContent = card.name;

  return newCard;
}

render();
