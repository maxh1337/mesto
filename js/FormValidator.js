class FormValidator {
    constructor(data, formEl) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._sumbitButtonSelector = data.sumbitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._textErrorClass = data.textErrorClass;
        this._formEl = formEl 
    }

    _checkInputValidity() {
        const isInputValid = inputEl.validity.valid;
        if (!isInputValid) {
            const errorMessage = inputEl.validationMessage;
            showInputError(formEl,inputEl,errorMessage, inputErrorClass, textErrorClass);
       }else {
           hideInputError(formEl, inputEl, inputErrorClass)
       }     
    }

    // Показываю ошибку при валидации
    _showInputError(inputEl, errorMessage) {
        inputEl.classList.add(this._inputErrorClass);
        const errorEl = this._formEl.querySelector(`#${inputel.id}-error`)
        errorEl.textContent = errorMessage
        errorEl.classList.add(this._textErrorClass)
    }

    // Скрываю ошибку при валидации
    _hideInputError(inputEl) {
        inputEl.classList.remove(this._inputErrorClass)
        const errorEl = this._formEl.querySelector(`#${inputel.id}-error`)
        errorEl.textContent = ''
        errorEl.classList.remove(this._textErrorClass)
    }

    // Проверяю валидность полей
    _checkInputValidity(inputEl) {
        const isInputValid = inputEl.validity.valid;
        if (!isInputValid) {
            const errorMessage = inputEl.validationMessage
            this._showInputError(inputEl, errorMessage)
        } else {
            this._hideInputError(inputEl)
        }
    }

    resetValidation() {
        this._inputList.forEach(inputEl => {
            this._hideInputError(inputEl)
        })
        this._disablePopupBtn()
    }

    _disablePopupBtn() {
        const hasNotValidInput = this._inputList.some(inputEl => !inputEl.validity.valid)
        if (hasNotValidInput) {
            this._buttonEl.setAttribute('disabled', true)
        } else {
            this._buttonEl.removeAttribute('disabled')
        }
    }

    _setEventListeners() {
        this._formEl.addEventListener('submit', (event) => {
            event.preventDefault()
        });
        this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector))
        this._buttonEl = this._formEl.querySelector(this._sumbitButtonSelector)
        this._inputList.forEach(inputEl => {
            inputEl.addEventListener('input', () => {
                this._checkInputValidity(inputEl)
                this._disablePopupBtn()
            })
        })
        this._disablePopupBtn()
    }

    enableValidation() {
        this._setEventListeners()
    }
}

export default FormValidator