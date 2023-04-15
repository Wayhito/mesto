import './index.css';
import {Card} from "../components/Card.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

//import { addSaving, removeSaving, removeSavingCard, removeSavingConfirmation} from '../utils/utils.js';
import { addButton, editButton, avatarButton} from '../utils/utils.js';
import { profileNameInput, profileJobInput } from '../utils/utils.js';
import { avatar, name, job } from '../utils/utils.js';
import { validationCard, validationProfile, validationAvatar } from '../utils/utils.js';
//import { initialCards } from '../utils/utils.js';
import { cardTemplate } from '../utils/utils.js';
import { Api } from '../components/Api.js';
import { contentButtonProfile, contentButtonAddCard, contentButtonDeleteCard } from '../utils/consts.js';
//import { toggleLoading } from '../utils/utils.js';
import { buttonSubmitDeleteCard, buttonSubmitAddCard, buttonSubmitAvatar, buttonSubmitProfile } from '../utils/consts.js';

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

    {handleLikeClick: () => {
      api.addCardLike(item._id)

          .then(({likes}) => {
              card._addLikedClass();
              card.setLikeCount(item.likes.length = likes.length);
          })

          .catch((err) => console.log(err))
    },

    handleDeleteLikeClick: () => {
      api.deleteCardLike(item._id)

          .then(({likes}) => {
              card._removeLikedClass();
              card.setLikeCount(item.likes.length = likes.length);
          })

          .catch((err) => console.log(err))
     }},

    userId,

    {handleDeleteCard: (cardElem) => {
      deleteCardPopup.setSubmit(() => {
        deleteCardPopup.toggleLoading(contentButtonDeleteCard, true)
          api.deleteCard(item._id)

              .then(({_id}) => {
                  cardElem.deleteElementCard()
                  deleteCardPopup.closePopup();
              })

              .catch((err) => console.log(err))

              .finally(() => {
                deleteCardPopup.toggleLoading(contentButtonDeleteCard, false)
              });
      })

      deleteCardPopup.openPopup();
  }},
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

  submitHandler: (data) => {
    popupProfile.toggleLoading(contentButtonProfile, true)
    api.editProfile(data)

      .then((res) => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      
      .catch((err) => console.log(err))

      .finally(() => {
        popupProfile.toggleLoading(contentButtonProfile, false)
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

  submitHandler: (data) => {
    popupCard.toggleLoading(contentButtonAddCard, true)

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
        popupCard.toggleLoading(contentButtonProfile, false)
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

  submitHandler: (data) => {
    popupAvatar.toggleLoading(contentButtonProfile, true)
    api.editAvatar(data)

      .then((res) => {
        userInfo.setUserAvatar(res);
        popupAvatar.close();
      })

      .catch((err) => console.log(err))

      .finally(() => {
        popupAvatar.toggleLoading(contentButtonProfile, false)
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
// function deleteCard(button) {
//   console.log(button);
//   api.deleteCard(data.cardId)

//     .then(() => {
//       data.card.remove();
//       deleteCardPopup.closePopup();
//     })

//     .catch((err) => console.log(err))

//     .finally(() => {
//       removeSavingConfirmation(button);
//     });
// };

// submitHandler: (button, _id) => {
//   //console.log(button.previousElementSibling);
//   addSaving(button);

//   api.deleteCard(_id)

//   .then(() => {
//     //data.card.remove();
//     cardElement.removeCard
//     deleteCardPopup.closePopup();
//   })

//   .catch((err) => console.log(err))

//   .finally(() => {
//     removeSavingConfirmation(button);
//   });
// };


const deleteCardPopup = new PopupWithConfirmation( {popupSelector: '.confirm-popup'} );
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