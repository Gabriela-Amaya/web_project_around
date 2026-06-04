import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import Api from "./components/Api.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "8b0f87b8-aec4-41c4-a235-2b4b7196647d",
    "Content-Type": "application/json",
  },
});

const nameInput = document.querySelector(".profile__input-name");
const jobInput = document.querySelector(".profile__input-job");

const popupImage = new PopupWithImage(".popup_image");
popupImage.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation(".popup-confirm");
popupDeleteCard.setEventListeners();

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__image-avatar",
);

function createCard(item) {
  const card = new Card(item, ".template", {
    handleCardImageClick: (name, link) => {
      popupImage.open(name, link);
    },

    handleDeleteClick: (cardInstance) => {
      popupDeleteCard.open();

      popupDeleteCard.setSubmitAction(() => {
        api
          .deleteCard(cardInstance.getId())
          .then(() => {
            cardInstance.deleteCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },

    handleLikeClick: (cardInstance) => {
      api
        .changeLikeCardStatus(cardInstance.getId(), cardInstance.getIsLiked())
        .then((updatedCard) => {
          cardInstance.setLikeStatus(updatedCard.isLiked);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return card.generateCard();
}

const cardSection = new Section(
  [],
  (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);
  },
  ".profile__elements",
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });

    userInfo.setUserAvatar(userData.avatar);

    cardSection._items = cards;
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const popupProfile = new PopupWithForm(".profile__popup-pop", (data) => {
  popupProfile.renderLoading(true);

  api
    .editUserInfo({
      name: data.inputname,
      about: data.inputjob,
    })
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        about: userData.about,
      });

      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
});

popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(".profile__place", (data) => {
  popupAddCard.renderLoading(true);

  api
    .addCard({
      name: data.inputtitle,
      link: data.inputphoto,
    })
    .then((newCard) => {
      const cardElement = createCard(newCard);
      cardSection.addItem(cardElement);

      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.renderLoading(false);
    });
});

popupAddCard.setEventListeners();

const popupAvatar = new PopupWithForm(".popup-avatar", (data) => {
  popupAvatar.renderLoading(true);

  api
    .updateAvatar(data.avatar)
    .then((userData) => {
      userInfo.setUserAvatar(userData.avatar);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
});

popupAvatar.setEventListeners();

document
  .querySelector(".profile__button-edit")
  .addEventListener("click", () => {
    const currentUserInfo = userInfo.getUserInfo();

    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.about;

    popupProfile.open();
  });

document
  .querySelector(".profile__button-plus")
  .addEventListener("click", () => {
    popupAddCard.open();
  });

document
  .querySelector(".profile__avatar-edit")
  .addEventListener("click", () => {
    popupAvatar.open();
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
/*import Card from "./components/Card.js";

import Section from "./components/Section.js";

import PopupWithImage from "./components/PopupWithImage.js";

import PopupWithForm from "./components/PopupWithForm.js";

import UserInfo from "./components/UserInfo.js";

import FormValidator from "./components/FormValidator.js";

import Api from "./components/Api.js";
/*
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
*/ /*
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "8b0f87b8-aec4-41c4-a235-2b4b7196647d",
    "Content-Type": "application/json",
  },
});

const popupImage = new PopupWithImage(".popup_image");

popupImage.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__job");
/*
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
*/
/*
api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
  })
  .catch((err) => {
    console.log(err);
  });

const cardSection = new Section(
  [],
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

api
  .getInitialCards()
  .then((cards) => {
    cardSection._items = cards;
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

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
*/
