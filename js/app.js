let modal = document.querySelector('.modal');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let userEditBtn = document.querySelector('.profile__edit-btn');
let formCloseBtn = document.querySelector('.modal__close-btn');
let formElement = document.querySelector('.modal__form');
let nameInput = document.querySelector('.modal__input_type_username');
let aboutInput = document.querySelector('.modal__input_type_about');

function showModal() {
	modal.classList.add('modal_opened');
	nameInput.value = profileName.textContent;
	aboutInput.value = profileAbout.textContent;
}

function closeModal() {
	modal.classList.remove('modal_opened');
}

function formSubmitHandler(event) {
	event.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = aboutInput.value;
	closeModal();
}

userEditBtn.addEventListener('click', function () {
	showModal();
});

formCloseBtn.addEventListener('click', function () {
	closeModal();
});

formElement.addEventListener('submit', formSubmitHandler);