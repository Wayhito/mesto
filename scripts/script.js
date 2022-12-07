let edit = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup');
let cross = document.querySelector('.popup__cross');
let nameInput = document.getElementsByClassName('popup__input_type_name')[0];
let jobInput = document.getElementsByClassName('popup__input_type_job')[0];
let name = document.getElementsByClassName('profile__name')[0];
let job = document.getElementsByClassName('profile__job')[0];
let add = document.querySelector('.profile__add-button');
let addFormElement = document.querySelector('.add-popup');
let addCross = document.querySelector('.add-popup__cross-button');
let AddNameInput = document.getElementsByClassName('popup__input_type_add-button-name')[0];
let AddLinkInput = document.getElementsByClassName('popup__input_type_add-button-link')[0];
let Cards = document.querySelector('.elements');
// let img = document.querySelector('.element__image-field');
let imgPopup = document.querySelector('.img-popup');
let popupImg = document.querySelector('.img-popup__image');
let popupText = document.querySelector('.img-popup__text');

let cardCollect = new Array();
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
  cardCollect.push(initialCards[i]);
}
  console.log(cardCollect);

    for (i = 0; i < cardCollect.length; i++) {
    let Card = `
<div class="element">
    <div class="element__image-field">
     <img class="element__image" src="${cardCollect[i].link}" alt="Картинка галереи">
     <button class="element__remove"></button>
    </div>
     <div class="element__panel">
        <h2 class="element__name">${cardCollect[i].name}</h2>
        <button class="element__like-button">
        <img class="element__like" src="./images/like.svg" alt="лайк">
        </button>
    </div> 
</div>`;
Cards.insertAdjacentHTML('afterbegin', Card);
}

document.querySelectorAll('.element__like').forEach(item => {
    item.addEventListener('click', event => {
      blackLike(item);
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

edit.addEventListener("click", openPopup);
cross.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
add.addEventListener("click", openAddPopup);
addCross.addEventListener("click", closeAddPopup);
addFormElement.addEventListener('submit', addCard);

function openPopup() { 
    formElement.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

function openAddPopup() {
    addFormElement.classList.add('add-popup_opened');
}

function closePopup() {
    formElement.classList.remove('popup_opened');
}

function closeAddPopup() {
    addFormElement.classList.remove('add-popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}

function addCard(evt) {
    evt.preventDefault();
    let Card = `
    <div class="element">
    <div class="element__image-field">
     <img class="element__image" src="${AddLinkInput.value}" alt="Картинка галереи">
     <button class="element__remove"></button>
    </div>
     <div class="element__panel">
        <h2 class="element__name">${AddNameInput.value}</h2>
        <button class="element__like-button">
        <img class="element__like" src="./images/like.svg" alt="лайк">
        </button>
    </div> 
</div>`;
    Cards.insertAdjacentHTML('afterbegin', Card);
    cardCollect.push(Card);
    let newLike = document.querySelector('.element__like');
    newLike.addEventListener('click', event => {
      blackLike(newLike);
    })
    let newRemove = document.querySelector('.element__remove');
    newRemove.addEventListener('click', event => {
      removeCard(newRemove);
    })
    let openImg = document.querySelector('.element__image');
    openImg.addEventListener('click', event => {
      openImgPopup(openImg);
    })
  }

function blackLike(clicked) {
    clicked.classList.toggle('element__like_active');
    console.log("Клик");
}

function removeCard(clicked) {
  clicked.parentNode.parentNode.remove();
}

function openImgPopup(clicked) {
  imgPopup.classList.add('img-popup_opened');
  popupImg.src = clicked.src;
  popupText.textContent = clicked.parentNode.nextElementSibling.childNodes[1].innerHTML;
  console.log(clicked.parentNode.nextElementSibling.childNodes[1].innerHTML);
}