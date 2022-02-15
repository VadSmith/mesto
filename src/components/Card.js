class Card {
  constructor({ cardData, handleCardClick, handleRemoveButtonClick }, api, isStrangerCard, hasMyLike, putLike, deleteLike, templateSelector) {
    this._templateElement = document.querySelector(templateSelector);
    this._cardData = cardData;
    this._popupConfirm = document.querySelector('.popup_type_delete');
    this._handleCardClick = handleCardClick;
    this._api = api;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
    this._isStrangerCard = isStrangerCard;
    this._hasMyLike = hasMyLike;
    this._newCard = this._getTemplate();
    this._removeButton = this._newCard.querySelector('.element__remove-button'); // кнопка корзины
    this._heart = this._newCard.querySelector('.element__heart');
    this._title = this._newCard.querySelector('.element__title');
    this._photo = this._newCard.querySelector('.element__photo');
    this._likesCounter = this._newCard.querySelector('.element__like-counter');
    this._likesSection = this._newCard.querySelector('element__like-section');
    this._isLikedByMe = false;
    this._element = this._newCard.querySelector('.element');

  }

  _getTemplate() {
    return this._templateElement.content.cloneNode(true);
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__heart_active');
  }

  removeCard(evt) {
    evt.target.closest('.element').remove();
  }
  remove() {
    this._element.remove();
  }

  getCardId() { return this._cardData._id; }

  _setEventListeners() {
    this._removeButton.addEventListener('click', () => {
      this._handleRemoveButtonClick(this._cardData, this._element);
    });

    this._heart.addEventListener('click', () => {
      if (!this._isLikedByMe) {
        this._api.putLike(this._cardData)
          .then(updatedCardJSON => {
            this._isLikedByMe = true;
            this._heart.classList.add('element__heart_active');
            this._likesCounter.textContent = updatedCardJSON.likes.length;
            this._likesCounter.title = `Owner: ${updatedCardJSON.owner.name} Likes:`;
            updatedCardJSON.likes.forEach(person => {
              this._likesCounter.title += ` ${person.name}`;
            });
          });
      } else {
        this._api.deleteLike(this._cardData)
          .then(updatedCardJSON => {
            this._isLikedByMe = false;
            this._heart.classList.remove('element__heart_active');
            this._likesCounter.textContent = updatedCardJSON.likes.length;
            this._likesCounter.title = `Owner: ${updatedCardJSON.owner.name} Likes:`;
            updatedCardJSON.likes.forEach(person => {
              this._likesCounter.title += ` ${person.name}`;
            });
          });
      }
    });
    this._photo.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  getView() {
    if (this._isStrangerCard(this._cardData)) this._removeButton.remove();
    if (this._hasMyLike(this._cardData)) {
      this._isLikedByMe = true;
      this._heart.classList.add('element__heart_active');
    }
    this._photo.setAttribute('src', this._cardData.link);
    this._photo.setAttribute('alt', this._cardData.alt);
    this._title.textContent = this._cardData.name;
    this._likesCounter.textContent = this._cardData.likes.length;
    this._likesCounter.title += `Owner: ${this._cardData.owner.name} Likes:`;
    this._cardData.likes.forEach(like => {
      this._likesCounter.title += ` ${like.name}`;
    });
    this._setEventListeners();
    return this._newCard;
  }
}
export default Card;
