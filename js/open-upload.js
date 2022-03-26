import {isEscapeKey} from './util.js';

const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadTextInput = document.querySelector('.img-upload__text input');
const imageUploadTextTextarea = document.querySelector('.img-upload__text textarea');

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    hideUploadPicture();
  }
};

const addEscKeydown = () => {
  document.addEventListener('keydown', onEscKeydown);
};

const cancelEscKeydown = () => {
  document.removeEventListener('keydown', onEscKeydown);
};

const onUploadFileChange = () => {
  showUploadPicture();
};

const onUploadCancelClick = () => {
  hideUploadPicture();
};

function showUploadPicture() {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addEscKeydown();
}

function hideUploadPicture() {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
  cancelEscKeydown();
}
imageUploadTextInput.addEventListener('focusin', cancelEscKeydown);
imageUploadTextInput.addEventListener('focusout', addEscKeydown);

imageUploadTextTextarea.addEventListener('focusin', cancelEscKeydown);
imageUploadTextTextarea.addEventListener('focusout', addEscKeydown);

uploadFile.addEventListener('change', onUploadFileChange);

uploadCancel.addEventListener('click', onUploadCancelClick);
