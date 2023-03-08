export class Popup {

    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this.cross = this._popup.querySelector('.popup__cross');
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closePopupByClickOnOverlay = this.closePopupByClickOnOverlay.bind(this);
    }
    
    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose); 
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }
    
    closePopupByClickOnOverlay(event) {
        if (event.target === event.currentTarget) {
            this.closePopup();
        }
    }
    
    setEventListeners() {
        this._popup.addEventListener("click", this.closePopupByClickOnOverlay);
        this.cross.addEventListener("click", (evt) => {this.closePopup()});
    }
}