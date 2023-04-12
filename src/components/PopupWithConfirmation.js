import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {

    constructor ({popupSelector, submitHandler}) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popup.querySelector('.popup__form');
        this._submitButton = this._formElement.querySelector('.popup__submit');
    } 

    //  _submit(evt) {
    //     evt.preventDefault();
    //     this._formSubmitCallBack(this.data);
    // }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this.data, this._submitButton);
            this.closePopup();
        });
    }
}