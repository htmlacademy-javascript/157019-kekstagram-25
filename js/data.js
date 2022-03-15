import {getRandomArrayElement, getUnique} from './util.js';

const IDS_DISCRIPTIONS = Array.from({ length: 25 }, (v, k) => ++k);

const IDS_COMMENTS = Array.from({ length: 75 }, (v, k) => ++k);

const URLS_PHOTOS = Array.from({ length: 25 }, (v, k) => ++k);

const DISCRIPTIONS = [
  'Фото сделано специалистом, не повторяйте дома.',
  'Боже, да тут фото моей бабушки!               ',
  'Осторожно, 18+                                ',
];

const LIKES = Array.from({ length: 185 }, (v, k) => 15+k);

const URLS_AVATARS = Array.from({ length: 6 }, (v, k) => ++k);

const NAMES = [
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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComments = () => ({
  id: getUnique(IDS_COMMENTS),
  avatar: `img/avatar-${getRandomArrayElement(URLS_AVATARS)}.svg`,
  message:getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDiscription = () => ({
  id: getUnique(IDS_DISCRIPTIONS),
  url: `photos/${getUnique(URLS_PHOTOS)}.jpg`,
  description: getRandomArrayElement(DISCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  comments: Array.from({length: 3}, createComments),
});

const createPhotosDiscriptions = () => Array.from({length: 25}, createPhotoDiscription);

const photos = createPhotosDiscriptions();

export {photos};
