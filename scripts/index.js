const textName = document.querySelector(".profile__name");
const textJob = document.querySelector(".profile__job");
const inputName = document.querySelector(".profile__input-name");
const inputJob = document.querySelector(".profile__input-job");
const form = document.querySelector(".profile__form");
const editButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".profile__popup-pop");
const popupClose = document.querySelector(".profile__close");
const profileSave = document.querySelector(".profile__save");

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
