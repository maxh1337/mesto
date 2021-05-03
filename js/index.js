import Card from './Card.js'
import { initialCards, validationConfig} from './data.js'
import FormValidator from './FormValidator.js'

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
const placeCloseBtn = document.querySelector(".popup__close-btn_place");
const placeOpenBtn = document.querySelector(".profile__add-btn");
const placeSaveBtn = document.querySelector(".popup__save-btn");
const popupGalleryTitle = document.querySelector(".popup__title_gallery");
const popupGalleryImage = document.querySelector(".popup__image");
const galleryCloseBtn = document.querySelector(".popup__close-btn_gallery");
const formListener = document.querySelector(".popup__form_place");
const cardsContainer = document.querySelector(".cards");
const photoInputLink = document.querySelector('.popup__input_type_link')
const photoInputTitle = document.querySelector('.popup__input_type_name')

//первый popup с редактированием информации о человеке
function showPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupThenEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupThenEscape);
}

function showProfilePopup() {
  showPopup(profilePopup);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}
function closeProfilePopup() {
  closePopup(profilePopup);
}

userEditBtn.addEventListener("click", showProfilePopup);

formCloseBtn.addEventListener("click", closeProfilePopup);

formElement.addEventListener("submit", addFormSubmitHandler);

placeOpenBtn.addEventListener("click", () => showPopup(place));

placeCloseBtn.addEventListener("click", closePlacePopup);

placeSaveBtn.addEventListener("submit", addNewCard);

popupAll.forEach(overlayEl => overlayEl.addEventListener('mousedown', closePopupOnClickOverplay));

formListener.addEventListener("submit", addNewCard);

function addFormSubmitHandler(event) {
  //после изменения данных, закрыть popup
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeProfilePopup();
}

// Popup с додавлением новой карточки (place)

//открыть popup
function showPlacePopup() {
  showPopup(place);
}
//закрыть popup
function closePlacePopup() {
  closePopup(place);
}

//функция удаления в которой удаляется самый ближний элемент card
function handleRemove(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest(".card");
  targetItem.remove();
}

//как и в примере с удалением, лайк ставится на самый близкий
function handleLike(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest(".card__like");
  targetItem.classList.toggle("card__like_filled");
}

// Открытие popup c карточкой

const galleryPopup = document.querySelector(".popup_gallery_place");

galleryCloseBtn.addEventListener("click", closeGallery);

function showGallery(image,title) {
  popupGalleryTitle.textContent = title
  popupGalleryImage.src = image
  showPopup(galleryPopup);
}

function closeGallery() {
  closePopup(galleryPopup);
}

//Закрытие popup по нажатию ESC
function closePopupThenEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

//Закрытые popup по нажатию на оверлей
function closePopupOnClickOverplay(evt) {
  const targetOverlay = evt.target;
  closePopup(targetOverlay);
}

// Обработчик формы добавления новой карточки на страницу
function addNewCard(event) {
	event.preventDefault()
	cardsContainer.prepend(createCard(photoInputLink.value, photoInputTitle.value))
	closePopup(photoPopup)
}

// Возвращаем готовую карточку
function createCard(src, title) {
	const card = new Card({ src, title }, '.template', showGallery)
	const cardEl = card.generateCard()
	return cardEl
}

// Добавление карточек на страницу
initialCards.forEach((item) => {
	const cardEl = createCard(item.src, item.title)
	cardsContainer.append(cardEl)
})