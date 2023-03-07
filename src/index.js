import '../pages/index.css';
import {Card} from "../scripts/Card.js"
import { FormValidator } from "../scripts/FormValidator.js";
import { Popup } from "../scripts/Popup.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { Section } from "../scripts/Section.js";

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
// const profilePopup = document.querySelector('.profile-popup');
// const profileCross = document.querySelector('.profile-popup__cross');
const profileNameInput = document.querySelector('.profile-popup__input_type_name');
const profileJobInput = document.querySelector('.profile-popup__input_type_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const addButton = document.querySelector('.profile__add-button');
// const cardPopup = document.querySelector('.add-popup');
// const cardCross = document.querySelector('.add-popup__cross-button');
// const cardNameInput = document.querySelector('.add-popup__input_type_name');
// const cardLinkInput = document.querySelector('.add-popup__input_type_link');
// const imgPopup = document.querySelector('.img-popup');
// const imgPopupCross = document.querySelector('.img-popup__cross-button');
// const cardField = document.querySelector('.elements');

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

const cardTemplate = document.querySelector('#cardTemplate').content;

const handleCardClick = (item) => {
  const popupWithImage = new PopupWithImage('.img-popup');
  popupWithImage.setEventListeners();
  popupWithImage.open(item.name, item.link);
};

function createCard(item) {
  const card = new Card(
    item,
    cardTemplate,
    handleCardClick
  );
  return card.generateCard();
};

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  }, '.elements'
);
cardList.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job' 
});

const editProfilePopup = new PopupWithForm( { popupSelector: '.profile-popup',
  submitHandler: (data) => {
    userInfo.setUserInfo({
      name: data.name,
      info: data.job,
    });
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm( { popupSelector: '.add-popup',
  submitHandler: (data) => {
    cardList.addItem(createCard({
      name: data.name,
      link: data.link,
    }));
    addCardPopup.close();
  }
});
addCardPopup.setEventListeners();

editButton.addEventListener("click", () => {
  editProfilePopup.openPopup();
  profileNameInput.value = name.textContent;
  profileJobInput.value = job.textContent;
});

addButton.addEventListener("click", () => {
  addCardPopup.openPopup();
});

// profileCross.addEventListener("click", () => {
//   closePopup(profilePopup);
// });

// cardCross.addEventListener("click", () => {
//   closePopup(cardPopup);
// });

// imgPopupCross.addEventListener("click", () => {
//   closePopup(imgPopup);
// });

// profileForm.addEventListener('submit', submitProfilePopup);
// cardForm.addEventListener('submit', submitCard);

// function renderCard(card) {
//   cardField.prepend(card.generateCard());
// };


// function addCard(link, name) {
//   const cardTemplate = document.querySelector('#cardTemplate').content;
//   const data = {
//     'link' : link,
//     'name' : name
//   };
//   const generatedCard = new Card(data, cardTemplate, handleCardClick);
//   renderCard(generatedCard);
// };

// function submitProfilePopup (evt) {
//   evt.preventDefault(); 
//   name.textContent = profileNameInput.value;
//   job.textContent = profileJobInput.value;
//   editProfilePopup.close()
//   // closePopup(profilePopup);
// };

// function submitCard(evt) {
//   evt.preventDefault();
//   addCard(cardLinkInput.value, cardNameInput.value);
//   cardLinkInput.value = "";
//   cardNameInput.value = "";
//   validationCard.disableButton(evt.submitter, settingsOfValidation);
//   addCardPopup.close()
//   // closePopup(cardPopup);
// };
