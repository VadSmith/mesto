export default class UserInfo {
  constructor(nameSelector, aboutSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      _id: this._id,
      cohort: this._cohort
    }
  }

  setUserInfo({ name, about, avatar, _id, cohort }) {
    this._name = name;
    this._nameElement.textContent = this._name;

    this._about = about;
    this._aboutElement.textContent = this._about;

    this._avatar = avatar;
    this._avatarElement.src = this._avatar;

    this._id = _id;
    this._cohort = cohort;
  }
}
