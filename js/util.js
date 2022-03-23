const isEscapeKey = (evt) => evt.key === 'Escape';

const checkTextLength = (text, maxLength) => text.length <= maxLength;

const countingItems = (items) => {
  let itemsCount = 0;
  for (let i = 0; i < items.length; i++){
    itemsCount++;
  }
  return itemsCount;
};

const countingDuplicate = (items) => {
  let duplicateCount = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j]) {
        duplicateCount++;
      }
    }
  }
  return duplicateCount;
};

export {countingItems, checkTextLength, isEscapeKey, countingDuplicate};

