class Card {
  constructor({ cardData, handleCardClick }, templateSelector) {
    this._templateElement = document.querySelector(templateSelector);
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._newCard = this._getTemplate();
    this._removeButton = this._newCard.querySelector('.element__remove-button');
    this._heart = this._newCard.querySelector('.element__heart');
    this._title = this._newCard.querySelector('.element__title');
    this._photo = this._newCard.querySelector('.element__photo');
  }

  _getTemplate() {
    return this._templateElement.content.cloneNode(true);
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__heart_active');
  }

  _removeCard(evt) {
    evt.target.closest('.element').remove();
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeCard);
    this._heart.addEventListener('click', this._toggleLike);
    this._photo.addEventListener('click', this._handleCardClick);
  }

  getView() {
    this._photo.setAttribute('src', this._cardData.link);
    this._photo.setAttribute('alt', this._cardData.alt);
    this._title.textContent = this._cardData.name;
    this._setEventListeners();

    return this._newCard;
  }
}
export default Card;
