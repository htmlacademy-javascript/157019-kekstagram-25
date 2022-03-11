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

function getKeyCodeESC(evt) {
  return evt.keyCode === 27;
}

function checkStringLength(testString, maxLength) {
  if (testString.length > maxLength) {
    return false;
  } return true;
}

// Функция для получения уникального значения из массива
function getUnique(array) {
  for (let i = 0; i <= array.length; i++){
    return array.splice(0,1)[i];
  }
}

const getRandomArrayElement = (element) => element[getRandomIntInclusive(0, element.length - 1)];

export {getRandomArrayElement, getUnique, checkStringLength, getKeyCodeESC};
