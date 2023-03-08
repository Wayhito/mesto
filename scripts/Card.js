// import { PopupWithImage } from "./PopupWithImage.js";

export class Card { 

    constructor (item, cardTemplate, handleCardClick) {
        this._handleCardClick = handleCardClick;
        this._name = item.name;
        this._link = item.link;
        this._cardTemplate = cardTemplate;
    }

    _getElement() {
        this._element = this._cardTemplate.querySelector('.element').cloneNode(true); 
        return this._element; 
    } 

    _setEventListeners() { 
        this._element.querySelector('.element__like').addEventListener('click', (evt) => { 
            this._toggleLike(evt); 
        }); 

        this._element.querySelector('.element__remove').addEventListener('click', () => { 
            this._deleteCard(); 
        }); 

        this._image.addEventListener('click', () => { 
            const data = {
                'name' : this._name,
                'link' : this._link
              }
            this._handleCardClick( data );
        }); 
    } 

    _toggleLike(evt) { 
        evt.target.classList.toggle('element__like_active'); 
    } 

    _deleteCard() { 
        this._element.remove();
        this._element = null;
    } 

    generateCard() { 
        this._getElement();

        this._image = this._element.querySelector('.element__image'); 
        this._image.src = this._link; 
        this._image.alt = this._name; 
        this._element.querySelector('.element__name').textContent = this._name; 

        this._likeButton = this._element.querySelector('.element__like'); 

        this._setEventListeners(); 
        return this._element; 
    } 
}
