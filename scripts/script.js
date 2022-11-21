let edit = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup');
let cross = document.querySelector('.popup__cross');
let nameInput = document.getElementsByClassName('popup__input_type_name')[0];
let jobInput = document.getElementsByClassName('popup__input_type_job')[0];
let name = document.getElementsByClassName('profile__name')[0];
let job = document.getElementsByClassName('profile__job')[0];

edit.addEventListener("click", openPopup);
cross.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler); 

function openPopup() { 
    formElement.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

function closePopup() {
    formElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}