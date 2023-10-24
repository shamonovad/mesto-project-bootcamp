export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-13',
    headers: {
        authorization: '8c0a8217-6e30-44c4-a550-73e8f9bcbe81',
        'Content-Type': 'application/json'
    }
}
export const popupList = document.querySelectorAll('.popup');
export const addButton = document.querySelector(".profile__add-button");
export const popupNewPlace = document.getElementById('new-place');
export const formNewPlace = document.forms['new-place'];
export const inputNewPlaceName = formNewPlace.querySelector('.popup__input_type_name');
export const inputNewPlaceLink = formNewPlace.querySelector('.popup__input_type_link');
export const submitButtonNewPlace = popupNewPlace.querySelector('.popup__save-button');
export const editButton = document.querySelector(".profile__edit-button");
export const popupEditProfile = document.getElementById('edit-profile');
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const inputProfileName = popupEditProfile.querySelector(".popup__input_type_name");
export const inputProfileAbout = popupEditProfile.querySelector(".popup__input_type_about");
export const formEditProfile = document.forms['edit-profile'];
export const submitButtonEditProfile = popupEditProfile.querySelector('.popup__save-button');
export const inputElements = document.querySelectorAll(".popup__input");
export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    invalidInputClass: 'popup__input_invalid',
}
export const avatarImg = document.querySelector('.profile__avatar');
export const avatar = document.querySelector('.profile__avatar_hover');
export const popupAvatar = document.getElementById('edit-avatar');
export const formEditAvatar = document.forms['edit-avatar'];
export const avatarInput = popupAvatar.querySelector('.popup__input_type_link');
export const submitButtonAvatar = popupAvatar.querySelector('.popup__save-button');

export const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
export const itemSection = document.querySelector(".elements");
export const popupImg = document.getElementById('popup-img');
export const img = popupImg.querySelector('.popup__img');
export const caption = popupImg.querySelector(".popup__img-caption");
export const popupDelete = document.getElementById('delete');
export const formDeleteCard = document.forms['delete'];
export const cardToDelete = {
    id: '',
    cardElement: null,
}