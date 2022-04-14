import { openModal } from './modal.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (picture) => {
  const {url, likes, comments} = picture;

  const pictureNode = pictureTemplate.cloneNode(true);
  pictureNode.querySelector('.picture__img').src = url;
  pictureNode.querySelector('.picture__likes').textContent = likes;
  pictureNode.querySelector('.picture__comments').textContent = comments.length;

  pictureNode.addEventListener('click', () => {
    openModal(picture);
  });
  return pictureNode;
};

const addPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  picturesList.appendChild(fragment);
};

// -> util/dom.js
const removeElement = (element) => {
  element.remove();
};

const removePictures = () => {
  picturesList.querySelectorAll('.picture').forEach(removeElement);
};

export {addPictures, removePictures};
