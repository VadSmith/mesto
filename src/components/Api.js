class Api {
  constructor({ address, cohortId }, headers) {
    this._address = address;
    this._cohortId = cohortId;
    this._headers = headers;
  }

  _checkResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getMyUserInfo() {
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  setUserInfo(userObject) {
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userObject.name,
        about: userObject.about
      })
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._cohortId}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  editAvatar(avatarObject) {
    return fetch(`${this._address}/${this._cohortId}/users/me/avatar/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarObject.avatar
      })
    })
      .then(this._checkResponse)
  }

  addCard(cardObject) {
    return fetch(`${this._address}/${this._cohortId}/cards/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardObject.name,
        link: cardObject.link
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  putLike(cardJSON) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardJSON._id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  deleteLike(cardJSON) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardJSON._id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);

  }
}

export default Api;

