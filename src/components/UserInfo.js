export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._occupationElement = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent
    }
  }

  setUserInfo(name, occupation) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = occupation;
  }
}
