import {countingItems, countingDuplicate} from './util.js'

const imgUploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
// const textInfo = document.querySelector('.text-info');
const reSpace = /\b#[A-Za-zА-Яа-яЁё0-9]/;

const reHashtagSymbols = /^#[A-Za-zА-Яа-яЁё0-9]{2,20}$/;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});

imgUploadForm.addEventListener('submit', (evt) => {
  // const hashtagsCollection = textHashtags.value.toLowerCase().trim().split(/\s+/);

  console.log(textHashtags.value.toLowerCase().trim().split(/\s+/));

  const validateUniqueHashtags = () => countingDuplicate(textHashtags.value.toLowerCase().trim().split(/\s+/) === 0);
  const validateCountHashtags = () => countingItems(textHashtags.value.toLowerCase().trim().split(/\s+/)) <= 5;
  console.log(validateCountHashtags());
  const validateSymbolsHashtags = () => {
    for ( const item of textHashtags.value.toLowerCase().trim().split(/\s+/)) {
      if (reHashtagSymbols.test(item)) {continue;}
      return false;
    } return true;
  };

  console.log(validateSymbolsHashtags());

  const validateSpace = () => !reSpace.test(textHashtags.value);
  const value = textHashtags.value.trim();
  if (value === '') {
    return;
  }
  pristine.addValidator(document.querySelector('.text__hashtags'),validateUniqueHashtags,'Все хештеги должны быть разными');
  pristine.addValidator(document.querySelector('.text__hashtags'), validateCountHashtags, 'Не более 5 хештегов');
  pristine.addValidator(document.querySelector('.text__hashtags'),validateSymbolsHashtags,'После # используй буквы и цифры');
  pristine.addValidator(document.querySelector('.text__hashtags'), validateSpace, 'Забыл о пробелах');

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
