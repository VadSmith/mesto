import './index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import formClasses from '../utils/formClasses.js';
import initialCards from '../utils/initialCards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupConfirm from '../components/PopupWithConfirmation.js';

const addPlaceButton = document.querySelector('.profile__add-button');
const formAddPlaceElement = document.querySelector('.popup__form_type_add');
const elementsContainer = document.querySelector('.elements'); // контейнер карточек
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupEditAvatar = document.querySelector('.popup_type_avatar'); // попап аватара
const formEditAvatar = popupEditAvatar.querySelector('.popup__form'); // форма добавления аватара
const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarButton = document.querySelector('.profile__avatar-overlay');
const profileEditButton = document.querySelector(".profile__edit-button");
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');
const popupEditButton = popupEditProfile.querySelector('.popup__button');
const popupDeleteComfirm = document.querySelector('.popup_type_delete');
const popupDeleteConfirmButton = popupDeleteComfirm.querySelector('.popup__button');
// const element = document.querySelector('.element');
// const elementRemoveButton = element.querySelector('.element__remove-button');

let myID = '';
const userInfoInstance = new UserInfo();

const api = new Api({
  address: 'https://nomoreparties.co/v1',
  token: '0dd0d459-95f6-44a8-af29-6effe65b34b3',
  cohortId: 'cohort-35'
})

function setUserInfoHandler(userObject) {
  popupEditButton.textContent = 'Сохранение...';
  api.setUserInfo(userObject)
    .then(response => {
      userInfoInstance.setUserInfo(response);
      profileName.textContent = userInfoInstance.getUserInfo().name;
      profileJob.textContent = userInfoInstance.getUserInfo().about;
    }).catch(error => { console.error('ОШИБКА в setUserInfo', error); })
    .finally(() => {
      popupEditButton.textContent = 'Сохранить';
    });
}

// создание инстанса карточки
function createCard(cardObject) {
  const cardInstance = new Card({
    cardData: cardObject,
    handleCardClick: () => { popupWithImageInstance.open(cardObject); },
    handleRemoveButtonClick: (cardObject, cardInstance) => { popupConfirmInstance.open(cardObject, cardInstance); },
  }, api, isStrangerCard, hasMyLike, putLike, deleteLike, '.template-element')
    .getView()
  return cardInstance;
}

// подтверждение удаления карточки
function handleConfirmButtonClick(cardObject, cardElement) {
  popupConfirmInstance.open(cardElement);
  popupDeleteConfirmButton.textContent = 'Удаление...';
  api.deleteCard(cardObject._id)
    .then(response => {
      cardElement.remove();
      popupConfirmInstance.close();
    }).catch((error) => { 'ОШИБКА удаления карточки', error })
    .finally(() => {
      popupDeleteConfirmButton.textContent = 'Удалено';
      popupConfirmInstance.close();
      popupDeleteConfirmButton.textContent = 'Да';
    });
}

// установка лайка
function putLike(cardJSON) {
  api.putLike(cardJSON._id)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('ОШИБКА в api.putLike: ', error);
    })
}

// отзыв лайка
function deleteLike(cardJSON) {
  api.deleteLike(cardJSON._id)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('ОШИБКА в api.deleteLike: ', error);
    })
}

// установка аватара
function editAvatarHandler(avatarObject) {
  popupEditButton.textContent = 'Сохранение...';
  api.editAvatar(avatarObject)
    .then(userJSON => {
      userInfoInstance.setUserInfo(userJSON);
      // .then(response => {
      profileAvatar.src = userInfoInstance.getUserInfo().avatar;
      // })
    })
    .catch(error => {
      console.error('ОШИБКА в editAvatarHandler: ', error)
    })
    .finally(() => {
      popupEditButton.textContent = 'Сохранить';
    });
}

// чужая ли карточка?
function isStrangerCard(cardJSON) {
  console.log('isStranger', myID);
  return myID !== cardJSON.owner._id
}

// есть мой лайк?
function hasMyLike(cardJSON) {
  if (cardJSON.likes.some(elem => elem._id === myID)) {
    return true
  }
  else return false;
}

// Валидация добавления места
const addPlaceFormValidator = new FormValidator(formAddPlaceElement, formClasses);
addPlaceFormValidator.enableValidation();

// Валидация формы пользователя
const editProfileFormValidator = new FormValidator(formEditProfile, formClasses);
editProfileFormValidator.enableValidation();

// Валидация формы аватара
const editAvatarValidator = new FormValidator(formEditAvatar, formClasses);
editAvatarValidator.enableValidation();

// Попап большое фото
const popupWithImageInstance = new PopupWithImage('.popup_type_photo');
popupWithImageInstance.setEventListeners();

// Рендер карточек из базы
const cardsSectionInstance = new Section({
  items: initialCards,
  renderer: (cardObject) => {
    const newCardElement = createCard(cardObject);
    cardsSectionInstance.addItem(newCardElement);
  }
}, elementsContainer)

// Попап формы добавления карточки
const popupAddCardInstance = new PopupWithForm('.popup_type_add', (cardJSON) => {
  addPlaceButton.textContent = "Сохранение..."
  const card = {
    name: cardJSON.place,
    link: cardJSON.link,
    alt: cardJSON.place
  }
  api.addCard(card)
    .then(response => {
      cardsSectionInstance.addItem(createCard(response));
    })
    .catch(error => {
      console.error('ОШИБКА в api.addCard: ', error);
    }).finally(() => {
      addPlaceButton.textContent = "Сохранить"
    })
});
popupAddCardInstance.setEventListeners();

// Слушатель на кнопку добавления места
addPlaceButton.addEventListener('click', () => {
  popupAddCardInstance.open();
  addPlaceFormValidator.resetValidation();
});

// Слушатель на кнопку аватара
profileAvatarButton.addEventListener('click', () => {
  popupEditAvatarInstance.open();
  editAvatarValidator.resetValidation();
})

// Попап редактирования профиля
const popupEditProfileInstance = new PopupWithForm('.popup_type_edit', setUserInfoHandler);
popupEditProfileInstance.setEventListeners();

// Попап добавления аватара
const popupEditAvatarInstance = new PopupWithForm('.popup_type_avatar', editAvatarHandler);
popupEditAvatarInstance.setEventListeners();

// Слушатель на кнопку профиля, загрузка инфо в форму
profileEditButton.addEventListener('click', () => {
  popupEditProfileInstance.open();
  popupEditButton.textContent = 'Загрузка...';
  nameInput.value = userInfoInstance.getUserInfo().name;
  jobInput.value = userInfoInstance.getUserInfo().about;
  popupEditButton.textContent = 'Сохранить';
})


// Попап удаления карточки
const popupConfirmInstance = new PopupConfirm('.popup_type_delete', handleConfirmButtonClick, api);
popupConfirmInstance.setEventListeners();

// загрузка карточек с сервера, установка ID, имени и инфо о пользователе
Promise.all([api.getInitialCards(), api.getMyUserInfo()])
  .then(([initialCardsArray, myUserInfo]) => {
    userInfoInstance.setUserInfo(myUserInfo);
    myID = userInfoInstance.getUserInfo()._id;
    profileName.textContent = userInfoInstance.getUserInfo().name;
    profileJob.textContent = userInfoInstance.getUserInfo().about;
    profileAvatar.src = userInfoInstance.getUserInfo().avatar;
    cardsSectionInstance.renderItems(initialCardsArray);
  }).catch(error => { console.error('ОШИБКА в Promise.all ', error); });


