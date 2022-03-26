import { validateUniqueHashtags, validateSymbolsHashtags, validateCountHashtags, validateTextHashtagsEmpty, validateSpace } from './valodators.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});

pristine.addValidator(textHashtags, validateTextHashtagsEmpty, '', 1, true);
pristine.addValidator(textHashtags, validateSpace, 'Забыл о пробелах', 1, true);
pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хештегов', 1, true);
pristine.addValidator(textHashtags, validateUniqueHashtags, 'Все хештеги должны быть разными', 1, true);
pristine.addValidator(textHashtags, validateSymbolsHashtags, 'После # используй буквы и цифры', 1, true);

pristine.validate();

imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
