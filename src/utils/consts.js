const imgPopup = document.querySelector('.img-popup');
const cardTitle = imgPopup.querySelector('.img-popup__text');
const cardImg = imgPopup.querySelector('.img-popup__image'); 

export {imgPopup}
export {cardTitle}
export {cardImg}

export const buttonSubmitDeleteCard = document.querySelector('.confirm-popup__submit');
export const buttonSubmitAddCard = document.querySelector('.add-popup__submit');
export const buttonSubmitProfile = document.querySelector('.profile-popup__submit');
export const buttonSubmitAvatar = document.querySelector('.avatar-popup__submit');

export const contentButtonProfile = {
    start: 'Сохранить',
    loading: 'Сохранение...'
};

export const contentButtonAddCard = {
    start: 'Создать',
    loading: 'Создание...'
};

export const contentButtonDeleteCard = {
    start: 'Да',
    loading: 'Удаление...'
};