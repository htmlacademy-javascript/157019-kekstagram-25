const isEscapeKey = (evt) => evt.key === 'Escape';

const checkTextLength = (text, maxLength) => text.length <= maxLength;

export {checkTextLength, isEscapeKey};
