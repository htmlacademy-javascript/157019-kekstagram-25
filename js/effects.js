const DEFAULT_EFFECT = 'none';

const stylesMap = {
  none: '',
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness'
};

const signsMap = {
  none: '',
  chrome: '',
  sepia: '',
  marvin: '%',
  phobos: 'px',
  heat: ''
};

const settingsMap = {
  none: {},

  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1
  },

  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1
  },

  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100
  },

  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3
  },

  heat: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3
  }
};

const effectsList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');
const effectSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const uploadEffectLevel = document.querySelector('.img-upload__effect-level');

let currentEffect = DEFAULT_EFFECT;

const clearEffect = () => {
  image.style.filter = '';
  image.classList.remove(`effects__preview--${currentEffect}`);

  uploadEffectLevel.classList.add('hidden');
};

const renderFilter = () => {
  const volume = effectSlider.noUiSlider.get(true);

  effectLevel.value = volume;
  image.style.filter = `${stylesMap[currentEffect]}(${volume}${signsMap[currentEffect]})`;
};

const initRangeSlider = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });

  effectSlider.noUiSlider.on('update', () => {
    renderFilter();
  });

  effectsList.addEventListener('change', (evt) => {
    const effect = evt.target.value;

    image.classList.remove(`effects__preview--${currentEffect}`);
    image.classList.add(`effects__preview--${effect}`);

    currentEffect = effect;

    if (effect === DEFAULT_EFFECT) {
      clearEffect();
    } else {
      uploadEffectLevel.classList.remove('hidden');

      effectSlider.noUiSlider.updateOptions(settingsMap[currentEffect]);
      renderFilter();
    }
  });
};

export {clearEffect, initRangeSlider};
