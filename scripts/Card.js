import {openPopup} from "./script.js"

class Card {
    constructor (name, link) {
        this._name = name;
        this._src = link;
        this._cardTemplate = document.querySelector('#cardTemplate').content;
        this._element = this._cardTemplate.querySelector('.element').cloneNode(true);
        this._generateCard();
    }

    getElement() {
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
        this._imgPopup = document.querySelector('.img-popup');
        const title = this._imgPopup.querySelector('.img-popup__text');
        const img = this._imgPopup.querySelector('.img-popup__image');
        title.textContent = this._name;
        img.src = this._src;
        img.alt = this._name;
        openPopup(this._imgPopup);
    }
    
    _generateCard() {
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._src;
        this._image.alt = this._name;
        this._element.querySelector('.element__name').textContent = this._name;
        this._likeButton = this._element.querySelector('.element__like');
        this._setEventListeners(this._image);
        return this._element;
    }
}

export {Card};

    // function generateCard(link, name) {
    //     const cardElement = card.querySelector('.element').cloneNode(true);
    //     cardElement.querySelector('.element__image').src = link;
    //     cardElement.querySelector('.element__name').textContent = name;
    //     cardElement.querySelector('.element__image').alt = name;
    //     const newLike = cardElement.querySelector('.element__like');
    //     newLike.addEventListener('click', event => {
    //       switchLikeColor(newLike);
    //     })
    //     const newRemove = cardElement.querySelector('.element__remove');
    //     newRemove.addEventListener('click', event => {
    //       removeCard(newRemove);
    //     })
    //     const openImg = cardElement.querySelector('.element__image');
    //     openImg.addEventListener('click', event => {
    //       openImgPopup(openImg);
    //     })
    //     return cardElement;
    // }