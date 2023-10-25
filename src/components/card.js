import { openPopup, closePopup } from './modals';
import { deleteCard, addLike, deleteLike } from './api';
import { cardTemplate, itemSection, popupImg, img, caption, popupDelete, formDeleteCard, cardToDelete } from './constants';

function handleImgOpen(card) {
    const src = card.link;
    const alt = card.name;

    img.src = src;
    img.alt = alt;
    caption.textContent = card.name;

    openPopup(popupImg);
}

function handleDeleteCard(cardToDelete) {

    deleteCard(cardToDelete.id)
        .then(() => {
            cardToDelete.cardElement.remove();
            closePopup(popupDelete);

            cardToDelete.id = null;
            cardToDelete.cardElement = null;
        })
        .catch((err) => console.log(err.status, err.message));

}

function handleLikeButton(evt, likeNumber, cardId) {

    if (!evt.target.classList.contains('element__like-button_active')) {
        addLike(cardId)
            .then((card) => {
                likeNumber.textContent = card.likes.length;
                evt.target.classList.add("element__like-button_active");
            })
            .catch((err) => console.log(err.status, err.message));

    } else {
        deleteLike(cardId)
            .then((card) => {
                likeNumber.textContent = card.likes.length;
                evt.target.classList.remove("element__like-button_active");
            })
            .catch((err) => console.log(err.status, err.message));
    }

}

export function createItem(card, isMine, isLikedByMe) {
    const newItem = cardTemplate.cloneNode(true);
    const itemNameElement = newItem.querySelector(".element__heading");
    itemNameElement.textContent = card.name;

    const itemImgElement = newItem.querySelector(".element__img");
    itemImgElement.setAttribute("src", card.link);
    itemImgElement.setAttribute("alt", card.name);
    itemImgElement.addEventListener('click', () => handleImgOpen(card));

    const likeNumber = newItem.querySelector('.element__like-number');
    likeNumber.textContent = card.likes.length;

    const likeButton = newItem.querySelector(".element__like-button");
    likeButton.addEventListener("click", (evt) => handleLikeButton(evt, likeNumber, card._id));

    if (isLikedByMe) {
        likeButton.classList.add('element__like-button_active');
    }

    const deleteButton = newItem.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
        cardToDelete.id = card._id;
        cardToDelete.cardElement = newItem;
        openPopup(popupDelete);

    });

    if (isMine === false) {
        deleteButton.remove();
    }

    return newItem
}

formDeleteCard.addEventListener('submit', () => handleDeleteCard(cardToDelete));

export function addElement(element) {
    itemSection.prepend(element);
}