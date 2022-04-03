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
let effect = DEFAULT_EFFECT;

const uploadEffectLevel = document.querySelector('.img-upload__effect-level');

const clearEffect = () => {
  image.className = 'effects effects__preview--none';
  effectSlider.setAttribute('disabled', true);
  uploadEffectLevel.classList.add('hidden');
  image.style.filter = '';
};

const initRangeSlider = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1
  });

  effectSlider.noUiSlider.on('update', () => {
    effectLevel.value = effectSlider.noUiSlider.get();
    image.style.filter = `${stylesMap[effect]}(${effectLevel.value}${signsMap[effect]})`;
    uploadEffectLevel.classList.remove('hidden');
    if (effect === DEFAULT_EFFECT) {
      uploadEffectLevel.classList.add('hidden');
      effectSlider.setAttribute('disabled', true);
    }
  });
  effectsList.addEventListener('change', (evt) => {
    effect = evt.target.value;
    image.className = `effects effects__preview--${effect}`;
    effectSlider.noUiSlider.updateOptions(settingsMap[effect]);
    effectSlider.removeAttribute('disabled');
    if (effect === DEFAULT_EFFECT) {
      clearEffect();
    }
  });
};

export {clearEffect, initRangeSlider};

