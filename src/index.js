import "./styles/index.css";
import { enableValidation } from "./components/validation";
import { createItem, addElement } from "./components/card";
import { openPopup, closePopup } from "./components/modals";
import { getInitialCards, getAutorizationUser, updateUserData, createCard, deleteCard, updateAvatar, addLike, deleteLike } from "./components/api";

const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");
const popupNewPlace = document.getElementById('new-place');
const formNewPlace = popupNewPlace.querySelector('.popup__form');
const inputNewPlaceName = formNewPlace.querySelector('.popup__input_type_name');
const inputNewPlaceLink = formNewPlace.querySelector('.popup__input_type_link');
const closeButtons = document.querySelectorAll(".popup__close-button");
const submitButtons = document.querySelectorAll('.popup__save-button');
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.getElementById('edit-profile');
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const inputProfileName = popupEditProfile.querySelector(".popup__input_type_name");
const inputProfileAbout = popupEditProfile.querySelector(".popup__input_type_about");
const formEditProfile = popupEditProfile.querySelector('.popup__form');
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
const avatarImg = document.querySelector('.profile__avatar');
const avatar = document.querySelector('.profile__avatar_hover');
const popupAvatar = document.getElementById('edit-avatar');
const formEditAvatar = popupAvatar.querySelector('.popup__form');
const avatarInput = popupAvatar.querySelector('.popup__input_type_link');
const popupDelete = document.getElementById('delete');
const formDeleteCard = popupDelete.querySelector('.popup__form');

function handleLoading(isLoading, text ) {
    if (isLoading) {
        submitButtons.forEach((element) => {
            element.textContent = text || "Сохранение...";
        })
    } else {
        submitButtons.forEach((element) => {
            element.textContent =  text || "Сохранить";
        })
    }
}

export function handleImgOpen(card) {
    const src = card.link;
    const alt = card.name;

    img.src = src;
    img.alt = alt;
    caption.textContent = card.name;

    openPopup(popupImg);
}

function handleNewPlaceOpen(evt) {
    evt.target;
    openPopup(popupNewPlace);
}

function handleFormNewPlaceSubmit(evt) {
    evt.preventDefault();

    handleLoading(true);

    createCard({ name: inputNewPlaceName.value, link: inputNewPlaceLink.value })
        .then((res) => {
            
            addElement(createItem(res, true));
            evt.target.reset();

            closePopup(popupNewPlace);

            const button = popupAvatar.querySelector('.popup__save-button');
            button.setAttribute('disabled', true);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false, 'Создать') });
}

function handleEditProfileOpen(evt) {
    evt.target;
    openPopup(popupEditProfile);

    inputProfileName.value = profileName.textContent;
    inputProfileAbout.value = profileAbout.textContent;
}

function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();

    handleLoading(true);

    updateUserData({ name: inputProfileName.value, about: inputProfileAbout.value })
        .then((res) => {
            profileName.textContent = res.name;
            profileAbout.textContent = res.about;

            closePopup(popupEditProfile);

            const button = popupAvatar.querySelector('.popup__save-button');
            button.setAttribute('disabled', true);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false) });
}

function handleCloseButtonClick(evt) {
    const popupToClose = evt.target.closest('.popup');
    inputElement.forEach((element) => { element.value = "" });

    closePopup(popupToClose);
}

function handleEditAvatarOpen(evt) {
    evt.target;
    openPopup(popupAvatar);
}

function handleFormEditAvatar(evt) {
    evt.preventDefault();

    handleLoading(true);

    updateAvatar(avatarInput.value)
        .then((res) => {
            avatarImg.src = res.avatar;
            evt.target.reset();
            const button = popupAvatar.querySelector('.popup__save-button');
            button.setAttribute('disabled', true);

            closePopup(popupAvatar);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false) });
}

export function handleDeleteCard(newItem, cardId) {
    openPopup(popupDelete);
    formDeleteCard.addEventListener('submit', () => handleDeleteCardConfirmation(newItem, cardId));
}

function handleDeleteCardConfirmation(newItem, cardId) {

    deleteCard(cardId)
        .then(() => {
            newItem.closest('.element').remove();
            closePopup(popupDelete);
        })
        .catch((err) => console.log(err.status, err.message));

}

export function handleLikeButton(evt, likeNumber, cardId) {
    
    if (!evt.target.classList.contains('element__like-button_active')) {
        addLike(cardId)
            .then(() => {
                likeNumber.textContent = Number(likeNumber.textContent) + 1;
                evt.target.classList.add("element__like-button_active");
            })
            .catch((err) => console.log(err.status, err.message));

    } else {
        deleteLike(cardId)
            .then(() => {
                likeNumber.textContent = Number(likeNumber.textContent) - 1;
                evt.target.classList.remove("element__like-button_active");
            })
            .catch((err) => console.log(err.status, err.message));
    }

}

enableValidation(validationSettings);

addButton.addEventListener("click", handleNewPlaceOpen);
formNewPlace.addEventListener("submit", handleFormNewPlaceSubmit);

editButton.addEventListener("click", handleEditProfileOpen);
formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

avatar.addEventListener('click', handleEditAvatarOpen);
formEditAvatar.addEventListener('submit', handleFormEditAvatar);

closeButtons.forEach((element) => {
    element.addEventListener('click', handleCloseButtonClick)
});


getAutorizationUser()
    .then((user) => {
        profileName.textContent = user.name;
        profileAbout.textContent = user.about;
        avatarImg.src = user.avatar;

        getInitialCards()
            .then((res) => {
                res.reverse().forEach((item) => {
                    addElement(createItem(item, item.owner._id === user._id, item.likes.some((likedUser) => user._id === likedUser._id)));
                });
            })
            .catch((err) => console.log(err.status, err.message));
    })
    .catch((err) => console.log(err.status, err.message));