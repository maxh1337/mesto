let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let userEditBtn = document.querySelector(".profile__edit-btn");
let formCloseBtn = document.querySelector(".popup__close-btn");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_username");
let aboutInput = document.querySelector(".popup__input_type_about");


function showPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}

userEditBtn.addEventListener("click", showPopup);

formCloseBtn.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

// Popup с додавлением новой карточки

let place = document.querySelector(".place");
let placeCloseBtn = document.querySelector(".place__close-btn");
let placeForm = document.querySelector(".place__form");
let placeName = document.querySelector(".place__input_type_name");
let placeLink = document.querySelector(".place__input_type_link");
let placeOpenBtn = document.querySelector(".profile__add-btn");

function showPlace() {
  place.classList.add("place_opened");
}

function closePlace() {
  place.classList.remove("place_opened"); 
}

placeOpenBtn.addEventListener("click", showPlace);

placeCloseBtn.addEventListener("click", closePlace);

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
  const newItem = templateEl.content.cloneNode(true);
  const nameEl = newItem.querySelector(".card__title");
  nameEl.textContent = item.name;

  const linkEl = newItem.querySelector(".card__image");
  linkEl.src = item.link;

  const removeCard = newItem.querySelector(".card__remove");
  removeCard.addEventListener("click", handleRemove);

  const filledLike = newItem.querySelector(".card__like");
  filledLike.addEventListener("click", handleLike);

  return newItem;
}

function handleRemove(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest(".card");
  targetItem.remove();
}

function handleLike(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest(".card__like");
  targetItem.classList.toggle("card__like_filled");
}

render();

const inputName = document.querySelector(".place__input_type_name");
const inputLink = document.querySelector(".place__input_type_link");

function handleAdd() {
const inputText = inputName.value;
const inputLinks = inputLink.value;
const listLink = getItem({link: inputLinks})
const listItem = getItem({name: inputText});
cardContainer.prepend(listItem);
cardContainer.prepend(listLink);
inputName.value = ""
inputLink.value = ""
}