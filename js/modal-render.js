import {photos} from './data.js';
import {getKeyCodeESC} from './util.js';
import {createModalWindow} from './modal-template.js';

const bigPicture = document.querySelector('.big-picture');
// Показал модальное окно.
bigPicture.classList.remove('hidden');

// Убрал прокрутку у body
const body = document.querySelector('body');
body.classList.add('modal-open');

// Спрятал счетчик комментариев и кнопку загрузки
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');

// Нашел кнопку закрытия модального окна.
const bigPictureCancel = document.querySelector('.big-picture__cancel');

// Навесил события для закрытия модального окна.
bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (getKeyCodeESC(evt)) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

createModalWindow(photos[5]);
