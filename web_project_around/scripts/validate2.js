/*const inputList = Array.from(document.querySelectorAll(".profile__placee"));
const submitButton = document.querySelector(".profile__create");

function isInvalidInputs(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

inputList.forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    const spanNode = document.querySelector(`.${inputElement.name}-error`);

    if (!inputElement.validity.valid) {
      inputElement.classList.add("profile__place_error");
      spanNode.textContent = inputElement.validationMessage;
    } else {
      inputElement.classList.remove("profile__place_error");
      spanNode.textContent = "";
    }

    submitButton.disabled = isInvalidInputs(inputList);
  });
});
/*