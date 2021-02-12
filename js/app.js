//Будет много комментариев, я тупой. И они помогут мне потом понять, что я вообще тут накодил) :) Thanks.
const profilePopup = document.querySelector(".popup_profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const userEditBtn = document.querySelector(".profile__edit-btn");
const formCloseBtn = profilePopup.querySelector(".popup__close-btn");
const formElement = profilePopup.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_username");
const aboutInput = document.querySelector(".popup__input_type_about");

//первый popup с редактированием информации о человеке
function showPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function showProfilePopup() {
  showPopup(profilePopup)
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}
function closeProfilePopup() {
   closePopup(profilePopup);
}

userEditBtn.addEventListener("click", showProfilePopup);

formCloseBtn.addEventListener("click", closeProfilePopup);

formElement.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  //после изменения данных, закрыть popup
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeProfilePopup();
}

// Popup с додавлением новой карточки (place)

const place = document.querySelector(".popup_place");
const placeCloseBtn = document.querySelector(".popup__close-btn_place");
const placeName = document.querySelector(".popup__input_type_name");
const placeLink = document.querySelector(".popup__input_type_link");
const placeOpenBtn = document.querySelector(".profile__add-btn");
const placeSaveBtn = document.querySelector(".popup__save-btn");
const popupGalleryTitle = document.querySelector(".popup__title_gallery");
const popupGalleryImage = document.querySelector(".popup__image");
const galleryCloseBtn = document.querySelector(".popup__close-btn_gallery");
//открыть popup
function showPlacePopup() {
  showPopup(place)
}
//закрыть popup
function closePlacePopup() {
  closePopup(place)
}
placeOpenBtn.addEventListener("click", showPlacePopup);

placeCloseBtn.addEventListener("click", closePlacePopup);

placeSaveBtn.addEventListener("submit", saveNewPlace);

//функия добавления новой карточки

function saveNewPlace(evt) {
  evt.preventDefault();
  const inputName = placeName.value; //приравниваю значения
  const inputLink = placeLink.value; //приравниваю значения
  const savePlace = getItem({ link: inputLink, name: inputName }); //добавляю в функцию getItem введенные значения Имени и ссылки на карточку
  cardContainer.prepend(savePlace); //вставляю в блок с карточками собранную конструкцию в самое начало (prepend)
  inputName.value = ""; // значения будут вставленны в "" скобках
  inputLink.value = "";
  closePlacePopup(evt); // по окончанию работы функции закрыть popup(блока place)
}

const formListener = document
  .querySelector(".popup__form_place")
  .addEventListener("submit", saveNewPlace);

// Подгрузка блоков card с помощью template тега
const initialCards = [
  {
    name: "Байкал",
    link: "./images/baikal.jpg",
  },
  {
    name: "Эрмитаж",
    link: "./images/ermitazh.jpg",
  },
  {
    name: "Кижи",
    link: "./images/kizhi.jpg",
  },
  {
    name: "Родина-мать",
    link: "./images/rodinamother.jpg",
  },
  {
    name: "Озеро Джека Лондона",
    link: "./images/card-ozero_dzeka_londona.jpg",
  },
  {
    name: "Церковь Георгия Победоносца",
    link: "./images/georgiy.jpg",
  },
];
const cardContainer = document.querySelector(".cards");
const templateEl = document.querySelector(".template");

function render() {
  const html = initialCards.map(getItem);
  cardContainer.append(...html);
}
function getItem(item) {
  const newItem = templateEl.content.cloneNode(true); //клонируем template конструкцию
  const nameEl = newItem.querySelector(".card__title");
  nameEl.textContent = item.name;

  const cardImage = newItem.querySelector(".card__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;

  const removeCard = newItem.querySelector(".card__remove");
  removeCard.addEventListener("click", handleRemove); //удаление карточки

  const filledLike = newItem.querySelector(".card__like");
  filledLike.addEventListener("click", handleLike); //лайк на карточку

  // открытие popup фоточек карточек

  
  const galleryOpenBtn = cardImage;
  galleryOpenBtn.addEventListener("click", () => {
    showGallery(item);
  });
  return newItem;
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
function showGallery(item) {
  showPopup(galleryPopup)
  popupGalleryTitle.textContent = item.name
  popupGalleryImage.src = item.link
}

function closeGallery() {
  closePopup(galleryPopup)
}

render();
