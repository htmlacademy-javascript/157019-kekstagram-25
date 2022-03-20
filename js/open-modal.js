import {isEscapeKey} from './util.js';
import { updateModalWindow } from './modal-template.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentsList = document.querySelector('.social__comments');

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    hideModal();
  }
};

function openModal(picture) {
  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCommentsList.textContent = '';
  updateModalWindow(picture);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
}

function hideModal() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}

bigPictureCancel.addEventListener('click', () => {
  hideModal();
});

export {openModal};
