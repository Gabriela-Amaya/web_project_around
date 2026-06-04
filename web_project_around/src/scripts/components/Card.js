export default class Card {
  constructor(
    data,
    templateSelector,
    { handleCardImageClick, handleDeleteClick, handleLikeClick },
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;

    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const templateCard = document.querySelector(this._templateSelector);

    return templateCard.content
      .querySelector(".gallery__photos")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleCardImageClick(this._name, this._link);
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
  }

  getId() {
    return this._id;
  }

  getIsLiked() {
    return this._isLiked;
  }

  setLikeStatus(isLiked) {
    this._isLiked = isLiked;

    if (this._isLiked) {
      this._likeButton.classList.add("gallery__photo-like_active");
    } else {
      this._likeButton.classList.remove("gallery__photo-like_active");
    }
  }

  deleteCard() {
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

    this.setLikeStatus(this._isLiked);
    this._setEventListeners();

    return this._element;
  }
}

/*export default class Card {
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
*/
