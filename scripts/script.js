const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileCross = document.querySelector('.profile-popup__cross');
const profileNameInput = document.querySelector('.profile-popup__input_type_name');
const profileJobInput = document.querySelector('.profile-popup__input_type_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.add-popup');
const cardCross = document.querySelector('.add-popup__cross-button');
const cardNameInput = document.querySelector('.add-popup__input_type_name');
const cardLinkInput = document.querySelector('.add-popup__input_type_link');
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
  addCard(cards[i].link, cards[i].name)
}

function addCard(link, name) {
  const card = document.querySelector('#cardTemplate').content;
  const cardField = document.querySelector('.elements');
  const cardElement = card.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__name').textContent = name;
  cardField.prepend(cardElement);
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
}

editButton.addEventListener("click", () => {
  openPopup(profilePopup);
  profileNameInput.value = name.textContent;
  profileJobInput.value = job.textContent;
})

addButton.addEventListener("click", () => {
  openPopup(cardPopup);
})

profileCross.addEventListener("click", () => {
  closePopup(profilePopup);
});

cardCross.addEventListener("click", () => {
  closePopup(cardPopup);
});

imgPopupCross.addEventListener("click", () => {
  closePopup(imgPopup);
});

profilePopup.addEventListener('submit', submitProfilePopup);
cardPopup.addEventListener('submit', submitCard);

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openImgPopup(clicked) {
  imgPopup.classList.add('popup_opened');
  popupImg.src = clicked.src;
  popupText.textContent = clicked.closest('.element').querySelector('.element__name').textContent;
  popupImg.alt = "Картинка"
}

function submitProfilePopup (evt) {
  evt.preventDefault(); 
  name.textContent = profileNameInput.value;
  job.textContent = profileJobInput.value;
  closePopup(profilePopup);
}

function submitCard(evt) {
  evt.preventDefault();
  addCard(cardLinkInput.value, cardNameInput.value);
  cardLinkInput.value = "";
  cardNameInput.value = "";  
    closePopup(cardPopup);
  }
  
function switchLikeColor(active) {
    active.classList.toggle('element__like_active');
}

function removeCard(clicked) {
  clicked.closest('.element').remove();
}