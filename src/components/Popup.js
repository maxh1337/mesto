const ESCAPE_KEY = 'Escape'

export default class Popup {
	constructor(popupSelector) {
		this._popupEl = popupSelector
		this.close = this.close.bind(this);
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	open() {
		this._popupEl.classList.add('popup_opened')
		document.addEventListener('keydown', this._handleEscClose)
	}

	close() {
		this._popupEl.classList.remove('popup_opened')
		document.removeEventListener('keydown', this._handleEscClose)
	}

	_handleEscClose(event) {
		if (event.key === ESCAPE_KEY) {
			this.close()
		}
	}

	setEventListeners() {
		this._popupEl.addEventListener('mousedown', (event) => {
			if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-btn')) {
				this.close()
			}
		})
	}
}
