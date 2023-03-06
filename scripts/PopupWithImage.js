import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

    constructor (popupSelector) {
        super(popupSelector);
        this._cardTitle = this._popup.querySelector('.img-popup__text');
        this._cardImg = this._popup.querySelector('.img-popup__image'); 
    }

    open(name, link) {
        this._cardTitle.textContent = name; 
        this._cardImg.src = link; 
        this._cardImg.alt = name; 
        super.openPopup(); 
    };

}