import "./styles/index.css";
import { enableValidation } from "./components/validation";
import { createItem, addElement } from "./components/card";
import { openPopup, closePopup } from "./components/modals";
import { getInitialCards, getAutorizationUser, updateUserData, createCard, updateAvatar } from "./components/api";
import { handleLoading } from "./components/utils";
import { addButton, popupNewPlace, formNewPlace, inputNewPlaceName, inputNewPlaceLink, submitButtonNewPlace, editButton, popupEditProfile, profileName, profileAbout, inputProfileName, inputProfileAbout, formEditProfile, submitButtonEditProfile, inputElements, validationSettings, avatarImg, avatar, popupAvatar, formEditAvatar, avatarInput, submitButtonAvatar } from "./components/constants";

function clearInput() {
    inputElements.forEach((element) => { element.value = "" });
}

function handleNewPlaceOpen() {
    openPopup(popupNewPlace);
    clearInput();
}

function handleFormNewPlaceSubmit(evt) {
    evt.preventDefault();

    handleLoading(true, submitButtonNewPlace);

    createCard({ name: inputNewPlaceName.value, link: inputNewPlaceLink.value })
        .then((res) => {

            addElement(createItem(res, true));
            evt.target.reset();

            submitButtonNewPlace.setAttribute('disabled', true);

            closePopup(popupNewPlace);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false, submitButtonNewPlace, 'Создать') });
}

function handleEditProfileOpen() {
    openPopup(popupEditProfile);

    inputProfileName.value = profileName.textContent;
    inputProfileAbout.value = profileAbout.textContent;
}

function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();

    handleLoading(true, submitButtonEditProfile);

    updateUserData({ name: inputProfileName.value, about: inputProfileAbout.value })
        .then((res) => {
            profileName.textContent = res.name;
            profileAbout.textContent = res.about;

            submitButtonEditProfile.setAttribute('disabled', true);

            closePopup(popupEditProfile);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false, submitButtonEditProfile) });
}

function handleEditAvatarOpen() {
    openPopup(popupAvatar);
    clearInput();
}

function handleFormEditAvatar(evt) {
    evt.preventDefault();

    handleLoading(true, submitButtonAvatar);

    updateAvatar(avatarInput.value)
        .then((res) => {
            avatarImg.src = res.avatar;
            evt.target.reset();

            submitButtonAvatar.setAttribute('disabled', true);

            closePopup(popupAvatar);
        })
        .catch((err) => console.log(err.status, err.message))
        .finally(() => { handleLoading(false, submitButtonAvatar) });
}

enableValidation(validationSettings);

addButton.addEventListener("click", handleNewPlaceOpen);
formNewPlace.addEventListener("submit", handleFormNewPlaceSubmit);

editButton.addEventListener("click", handleEditProfileOpen);
formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

avatar.addEventListener('click', handleEditAvatarOpen);
formEditAvatar.addEventListener('submit', handleFormEditAvatar);

Promise.all([getAutorizationUser(), getInitialCards()])
    .then(([user, res]) => {
        profileName.textContent = user.name;
        profileAbout.textContent = user.about;
        avatarImg.src = user.avatar;
        res.reverse().forEach((item) => {
            addElement(createItem(item, item.owner._id === user._id,
                item.likes.some((likedbyUser) => user._id === likedbyUser._id)));
        });
    })
    .catch((err) => console.log(err.status, err.message));

// getAutorizationUser()
//     .then((user) => {
//         profileName.textContent = user.name;
//         profileAbout.textContent = user.about;
//         avatarImg.src = user.avatar;

//         getInitialCards()
//             .then((res) => {
//                 res.reverse().forEach((item) => {
//                     addElement(createItem(item, item.owner._id === user._id, item.likes.some((likedUser) => user._id === likedUser._id)));
//                 });
//             })
//             .catch((err) => console.log(err.status, err.message));
//     })
//     .catch((err) => console.log(err.status, err.message));