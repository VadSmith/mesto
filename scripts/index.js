import Card from './Card.js';
import FormValidator from './FormValidator.js';
import formClasses from '../utils/formClasses.js';
import initialCards from '../utils/initialCards.js';

const popupAddCard = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
const profileAddButton = document.querySelector('.profile__add-button');
const formAddPlaceElement = document.querySelector('.popup__form_type_add');
// const inputAddPlace = formAddElement.querySelector('.popup__input_type_place');
// const inputAddLink = formAddElement.querySelector('.popup__input_type_link');
const popupAddOverlay = popupAddCard.querySelector('.popup__overlay');

const popupPhoto = document.querySelector('.popup_type_photo');
const popupCaption = popupPhoto.querySelector('.popup__caption');
const popupFullPhoto = popupPhoto.querySelector('.popup__full-photo');

// const templateEl = document.querySelector('.template-element'); // шаблон карточки
const elementsContainer = document.querySelector('.elements'); // контейнер карточек

const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupEditCloseButton = popupEditProfile.querySelector(".popup__close-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupEditOverlay = popupEditProfile.querySelector('.popup__overlay');

// const formEditElement = popupEdit.querySelector('.popup__form');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');

const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button');
const popupPhotoOverlay = popupPhoto.querySelector('.popup__overlay');

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', handleEscapeKey);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', handleEscapeKey);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createCard(card) {
  return new Card('.template-element', card, handlePhotoPopup);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: place.value,
    link: link.value,
    alt: place.value
  }
  elementsContainer.prepend(createCard(card).getView());
  formAddPlaceElement.reset();
  closePopup(popupAddCard);
}

function handlePhotoPopup(evt) {
  openPopup(popupPhoto);
  // const popupFullPhoto = popupPhoto.querySelector('.popup__full-photo');
  const currentElement = evt.currentTarget.closest('.element');
  const elementTitle = currentElement.querySelector('.element__title').textContent;
  popupFullPhoto.setAttribute('src', evt.target.src);
  popupFullPhoto.setAttribute('alt', evt.target.alt);
  popupCaption.textContent = elementTitle;
}

function renderInitialCards() {
  const elementsHTML = initialCards.map((card) => {
    return createCard(card).getView();
  });
  elementsContainer.append(...elementsHTML);
}

function fillEditForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleEscapeKey(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(currentPopup);
  }
}

formEditProfile.addEventListener('submit', handleFormEditSubmit);
popupEditCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile)
});
popupEditOverlay.addEventListener('click', () => closePopup(popupEditProfile));
profileEditButton.addEventListener('click', () => {
  fillEditForm();
  openPopup(popupEditProfile);
  editProfileFormValidation.resetValidation();
})
profileAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  // addPlaceFormValidation.resetValidation();
});
formAddPlaceElement.addEventListener('submit', handleFormAddSubmit);
popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});
popupAddOverlay.addEventListener('click', () => closePopup(popupAddCard));
popupPhotoCloseButton.addEventListener('click', () => closePopup(popupPhoto));
popupPhotoOverlay.addEventListener('click', () => closePopup(popupPhoto));

renderInitialCards();

const addPlaceFormValidation = new FormValidator(formAddPlaceElement, formClasses);
addPlaceFormValidation.enableValidation();

const editProfileFormValidation = new FormValidator(formEditProfile, formClasses);
editProfileFormValidation.enableValidation();
