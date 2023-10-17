import "./styles/index.css";
import { enableValidation } from "./components/validation"; 
import { createItem } from "./components/card";
import { openPopup } from "./components/modals";
import { closePopup } from "./components/modals";

const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");
const popupNewPlace = document.getElementById('new-place');
const formNewPlace = popupNewPlace.querySelector('.popup__form');
const inputNewPlaceName = formNewPlace.querySelector('.popup__input_type_name');
const inputNewPlaceLink = formNewPlace.querySelector('.popup__input_type_link');
const closeButtons = document.querySelectorAll(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.getElementById('edit-profile');
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputProfileName = popupEditProfile.querySelector(".popup__input_type_name");
const inputProfileAbout = popupEditProfile.querySelector(".popup__input_type_about");
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const imgElements = document.querySelectorAll('.element__img');
const popupImg = document.getElementById('popup-img');
const img = popupImg.querySelector('.popup__img');
const caption = popupImg.querySelector(".popup__img-caption");
const inputElement = document.querySelectorAll(".popup__input");
const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    invalidInputClass: 'popup__input_invalid',
}

function handleImgOpen(evt) {
    const image = evt.target.closest('.element__img');
    const src = image.src;
    const alt = image.alt;

    img.src = src;
    img.alt = alt;
    caption.textContent = image.alt;

    openPopup(popupImg);
}

function handleNewPlaceOpen(evt) {
    evt.target;
    openPopup(popupNewPlace)
}

function handleFormNewPlaceSubmit(evt) {
    evt.preventDefault();

    addElement(createItem({ name: inputNewPlaceName.value, link: inputNewPlaceLink.value }));

    inputNewPlaceName.value = "";
    inputNewPlaceLink.value = "";

    closePopup(popupNewPlace);
}

function handleEditProfileOpen(evt) {
    evt.target;
    openPopup(popupEditProfile);

    inputProfileName.value = profileName.textContent;
    inputProfileAbout.value = profileAbout.textContent;
}

function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = inputProfileName.value;
    profileAbout.textContent = inputProfileAbout.value;

    closePopup(popupEditProfile);
}

function handleCloseButtonClick(evt) {
    const popupToClose = evt.target.closest('.popup');
    inputElement.forEach((element) => { element.value = "" });

    enableValidation(validationSettings);

    closePopup(popupToClose);
}

enableValidation(validationSettings);

imgElements.forEach((element) => {
    element.addEventListener('click', handleImgOpen);
});

addButton.addEventListener("click", handleNewPlaceOpen);
formNewPlace.addEventListener("submit", handleFormNewPlaceSubmit);

editButton.addEventListener("click", handleEditProfileOpen);
formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

closeButtons.forEach((element) => {
    element.addEventListener('click', handleCloseButtonClick)
});