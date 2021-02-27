const showInputError = (formElement, inputElement, errorMessage,  inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
};
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

function unactivePopupBtn(inputList, ButtonEl) {
  const hasNotValidInput = inputList.some((InputEl) => !InputEl.validity.valid);
  if (hasNotValidInput) {
    ButtonEl.setAttribute("disabled", true);
  } else {
    ButtonEl.removeAttribute("disabled");
  }
}

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      unactivePopupBtn(inputList, buttonElement);
    });
  });
  unactivePopupBtn(inputList, buttonElement);
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inputErrorClass, errorClass }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass)
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
});
