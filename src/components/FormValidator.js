export class FormValidator {

  settingsOfValidation;
  form;

  inputList;
  buttonElement;

  constructor(args, form) {
    this.settingsOfValidation = args;
    this.form = form;
    this.inputList = Array.from(form.querySelectorAll(args.inputSelector));
    this.buttonElement = form.querySelector(args.submitButtonSelector);
    this._enableValidation();
  }

  _enableValidation() {
    this._setEventListeners();
  };

  _setEventListeners() {
    this._toggleButtonState();
      
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.settingsOfValidation.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.settingsOfValidation.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  };

  _hasInvalidInput = () => {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorContainer = this.form.querySelector(`.${inputElement.id}-error`);
    errorContainer.textContent = errorMessage;
    errorContainer.classList.add(this.settingsOfValidation.errorActiveClass);
    inputElement.classList.add(this.settingsOfValidation.inputErrorClass);
  };
    
  _hideInputError = (inputElement) => {
    const errorContainer = this.form.querySelector(`.${inputElement.id}-error`);
    errorContainer.textContent = "";
    errorContainer.classList.remove(this.settingsOfValidation.errorActiveClass);
    inputElement.classList.remove(this.settingsOfValidation.inputErrorClass);
  };

    disableButton = () => {
    this.buttonElement.classList.add(this.settingsOfValidation.inactiveButtonClass);
    this.buttonElement.disabled = true;
  };
}
