let edit = document.querySelector('.profile__editbutton');
let formElement = document.querySelector('.popup');
let cross = document.querySelector('.popup__cross');
let submit = document.querySelector('.popup__submit');

edit.addEventListener("click", openPopup);
cross.addEventListener("click", closePopup);
submit.addEventListener("click", save);

function openPopup() { 
    formElement.classList.add('popup_opened');
}

function closePopup() {
    formElement.classList.remove('popup_opened');
}

function save() {
    let nameInput = document.querySelector('.popup__name').value;
    let jobInput = document.querySelector('.popup__job').value;
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__job');
 
if (nameInput !="")
    name.textContent = nameInput;

if (jobInput !="")
    job.textContent = jobInput;

closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
function formSubmitHandler (evt) {
    evt.preventDefault(); 
}