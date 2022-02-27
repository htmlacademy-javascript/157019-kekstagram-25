"use strict";
// Ссылка на функцию https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 0;
  }
}

function stringLengthCheck(testString, maxLength) {
  if (testString.length > maxLength) {
    return false;
  } return true;
}

const IDS_DISCRIPTION = Array.from({ length: 25 }, (v, k) => ++k);

const IDS_COMMENTS = Array.from({ length: 75 }, (v, k) => ++k);

const URL_INDEXES = Array.from({ length: 25 }, (v, k) => ++k);

const DISCRIPTION = [
  'Фото сделано специалистом, не повторяйте дома.',
  'Боже, да тут фото моей бабушки!               ',
  'Осторожно, 18+                                ',
];

const LIKE_INDEXES = Array.from({ length: 185 }, (v, k) => 15+k);

const AVATAR_URL_INDEXES = Array.from({ length: 6 }, (v, k) => ++k);

const AUTHOR_NAMES = [
  'Артем',
  'Илья',
  'Вова',
  'Ксюша',
  'Катя',
  'Петя',
  'Люда',
  'Надя',
  'Вадим',
  'Даниил',
  'Оля',
  'Толя',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Функция для получения уникального значения из массива
function getUnique(arr) {
  for (let i = 0; i <= arr.length; i++){
    return arr.splice(0,1)[i];
  }
}

const getRandomArrayElement = (element) => element[getRandomIntInclusive(0, element.length - 1)];

const createPhotoDiscription = () => ({
  id: getUnique(IDS_DISCRIPTION),
  url: `photos/${getUnique(URL_INDEXES)}.jpg`,
  description: getRandomArrayElement(DISCRIPTION),
  likes: getRandomArrayElement(LIKE_INDEXES),
  comments: [
    {
      id: getUnique(IDS_COMMENTS),
      avatar: `img/avatar-${getRandomArrayElement(AVATAR_URL_INDEXES)}.svg`,
      message:getRandomArrayElement(COMMENT_MESSAGES),
      name: getRandomArrayElement(AUTHOR_NAMES),
    },
    {
      id: getUnique(IDS_COMMENTS),
      avatar: `img/avatar-${getRandomArrayElement(AVATAR_URL_INDEXES)}.svg`,
      message:getRandomArrayElement(COMMENT_MESSAGES),
      name: getRandomArrayElement(AUTHOR_NAMES),
    },
    {
      id: getUnique(IDS_COMMENTS),
      avatar: `img/avatar-${getRandomArrayElement(AVATAR_URL_INDEXES)}.svg`,
      message:getRandomArrayElement(COMMENT_MESSAGES),
      name: getRandomArrayElement(AUTHOR_NAMES),
    },
  ],
});
const PhotoDiscription = Array.from({length: 25}, createPhotoDiscription);