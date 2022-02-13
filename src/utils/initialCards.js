
// function getInitialCards() {
//   return fetch('https://mesto.nomoreparties.co/v1/cohort-35/cards', {
//     headers: {
//       authorization: '0dd0d459-95f6-44a8-af29-6effe65b34b3'
//     }
//   })
//     .then(res => {
//       if (res.ok) {
//         // let data = res.json();
//         // console.log(data)
//         return res.json();
//       }
//       // если ошибка, отклоняем промис
//       return Promise.reject(`Ошибка: ${res.status}`);
//     })
//     .catch(error => {
//       return Promise.reject('Error --- ' + error.message);
//     })

// }
// // console.log(Promise.resolve(getInitialCards()));
// let initialCards = [];

// getInitialCards().then(cards => {
//   cards.forEach(card => {
//     initialCards.push(card);
//     console.log(card);
//   });
// });
// export default initialCards;

// // const initialCards = [
// //   {
// //     name: 'Архыз',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
// //     alt: 'Заснеженное ущелье в горах'
// //   },
// //   {
// //     name: 'Челябинская область',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
// //     alt: 'Река зимой'
// //   },
// //   {
// //     name: 'Иваново',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
// //     alt: 'Вид на несколько девятиэтажек городского квартала'
// //   },
// //   {
// //     name: 'Камчатка',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
// //     alt: 'Поляна у подножия горы'
// //   },
// //   {
// //     name: 'Холмогорский район',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
// //     alt: 'Железная дорога среди леса уходит вдаль'
// //   },
// //   {
// //     name: 'Байкал',
// //     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
// //     alt: 'Скалистый утес на берегу Байкала'
// //   }
// // ];
