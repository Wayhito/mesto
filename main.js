(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleCardClick=r,this._name=t.name,this._link=t.link,this._cardTemplate=n}var n,r;return n=e,(r=[{key:"_getElement",value:function(){return this._element=this._cardTemplate.querySelector(".element").cloneNode(!0),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(t){e._toggleLike(t)})),this._element.querySelector(".element__remove").addEventListener("click",(function(){e._deleteCard()})),this._image.addEventListener("click",(function(){var t={name:e._name,link:e._link};e._handleCardClick(t)}))}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("element__like_active")}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._getElement(),this._image=this._element.querySelector(".element__image"),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".element__name").textContent=this._name,this._likeButton=this._element.querySelector(".element__like"),this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this.cross=this._popup.querySelector(".popup__cross"),this._handleEscClose=this._handleEscClose.bind(this),this.closePopupByClickOnOverlay=this.closePopupByClickOnOverlay.bind(this)}var t,n;return t=e,(n=[{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"closePopupByClickOnOverlay",value:function(e){e.target===e.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",this.closePopupByClickOnOverlay),this.cross.addEventListener("click",(function(t){e.closePopup()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(p,e);var t,n,r,o,i=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=i.call(this,e))._cardTitle=t._popup.querySelector(".img-popup__text"),t._cardImg=t._popup.querySelector(".img-popup__image"),t}return t=p,(n=[{key:"open",value:function(e,t){this._cardTitle.textContent=e,this._cardImg.src=t,this._cardImg.alt=e,c(s(p.prototype),"openPopup",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(i);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var m=function(){function e(t){var n=t.nameSelector,r=t.infoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,info:this._infoElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.info;this._nameElement.textContent=t,this._infoElement.textContent=n}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitHandler=r,t._formElement=t._popup.querySelector(".popup__form"),t._inputList=t._formElement.querySelectorAll(".popup__input"),t._submitButton=t._formElement.querySelector(".popup__submit"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(_(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){b(_(u.prototype),"closePopup",this).call(this),this._formElement.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function j(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===k(t)?t:String(t)}var C=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"settingsOfValidation",void 0),j(this,"form",void 0),j(this,"inputList",void 0),j(this,"buttonElement",void 0),j(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r.buttonElement.classList.add(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!0):(r.buttonElement.classList.remove(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!1)})),j(this,"_hasInvalidInput",(function(){return r.inputList.some((function(e){return!e.validity.valid}))})),j(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),j(this,"_showInputError",(function(e,t){var n=r.form.querySelector(".".concat(e.id,"-error"));n.textContent=t,n.classList.add(r.settingsOfValidation.errorActiveClass),e.classList.add(r.settingsOfValidation.inputErrorClass)})),j(this,"_hideInputError",(function(e){var t=r.form.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(r.settingsOfValidation.errorActiveClass),e.classList.remove(r.settingsOfValidation.inputErrorClass)})),j(this,"disableButton",(function(){r.buttonElement.classList.add(r.settingsOfValidation.inactiveButtonClass),r.buttonElement.disabled=!0})),this.settingsOfValidation=t,this.form=n,this.inputList=Array.from(n.querySelectorAll(t.inputSelector)),this.buttonElement=n.querySelector(t.submitButtonSelector),this._enableValidation()}var t,n;return t=e,(n=[{key:"_enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".popup__input-error",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_error",errorActiveClass:"popup__input-error_active"},q=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile-popup__input_type_name"),I=document.querySelector(".profile-popup__input_type_job"),B=document.querySelector(".profile__name"),x=document.querySelector(".profile__job"),R=document.querySelector(".profile__add-button"),V=document.querySelector("#profileForm"),A=document.querySelector("#cardForm"),D=new C(L,V),H=new C(L,A),U=document.querySelector("#cardTemplate").content,F=new p(".img-popup");F.setEventListeners();var z=function(e){F.open(e.name,e.link)};function M(e){return new n(e,U,z).generateCard()}var N=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){N.addItem(M(e))}},".elements");N.renderItems();var G=new m({nameSelector:".profile__name",infoSelector:".profile__job"}),J=new g({popupSelector:".profile-popup",submitHandler:function(e){G.setUserInfo({name:e.name,info:e.job}),J.close()}});J.setEventListeners();var K=new g({popupSelector:".add-popup",submitHandler:function(e){N.addItem(M({name:e.name,link:e.link})),K.close()}});K.setEventListeners(),q.addEventListener("click",(function(){J.openPopup(),D.disableButton(),T.value=B.textContent,I.value=x.textContent})),R.addEventListener("click",(function(){H.disableButton(),K.openPopup()}))})();