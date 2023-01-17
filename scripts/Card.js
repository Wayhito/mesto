import {openPopup} from "./utils.js" 
import { imgPopup } from "./consts.js";
import { cardTitle } from "./consts.js";
import { cardImg } from "./consts.js";
 
export class Card { 

    constructor (name, link, cardTemplate) { 
        this._name = name; 
        this._src = link;
        this._cardTemplate = cardTemplate;
    } 

    _getElement() {
        this._element = this._cardTemplate.querySelector('.element').cloneNode(true); 
        return this._element; 
    } 

    _setEventListeners(Image) { 
        this._element.querySelector('.element__like').addEventListener('click', (evt) => { 
            this._toggleLike(evt); 
        }); 

        this._element.querySelector('.element__remove').addEventListener('click', () => { 
            this._deleteCard(); 
        }); 

        Image.addEventListener('click', () => { 
            this._openImage(this._name, this._src); 
        }); 
    } 

    _toggleLike(evt) { 
        evt.target.classList.toggle('element__like_active'); 
    } 

    _deleteCard() { 
        this._element.remove(); 
    } 

    _openImage() { 
  
        cardTitle.textContent = this._name; 
        cardImg.src = this._src; 
        cardImg.alt = this._name; 
        openPopup(imgPopup); 
    } 

    generateCard() { 
        this._getElement();
        this._image = this._element.querySelector('.element__image'); 
        this._image.src = this._src; 
        this._image.alt = this._name; 
        this._element.querySelector('.element__name').textContent = this._name; 
        this._likeButton = this._element.querySelector('.element__like'); 
        this._setEventListeners(this._image); 
        return this._element; 
    } 
}
