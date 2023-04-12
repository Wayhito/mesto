import './index.css';
import {Card} from "../components/Card.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

import { addSaving, removeSaving, removeSavingCard, removeSavingConfirmation} from '../utils/utils.js';
import { addButton, editButton, avatarButton} from '../utils/utils.js';
import { profileNameInput, profileJobInput } from '../utils/utils.js';
import { avatar, name, job } from '../utils/utils.js';
import { validationCard, validationProfile, validationAvatar } from '../utils/utils.js';
//import { initialCards } from '../utils/utils.js';
import { cardTemplate } from '../utils/utils.js';
import { Api } from '../components/Api.js';

const popupWithImage = new PopupWithImage('.img-popup');
popupWithImage.setEventListeners();

//Api - Экземпляр
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  token: `db38260c-9e73-4623-b5f7-e8a2dd315408`,
});

//Card - Создание карточек
const handleCardClick = (item) => {
  popupWithImage.open(item.name, item.link);
};

function createCard(item) {
  const card = new Card(
    item,
    cardTemplate,
    handleCardClick,

    {addCardLike: (item) => {
      return api.addCardLike(item);
    },

    deleteCardLike: (item) => {
      return api.deleteCardLike(item);
    }},
    userId,
    deleteCard
  );
  
  return card.generateCard(item);
};

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }}, 
  '.elements'
);

//user - Информация о пользователе
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoSelector: '.profile__job' ,
  avatarSelector: '.profile__image',
});

//popupProfile - Попап Профиля пользователя
const popupProfile = new PopupWithForm( { popupSelector: '.profile-popup',

  submitHandler: (data, button) => {
    addSaving(button);
    api.editProfile(data)

      .then((res) => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      
      .catch((err) => console.log(err))

      .finally(() => {
        removeSaving(button);
      });
  },
});
popupProfile.setEventListeners();

editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  popupProfile.openPopup();
  validationProfile.disableButton();
  profileNameInput.value = data.name;
  profileJobInput.value = data.info;
  //profileNameInput.value = name.textContent;
  //profileJobInput.value = job.textContent;
});

//popupCard Попап добавления карточки
const popupCard = new PopupWithForm( { popupSelector: '.add-popup',

  submitHandler: (data, button) => {
    addSaving(button);

    const item = {
      name: data.name,
      link: data.link,
    };

    api.addNewCard(item)

      .then((res) => {
        cardList.addItem(createCard(res), true);
        popupCard.close();
      })

      .catch((err) => console.log(err))

      .finally(() => {
        removeSavingCard(button);
      });
  },
});
popupCard.setEventListeners();

addButton.addEventListener("click", () => {
  validationCard.disableButton();
  popupCard.openPopup();
});

//PopupAvatar - Попап с редактированием Аватара
const popupAvatar = new PopupWithForm( { popupSelector: '.avatar-popup',

  submitHandler: (data, button) => {
    addSaving(button);
    api.editAvatar(data)

      .then((res) => {
        userInfo.setUserAvatar(res);
        popupAvatar.close();
      })

      .catch((err) => console.log(err))

      .finally(() => {
        removeSaving(button);
      });
  },
});
popupAvatar.setEventListeners();

avatarButton.addEventListener("click", () => {
  validationAvatar.disableButton();
  popupAvatar.openPopup();
  // profileAvatarEditButton.blur();
  // avatarEditPopopValidation.hideAllErrors();
});

//PopupWithConfirmation - Попап с подтверждением удаления карточки
const deleteCard = (data) => {
  deleteCardPopup.data = data;
  deleteCardPopup.openPopup();
};

const deleteCardPopup = new PopupWithConfirmation( { popupSelector: '.confirm-popup',
  submitHandler: (data, button) => {
    addSaving(button);
    api.deleteCard(data.cardId)

      .then(() => {
        data.card.remove();
        deleteCardPopup.closePopup();
      })

      .catch((err) => console.log(err))

      .finally(() => {
        removeSavingConfirmation(button);
      });
  },
});
deleteCardPopup.setEventListeners();

//Промис - Создание промиса на запросы Api
const apiData = [api.getUserInfo(), api.getInitialCards()];
let userId

Promise.all(apiData)
  .then(([userData, cardData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardList.renderItems(cardData);
  })
  .catch((err) => {
    console.log(err)
  });