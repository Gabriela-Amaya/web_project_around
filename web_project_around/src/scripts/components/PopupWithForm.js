import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);

    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector("form");
    this._submitButton = this._form.querySelector('button[type="submit"]');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    const formElements = Array.from(this._form.elements);

    formElements.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Guardando...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
/*import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);

    this._handleSubmit = handleSubmit;

    this._form = this._popup.querySelector("form");
  }

  _getInputValues() {
    const inputValues = {};

    const formElements = Array.from(this._form.elements);

    formElements.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();

    this._form.reset();
  }
}
*/
