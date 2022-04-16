import { isEscapeKey } from './util/common.js';
import { changeImageScale, ScaleValue } from './scale.js';
import { clearEffect } from './effects.js';
import { resetValidators } from './form.js';

const uploadForm = document.querySelector('.img-upload__form');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadTextInput = document.querySelector('.img-upload__text input');
const imageUploadTextTextarea = document.querySelector('.img-upload__text textarea');
const preview = document.querySelector('.img-upload__preview img');

const addEscKeydownHandler = () => {
  document.addEventListener('keydown', onEscKeydown);
};

const removeEscKeydownHandler = () => {
  document.removeEventListener('keydown', onEscKeydown);
};

const resetUploadPicture = () => {
  uploadForm.reset();

  changeImageScale(ScaleValue.MAX);
  clearEffect();
  resetValidators();
};

const hideUploadPicture = () => {
  resetUploadPicture();
  preview.src = '';
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeEscKeydownHandler();
};

const showUploadPicture = () => {
  resetUploadPicture();
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
  }
}

imageUploadTextInput.addEventListener('focusin', () => {
  removeEscKeydownHandler();
});
imageUploadTextInput.addEventListener('focusout', () => {
  addEscKeydownHandler();
});

imageUploadTextTextarea.addEventListener('focusin', () => {
  removeEscKeydownHandler();
});
imageUploadTextTextarea.addEventListener('focusout', () => {
  addEscKeydownHandler();
});

uploadFile.addEventListener('change', onUploadFileChange);

uploadCancel.addEventListener('click', onUploadCancelClick);

export {hideUploadPicture};
