import { handleImgOpen } from '..';
import { handleDeleteCard } from '..';
import { handleLikeButton } from '..';

const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
const itemSection = document.querySelector(".elements");

export function createItem(card, isDeleted, isLikedMine) {
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
    
    if (isLikedMine) {
        likeButton.classList.add('element__like-button_active');
    }

    if (isDeleted) {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('element__delete-button');
        deleteButton.addEventListener("click", () => handleDeleteCard(newItem, card._id));
        newItem.appendChild(deleteButton);
    }

    return newItem
}

export function addElement(element) {
    itemSection.prepend(element);
}