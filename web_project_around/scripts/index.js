import Card from "./components/Card.js";

import Section from "./components/Section.js";

import PopupWithImage from "./components/PopupWithImage.js";

import PopupWithForm from "./components/PopupWithForm.js";

import UserInfo from "./components/UserInfo.js";

import FormValidator from "./components/FormValidator.js";
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

const popupImage = new PopupWithImage(".popup_image");

popupImage.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__job");

const cardSection = new Section(
  words,
  (item) => {
    const card = new Card(item.name, item.link, ".template", {
      handleCardImageClick: (name, link) => {
        popupImage.open(name, link);
      },
    });

    const cardElement = card.generateCard();

    cardSection.addItem(cardElement);
  },
  ".profile__elements",
);

cardSection.renderItems();

const popupProfile = new PopupWithForm(".profile__popup-pop", (data) => {
  userInfo.setUserInfo({
    name: data.inputname,
    about: data.inputjob,
  });
});

popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".profile__place", (data) => {
  const card = new Card(data.inputtitle, data.inputphoto, ".template", {
    handleCardImageClick: (name, link) => {
      popupImage.open(name, link);
    },
  });

  const cardElement = card.generateCard();

  cardSection.addItem(cardElement);
});

popupAddCard.setEventListeners();

document
  .querySelector(".profile__button-edit")
  .addEventListener("click", () => {
    popupProfile.open();
  });

document
  .querySelector(".profile__button-plus")
  .addEventListener("click", () => {
    popupAddCard.open();
  });

const profileValidator = new FormValidator(
  {
    inputSelector: ".profile__input",
    submitButtonSelector: ".profile__save",
    inputErrorClass: "profile__input_error",
  },
  document.querySelector(".profile__form"),
);

profileValidator.enableValidation();

const placeValidator = new FormValidator(
  {
    inputSelector: ".profile__placee",
    submitButtonSelector: ".profile__create",
    inputErrorClass: "profile__place_error",
  },
  document.querySelector(".profile__place-form"),
);

placeValidator.enableValidation();
