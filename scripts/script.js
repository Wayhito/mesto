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
const card = document.querySelector('#cardTemplate').content;
const cardField = document.querySelector('.elements');

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
  addCard(initialCards[i].link, initialCards[i].name)
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

function generateCard(link, name) {
  const cardElement = card.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__name').textContent = name;
  cardElement.querySelector('.element__image').alt = name;
  const newLike = cardElement.querySelector('.element__like');
  newLike.addEventListener('click', event => {
    switchLikeColor(newLike);
  })
  const newRemove = cardElement.querySelector('.element__remove');
  newRemove.addEventListener('click', event => {
    removeCard(newRemove);
  })
  const openImg = cardElement.querySelector('.element__image');
  openImg.addEventListener('click', event => {
    openImgPopup(openImg);
  })
  return cardElement;
}

function renderCard(card) {
  cardField.prepend(card);
}

function addCard(link, name) {
  generateCard(link, name);
  const generatedCard = generateCard(link, name);
  renderCard(generatedCard);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

window.onkeyup = function(event) {
  if (event.keyCode == 27) {
      closePopup(imgPopup);
      closePopup(cardPopup);
      closePopup(profilePopup);
  }
};


imgPopup.addEventListener("click", closePopupByClickOnOverlay);
cardPopup.addEventListener("click", closePopupByClickOnOverlay);
profilePopup.addEventListener("click", closePopupByClickOnOverlay);

function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

function openImgPopup(clicked) {
  openPopup(imgPopup);
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