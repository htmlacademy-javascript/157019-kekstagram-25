import { checkDuplicate } from './util.js';

const textHashtags = document.querySelector('.text__hashtags');
const HASHTAG_MAX_COUNT = 5;
const reSpace = /\b#[A-Za-zА-Яа-яЁё0-9]/;
const hashtagSymbolRegexp = /^#[A-Za-zА-Яа-яЁё0-9]{2,20}$/;
const getHashTagsFromInput = () => textHashtags.value.trim().toLowerCase().split(' ');

const validateHashtagsByMask = (hashtags) => hashtags.every((hashtag) => hashtagSymbolRegexp.test(hashtag));

const validateUniqueHashtags = () => {
  const hashtags = getHashTagsFromInput();
  return ! checkDuplicate(hashtags);
};

const validateSymbolsHashtags = () => {
  const hashtags = getHashTagsFromInput();
  return validateHashtagsByMask(hashtags);
};

const validateCountHashtags = () => {
  const hashtags = getHashTagsFromInput();
  return hashtags.length <= HASHTAG_MAX_COUNT;
};

const validateTextHashtagsEmpty = () => {
  const value = textHashtags.value.trim();
  return value !== '';
};

const validateSpace = () => ! reSpace.test(textHashtags.value);

export{ validateUniqueHashtags, validateSymbolsHashtags, validateCountHashtags, validateTextHashtagsEmpty, validateSpace };
