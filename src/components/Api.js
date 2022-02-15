class Api {
  constructor({ address, token, cohortId }) {
    this._address = address;
    this._token = token;
    this._cohortId = cohortId;
  }

  getMyUserInfo() {
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      }
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка внутри getMyInfo(): ${response.status}`
        ))
  }

  setUserInfo(userObject) {
    return fetch(`${this._address}/${this._cohortId}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token
      },
      body: JSON.stringify({
        name: userObject.name,
        about: userObject.about
      })
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`ОШИБКА: ${response.status}`))
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._cohortId}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      });
  }

  editAvatar(avatarObject) {
    return fetch(`${this._address}/${this._cohortId}/users/me/avatar/`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarObject.avatar
      })
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`))
  }

  addCard(cardObject) {
    return fetch(`${this._address}/${this._cohortId}/cards/`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardObject.name,
        link: cardObject.link
      })
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`))
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`)
      )
  }

  putLike(cardJSON) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardJSON._id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      });
  }

  deleteLike(cardJSON) {
    return fetch(`${this._address}/${this._cohortId}/cards/${cardJSON._id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      });

  }
}

export default Api;

