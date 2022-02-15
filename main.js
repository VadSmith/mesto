(()=>{var t={787:()=>{}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t,n,o,r,i,a,c){var u=t.cardData,s=t.handleCardClick,l=t.handleRemoveButtonClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateElement=document.querySelector(c),this._cardData=u,this._popupConfirm=document.querySelector(".popup_type_delete"),this._handleCardClick=s,this._api=n,this._putLike=i,this._deleteLike=a,this._handleRemoveButtonClick=l,this._isStrangerCard=o,this._hasMyLike=r,this._newCard=this._getTemplate(),this._removeButton=this._newCard.querySelector(".element__remove-button"),this._heart=this._newCard.querySelector(".element__heart"),this._title=this._newCard.querySelector(".element__title"),this._photo=this._newCard.querySelector(".element__photo"),this._likesCounter=this._newCard.querySelector(".element__like-counter"),this._likesSection=this._newCard.querySelector("element__like-section"),this._isLikedByMe=!1,this._element=this._newCard.querySelector(".element")}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return this._templateElement.content.cloneNode(!0)}},{key:"_toggleLike",value:function(t){t.target.classList.toggle("element__heart_active")}},{key:"removeCard",value:function(t){t.target.closest(".element").remove()}},{key:"remove",value:function(){this._element.remove()}},{key:"getCardId",value:function(){return this._cardData._id}},{key:"_setEventListeners",value:function(){var t=this;this._removeButton.addEventListener("click",(function(){t._handleRemoveButtonClick(t._cardData,t._element)})),this._heart.addEventListener("click",(function(){t._isLikedByMe?t._api.deleteLike(t._cardData).then((function(e){t._isLikedByMe=!1,t._heart.classList.remove("element__heart_active"),t._likesCounter.textContent=e.likes.length,t._likesCounter.title="Owner: ".concat(e.owner.name," Likes:"),e.likes.forEach((function(e){t._likesCounter.title+=" ".concat(e.name)}))})):t._api.putLike(t._cardData).then((function(e){t._isLikedByMe=!0,t._heart.classList.add("element__heart_active"),t._likesCounter.textContent=e.likes.length,t._likesCounter.title="Owner: ".concat(e.owner.name," Likes:"),e.likes.forEach((function(e){t._likesCounter.title+=" ".concat(e.name)}))}))})),this._photo.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"getView",value:function(){var t=this;return this._isStrangerCard(this._cardData)&&this._removeButton.remove(),this._hasMyLike(this._cardData)&&(this._isLikedByMe=!0,this._heart.classList.add("element__heart_active")),this._photo.setAttribute("src",this._cardData.link),this._photo.setAttribute("alt",this._cardData.alt),this._title.textContent=this._cardData.name,this._likesCounter.textContent=this._cardData.likes.length,this._likesCounter.title+="Owner: ".concat(this._cardData.owner.name," Likes:"),this._cardData.likes.forEach((function(e){t._likesCounter.title+=" ".concat(e.name)})),this._setEventListeners(),this._newCard}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();const o=e;function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._formSelector=n.formSelector,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputs=this._form.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e,n){var o=t.querySelector("#".concat(e.id,"-error"));o.textContent=n,o.classList.add(this._errorMessageClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t,e){var n=t.querySelector("#".concat(e.id,"-error"));n.textContent="",n.classList.remove(this._errorMessageClass),e.classList.remove(this._inputErrorClass)}},{key:"_hasInvalidInput",value:function(t){return Array.from(t).some((function(t){return!t.validity.valid}))}},{key:"_toggleSubmitButton",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add(this._inactiveButtonClass),e.disabled=!0):(e.classList.remove(this._inactiveButtonClass),e.disabled=!1)}},{key:"_checkInputValidity",value:function(t,e){e.validity.valid?this._hideError(t,e,this._errorClass,this._inputErrorClass):this._showError(t,e,e.validationMessage,this._errorClass,this._inputErrorClass)}},{key:"_setInputListeners",value:function(t){var e=this,n=t.querySelectorAll(this._inputSelector),o=t.querySelector(this._submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(t,r),e._toggleSubmitButton(n,o,e._inactiveButtonClass)}))}))}},{key:"resetValidation",value:function(){var t=this;this._inputs.forEach((function(e){t._hideError(t._form,e)})),this._toggleSubmitButton(this._inputs,this._submitButton)}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setInputListeners(this._form),this.resetValidation(this._form)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var c=n(787),u=n.n(c);function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var l=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._sectionContainer=n,this._items=o,this._renderer=r}var e,n;return e=t,(n=[{key:"_clear",value:function(){this._sectionContainer.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this._clear(),t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._sectionContainer.prepend(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupOverlay=this._popup.querySelector(".popup__overlay"),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_removeEventListeners",value:function(){this._popupOverlay.removeEventListener("click",this.close),this._popupCloseButton.removeEventListener("click",this.close)}},{key:"setEventListeners",value:function(){this._popupOverlay.addEventListener("click",this.close),this._popupCloseButton.addEventListener("click",this.close)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=y(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},d.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function m(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(o);if(r){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupPhoto=e._popup.querySelector(".popup__full-photo"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=a,(n=[{key:"open",value:function(t){d(b(a.prototype),"open",this).call(this),this._popupPhoto.src=t.link,this._popupPhoto.alt=t.alt,this._popupCaption.textContent=t.name}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=S(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}function E(t,e){return E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},E(t,e)}function O(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._handler=e,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs=this._form.querySelectorAll(".popup__input"),this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._handler(this._getInputValues()),this.close()}},{key:"close",value:function(){this._form.reset(),g(j(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;g(j(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._handleSubmit(e)}))}},{key:"removeEventListeners",value:function(){var t=this;this._form.removeEventListener("submit",(function(e){t._handleSubmit(e)}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const I=function(){function t(e){var n=e.address,o=e.token,r=e.cohortId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=o,this._cohortId=r}var e,n;return e=t,(n=[{key:"getMyUserInfo",value:function(){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me"),{headers:{"Content-Type":"application/json",authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка внутри getMyInfo(): ".concat(t.status))}))}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",authorization:this._token},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("ОШИБКА: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editAvatar",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/users/me/avatar/"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addCard",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"putLike",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/").concat(t._id,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._address,"/").concat(this._cohortId,"/cards/").concat(t._id,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=R(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},x.apply(this,arguments)}function R(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}function T(t,e){return T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},T(t,e)}function D(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(o);if(r){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return D(this,t)});function a(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(o=i.call(this,t))._api=n,o._confirmButton=o._popup.querySelector(".popup__button"),o._handleConfirmButtonClick=e,o}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;x(A(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._handleConfirmButtonClick(t._cardObject,t._cardInstance)}))}},{key:"open",value:function(t,e){x(A(a.prototype),"open",this).call(this),this._cardObject=t,this._cardInstance=e}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var U=document.querySelector(".profile__add-button"),z=document.querySelector(".popup__form_type_add"),H=document.querySelector(".elements"),N=document.querySelector(".profile__name"),J=document.querySelector(".profile__occupation"),$=document.querySelector(".popup_type_edit"),F=document.querySelector(".popup_type_avatar").querySelector(".popup__form"),G=document.querySelector(".profile__avatar"),K=document.querySelector(".profile__avatar-overlay"),Q=document.querySelector(".profile__edit-button"),W=$.querySelector(".popup__form"),X=W.querySelector(".popup__input_type_name"),Y=W.querySelector(".popup__input_type_job"),Z=$.querySelector(".popup__button"),tt=document.querySelector(".popup_type_delete").querySelector(".popup__button"),et=new I({address:"https://nomoreparties.co/v1",token:"0dd0d459-95f6-44a8-af29-6effe65b34b3",cohortId:"cohort-35"}),nt="";function ot(t){var e=new o({cardData:t,handleCardClick:function(){lt.open(t)},handleRemoveButtonClick:function(t,e){dt.open(t,e)}},et,at,ct,rt,it,".template-element").getView();return e}function rt(t){et.putLike(t._id).then((function(t){console.log(t)})).catch((function(t){console.error("ОШИБКА в api.putLike: ",t)}))}function it(t){et.deleteLike(t._id).then((function(t){console.log(t)})).catch((function(t){console.error("ОШИБКА в api.deleteLike: ",t)}))}function at(t){return nt!==t.owner._id}function ct(t){return!!t.likes.some((function(t){return t._id===nt}))}var ut=new i(z,a);ut.enableValidation(),new i(W,a).enableValidation();var st=new i(F,a);st.enableValidation();var lt=new k(".popup_type_photo");lt.setEventListeners();var pt=new l({items:u(),renderer:function(t){var e=ot(t);pt.addItem(e)}},H),ft=new L(".popup_type_add",(function(t){var e={name:t.place,link:t.link,alt:t.place};et.addCard(e).then((function(t){pt.addItem(ot(t))})).catch((function(t){console.error("ОШИБКА в api.addCard: ",t)}))}));ft.setEventListeners(),U.addEventListener("click",(function(){ft.open(),ut.resetValidation()})),K.addEventListener("click",(function(){_t.open(),st.resetValidation()}));var ht=new L(".popup_type_edit",(function(t){Z.textContent="Сохранение...",et.setUserInfo(t).then((function(t){N.textContent=t.name,J.textContent=t.about})).catch((function(t){console.error("ОШИБКА в setUserInfo",t)})).finally((function(){Z.textContent="Сохранить"}))}));ht.setEventListeners();var _t=new L(".popup_type_avatar",(function(t){Z.textContent="Сохранение...",et.editAvatar(t).then((function(t){G.src="".concat(t.avatar)})).catch((function(t){console.error("ОШИБКА в editAvatarHandler: ",t)})).finally((function(){Z.textContent="Сохранить"}))}));_t.setEventListeners(),Q.addEventListener("click",(function(){ht.open(),Z.textContent="Загрузка...",et.getMyUserInfo().then((function(t){X.value=t.name,Y.value=t.about})).catch((function(t){console.error("ОШИБКА в api.getUserInfo: ",t)})).finally((function(){Z.textContent="Сохранить"}))}));var dt=new M(".popup_type_delete",(function(t,e){dt.open(e),tt.textContent="Удаление...",et.deleteCard(t._id).then((function(t){e.remove(),dt.close()})).catch((function(t){})).finally((function(){tt.textContent="Удалено",dt.close(),tt.textContent="Да"}))}),et);dt.setEventListeners(),Promise.all([et.getInitialCards(),et.getMyUserInfo()]).then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];nt=i._id,N.textContent=i.name,J.textContent=i.about,G.src=i.avatar,pt.renderItems(r)})).catch((function(t){console.log(t)}))})()})();