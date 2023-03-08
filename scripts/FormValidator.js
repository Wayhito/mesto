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
    this._setEventListeners(this.settingsOfValidation, this.form);
  };

  _setEventListeners(args, form) {
    this._toggleButtonState(this.inputList, this.buttonElement, args);
      
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(form, inputElement, args);
        this._toggleButtonState(args);
      });
    });
  };

  _toggleButtonState = (args) => {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(args.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(args.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  };

  _hasInvalidInput = () => {
    return this.inputList.some((inputElement) => {
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

  // disableButton = (submitter, args) => {
  disableButton = () => {
    submitter.classList.add(args.inactiveButtonClass);
    submitter.disabled = true;
  };
}
