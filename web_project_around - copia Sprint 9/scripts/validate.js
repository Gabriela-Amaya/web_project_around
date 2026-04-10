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

/*/*const form = document.forms.superHeroe;
const inputs = form.querySelectorAll(".form__input, .form__textarea");
const submitButton = form.querySelector(".form__button--submit");


//  Primera parte para que las letras diran rojo en error
const inputList = Array.from(document.querySelectorAll(".profile__input"));
const submitButton = document.querySelector(".profile__save");

inputList.forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    //const spanNode = document.querySelector(`#${inputElement.name}-error`);
    //console.log(inputElement.name, inputElement.validationMessahe);
    if (!inputElement.validity.valid) {
      inputElement.classList.add("inputjob-error");
      spanNode.textContent = inputElement.validationMessage;
    } else {
      inputElement.classList.remove("inputjob-error");
      spanNode.textContent = " ";
      spanNode.classList.remove("inputjob-error");
    }
    if (isInvalidInputs(inputList)) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });
});
/*
function isInvalidInputs(inputList = []) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}
// some: es que algunos sean verdaderos

function isValidInputs(inputList = []) {
  return inputList.every(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

// every: es que todos sean verdaderos
// los arreglos nos permiten usar todas las funciones como:
//forEach, every, some
//el arreglo me lo da: Array.from(document.querySelectorAll(".form__input"));
// en la primera linea

//segunda parte para que el segundo
const inputList2 = Array.from(
  document.querySelectorAll(".profile__place-name"),
);
const submitButton2 = document.querySelector(".profile__place-name");

inputList.forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    const spanNode = document.querySelector(`#${inputElement.name}-error`);
    //console.log(inputElement.name, inputElement.validationMessahe);
    if (!inputElement.validity.valid) {
      inputElement.classList.add("profile__input_error");
      spanNode.textContent = inputElement.validationMessage;
    } else {
      inputElement.classList.remove("profile__input_error");
      spanNode.textContent = " ";
    }
    if (isInvalidInputs(inputList)) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });
});

function isInvalidInputs(inputList = []) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}
// some: es que algunos sean verdaderos

function isValidInputs(inputList = []) {
  return inputList.every(function (inputElement) {
    return !inputElement.validity.valid;
  });
}
//------------------------------------------------------------------------------

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  configForm,
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //const errorElement = form.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add(configForm.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configForm.errorClass);
};
//const hideInputError = (inputElement) => {
const hideInputError = (formElement, inputElement, configForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configForm.inputErrorClass);
  errorElement.classList.remove(configForm, errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configForm) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, configForm);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, configForm) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configForm.disabledSubmitClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(configForm.disabledSubmitClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, configForm) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configForm.inputselector),
  );
  <span class="inputjob-error"></span>;
  const submitButton = formElement.querySelector(configForm.submitButton);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configForm);
      toggleButtonState(inputList, submitButton, configForm);
    });
  });
};

const enableValidation = (configForm) => {
  const formList = Array.from(
    document.querySelectorAll(configForm.formSelector),
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, configForm);
  });
};

const configForm = {
  formSelector: ".profile__form",
  inputselector: ".profile__input",
  submitSelector: ".profile__create",
  disabledSubmitClass: "form__disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
enableValidation(configForm);
*/
