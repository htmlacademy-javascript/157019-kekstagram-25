const ScaleValue = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const previewImage = document.querySelector('.img-upload__preview');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');

let currentScale = ScaleValue.MAX;

const changeImageScale = (value) => {
  currentScale = value;
  scaleControl.value = `${value}%`;
  previewImage.style.transform = `scale(${value / 100})`;
};

smallerScale.addEventListener('click', () => {
  if (currentScale - ScaleValue.STEP >= ScaleValue.MIN) {
    changeImageScale(currentScale - ScaleValue.STEP);
  }
});

biggerScale.addEventListener('click', () => {
  if (currentScale + ScaleValue.STEP <= ScaleValue.MAX) {
    changeImageScale(currentScale + ScaleValue.STEP);
  }
});

changeImageScale(ScaleValue.MAX);

export {
  changeImageScale,
  ScaleValue,
};
