/*let popup = document.querySelector('.popup');
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

formElement.addEventListener('submit', formSubmitHandler);*/

// Подгрузка блоков card с помощью template тега
const SRC_LIST = [
  { src: "./images/baikal.jpg" },
  { src: "./images/ermitazh.jpg" },
  { src: "./images/kizhi.jpg" },
  { src: "./images/rodinamother.jpg" },
  { src: "./images/card-ozero_dzeka_londona.jpg" },
  { src: "./images/georgiy.jpg" },
];
const TITLE_LIST = [
  { title: "Байкал" },
  { title: "Эрмитаж" },
  { title: "Кижи" },
  { title: "Родина-мать" },
  { title: "Озеро Джека Лондона" },
  { title: "Церковь Георгия Победоносца" },
];

/*const cardContainer = document.querySelector(".cards");
const templateEl = document.querySelector(".template");

function render() {
  const html = TITLE_LIST.map(getItem);

  cardContainer.append(...html);
}
render();

function getItemHTML(item) {
  return `<article class="card">
			<img src="${item.src}" alt="Озеро Байкал" class="card__image">
				<div class="card__action">
					<h2 class="card__title">${item.title}</h2>
					<button type="button" class="card__like elem-click"></button>
				</div>
			</article>`;
}
function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const TitleEl = newItem.querySelector(".card__title");
  TitleEl.textContent = item.title;

  return newItem;
}
render();*/
const cardContainer = document.querySelector(".cards");
const templateEl = document.querySelector(".template");

function render() {
  const html = TITLE_LIST.map(getItem);
  cardContainer.append(...html);
}

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const TitleEl = newItem.querySelector(".card__title");
  TitleEl.textContent = item.title;
  return newItem;
}
render();
/*function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.card__title');
    headerEl.textContent = item.title;

    return newItem;
}*/
