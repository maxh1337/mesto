  class Card {
    constructor(data, templateSelector, previewCardImage) {
      this._image = data.src;
      this._alt = data.alt;
      this._title = data.title
      this._templateSelector = templateSelector;
      this._previewCardImage = previewCardImage;    
    }
    _getCard(){
      const cardEl = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
      return cardEl;
    }
    generateCard() {
      this._element = this._getCard();
      this._setEventListeners();
      const cardImage = this._element.querySelector('.card__image');
      cardImage.src = this._image;
      cardImage.alt = this._alt;
      this._element.querySelector('.card__title').textContent = this._title;

      return this._element
    }
    _setEventListeners() {
      this._element.querySelector('.card__remove').addEventListener('click', () => {
      this._removeCard()
      });

      this._likeBtn = this._element.querySelector('.card__like')
      this._likeBtn.addEventListener('click', () => {
        this._likeCard()
      });
      
      this._element.querySelector('.card__image').addEventListener('click', () => {
        this._previewCardImage(this._image, this._title)
      });
    }
    _removeCard() {
      this._element.style.transform = 'scale(0)'
      this._element.style.opacity = '0'
      setTimeout(() => {
        this._element.remove()
        this._element = null
      }, 800);
    }
    _likeCard(){
      this._likeBtn.classList.toggle('card__like_filled')
    }
  }
  export default Card