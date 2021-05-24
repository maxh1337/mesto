import Popup from "./Popup.js"

export default class PopupWihtImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector)
		this._popupImg = this._popupEl.querySelector('.popup__image')
		this._popupCaption = this._popupEl.querySelector('.popup__title_gallery')
	}

	open(link, title) {
		super.open()
		this._popupImg.src = link
		this._popupCaption.textContent = title
	}
}