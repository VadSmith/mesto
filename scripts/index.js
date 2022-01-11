import Card from './Card.js';
import FormValidator from './FormValidator.js';

const formValidator = new FormValidator();
const popupAdd = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');
const profileAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');
// const inputAddPlace = formAddElement.querySelector('.popup__input_type_place');
// const inputAddLink = formAddElement.querySelector('.popup__input_type_link');
const popupAddOverlay = popupAdd.querySelector('.popup__overlay');

// const templateEl = document.querySelector('.template-element'); // шаблон карточки
const elementsContainer = document.querySelector('.elements'); // контейнер карточек

const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupEditOverlay = popupEdit.querySelector('.popup__overlay');

// const formEditElement = popupEdit.querySelector('.popup__form');
const formEditProfile = popupEdit.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');

const popupPhoto = document.querySelector('.popup_type_photo');
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
  closePopup(popupEdit);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: place.value,
    link: link.value,
    alt: place.value
  }
  const newCard = new Card('.template-element', card, handlePhotoPopup);
  elementsContainer.prepend(newCard.getView(card));
  formAddElement.reset();
  closePopup(popupAdd);
}

function handlePhotoPopup(evt) {
  openPopup(popupPhoto);
  const popupFullPhoto = popupPhoto.querySelector('.popup__full-photo');
  const popupCaption = popupPhoto.querySelector('.popup__caption');
  const currentElement = evt.currentTarget.closest('.element');
  const elementTitle = currentElement.querySelector('.element__title').textContent;
  popupFullPhoto.setAttribute('src', evt.target.src);
  popupFullPhoto.setAttribute('alt', evt.target.alt);
  popupCaption.textContent = elementTitle;
}

function render() {
  const elementsHTML = initialCards.map((card) => {
    const newCard = new Card('.template-element', card, handlePhotoPopup);
    return newCard.getView();
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
  closePopup(popupEdit)
});
popupEditOverlay.addEventListener('click', () => closePopup(popupEdit));
profileEditButton.addEventListener('click', () => {
  fillEditForm();
  openPopup(popupEdit);
  formValidator.resetValidation(popupEdit);
})
profileAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  // дело вкуса, подсвечивать ли ошибки заново
  // formValidator.resetValidation(popupAdd);
});
formAddElement.addEventListener('submit', handleFormAddSubmit);
popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAdd);
});
popupAddOverlay.addEventListener('click', () => closePopup(popupAdd));
popupPhotoCloseButton.addEventListener('click', () => closePopup(popupPhoto));
popupPhotoOverlay.addEventListener('click', () => closePopup(popupPhoto));


render();
formValidator.enableValidation();
