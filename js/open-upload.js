import {isEscapeKey} from './util.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadTextInput = document.querySelector('.img-upload__text input');
const imageUploadTextTextarea = document.querySelector('.img-upload__text textarea');


const hideUploadPicture = () => {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
};

const addEscKeydownHandler = () => {
  document.addEventListener('keydown', onEscKeydown);
};

const removeEscKeydownHandler = () => {
  document.removeEventListener('keydown', onEscKeydown);
};

const showUploadPicture = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addEscKeydownHandler();
};

const onUploadFileChange = () => {
  showUploadPicture();
};

const onUploadCancelClick = () => {
  hideUploadPicture();
};

function onEscKeydown(evt) {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    hideUploadPicture();
    removeEscKeydownHandler();
  }
}

imageUploadTextInput.addEventListener('focusin', removeEscKeydownHandler);
imageUploadTextInput.addEventListener('focusout', addEscKeydownHandler);

imageUploadTextTextarea.addEventListener('focusin', removeEscKeydownHandler);
imageUploadTextTextarea.addEventListener('focusout', addEscKeydownHandler);

uploadFile.addEventListener('change', onUploadFileChange);

uploadCancel.addEventListener('click', onUploadCancelClick);
