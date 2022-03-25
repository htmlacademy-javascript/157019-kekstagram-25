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

imgUploadForm.addEventListener('submit', (evt) => {
  // const hashtagsCollection = textHashtags.value.toLowerCase().trim().split(/\s+/);
  const validateUniqueHashtags = () => countingDuplicate(textHashtags.value.toLowerCase().trim().split(' ')) === 0;
  // console.log('Все хештеги должны быть разными ' + validateUniqueHashtags());
  const validateCountHashtags = () => countingItems(textHashtags.value.toLowerCase().trim().split(' ')) <= 5;
  // console.log('Не более 5 хештегов ' + validateCountHashtags());
  const validateSymbolsHashtags = () => {
    for ( const item of textHashtags.value.toLowerCase().trim().split(' ')) {
      if (reHashtagSymbols.test(item)) {continue;}
      return false;
    } return true;
  };
  // console.log('После # используй буквы и цифры ' + validateSymbolsHashtags());
  const validateSpace = () => !reSpace.test(textHashtags.value);
  // const value = textHashtags.value.trim();
  // if (value === '') {
  //   return;
  // }
  pristine.addValidator(textHashtags,validateUniqueHashtags,'Все хештеги должны быть разными');
  pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хештегов');
  pristine.addValidator(textHashtags,validateSymbolsHashtags,'После # используй буквы и цифры');
  pristine.addValidator(textHashtags, validateSpace, 'Забыл о пробелах');

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
