function showError(inputElement, errorMessage, invalidInputClass) {
    const spanId = 'error-' + inputElement.id;
    const errorElement = document.getElementById(spanId);
    inputElement.classList.add(invalidInputClass);
    errorElement.textContent = errorMessage;
}

function hideError (inputElement, invalidInputClass) {
    const spanId = 'error-' + inputElement.id;
    const errorElement = document.getElementById(spanId);
    inputElement.classList.remove(invalidInputClass);
    errorElement.textContent = '';
}

function checkInput(inputElement, settings) {
    if (inputElement.validity.valid) {
        hideError(inputElement, settings.invalidInputClass);
    } else {
        showError(inputElement, inputElement.validationMessage, settings.invalidInputClass);
    }
}

function disableSubmitButton(button) {
    button.disabled = true;
}

function enableSubmitButton(button) {
    button.disabled = false;
}

function checkForm(form, buttonSubmit) {
    if (form.checkValidity()) {
        enableSubmitButton(buttonSubmit);
    } else {
        disableSubmitButton(buttonSubmit);
    };
}

function setEventListeners(form, settings) {
    const inputElementList = form.querySelectorAll(settings.inputSelector);
        const buttonSubmit = form.querySelector(settings.submitButtonSelector);
        checkForm(form, buttonSubmit);
        inputElementList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                checkForm(form, buttonSubmit);
                checkInput(inputElement, settings);
            });
        });
}

export function enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            });
            
            setEventListeners(form, settings);
    })
}