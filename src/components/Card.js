export class Card { 

    constructor (item, cardTemplate, handleCardClick, {addCardLike, deleteCardLike}, userId, deleteCard) {
        this._handleCardClick = handleCardClick;
        this._item = item;
        this._name = item.name;
        this._link = item.link;
        this._cardTemplate = cardTemplate;
        this._addCardLike = addCardLike;
        this._deleteCardLike = deleteCardLike;
        this._cardId = this._item._id;
        this._userId = userId;
        this._cardOwnerId = this._item.owner._id
        this._deleteCard = deleteCard;
        /////////////////////////////////////////////////////////////////////////////////////Пауза
    }

    _getElement() {
        this._element = this._cardTemplate.querySelector('.element').cloneNode(true); 
        return this._element; 
    } 

    _setEventListeners() { 
        if (this._cardOwnerId === this._userId) {
            this._deleteButton.classList.add("element__remove_active");
            this._deleteButton.addEventListener("click", () =>
              this._deleteButtonClick()
            );
        }

        this._element.querySelector('.element__like').addEventListener('click', (evt) => { 
            this._toggleLike(evt); 
        }); 

        // this._element.querySelector('.element__remove').addEventListener('click', () => { 
        //     this._deleteCard(); 
        // }); 

        this._image.addEventListener('click', () => { 
            const data = {
                'name' : this._name,
                'link' : this._link
              }
            this._handleCardClick(data);
        }); 
    } 

    _toggleLike(evt) {
        if (!evt.target.classList.contains("element__like_active")) {
            this._addCardLike(this._cardId)
            .then((res) => {
                // this._item = res;
                this._likeCounter.textContent = res.likes.length;
                evt.target.classList.add("element__like_active");
            })
            .catch((err) => console.log(err));

        } else {
            this._deleteCardLike(this._cardId)
            .then((res) => {
                //this._item = res;
                this._likeCounter.textContent = res.likes.length;
                evt.target.classList.remove("element__like_active");
            })
            .catch((err) => console.log(err));
        }  

        //evt.target.classList.toggle('element__like_active'); 
    }

    _checkIfLiked() {
        if (this._item.likes.some(elem => elem._id === this._userId)) 
        {this._likeButton.classList.add("element__like_active");}
    }

    // _deleteCard() { 
    //     this._element.remove();
    //     this._element = null;
    // }

    _deleteButtonClick() {
        const data = {
          card: this._element,
          cardId: this._cardId,
        };

        this._deleteCard(data);
    }

    generateCard() { 
        this._getElement();
        this._likeCounter = this._element.querySelector(".element__like-counter");

        this._deleteButton = this._element.querySelector(".element__remove");

        this._image = this._element.querySelector('.element__image'); 
        this._image.src = this._link; 
        this._image.alt = this._name; 
        this._element.querySelector('.element__name').textContent = this._name; 

        this._likeButton = this._element.querySelector('.element__like');
        this._likeCounter.textContent = this._item.likes.length;

        this._setEventListeners();
        this._checkIfLiked();
        return this._element; 
    }
}
