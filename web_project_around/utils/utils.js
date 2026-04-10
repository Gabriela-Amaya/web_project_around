//import Card from "../scripts/components/Card";

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

// DOM
const areaCards = document.querySelector(".profile__elements");

const popupProfile = document.querySelector(".profile__popup-pop");
const popupAddCard = document.querySelector(".place-popup");
const popupImage = document.querySelector(".popup_image");

const imageAddButton = document.querySelector(".profile__button-plus");
const profileEditButton = document.querySelector(".profile__button-edit");

const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close"),
);

//  FUNCIONES
function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

function openImagePopup(name, link) {
  openPopup(popupImage);

  popupImage.querySelector(".popup__image").src = link;
  popupImage.querySelector(".popup__image").alt = name;
  popupImage.querySelector(".popup__title").textContent = name;
}

// EVENTOS DE CIERRE
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

// EXPORTS
export {
  words,
  areaCards,
  openPopup,
  closePopup,
  openImagePopup,
  profileEditButton,
  imageAddButton,
  popupProfile,
  popupAddCard,
};
