const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileCross = document.querySelector('.profile-popup__cross');
const profileNameInput = document.getElementsByClassName('profile-popup__input_type_name')[0];
const profileJobInput = document.getElementsByClassName('profile-popup__input_type_job')[0];
const name = document.getElementsByClassName('profile__name')[0];
const job = document.getElementsByClassName('profile__job')[0];
const addButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.add-popup');
const cardCross = document.querySelector('.add-popup__cross-button');
const cardNameInput = document.getElementsByClassName('add-popup__input_type_name')[0];
const cardLinkInput = document.getElementsByClassName('add-popup__input_type_link')[0];
const cardField = document.querySelector('.elements');
const imgPopup = document.querySelector('.img-popup');
const popupImg = document.querySelector('.img-popup__image');
const popupText = document.querySelector('.img-popup__text');
const imgPopupCross = document.querySelector('.img-popup__cross-button');

let cards = new Array();
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

for (i = 0; i < initialCards.length; i++) {
  cards.push(initialCards[i]);
}

    for (i = 0; i < cards.length; i++) {
    let Card = `
<div class="element">
    <div class="element__image-field">
     <img class="element__image" src="${cards[i].link}" alt="Картинка галереи">
     <button class="element__remove"></button>
    </div>
     <div class="element__panel">
        <h2 class="element__name">${cards[i].name}</h2>
        <button class="element__like-button">
        <img class="element__like" src="./images/like.svg" alt="лайк">
        </button>
    </div> 
</div>`;
cardField.insertAdjacentHTML('afterbegin', Card);
}

document.querySelectorAll('.element__like').forEach(item => {
    item.addEventListener('click', event => {
      switchLikeColor(item);
    })
  })

document.querySelectorAll('.element__remove').forEach(item => {
  item.addEventListener('click', event => {
    removeCard(item);
  })
})

document.querySelectorAll('.element__image').forEach(item => {
  item.addEventListener('click', event => {
    openImgPopup(item);
  })
})

editButton.addEventListener("click", openProfilePopup);
profileCross.addEventListener("click", closeProfilePopup);
profilePopup.addEventListener('submit', profilePopupSubmit);
addButton.addEventListener("click", openCardPopup);
cardCross.addEventListener("click", closeCardPopup);
cardPopup.addEventListener('submit', addCard);
imgPopupCross.addEventListener("click", imgPopupClose);

function openProfilePopup() { 
    profilePopup.classList.add('profile-popup_opened');
    profileNameInput.value = name.textContent;
    profileJobInput.value = job.textContent;
}

function openCardPopup() {
    cardPopup.classList.add('add-popup_opened');
}

function closeProfilePopup() {
    profilePopup.classList.remove('profile-popup_opened');
}

function closeCardPopup() {
    cardPopup.classList.remove('add-popup_opened');
}

function profilePopupSubmit (evt) {
    evt.preventDefault(); 
    name.textContent = profileNameInput.value;
    job.textContent = profileJobInput.value;
    closeProfilePopup();
}

function addCard(evt) {
    evt.preventDefault();
    let cardForm = document.getElementById('#cardForm');
    let Card = `
    <div class="element">
    <div class="element__image-field">
     <img class="element__image" src="${cardLinkInput.value}" alt="Картинка галереи">
     <button class="element__remove"></button>
    </div>
     <div class="element__panel">
        <h2 class="element__name">${cardNameInput.value}</h2>
        <button class="element__like-button">
        <img class="element__like" src="./images/like.svg" alt="лайк">
        </button>
    </div> 
</div>`;
    cardField.insertAdjacentHTML('afterbegin', Card);
    cards.push(Card);
    let newLike = document.querySelector('.element__like');
    newLike.addEventListener('click', event => {
      switchLikeColor(newLike);
    })
    let newRemove = document.querySelector('.element__remove');
    newRemove.addEventListener('click', event => {
      removeCard(newRemove);
    })
    let openImg = document.querySelector('.element__image');
    openImg.addEventListener('click', event => {
      openImgPopup(openImg);
    })
    cardLinkInput.value = "";
    cardNameInput.value = "";
    
    closeCardPopup();
  }
  
function switchLikeColor(clicked) {
    clicked.classList.toggle('element__like_active');
}

function removeCard(clicked) {
  clicked.parentNode.parentNode.remove();
}

function openImgPopup(clicked) {
  imgPopup.classList.add('img-popup_opened');
  popupImg.src = clicked.src;
  popupText.textContent = clicked.parentNode.nextElementSibling.childNodes[1].innerHTML;
}

function imgPopupClose() {
  imgPopup.classList.remove('img-popup_opened');
}