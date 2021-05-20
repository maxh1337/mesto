

import Card from '../components/Card.js'
import { initialCards, validationConfig} from './data.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

//Будет много комментариев, я тупой. И они помогут мне потом понять, что я вообще тут накодил) :) Thanks.
const profilePopup = document.querySelector(".popup_profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const userEditBtn = document.querySelector(".profile__edit-btn");
const formCloseBtn = profilePopup.querySelector(".popup__close-btn");
const formElement = profilePopup.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_username");
const aboutInput = document.querySelector(".popup__input_type_about");
const popupAll = document.querySelectorAll('.popup')
const place = document.querySelector(".popup_place");
const previewPopup = document.querySelector('.popup_place_gallery');
const placeCloseBtn = document.querySelector(".popup__close-btn_place");
const placeOpenBtn = document.querySelector(".profile__add-btn");
const placeSaveBtn = document.querySelector(".popup__save-btn");
const popupGalleryTitle = document.querySelector(".popup__title_gallery");
const popupGalleryImage = document.querySelector(".popup__image");
const galleryCloseBtn = document.querySelector(".popup__close-btn_gallery");
const formListener = document.querySelector(".popup__form_place");

const photoInputLink = document.querySelector('.popup__input_type_link')
const photoInputTitle = document.querySelector('.popup__input_type_name')

const cardsContainer = document.querySelector(".cards");



const cardList = new Section({
		data: initialCards,
		renderer: item => {
			const newCard = new Card(item, '.template', previewPopup)
			const cardEl = newCard.generateCard()
			cardList.addItem(cardEl)
		}
	}, cardsContainer)

const previewImagePopup = new PopupWithImage(previewPopup)

function previewImage(src, title, alt) {
	previewImagePopup.open(src, title, alt)
}

const addCardPopup = new PopupWithForm({
	popupSelector: place,
	handleFormSubmit: (formData) => {
		const newCard = new Card({
			title: formData['photo-name'],
			src: formData['photo-link']
		}, '.template', previewImage)

		const cardEl = newCard.generateCard()
		cardList.addItem(cardEl)
		addCardPopup.close()
	}
})

addCardBtn.addEventListener('click', () => {
	photoFormValidator.resetValidation()
	addCardPopup.open()
});

// Редактирование профиля
const editProfilePopup = new PopupWithForm({
	popupSelector: profilePopup,
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo({
			userNameValue: formData['profile-name'],
			userAboutValue: formData['profile-about']
		});
		editProfilePopup.close()
	}
})

const userInfo = new UserInfo({
	userNameSelector: profileName,
	userAboutSelector: profileAbout
})

// Заполняем поля в попапе для редактирования профиля
const getProfileInfo = () => {
	const profileInfo = userInfo.getUserInfo()
	profilePopupNameInput.value = profileInfo.userName
	profilePopupAboutInput.value = profileInfo.userAbout
	profileFormValidator.resetValidation()
	editProfilePopup.open()
}

profileEditBtn.addEventListener('click', getProfileInfo)

// Вешаем слушатели на попапы
previewImagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()

// Валидация попапа для редактирования профиля
const profileFormValidator = new FormValidator(validationConfig, profilePopupForm)
profileFormValidator.enableValidation()

// Валидация попапа для добавления новой карточки
const photoFormValidator = new FormValidator(validationConfig, photoPopupForm)
photoFormValidator.enableValidation()

cardList.renderItems()