import { checkDuplicate } from './util/common.js';

const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;

const hashtagSymbolRegexp = /^#[A-Za-zА-Яа-яЁё0-9]+$/;

const parseHashtagInput = (value) => value.trim().toLowerCase().split(' ');

const checkHashtagsLength = (hashtags) => hashtags.every((hashtag) => hashtag.length <= HASHTAG_MAX_LENGTH);

const validateHashtagsByLength = (value) => {
  const hashtags = parseHashtagInput(value);
  return checkHashtagsLength(hashtags);
};

const validateHashtagsByMask = (hashtags) => hashtags.every((hashtag) => hashtagSymbolRegexp.test(hashtag));

const validateUniqueHashtags = (value) => {
  const hashtags = parseHashtagInput(value);
  return ! checkDuplicate(hashtags);
};

const validateSymbolsHashtags = (value) => {
  const hashtags = parseHashtagInput(value);
  return validateHashtagsByMask(hashtags);
};

const validateCountHashtags = (value) => {
  const hashtags = parseHashtagInput(value);
  return hashtags.length <= HASHTAG_MAX_COUNT;
};

export {
  validateUniqueHashtags,
  validateSymbolsHashtags,
  validateCountHashtags,
  validateHashtagsByLength
};
