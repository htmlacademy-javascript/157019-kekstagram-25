const scaleValue = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const previewImage = document.querySelector('.img-upload__preview');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');

const changeImageScale = (value) => {
  const parsScaleValue = parseInt(value, 10) / 100;
  previewImage.style.transform = `scale(${parsScaleValue})`;
};

smallerScale.addEventListener('click', () => {
  const result = parseInt(scaleControl.value, 10) - scaleValue.STEP;
  if (result >= scaleValue.MIN) {
    changeImageScale(result);
    scaleControl.value = `${result}%`;
  }
});

biggerScale.addEventListener('click', () => {
  const result = parseInt(scaleControl.value, 10) + scaleValue.STEP;
  if (result <= scaleValue.MAX) {
    changeImageScale(result);
    scaleControl.value = `${result}%`;
  }
});

changeImageScale(scaleControl.value);
