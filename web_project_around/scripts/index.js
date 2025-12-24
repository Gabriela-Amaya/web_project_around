const textName = document.querySelector(".profile__name");
const textJob = document.querySelector(".profile__job");
const inputName = document.querySelector(".profile__input-name");
const inputJob = document.querySelector(".profile__input-job");
const form = document.querySelector(".profile__form");
const editButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".profile__popup-pop");
const popupClose = document.querySelector(".profile__close");
const profileSave = document.querySelector(".profile__save");

const addButton = document.querySelector(".profile__button-plus");
const popupAddCard = document.querySelector(".profile__place");
const form2 = document.querySelector(".profile__place-form");
const inputWord = form2.querySelector(".profile__place-name");
const inputLink = form2.querySelector(".profile__place-link");
const elements = document.querySelector(".profile__elements");
const popupAddClose = popupAddCard.querySelector(".profile__place-close");

const popupImage = document.querySelector(".popup_image");
const popupImageClose = popupImage.querySelector(".popup__close-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  textName.textContent = inputName.value;
  textJob.textContent = inputJob.value;
  popupProfile.classList.remove("popup_open");
});

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

popupClose.addEventListener("click", function () {
  popupProfile.classList.remove("popup_open");
});

//////////////////////////////////////////////////////////////////////////////////

/////////

const words = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

addButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_open");
});

popupAddClose.addEventListener("click", function () {
  popupAddCard.classList.remove("popup_open");
});

words.forEach((item) => {
  const card = createElement(item.name, item.link);
  elements.append(card);
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createElement(inputWord.value, inputLink.value);
  elements.prepend(card);
  form2.reset();
  popupAddCard.classList.remove("popup_open");
});

popupImageClose.addEventListener("click", function () {
  popupImage.classList.remove("popup_open");
});

function createElement(name, link) {
  const cardNode = document
    .querySelector(".template")
    .content.querySelector(".gallery__photos")
    .cloneNode(true);
  cardNode.querySelector(".gallery__photo-card").src = link;
  cardNode.querySelector(".gallery__photo-card").alt = name;
  cardNode.querySelector(".gallery__photo-text").textContent = name;

  const likeButton = cardNode.querySelector(".gallery__photo-like ");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("gallery__like_active");
  });

  const trashButton = cardNode.querySelector(".gallery__trash");

  trashButton.addEventListener("click", function () {
    cardNode.remove();
  });

  const image = cardNode.querySelector(".gallery__photo-card");
  image.addEventListener("click", function () {
    popupImage.classList.add("popup_open");

    popupImage.querySelector(".popup__image").src = link;
    popupImage.querySelector(".popup__title").textContent = name;
  });

  return cardNode;
}
