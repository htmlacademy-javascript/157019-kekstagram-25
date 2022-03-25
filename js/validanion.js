import {countingItems, countingDuplicate} from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const reSpace = /\b#[A-Za-zА-Яа-яЁё0-9]/;
const reHashtagSymbols = /^#[A-Za-zА-Яа-яЁё0-9]{2,20}$/;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});
const validateTextHashtagsEmpty = () => {
  const textHashtagsEmpty = textHashtags.value.trim();
  if (textHashtagsEmpty === '') {
    return true;
  }
};

  // const hashtagsCollection = textHashtags.value.toLowerCase().trim().split(/\s+/);
  const validateUniqueHashtags = () => countingDuplicate(textHashtags.value.toLowerCase().trim().split(' ')) === 0;
  // console.log('Все хештеги должны быть разными ' + validateUniqueHashtags());
  const validateCountHashtags = () => countingItems(textHashtags.value.toLowerCase().trim().split(' ')) <= 5;
  // console.log('Не более 5 хештегов ' + validateCountHashtags());
  // console.log('После # используй буквы и цифры ' + validateSymbolsHashtags());
  const validateSpace = () => !reSpace.test(textHashtags.value);
  const validateSymbolsHashtags = () => {
    for ( const item of textHashtags.value.toLowerCase().trim().split(' ')) {
      if (reHashtagSymbols.test(item)) {continue;}
      return false;
    } return true;
  };
  pristine.addValidator(textHashtags, validateTextHashtagsEmpty);
  pristine.addValidator(textHashtags,validateUniqueHashtags,'Все хештеги должны быть разными');
  pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хештегов');
  pristine.addValidator(textHashtags,validateSymbolsHashtags,'После # используй буквы и цифры');
  pristine.addValidator(textHashtags, validateSpace, 'Забыл о пробелах');

imgUploadForm.addEventListener('submit', (evt) => {
  

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
