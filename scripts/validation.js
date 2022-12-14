// Show
const showInputError = (formElement, inputElement, errorMessage) => {
    inputElement.classList.add('popup__input_error');
    const errorElement = formElement.querySelectorAll(`.popup__input-error`);
    const inputMassive = formElement.querySelectorAll('.popup__input');
    for (let i = 0; i < inputMassive.length; i++) {
      if (inputMassive[i].classList.contains('popup__input_error') && inputMassive[i] === document.activeElement) {
      errorElement[i].textContent = errorMessage;
      errorElement[i].classList.add('popup__input-error_active');
    }
  };
};

// Hide
const hideInputError = (formElement, inputElement) => {
    inputElement.classList.remove('popup__input_error');
    const errorElement = formElement.querySelectorAll(`.popup__input-error`);
    const inputMassive = formElement.querySelectorAll('.popup__input');
    for (let i = 0; i < inputMassive.length; i++) {
      if (!inputMassive[i].classList.contains('popup__input_error')) {
        console.log("cock")
      errorElement[i].textContent = "";
      errorElement[i].classList.remove('popup__input-error_active');
    }
  };
};
  
// Check validity
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};
  
// set Listeners
function setEventListeners(inputSelector, formElement, submitButtonSelector) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const ButtonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, ButtonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, ButtonElement);
    });
  });
};
  
// enable Validation
const enableValidation = (args) => {
  const formList = Array.from(document.querySelectorAll(args.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(
      args.inputSelector,
      formElement,
      args.submitButtonSelector,
      // args.inputErrorClass
    );
  });
};

// Has invalid input
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};
  
// toggle Button
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_disabled');
    } else {
      buttonElement.classList.remove('popup__submit_disabled');
    }
};

// call up Function
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: '.popup__submit_disabled',
  inputErrorClass: '.popup__input_error',
  errorClass: '.popup__input-error_active'
});