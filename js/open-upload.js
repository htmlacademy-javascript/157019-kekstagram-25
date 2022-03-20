import {isEscapeKey} from './util.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadTextInput = document.querySelector('.img-upload__text input');
const imageUploadTextTextarea = document.querySelector('.img-upload__text textarea');

const onUploadImageEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    hideUploadPicture();
  }
};

function showUploadPicture() {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onUploadImageEscKeydown);
}

function hideUploadPicture() {
  imageUploadOverlay.classList.add('hidden');
  body.classList.add('modal-open');
  uploadFile.value = '';
  document.removeEventListener('keydown', onUploadImageEscKeydown);
  imageUploadTextInput.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
  imageUploadTextTextarea.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
}

uploadFile.addEventListener('change', showUploadPicture);

uploadCancel.addEventListener('click', hideUploadPicture);
