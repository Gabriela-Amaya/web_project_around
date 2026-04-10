import { openImagePopup } from "../../utils/utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const templateCard = document.querySelector(this._templateSelector);
    this._element = templateCard.content
      .querySelector(".gallery__photos")
      .cloneNode(true);

    return this._element;
  }
  _setEventListeners() {
    const cardImage = this._element.querySelector(".gallery__photo-card");
    const cardLike = this._element.querySelector(".gallery__photo-like");
    const cardTrash = this._element.querySelector(".gallery__trash");

    cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });

    cardLike.addEventListener("click", () => {
      this._handleLikeClick();
    });

    cardTrash.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _handleImageClick() {
    openImagePopup(this._name, this._link);
  }

  _handleLikeClick() {
    const cardLike = this._element.querySelector(".gallery__photo-like");
    cardLike.classList.toggle("gallery__photo-like_active");
  }
  /*
  _handleLikeClick() {
    this._element
      .querySelector(".gallery__photo-like")
      .classList.toggle("gallery__photo-like_active");
  }*/

  _handleDeleteClick() {
    this._element.remove();
  }

  generateCard() {
    this._getTemplate();

    const cardImage = this._element.querySelector(".gallery__photo-card");
    const cardTitle = this._element.querySelector(".gallery__photo-text");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
