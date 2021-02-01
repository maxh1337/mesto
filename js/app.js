let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let userEditBtn = document.querySelector('.profile__edit-btn');
let formCloseBtn = document.querySelector('.popup__close-btn');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_username');
let aboutInput = document.querySelector('.popup__input_type_about');

function showPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	aboutInput.value = profileAbout.textContent;
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = aboutInput.value;
	closePopup();
}

userEditBtn.addEventListener('click', showPopup);

formCloseBtn.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);