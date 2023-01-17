import { closeByEsc } from "./script.js";

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc)
}

export {openPopup}