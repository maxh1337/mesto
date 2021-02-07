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

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

userEditBtn.addEventListener("click", showPopup);

formCloseBtn.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);

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
  cardContainer.append(...src);
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
