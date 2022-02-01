import './pages/index.css'
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import formClasses from './utils/formClasses.js';
import initialCards from './utils/initialCards.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const addPlaceButton = document.querySelector('.profile__add-button');
const formAddPlaceElement = document.querySelector('.popup__form_type_add');
const elementsContainer = document.querySelector('.elements'); // контейнер карточек

const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupEditProfile = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');


function createCard(cardObject) {
  return new Card({
    cardData: cardObject,
    handleCardClick: () => {
      popupWithImageInstance.open(cardObject);
    }
  }, '.template-element');
}

// Валидация добавления места
const addPlaceFormValidator = new FormValidator(formAddPlaceElement, formClasses);
addPlaceFormValidator.enableValidation();

// Валидация формы пользователя
const editProfileFormValidator = new FormValidator(formEditProfile, formClasses);
editProfileFormValidator.enableValidation();

// Попап Большое фото
const popupWithImageInstance = new PopupWithImage('.popup_type_photo');

// Рендер карточек из базы
const cardsSection = new Section({
  items: initialCards,
  renderer: (cardObject) => {
    const newCardElement = createCard(cardObject).getView();
    cardsSection.addItem(newCardElement);
  }
}, elementsContainer)

cardsSection.renderItems(initialCards);

// Попап формы добавления карточки места
const popupAddCardInstance = new PopupWithForm('.popup_type_add', (cardData) => {
  const card = {
    name: cardData.place,
    link: cardData.link,
    alt: cardData.place
  }
  elementsContainer.prepend(createCard(card).getView());
});

// Слушатель на кнопку добавления места
addPlaceButton.addEventListener('click', () => {
  popupAddCardInstance.open();
  addPlaceFormValidator.resetValidation();
});

// Попап редактирования профиля

const popupEditProfileInstance = new PopupWithForm('.popup_type_edit', (userObject) => {
  profileName.textContent = userObject.name;
  profileJob.textContent = userObject.occupation;
}
);

const userSelector = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__occupation'
}

const userInfo = new UserInfo(userSelector);

// Слушатель на кнопку профиля
profileEditButton.addEventListener('click', () => {
  popupEditProfileInstance.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().occupation;
})
