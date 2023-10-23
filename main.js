/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   deleteLike: () => (/* binding */ deleteLike),\n/* harmony export */   getAutorizationUser: () => (/* binding */ getAutorizationUser),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar),\n/* harmony export */   updateUserData: () => (/* binding */ updateUserData)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-13',\n  headers: {\n    authorization: '8c0a8217-6e30-44c4-a550-73e8f9bcbe81',\n    'Content-Type': 'application/json'\n  }\n};\nfunction checkResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return res.json().then(function (err) {\n    err.status = res.status;\n    Promise.reject(err);\n  });\n}\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(checkResponse);\n};\nvar getAutorizationUser = function getAutorizationUser() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(checkResponse);\n};\nvar updateUserData = function updateUserData(body) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify(body)\n  }).then(checkResponse);\n};\nvar createCard = function createCard(_ref) {\n  var name = _ref.name,\n    link = _ref.link;\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(checkResponse);\n};\nvar deleteCard = function deleteCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkResponse);\n};\nvar updateAvatar = function updateAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(checkResponse);\n};\nvar addLike = function addLike(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(checkResponse);\n};\nvar deleteLike = function deleteLike(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkResponse);\n};\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addElement: () => (/* binding */ addElement),\n/* harmony export */   createItem: () => (/* binding */ createItem)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n\nvar cardTemplate = document.querySelector(\".card-template\").content.querySelector(\".element\");\nvar itemSection = document.querySelector(\".elements\");\nfunction createItem(card, isDeleted, isLikedMine) {\n  var newItem = cardTemplate.cloneNode(true);\n  var itemNameElement = newItem.querySelector(\".element__heading\");\n  itemNameElement.textContent = card.name;\n  var itemImgElement = newItem.querySelector(\".element__img\");\n  itemImgElement.setAttribute(\"src\", card.link);\n  itemImgElement.setAttribute(\"alt\", card.name);\n  itemImgElement.addEventListener('click', function () {\n    return (0,___WEBPACK_IMPORTED_MODULE_0__.handleImgOpen)(card);\n  });\n  var likeNumber = newItem.querySelector('.element__like-number');\n  likeNumber.textContent = card.likes.length;\n  var likeButton = newItem.querySelector(\".element__like-button\");\n  likeButton.addEventListener(\"click\", function (evt) {\n    return (0,___WEBPACK_IMPORTED_MODULE_0__.handleLikeButton)(evt, likeNumber, card._id);\n  });\n  if (isLikedMine) {\n    likeButton.classList.add('element__like-button_active');\n  }\n  if (isDeleted) {\n    var deleteButton = document.createElement('button');\n    deleteButton.classList.add('element__delete-button');\n    deleteButton.addEventListener(\"click\", function () {\n      return (0,___WEBPACK_IMPORTED_MODULE_0__.handleDeleteCard)(newItem, card._id);\n    });\n    newItem.appendChild(deleteButton);\n  }\n  return newItem;\n}\nfunction addElement(element) {\n  itemSection.prepend(element);\n}\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modals.js":
/*!**********************************!*\
  !*** ./src/components/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeByEsc: () => (/* binding */ closeByEsc),\n/* harmony export */   closeByOverlayClick: () => (/* binding */ closeByOverlayClick),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nvar popupList = document.querySelectorAll('.popup');\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener('keydown', closeByEsc);\n}\nfunction closePopup(popup) {\n  popup.classList.remove('popup_opened');\n  document.removeEventListener('keydown', closeByEsc);\n}\nfunction closeByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_opened');\n    closePopup(openedPopup);\n  }\n}\nfunction closeByOverlayClick(evt) {\n  var openedPopup = evt.target.classList.contains('popup_opened');\n  if (openedPopup) {\n    closePopup(evt.target);\n  }\n}\npopupList.forEach(function (element) {\n  element.addEventListener('mousedown', closeByOverlayClick);\n});\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/components/modals.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nfunction showError(inputElement, errorMessage, invalidInputClass) {\n  var spanId = 'error-' + inputElement.id;\n  var errorElement = document.getElementById(spanId);\n  inputElement.classList.add(invalidInputClass);\n  errorElement.textContent = errorMessage;\n}\nfunction hideError(inputElement, invalidInputClass) {\n  var spanId = 'error-' + inputElement.id;\n  var errorElement = document.getElementById(spanId);\n  inputElement.classList.remove(invalidInputClass);\n  errorElement.textContent = '';\n}\nfunction checkInput(inputElement, settings) {\n  if (inputElement.validity.valid) {\n    hideError(inputElement, settings.invalidInputClass);\n  } else {\n    showError(inputElement, inputElement.validationMessage, settings.invalidInputClass);\n  }\n}\nfunction disableSubmitButton(button) {\n  button.disabled = true;\n}\nfunction enableSubmitButton(button) {\n  button.disabled = false;\n}\nfunction checkForm(form, buttonSubmit) {\n  if (form.checkValidity()) {\n    enableSubmitButton(buttonSubmit);\n  } else {\n    disableSubmitButton(buttonSubmit);\n  }\n  ;\n}\nfunction setEventListeners(form, settings) {\n  var inputElementList = form.querySelectorAll(settings.inputSelector);\n  var buttonSubmit = form.querySelector(settings.submitButtonSelector);\n  checkForm(form, buttonSubmit);\n  inputElementList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkForm(form, buttonSubmit);\n      checkInput(inputElement, settings);\n    });\n  });\n}\nfunction enableValidation(settings) {\n  var formList = document.querySelectorAll(settings.formSelector);\n  formList.forEach(function (form) {\n    form.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(form, settings);\n  });\n}\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDeleteCard: () => (/* binding */ handleDeleteCard),\n/* harmony export */   handleImgOpen: () => (/* binding */ handleImgOpen),\n/* harmony export */   handleLikeButton: () => (/* binding */ handleLikeButton)\n/* harmony export */ });\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modals */ \"./src/components/modals.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\n\n\n\n\n\nvar addButton = document.querySelector(\".profile__add-button\");\nvar popup = document.querySelector(\".popup\");\nvar popupNewPlace = document.getElementById('new-place');\nvar formNewPlace = popupNewPlace.querySelector('.popup__form');\nvar inputNewPlaceName = formNewPlace.querySelector('.popup__input_type_name');\nvar inputNewPlaceLink = formNewPlace.querySelector('.popup__input_type_link');\nvar closeButtons = document.querySelectorAll(\".popup__close-button\");\nvar submitButtons = document.querySelectorAll('.popup__save-button');\nvar editButton = document.querySelector(\".profile__edit-button\");\nvar popupEditProfile = document.getElementById('edit-profile');\nvar profileName = document.querySelector(\".profile__name\");\nvar profileAbout = document.querySelector(\".profile__about\");\nvar inputProfileName = popupEditProfile.querySelector(\".popup__input_type_name\");\nvar inputProfileAbout = popupEditProfile.querySelector(\".popup__input_type_about\");\nvar formEditProfile = popupEditProfile.querySelector('.popup__form');\nvar popupImg = document.getElementById('popup-img');\nvar img = popupImg.querySelector('.popup__img');\nvar caption = popupImg.querySelector(\".popup__img-caption\");\nvar inputElement = document.querySelectorAll(\".popup__input\");\nvar validationSettings = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__save-button',\n  invalidInputClass: 'popup__input_invalid'\n};\nvar avatarImg = document.querySelector('.profile__avatar');\nvar avatar = document.querySelector('.profile__avatar_hover');\nvar popupAvatar = document.getElementById('edit-avatar');\nvar formEditAvatar = popupAvatar.querySelector('.popup__form');\nvar avatarInput = popupAvatar.querySelector('.popup__input_type_link');\nvar popupDelete = document.getElementById('delete');\nvar formDeleteCard = popupDelete.querySelector('.popup__form');\nfunction handleLoading(isLoading, text) {\n  if (isLoading) {\n    submitButtons.forEach(function (element) {\n      element.textContent = text || \"Сохранение...\";\n    });\n  } else {\n    submitButtons.forEach(function (element) {\n      element.textContent = text || \"Сохранить\";\n    });\n  }\n}\nfunction handleImgOpen(card) {\n  var src = card.link;\n  var alt = card.name;\n  img.src = src;\n  img.alt = alt;\n  caption.textContent = card.name;\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupImg);\n}\nfunction handleNewPlaceOpen(evt) {\n  evt.target;\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNewPlace);\n}\nfunction handleFormNewPlaceSubmit(evt) {\n  evt.preventDefault();\n  handleLoading(true);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.createCard)({\n    name: inputNewPlaceName.value,\n    link: inputNewPlaceLink.value\n  }).then(function (res) {\n    (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.addElement)((0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createItem)(res, true));\n    evt.target.reset();\n    (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupNewPlace);\n    var button = popupAvatar.querySelector('.popup__save-button');\n    button.setAttribute('disabled', true);\n  }).catch(function (err) {\n    return console.log(err.status, err.message);\n  }).finally(function () {\n    handleLoading(false, 'Создать');\n  });\n}\nfunction handleEditProfileOpen(evt) {\n  evt.target;\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEditProfile);\n  inputProfileName.value = profileName.textContent;\n  inputProfileAbout.value = profileAbout.textContent;\n}\nfunction handleFormEditProfileSubmit(evt) {\n  evt.preventDefault();\n  handleLoading(true);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.updateUserData)({\n    name: inputProfileName.value,\n    about: inputProfileAbout.value\n  }).then(function (res) {\n    profileName.textContent = res.name;\n    profileAbout.textContent = res.about;\n    (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupEditProfile);\n    var button = popupAvatar.querySelector('.popup__save-button');\n    button.setAttribute('disabled', true);\n  }).catch(function (err) {\n    return console.log(err.status, err.message);\n  }).finally(function () {\n    handleLoading(false);\n  });\n}\nfunction handleCloseButtonClick(evt) {\n  var popupToClose = evt.target.closest('.popup');\n  inputElement.forEach(function (element) {\n    element.value = \"\";\n  });\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupToClose);\n}\nfunction handleEditAvatarOpen(evt) {\n  evt.target;\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupAvatar);\n}\nfunction handleFormEditAvatar(evt) {\n  evt.preventDefault();\n  handleLoading(true);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.updateAvatar)(avatarInput.value).then(function (res) {\n    avatarImg.src = res.avatar;\n    evt.target.reset();\n    var button = popupAvatar.querySelector('.popup__save-button');\n    button.setAttribute('disabled', true);\n    (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupAvatar);\n  }).catch(function (err) {\n    return console.log(err.status, err.message);\n  }).finally(function () {\n    handleLoading(false);\n  });\n}\nfunction handleDeleteCard(newItem, cardId) {\n  (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupDelete);\n  formDeleteCard.addEventListener('submit', function () {\n    return handleDeleteCardConfirmation(newItem, cardId);\n  });\n}\nfunction handleDeleteCardConfirmation(newItem, cardId) {\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.deleteCard)(cardId).then(function () {\n    newItem.closest('.element').remove();\n    (0,_components_modals__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupDelete);\n  }).catch(function (err) {\n    return console.log(err.status, err.message);\n  });\n}\nfunction handleLikeButton(evt, likeNumber, cardId) {\n  if (!evt.target.classList.contains('element__like-button_active')) {\n    (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.addLike)(cardId).then(function () {\n      likeNumber.textContent = Number(likeNumber.textContent) + 1;\n      evt.target.classList.add(\"element__like-button_active\");\n    }).catch(function (err) {\n      return console.log(err.status, err.message);\n    });\n  } else {\n    (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.deleteLike)(cardId).then(function () {\n      likeNumber.textContent = Number(likeNumber.textContent) - 1;\n      evt.target.classList.remove(\"element__like-button_active\");\n    }).catch(function (err) {\n      return console.log(err.status, err.message);\n    });\n  }\n}\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_1__.enableValidation)(validationSettings);\naddButton.addEventListener(\"click\", handleNewPlaceOpen);\nformNewPlace.addEventListener(\"submit\", handleFormNewPlaceSubmit);\neditButton.addEventListener(\"click\", handleEditProfileOpen);\nformEditProfile.addEventListener(\"submit\", handleFormEditProfileSubmit);\navatar.addEventListener('click', handleEditAvatarOpen);\nformEditAvatar.addEventListener('submit', handleFormEditAvatar);\ncloseButtons.forEach(function (element) {\n  element.addEventListener('click', handleCloseButtonClick);\n});\n(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getAutorizationUser)().then(function (user) {\n  profileName.textContent = user.name;\n  profileAbout.textContent = user.about;\n  avatarImg.src = user.avatar;\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)().then(function (res) {\n    res.reverse().forEach(function (item) {\n      (0,_components_card__WEBPACK_IMPORTED_MODULE_2__.addElement)((0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createItem)(item, item.owner._id === user._id, item.likes.some(function (likedUser) {\n        return user._id === likedUser._id;\n      })));\n    });\n  }).catch(function (err) {\n    return console.log(err.status, err.message);\n  });\n}).catch(function (err) {\n  return console.log(err.status, err.message);\n});\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-bootcamp/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;