const maxCommentLength = 140;

// Ссылка на функцию https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false;
  }
}
getRandomIntInclusive();

function checkCommentLength(commentLength) {
  if (maxCommentLength >= commentLength) {
    return true;
  } return false;
}
checkCommentLength();
