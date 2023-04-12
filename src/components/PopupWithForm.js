import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {

    constructor ({popupSelector, submitHandler}) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._submitButton = this._formElement.querySelector('.popup__submit');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });

        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues(), this._submitButton);
            //SetUserInfo????
            this.close();
        });
    }

    close() {
        super.closePopup();
        this._formElement.reset();
    }

}