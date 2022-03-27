const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

const previewImage = document.querySelector('.img-upload__preview');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');

const changeImageScale = (value) => {
  const scaleValue = parseInt(value, 10) / 100;
  previewImage.style.transform = `scale(${scaleValue})`;
};

smallerScale.addEventListener('click', () => {
  const newScale = parseInt(scaleControl.value, 10) - STEP_SCALE;
  if (newScale >= MIN_SCALE) {
    changeImageScale(newScale);
    scaleControl.value = `${newScale}%`;
  }
});

biggerScale.addEventListener('click', () => {
  const newScale = parseInt(scaleControl.value, 10) + STEP_SCALE;
  if (newScale <= MAX_SCALE) {
    changeImageScale(newScale);
    scaleControl.value = `${newScale}%`;
  }
});

changeImageScale(scaleControl.value);
