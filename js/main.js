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
getRandomIntInclusive();

function stringLengthCheck(testString, maxLength) {
  if (testString.length > maxLength) {
    return false;
  } return true;
}

stringLengthCheck();
