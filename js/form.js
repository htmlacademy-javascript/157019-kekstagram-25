import { validateUniqueHashtags, validateSymbolsHashtags, validateTextHashtagsEmpty, validateCountHashtags, validateSpace } from './validators.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new window.Pristine(form, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});

pristine.addValidator(textHashtags, validateTextHashtagsEmpty, '', 1, true);
pristine.addValidator(textHashtags, validateSpace, 'Забыл о пробелах', 1, true);
pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хештегов', 1, true);
pristine.addValidator(textHashtags, validateUniqueHashtags, 'Все хештеги должны быть разными', 1, true);
pristine.addValidator(textHashtags, validateSymbolsHashtags, 'После # используй буквы и цифры', 1, true);

const setFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const value = textHashtags.value.trim();

    if (value === '' || pristine.validate()) {

      sendData(
        onSuccess,
        onFail,
        new FormData(evt.target),
      );}
  });
};

const resetValidators = () => {
  pristine.reset();
};

export {setFormSubmit, resetValidators};

