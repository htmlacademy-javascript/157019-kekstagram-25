import {photos} from './data.js';
import {isEscapeEvent} from './util.js';
import { updateModalWindow} from './modal-template.js';
const bigPicture = document.querySelector('.big-picture');
// Нашел кнопку закрытия модального окна.
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const openModal = (picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    updateModalWindow(picture);
    // Убрал прокрутку у body
    document.body.classList.add('modal-open');
    // Спрятал счетчик комментариев и кнопку загрузки
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
  });
  //Навесил события для закрытия модального окна.
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
  // Событие кнопки ESC
  document.addEventListener('keydown', (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};
updateModalWindow(photos[4]);
export {openModal};
