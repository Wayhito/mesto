import '../pages/index.css';
import {Card} from "../scripts/Card.js"
// import { FormValidator } from "../scripts/FormValidator.js";
// import { Popup } from "../scripts/Popup.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { Section } from "../scripts/Section.js";
// import { settingsOfValidation } from '../scripts/Utils.js';
import { editButton } from '../scripts/Utils.js';
import { addButton } from '../scripts/Utils.js';
import { profileNameInput } from '../scripts/Utils.js';
import { profileJobInput } from '../scripts/Utils.js';
import { name } from '../scripts/Utils.js';
import { job } from '../scripts/Utils.js';
// import { profileForm } from '../scripts/Utils.js';
// import { cardForm } from '../scripts/Utils.js';
// import { validationCard } from '../scripts/Utils.js';
// import { validationProfile } from '../scripts/Utils.js';
import { initialCards } from '../scripts/Utils.js';
import { cardTemplate } from '../scripts/Utils.js';

const popupWithImage = new PopupWithImage('.img-popup');

const handleCardClick = (item) => {
  // const popupWithImage = new PopupWithImage('.img-popup');
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

const popupProfile = new PopupWithForm( { popupSelector: '.profile-popup',
  submitHandler: (data) => {
    userInfo.setUserInfo({
      name: data.name,
      info: data.job,
    });
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm( { popupSelector: '.add-popup',
  submitHandler: (data) => {
    cardList.addItem(createCard({
      name: data.name,
      link: data.link,
    }));
    popupCard.close();
  }
});
popupCard.setEventListeners();

editButton.addEventListener("click", () => {
  popupProfile.openPopup();
  profileNameInput.value = name.textContent;
  profileJobInput.value = job.textContent;
});

addButton.addEventListener("click", () => {
  popupCard.openPopup();
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
