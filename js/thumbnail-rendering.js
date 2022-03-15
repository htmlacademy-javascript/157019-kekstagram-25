import  {photos} from './data.js';
import { openModal } from './modal-render.js';
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsPhotos = photos;
const picturesThumbnailFragment = document.createDocumentFragment();


const renderThumbnailPhoto = () => {
  thumbnailsPhotos.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picturesThumbnailFragment.appendChild(picture);
    picturesList.appendChild(picturesThumbnailFragment);
    openModal(picture);
  });
};

export {renderThumbnailPhoto};
