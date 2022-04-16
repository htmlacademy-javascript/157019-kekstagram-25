import { sendData } from './api.js';
import {
  validateUniqueHashtags,
  validateSymbolsHashtags,
  validateCountHashtags,
  validateHashtagsByLength,
} from './validators.js';

const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('#upload-submit');
const textHashtags = form.querySelector('.text__hashtags');

const pristine = new window.Pristine(form, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});

pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хэш-тегов', 1, true);
pristine.addValidator(textHashtags, validateHashtagsByLength, 'Максимальная длина хэш-тега 20 символов, включая решётку', 1, true);
pristine.addValidator(textHashtags, validateSymbolsHashtags, 'После # используй буквы и цифры', 1, true);
pristine.addValidator(textHashtags, validateUniqueHashtags, 'Все хэш-теги должны быть разными', 1, true);

const addFormSubmit = (onSuccess, onFail, onResult) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const value = textHashtags.value.trim();

    if (value === '' || pristine.validate()) {
      submitButton.disabled = true;
      sendData(
        new FormData(evt.target),
        onSuccess,
        onFail,
        () => {
          submitButton.disabled = false;
          onResult();
        },
      );
    }
  });
};

const resetValidators = () => {
  pristine.reset();
};

export {addFormSubmit, resetValidators};
