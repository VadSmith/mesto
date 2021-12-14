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

const popupAdd = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__form_type_add');
const inputAddPlace = formAddElement.querySelector('.popup__input_type_place');
const inputAddLink = formAddElement.querySelector('.popup__input_type_link');
const popupAddOverlay = popupAdd.querySelector('.popup__overlay');

const templateEl = document.querySelector('.template-element');
const elementsContainer = document.querySelector('.elements');

const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__occupation');
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const popupEditOverlay = popupEdit.querySelector('.popup__overlay');

const formEditElement = popupEdit.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('.popup__input_type_name');
const jobInput = formEditElement.querySelector('.popup__input_type_job');

const popupPhoto = document.querySelector('.popup_type_photo');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-button');
const popupPhotoOverlay = popupPhoto.querySelector('.popup__overlay');

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function toggleLike(evt) {
  evt.target.classList.toggle('element__heart_active');
}



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const card = {
    name: place.value,
    link: link.value,
    alt: place.value
  }
  elementsContainer.prepend(getElement(card));
  formAddElement.reset();
  closePopup(popupAdd);
}

function photoPopupHandler(evt) {
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
    return getElement(card);
  });
  elementsContainer.append(...elementsHTML);
}

function getElement(card) {
  const newCard = templateEl.content.cloneNode(true);
  const photo = newCard.querySelector('.element__photo');
  const title = newCard.querySelector('.element__title');
  const removeButton = newCard.querySelector('.element__remove-button');
  const heart = newCard.querySelector('.element__heart');
  heart.addEventListener('click', toggleLike);
  removeButton.addEventListener('click', removeCard);
  photo.setAttribute('src', card.link);
  photo.setAttribute('alt', card.alt);
  photo.addEventListener('click', photoPopupHandler);
  title.textContent = card.name;
  return newCard;
}

function removeCard(evt) {
  evt.target.closest('.element').remove();
}

function fillEditForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function keyHandler(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (currentPopup && evt.key === 'Escape') {
    closePopup(currentPopup);
  }

}

editButton.addEventListener('click', () => {
  fillEditForm();
  openPopup(popupEdit);
})

formEditElement.addEventListener('submit', formEditSubmitHandler);
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));

popupEditOverlay.addEventListener('click', () => closePopup(popupEdit));

addButton.addEventListener('click', () => openPopup(popupAdd));
formAddElement.addEventListener('submit', formAddSubmitHandler);
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupAddOverlay.addEventListener('click', () => closePopup(popupAdd));
document.addEventListener('keyup', function (evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (currentPopup && evt.key === 'Escape') {
    closePopup(currentPopup);
  }
});


popupPhotoCloseButton.addEventListener('click', () => closePopup(popupPhoto));
popupPhotoOverlay.addEventListener('click', () => closePopup(popupPhoto));


render();
