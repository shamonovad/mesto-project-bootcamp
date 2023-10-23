const popupList = document.querySelectorAll('.popup');

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

export function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}

export function closeByOverlayClick(evt) {
    
    const openedPopup = evt.target.classList.contains('popup_opened');
    if (openedPopup) {
        closePopup(evt.target);
    }
}

popupList.forEach((element) => {
    element.addEventListener('mousedown', closeByOverlayClick);
});