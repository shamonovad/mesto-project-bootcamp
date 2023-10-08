const initialCards = [
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

const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
const itemSection = document.querySelector(".elements");
const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");
const popupNewPlace = document.getElementById('new-place');
const formNewPlace = popupNewPlace.querySelector('.popup__form');
const closeButtons = document.querySelectorAll(".popup__close-button");
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.getElementById('edit-profile');
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const popupImg = document.getElementById('popup-img');
const inputElement = document.querySelectorAll(".popup__input");

function handleLikeButton(evt) {
    evt.target.classList.toggle("element__like-button_active");
}

function handleDeleteCard(evt) {
    evt.target.closest(".element").remove();
}

function createItem(card) {
    const newItem = cardTemplate.cloneNode(true);

    const itemNameElement = newItem.querySelector(".element__heading");
    itemNameElement.textContent = card.name;

    const itemImgElement = newItem.querySelector(".element__img");
    itemImgElement.setAttribute("src", card.link);
    itemImgElement.setAttribute("alt", card.name);
    itemImgElement.addEventListener("click", handleImgOpen)

    const likeButton = newItem.querySelector(".element__like-button");
    likeButton.addEventListener("click", handleLikeButton);

    const deleteButton = newItem.querySelector(".element__delete-button");
    deleteButton.addEventListener("click", handleDeleteCard);

    return newItem
}

function handleImgOpen(evt) {
    const src = evt.target.src;
    const alt = evt.target.alt;
    const card = evt.target.closest('.element');
    const name = card.querySelector('.element__heading');
    const img = popupImg.querySelector('.popup__img');
    const caption = popupImg.querySelector(".popup__img-caption");

    img.src = src;
    img.alt = alt;
    caption.textContent = name.textContent;

    openPopup(popupImg);
}

function addElement(element) {
    itemSection.prepend(element);
}

initialCards.forEach((card) => {
    addElement(createItem(card));
});

function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function handleNewPlaceOpen(evt) {
    evt.target;
    openPopup(popupNewPlace)
}

addButton.addEventListener("click", handleNewPlaceOpen);

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleCloseButtonClick(evt) {
    const popupToClose = evt.target.closest('.popup');
    inputElement.forEach((element) => { element.value = ""});
    
    closePopup(popupToClose);
}

closeButtons.forEach((element) => {
    element.addEventListener('click', handleCloseButtonClick)
})


formNewPlace.addEventListener("submit", handleFormNewPlaceSubmit);

function handleFormNewPlaceSubmit(evt) {
    evt.preventDefault();

    const name = formNewPlace.querySelector('.popup__input_type_name');
    const link = formNewPlace.querySelector('.popup__input_type_link');
    
    addElement(createItem({name: name.value, link: link.value }));

    closePopup(popupNewPlace);
}

function handleEditProfile(evt) {
    evt.target;
    openPopup(popupEditProfile);

    const inputName = popupEditProfile.querySelector(".popup__input_type_name");
    const inputAbout = popupEditProfile.querySelector(".popup__input_type_about");

    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

editButton.addEventListener("click", handleEditProfile);

function addChanges({name, about}) {
    profileName.textContent = name;
    profileAbout.textContent = about;
}

formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();

    const editName = formEditProfile.querySelector(".popup__input_type_name");
    const editAbout = formEditProfile.querySelector(".popup__input_type_about");

    addChanges({name: editName.value, about: editAbout.value});

    closePopup(popupEditProfile);
}