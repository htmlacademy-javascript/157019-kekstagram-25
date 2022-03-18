const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } return 0;
};

const getUnique = (items) => {
  for (let i = 0; i <= items.length; i++){
    return items.splice(0,1)[i];
  }
};

const getRandomArrayElement = (item) => item[getRandomIntInclusive(0, item.length - 1)];

export {getRandomArrayElement, getUnique};
