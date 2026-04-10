export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;

    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector),
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector,
    );
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _showInputError(inputElement) {
    const spanNode = this._formElement.querySelector(
      `.${inputElement.name}-error`,
    );

    if (!spanNode) return;

    inputElement.classList.add(this._inputErrorClass);
    spanNode.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const spanNode = this._formElement.querySelector(
      `.${inputElement.name}-error`,
    );

    if (!spanNode) return;

    inputElement.classList.remove(this._inputErrorClass);
    spanNode.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    this._submitButton.disabled = this._hasInvalidInput();
  }

  _setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
/*

export default class FormValidator {

    // todo lo que marca error se le quita el const
    // que hacer con el function que marca error?
const inputList = Array.from(document.querySelectorAll(".profile__input"));
const submitButton = document.querySelector(".profile__save");

function isInvalidInputs(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

inputList.forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    const spanNode = document.querySelector(`.${inputElement.name}-error`);

    if (!inputElement.validity.valid) {
      inputElement.classList.add("profile__input_error");
      spanNode.textContent = inputElement.validationMessage;
    } else {
      inputElement.classList.remove("profile__input_error");
      spanNode.textContent = "";
    }

    submitButton.disabled = isInvalidInputs(inputList);
  });
});

const inputListt = Array.from(document.querySelectorAll(".profile__placee"));
const submitButtonn = document.querySelector(".profile__create");

function isInvalidInputs(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

inputListt.forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    const spanNode = document.querySelector(`.${inputElement.name}-error`);

    if (!inputElement.validity.valid) {
      inputElement.classList.add("profile__place_error");
      spanNode.textContent = inputElement.validationMessage;
    } else {
      inputElement.classList.remove("profile__place_error");
      spanNode.textContent = "";
    }

    submitButtonn.disabled = isInvalidInputs(inputListt);
  });
});
}
*/
