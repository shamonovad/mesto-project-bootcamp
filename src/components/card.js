import { initialCards } from '../arr';

const cardTemplate = document.querySelector(".card-template").content.querySelector(".element");
const itemSection = document.querySelector(".elements");

function handleLikeButton(evt) {
    evt.target.classList.toggle("element__like-button_active");
}

function handleDeleteCard(evt) {
    evt.target.closest(".element").remove();
}

export function createItem(card) {
    const newItem = cardTemplate.cloneNode(true);

    const itemNameElement = newItem.querySelector(".element__heading");
    itemNameElement.textContent = card.name;

    const itemImgElement = newItem.querySelector(".element__img");
    itemImgElement.setAttribute("src", card.link);
    itemImgElement.setAttribute("alt", card.name);

    const likeButton = newItem.querySelector(".element__like-button");
    likeButton.addEventListener("click", handleLikeButton);

    const deleteButton = newItem.querySelector(".element__delete-button");
    deleteButton.addEventListener("click", handleDeleteCard);

    return newItem
}

function addElement(element) {
    itemSection.prepend(element);
}

initialCards.forEach((card) => {
    addElement(createItem(card));
});