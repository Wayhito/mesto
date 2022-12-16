const showInputError = (formElement, inputElement, errorMessage, args) => {
  const errorContainer = formElement.querySelector(`.${inputElement.id}-error`);
  errorContainer.textContent = errorMessage;
  errorContainer.classList.add(args.errorActiveClass);
  inputElement.classList.add(args.inputErrorClass);
  // const errorMessage = fieldElement.querySelector(args.inputSelector).validationMessage;
  // const input = fieldElement.querySelector(args.inputSelector);
  // const errorContainer = fieldElement.querySelector(args.errorSelector);
  // input.classList.add(args.inputErrorClass);
  // errorContainer.textContent = errorMessage;
  // errorContainer.classList.add(args.errorActiveClass);
};

const hideInputError = (formElement, inputElement, args) => {
  const errorContainer = formElement.querySelector(`.${inputElement.id}-error`);
  errorContainer.textContent = "";
  errorContainer.classList.remove(args.errorActiveClass);
  inputElement.classList.remove(args.inputErrorClass);
  // const inputElement = fieldElement.querySelector(args.inputSelector);
  // inputElement.classList.remove(args.inputErrorClass);
  // const errorContainer = fieldElement.querySelector(args.errorSelector);
  // errorContainer.textContent = "";
  // errorContainer.classList.remove(args.errorActiveClass);
};
  
const checkInputValidity = (formElement, inputElement, args) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, args);
  } else {
    hideInputError(formElement, inputElement, args);
  }
};

// if (!inputElement.validity.valid) {
//   showInputError(formElement, inputElement, inputElement.validationMessage);
// } else {
//   hideInputError(formElement, inputElement);
// }
  
function setEventListeners(args, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(args.inputSelector));
  const buttonElement = formElement.querySelector(args.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, args);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, args);
      toggleButtonState(inputList, buttonElement, args);
    });
  });
};
  
const enableValidation = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(args, formElement);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};
  
function toggleButtonState(inputList, buttonElement, args) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(args.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(args.inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorActiveClass: 'popup__input-error_active'
});