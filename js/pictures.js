import { openModal } from './modal.js';
import { removeElement } from './util/dom.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (picture) => {
  const {url, likes, comments} = picture;

  const pattern = pictureTemplate.cloneNode(true);
  pattern.querySelector('.picture__img').src = url;
  pattern.querySelector('.picture__likes').textContent = likes;
  pattern.querySelector('.picture__comments').textContent = comments.length;

  pattern.addEventListener('click', () => {
    openModal(picture);
  });
  return pattern;
};

const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  picturesList.appendChild(fragment);
};

const removePictures = () => {
  picturesList.querySelectorAll('.picture').forEach(removeElement);
};

export {addPictures, removePictures};
