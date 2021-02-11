//Будет много комментариев, я тупой. И они помогут мне потом понять, что я вообще тут накодил) :) Thanks.


let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let userEditBtn = document.querySelector(".profile__edit-btn");
let formCloseBtn = document.querySelector(".popup__close-btn");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_username");
let aboutInput = document.querySelector(".popup__input_type_about");

//первый popup с редактированием информации о человеке
function showPopup() {  //открыть
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}
function closePopup() { // закрыть
  popup.classList.remove("popup_opened");
}

userEditBtn.addEventListener("click", showPopup);

formCloseBtn.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) { //после изменения данных, закрыть popup
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

// Popup с додавлением новой карточки (place)

let place = document.querySelector(".popup_place");
let placeCloseBtn = document.querySelector(".popup__close-btn_place");
// let placeForm = document.querySelector(".place__form");
let placeName = document.querySelector(".popup__input_type_name");
let placeLink = document.querySelector(".popup__input_type_link");
let placeOpenBtn = document.querySelector(".profile__add-btn");
let placeSaveBtn = document.querySelector(".popup__save-btn");

//открыть popup
function showPlace() {
  place.classList.add("popup_opened");
}
//закрыть popup
function closePlace() {
  place.classList.remove("popup_opened"); 
}
placeOpenBtn.addEventListener("click", showPlace);

placeCloseBtn.addEventListener("click", closePlace);

placeSaveBtn.addEventListener("submit", saveNewPlace);

//функия добавления новой карточки

function saveNewPlace(evt) {
evt.preventDefault();
const inputName = placeName.value; //приравниваю значения
const inputLink = placeLink.value;//приравниваю значения
const savePlace = getItem({link: inputLink, name: inputName});  //добавляю в функцию getItem введенные значения Имени и ссылки на карточку
cardContainer.prepend(savePlace); //вставляю в блок с карточками собранную конструкцию в самое начало (prepend)
inputName.value = "" ; // значения будут вставленны в "" скобках
inputLink.value = "" ; 
closePlace(evt); // по окончанию работы функции закрыть popup(блока place)
}

let formListener = document.querySelector(".popup__form_place").addEventListener("submit", saveNewPlace);

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
  const newItem = templateEl.content.cloneNode(true);  //клонируем template конструкцию
  const nameEl = newItem.querySelector(".card__title"); 
  nameEl.textContent = item.name;  

  const linkEl = newItem.querySelector(".card__image");
  linkEl.src = item.link;

  const removeCard = newItem.querySelector(".card__remove");
  removeCard.addEventListener("click", handleRemove); //удаление карточки 

  const filledLike = newItem.querySelector(".card__like");
  filledLike.addEventListener("click", handleLike); //лайк на карточку
  
  // открытие popup фоточек карточек

  
  const galleryCloseBtn = document.querySelector(".popup__gallery-btn");
  const cardImage = newItem.querySelector(".card__image");
  const galleryOpenBtn = cardImage;
  galleryOpenBtn.addEventListener("click", showGallery);
  galleryCloseBtn.addEventListener("click", closeGallery);
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

function showGallery(evt) {
// console.dir(evt.target)
galleryPopup.classList.add("popup_opened");
const targetEl = evt.target;
const targetItem = targetEl.closest('.card');
const cardTitle = targetItem.querySelector('.card__title');
const popupGalleryTitle = document.querySelector(".popup__title_gallery");
const popupGalleryImage = document.querySelector(".popup__image");
const galleryImage = targetItem.querySelector("card__image");
popupGalleryTitle.textContent = cardTitle.textContent;
// popupGalleryImage.src = evt.galleryImage.src;
popupGalleryImage.src = evt.target.src
}

function closeGallery() {
	galleryPopup.classList.remove('popup_opened');
}

render();
