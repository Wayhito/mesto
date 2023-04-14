import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {

    constructor ({popupSelector}) {
        super(popupSelector);
        this._formElement = this._popup.querySelector('.popup__form');
        this._submitButton = this._formElement.querySelector('.popup__submit');
    } 

    setSubmit(submitHandler){
        this._submitHandler =  submitHandler;
   }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler();
            this.closePopup();
        });
    }
}