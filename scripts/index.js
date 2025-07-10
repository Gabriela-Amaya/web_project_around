const textName = document.querySelector(".profile__name");
const textJob = document.querySelector(".profile__job");
const inputName = document.querySelector(".form__input_name");
const inputJob = document.querySelector(".form__input_job");
const form = document.querySelector(".popup__form");
const editButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup__profile");
const popupClose = document.querySelector(".popup__close");

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
