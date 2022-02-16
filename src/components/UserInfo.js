export default class UserInfo {
  constructor() {
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
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
    this._cohort = cohort;
  }
}
