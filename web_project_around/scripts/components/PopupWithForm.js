import Popup from "./Popup.js";

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
