export default class UserInfo {
	constructor({ userNameSelector, userAboutSelector }) {
		this._userName = userNameSelector;
		this._userAbout = userAboutSelector;
	}

	getUserInfo() {
		return {
			userName: this._userName.textContent,
			userAbout: this._userAbout.textContent
		}
	}

	setUserInfo({ userNameValue, userAboutValue }) {
		this._userName.textContent = userNameValue
		this._userAbout.textContent = userAboutValue
	}
}