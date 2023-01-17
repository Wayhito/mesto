import {Card} from "./Card.js"
import { openPopup } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

const settingsOfValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_error',
  errorActiveClass: 'popup__input-error_active'
};

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
const imgPopupCross = document.querySelector('.img-popup__cross-button');
const cardField = document.querySelector('.elements');

const profileForm = document.querySelector('#profileForm');
const cardForm = document.querySelector('#cardForm');

const validationProfile = new FormValidator(settingsOfValidation, profileForm);
const validationCard = new FormValidator(settingsOfValidation, cardForm);

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

for (let i = 0; i < initialCards.length; i++) {
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

profileForm.addEventListener('submit', submitProfilePopup);
cardForm.addEventListener('submit', submitCard);

function renderCard(card) {
  cardField.prepend(card.generateCard());
}

function addCard(link, name) {
  const cardTemplate = document.querySelector('#cardTemplate').content; 
  const generatedCard = new Card(name, link, cardTemplate);
  renderCard(generatedCard);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

imgPopup.addEventListener("click", closePopupByClickOnOverlay);
cardPopup.addEventListener("click", closePopupByClickOnOverlay);
profilePopup.addEventListener("click", closePopupByClickOnOverlay);

function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
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
  validationCard._disableButton(evt.submitter);
  closePopup(cardPopup);
}

export {validationProfile}
export {validationCard}
export {closeByEsc}