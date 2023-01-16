class FormValidator {
    constructor() {
        this._enableValidation({
            formSelector: '.popup__form',
            inputSelector: '.popup__input',
            errorSelector: '.popup__input-error',
            submitButtonSelector: '.popup__submit',
            inactiveButtonClass: 'popup__submit_disabled',
            inputErrorClass: 'popup__input_error',
            errorActiveClass: 'popup__input-error_active'
        });
    }

    _enableValidation(args) {
            const formList = Array.from(document.querySelectorAll(args.formSelector));
                formList.forEach((formElement) => {
                this._setEventListeners(args, formElement);
        });
    };

    _setEventListeners(args, formElement) {
        const inputList = Array.from(formElement.querySelectorAll(args.inputSelector));
        const buttonElement = formElement.querySelector(args.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement, args);
    
    inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                this._checkInputValidity(formElement, inputElement, args);
                this._toggleButtonState(inputList, buttonElement, args);
            });
        });
    };

    _toggleButtonState(inputList, buttonElement, args) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(args.inactiveButtonClass);
          buttonElement.disabled = true;
        } else {
          buttonElement.classList.remove(args.inactiveButtonClass);
          buttonElement.disabled = false;
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        }); 
      };

    _checkInputValidity = (formElement, inputElement, args) => {
        if (!inputElement.validity.valid) {
          this._showInputError(formElement, inputElement, inputElement.validationMessage, args);
        } else {
          this._hideInputError(formElement, inputElement, args);
        }
    };

    _showInputError = (formElement, inputElement, errorMessage, args) => {
        const errorContainer = formElement.querySelector(`.${inputElement.id}-error`);
            errorContainer.textContent = errorMessage;
            errorContainer.classList.add(args.errorActiveClass);
            inputElement.classList.add(args.inputErrorClass);
    };
      
    _hideInputError = (formElement, inputElement, args) => {
        const errorContainer = formElement.querySelector(`.${inputElement.id}-error`);
        errorContainer.textContent = "";
        errorContainer.classList.remove(args.errorActiveClass);
        inputElement.classList.remove(args.inputErrorClass);
    };
}

export {FormValidator};