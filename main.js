(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u,l,c){var a=o.handleLikeClick,s=o.handleDeleteLikeClick,f=u.handleDeleteCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleCardClick=r,this._item=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._cardTemplate=n,this._handleLikeClick=a,this._handleDeleteLikeClick=s,this._cardId=this._item._id,this._userId=i,this._cardOwnerId=this._item.owner._id,this._handleDeleteCard=f,this._paintLike=l.bind(this),this._unpaintLike=c.bind(this)}var n,r;return n=e,(r=[{key:"_getElement",value:function(){return this._element=this._cardTemplate.querySelector(".element").cloneNode(!0),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardOwnerId===this._userId&&(this._deleteButton.classList.add("element__remove_active"),this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard(e)}))),this._element.querySelector(".element__like").addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._dislike():e._like()})),this._image.addEventListener("click",(function(){var t={name:e._name,link:e._link};e._handleCardClick(t)}))}},{key:"_removeLikedClass",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"_addLikedClass",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"setLikeCount",value:function(){this._likeCounter.textContent=String(this._likes.length)}},{key:"_dislike",value:function(){this._removeLikedClass(),this._handleDeleteLikeClick(this._likes)}},{key:"_like",value:function(){this._addLikedClass(),this._handleLikeClick(this._likes)}},{key:"_checkLiked",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId&&e._addLikedClass()}))}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"deleteElementCard",value:function(){this._element.remove()}},{key:"generateCard",value:function(){return this._getElement(),this._likeButton=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__like-counter"),this.setLikeCount(),this._checkLiked(),this._deleteButton=this._element.querySelector(".element__remove"),this._image=this._element.querySelector(".element__image"),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".element__name").textContent=this._name,this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this.cross=this._popup.querySelector(".popup__cross"),this._handleEscClose=this._handleEscClose.bind(this),this.closePopupByClickOnOverlay=this.closePopupByClickOnOverlay.bind(this)}var t,n;return t=e,(n=[{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"closePopupByClickOnOverlay",value:function(e){e.target===e.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",this.closePopupByClickOnOverlay),this.cross.addEventListener("click",(function(t){e.closePopup()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,e);var t,n,r,o,i=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=i.call(this,e))._cardTitle=t._popup.querySelector(".img-popup__text"),t._cardImg=t._popup.querySelector(".img-popup__image"),t}return t=f,(n=[{key:"open",value:function(e,t){this._cardTitle.textContent=e,this._cardImg.src=t,this._cardImg.alt=e,c(s(f.prototype),"openPopup",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(i);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitHandler=r,t._formElement=t._popup.querySelector(".popup__form"),t._inputList=t._formElement.querySelectorAll(".popup__input"),t._submitButton=t._formElement.querySelector(".popup__submit"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;d(m(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){d(m(u.prototype),"closePopup",this).call(this),this._formElement.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._formElement=t._popup.querySelector(".popup__form"),t._submitButton=t._formElement.querySelector(".popup__submit"),t}return t=u,(n=[{key:"setSubmit",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;k(S(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(),e.closePopup()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var C=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,info:this._infoElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement.textContent=t,this._infoElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatarElement.src=t}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,R(r.key),r)}}function T(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===q(t)?t:String(t)}var B=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"settingsOfValidation",void 0),T(this,"form",void 0),T(this,"inputList",void 0),T(this,"buttonElement",void 0),T(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r.buttonElement.classList.add(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!0):(r.buttonElement.classList.remove(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!1)})),T(this,"_hasInvalidInput",(function(){return r.inputList.some((function(e){return!e.validity.valid}))})),T(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),T(this,"_showInputError",(function(e,t){var n=r.form.querySelector(".".concat(e.id,"-error"));n.textContent=t,n.classList.add(r.settingsOfValidation.errorActiveClass),e.classList.add(r.settingsOfValidation.inputErrorClass)})),T(this,"_hideInputError",(function(e){var t=r.form.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(r.settingsOfValidation.errorActiveClass),e.classList.remove(r.settingsOfValidation.inputErrorClass)})),T(this,"disableButton",(function(){r.buttonElement.classList.add(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!0})),this.settingsOfValidation=t,this.form=n,this.inputList=Array.from(n.querySelectorAll(t.inputSelector)),this.buttonElement=n.querySelector(t.submitButtonSelector),this._enableValidation()}var t,n;return t=e,(n=[{key:"_enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){var t=this;this._addCardLike(this._cardId).then((function(n){t._likeCounter.textContent=n.likes.length,e.target.classList.add("element__like_active")})).catch((function(e){return console.log(e)}))}function x(e){var t=this;this._deleteCardLike(this._cardId).then((function(n){t._likeCounter.textContent=n.likes.length,e.target.classList.remove("element__like_active")})).catch((function(e){return console.log(e)}))}function A(e,t,n){e.textContent=n?t.loading:t.start}var D={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".popup__input-error",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_error",errorActiveClass:"popup__input-error_active"},V=document.querySelector(".profile__image-button"),H=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),N=document.querySelector(".profile-popup__input_type_name"),F=document.querySelector(".profile-popup__input_type_job"),J=(document.querySelector(".profile__image"),document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector("#avatarForm")),M=document.querySelector("#profileForm"),$=document.querySelector("#cardForm"),G=new B(D,J),K=new B(D,M),Q=new B(D,$),W=document.querySelector("#cardTemplate").content;function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==X(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==X(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===X(o)?o:String(o)),r)}var o}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.token}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"editProfile",value:function(e){var t=this,n=e.name,r=e.job;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ee=document.querySelector(".img-popup"),te=(ee.querySelector(".img-popup__text"),ee.querySelector(".img-popup__image"),document.querySelector(".confirm-popup__submit")),ne=document.querySelector(".add-popup__submit"),re=document.querySelector(".profile-popup__submit"),oe=document.querySelector(".avatar-popup__submit"),ie={start:"Сохранить",loading:"Сохранение..."},ue={start:"Создать",loading:"Создание..."},le={start:"Да",loading:"Удаление..."};function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ae=new f(".img-popup");ae.setEventListeners();var se=new Z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63/",token:"db38260c-9e73-4623-b5f7-e8a2dd315408"}),fe=function(e){ae.open(e.name,e.link)};function pe(e){var t=new n(e,W,fe,{handleLikeClick:function(){se.addCardLike(e._id).then((function(n){var r=n.likes;t.setLikeCount(e.likes.length=r.length)})).catch((function(e){return console.log(e)}))},handleDeleteLikeClick:function(){se.deleteCardLike(e._id).then((function(n){var r=n.likes;t.setLikeCount(e.likes.length=r.length)})).catch((function(e){return console.log(e)}))}},_e,{handleDeleteCard:function(t){be.setSubmit((function(){A(te,le,!0),se.deleteCard(e._id).then((function(e){e._id,t.deleteElementCard()})).catch((function(e){return console.log(e)})).finally((function(){A(te,le,!1)}))})),be.openPopup()}},U,x);return t.generateCard(e)}var ye=new L({renderer:function(e){ye.addItem(pe(e))}},".elements"),de=new C({nameSelector:".profile__name",infoSelector:".profile__job",avatarSelector:".profile__image"}),he=new v({popupSelector:".profile-popup",submitHandler:function(e){A(re,ie,!0),se.editProfile(e).then((function(e){de.setUserInfo(e),he.close()})).catch((function(e){return console.log(e)})).finally((function(){A(re,ie,!1)}))}});he.setEventListeners(),H.addEventListener("click",(function(){var e=de.getUserInfo();he.openPopup(),K.disableButton(),N.value=e.name,F.value=e.info}));var me=new v({popupSelector:".add-popup",submitHandler:function(e){A(ne,ue,!0);var t={name:e.name,link:e.link};se.addNewCard(t).then((function(e){ye.addItem(pe(e),!0),me.close()})).catch((function(e){return console.log(e)})).finally((function(){A(ne,ie,!1)}))}});me.setEventListeners(),z.addEventListener("click",(function(){Q.disableButton(),me.openPopup()}));var ve=new v({popupSelector:".avatar-popup",submitHandler:function(e){A(oe,ie,!0),se.editAvatar(e).then((function(e){de.setUserAvatar(e),ve.close()})).catch((function(e){return console.log(e)})).finally((function(){A(oe,ie,!1)}))}});ve.setEventListeners(),V.addEventListener("click",(function(){G.disableButton(),ve.openPopup()}));var be=new w({popupSelector:".confirm-popup"});be.setEventListeners();var _e,ke=[se.getUserInfo(),se.getInitialCards()];Promise.all(ke).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,l=[],c=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];_e=o._id,de.setUserInfo(o),de.setUserAvatar(o),ye.renderItems(i)})).catch((function(e){console.log(e)}))})();