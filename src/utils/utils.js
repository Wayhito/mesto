import { FormValidator } from "../components/FormValidator.js";
// import { settingsOfValidation } from './Utils.js';
// import { editButton } from './Utils.js';
// import { addButton } from './Utils.js';
// import { profileNameInput } from './Utils.js';
// import { profileJobInput } from './Utils.js';
// import { name } from './Utils.js';
// import { job } from './Utils.js';
// import { profileForm } from './Utils.js';
// import { cardForm } from './Utils.js';
// import { validationCard } from './Utils.js';
// import { validationProfile } from '../Utils.js';
// import { initialCards } from './Utils.js';
// import { cardTemplate } from './Utils.js';


export const settingsOfValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.popup__input-error',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_error',
    errorActiveClass: 'popup__input-error_active'
};

export const editButton = document.querySelector('.profile__edit-button');
// const profilePopup = document.querySelector('.profile-popup');
// const profileCross = document.querySelector('.profile-popup__cross');
export const profileNameInput = document.querySelector('.profile-popup__input_type_name');
export const profileJobInput = document.querySelector('.profile-popup__input_type_job');
export const name = document.querySelector('.profile__name');
export const job = document.querySelector('.profile__job');
export const addButton = document.querySelector('.profile__add-button');
// const cardPopup = document.querySelector('.add-popup');
// const cardCross = document.querySelector('.add-popup__cross-button');
// const cardNameInput = document.querySelector('.add-popup__input_type_name');
// const cardLinkInput = document.querySelector('.add-popup__input_type_link');
// const imgPopup = document.querySelector('.img-popup');
// const imgPopupCross = document.querySelector('.img-popup__cross-button');
// const cardField = document.querySelector('.elements');

export const profileForm = document.querySelector('#profileForm');
export const cardForm = document.querySelector('#cardForm');

export const validationProfile = new FormValidator(settingsOfValidation, profileForm);
export const validationCard = new FormValidator(settingsOfValidation, cardForm);

export const initialCards = [
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

export const cardTemplate = document.querySelector('#cardTemplate').content;

// function closeByEsc(evt) {
//     if (evt.key === "Escape") {
//         const openedPopup = document.querySelector('.popup_opened');
//         closePopup(openedPopup); 
//     }
// }

// export function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEsc)
// }

// export {openPopup}