export class Card { 

    constructor (item, cardTemplate, handleCardClick, {handleLikeClick, handleDeleteLikeClick}, userId, {handleDeleteCard}, paintLike, unpaintLike) {
        this._handleCardClick = handleCardClick;
        this._item = item;
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._cardTemplate = cardTemplate;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteLikeClick = handleDeleteLikeClick;
        this._cardId = this._item._id;
        this._userId = userId;
        this._cardOwnerId = this._item.owner._id
        this._handleDeleteCard = handleDeleteCard;
        this._paintLike = paintLike.bind(this);
        this._unpaintLike = unpaintLike.bind(this);
    }

    _getElement() {
        this._element = this._cardTemplate.querySelector('.element').cloneNode(true); 
        return this._element; 
    } 

    _setEventListeners() { 
        if (this._cardOwnerId === this._userId) {
            this._deleteButton.classList.add("element__remove_active");

            this._deleteButton.addEventListener("click", () => {
                this._handleDeleteCard(this)
            });
        }

        this._element.querySelector('.element__like').addEventListener('click', () => {
            if (this._likeButton.classList.contains('element__like_active')) {
                this._dislike();
            } else {
                this._like();
            }
        })

        this._image.addEventListener('click', () => { 
            const data = {
                'name' : this._name,
                'link' : this._link
              }
            this._handleCardClick(data);
        }); 
    } 

    _removeLikedClass() {
        this._likeButton.classList.remove('element__like_active');
    }
    
    _addLikedClass() {
        this._likeButton.classList.add('element__like_active');
    }

    setLikeCount() {
        this._likeCounter.textContent = String(this._likes.length)
    }

    _dislike() {
        this._removeLikedClass();
        this._handleDeleteLikeClick(this._likes);
    }
    
    _like() {
        this._addLikedClass();
        this._handleLikeClick(this._likes);
    }

    _checkLiked() {
        this._likes.forEach((like) => {
            if (like._id === this._userId ) {
                this._addLikedClass();
            }
        })
    }

    removeCard() { 
        this._element.remove(); 
        this._element = null;
    }

    deleteElementCard(){
        this._element.remove()  
    }

    // _deleteConfirmationClick() {
    //     console.log(this._item._id);
    //     this._deleteCardPopup.openPopup();
    // }

    generateCard() { 
        this._getElement();

        this._likeButton = this._element.querySelector('.element__like');
        this._likeCounter = this._element.querySelector(".element__like-counter");
        this.setLikeCount()
        this._checkLiked()

        this._deleteButton = this._element.querySelector(".element__remove");

        this._image = this._element.querySelector('.element__image'); 
        this._image.src = this._link; 
        this._image.alt = this._name; 
        this._element.querySelector('.element__name').textContent = this._name; 




        this._setEventListeners();
        return this._element; 
    }
}
