export default class Card {
  constructor(name, link, templateSelector, { handleCardImageClick }) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  _getTemplate() {
    const templateCard = document.querySelector(this._templateSelector);

    return templateCard.content
      .querySelector(".gallery__photos")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _handleImageClick() {
    this._handleCardImageClick(this._name, this._link);
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("gallery__photo-like_active");
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector(".gallery__photo-card");

    this._title = this._element.querySelector(".gallery__photo-text");

    this._likeButton = this._element.querySelector(".gallery__photo-like");

    this._deleteButton = this._element.querySelector(".gallery__trash");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
