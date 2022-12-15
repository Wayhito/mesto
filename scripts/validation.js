const showInputError = (args, fieldElement) => {
  const errorMessage = fieldElement.querySelector(args.inputSelector).validationMessage;
  const input = fieldElement.querySelector(args.inputSelector);
  const errorContainer = fieldElement.querySelector(args.errorSelector);
  input.classList.add(args.inputErrorClass);
  errorContainer.textContent = errorMessage;
  errorContainer.classList.add(args.errorActiveClass);
};

const hideInputError = (args, fieldElement) => {
  const inputElement = fieldElement.querySelector(args.inputSelector);
  inputElement.classList.remove(args.inputErrorClass);
  const errorContainer = fieldElement.querySelector(args.errorSelector);
  errorContainer.textContent = "";
  errorContainer.classList.remove(args.errorActiveClass);
};
  
const checkInputValidity = (args, fieldElement) => {
  if (!fieldElement.querySelector(args.inputSelector).validity.valid) {
    showInputError(args, fieldElement);
  } else {
    hideInputError(args, fieldElement);
  }
};
  
function setEventListeners(args, formElement) {
  const fieldList = Array.from(formElement.querySelectorAll(args.fieldSelector));
  const buttonElement = formElement.querySelector(args.submitButtonSelector);
  toggleButtonState(fieldList, buttonElement, args);

  fieldList.forEach((fieldElement) => {
    const inputElement = fieldElement.querySelector(args.inputSelector);
    inputElement.addEventListener("input", () => {
      checkInputValidity(args, fieldElement);
      toggleButtonState(fieldList, buttonElement, args);
    });
  });
};
  
const enableValidation = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(args, formElement);
  });
};

function hasInvalidInput(inputSelector, fieldList) {
    return fieldList.some((fieldElement) => {
      return !fieldElement.querySelector(inputSelector).validity.valid;
    }); 
};
  
function toggleButtonState(fieldList, buttonElement, args) {
    if (hasInvalidInput(args.inputSelector, fieldList)) {
      buttonElement.classList.add(args.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(args.inactiveButtonClass);
      buttonElement.disabled = false;
    }
};

enableValidation({
  formSelector: '.popup__form',
  fieldSelector: '.popup__field',
  inputSelector: '.popup__input',
  errorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorActiveClass: 'popup__input-error_active'
});