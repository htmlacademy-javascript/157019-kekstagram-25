const effectsList = document.querySelectorAll('.effects__item');
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
let effect = 'none';

const STYLES = {
  none: '',
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness'
};

const SIGNS = {
  none: '',
  chrome: '',
  sepia: '',
  marvin: '%',
  phobos: 'px',
  heat: ''
};

const SETTINGS = {
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
      min: 1,
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

const clear = () => {
  image.className = 'effects effects__preview--none';
  image.style.filter = '';
};

const initRangeSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1
  });

  sliderElement.noUiSlider.on('update', () => {
    effectLevel.value = sliderElement.noUiSlider.get();
    image.style.filter = `${STYLES[effect]}(${effectLevel.value}${SIGNS[effect]})`;
  });
  for (const element of effectsList) {
    element.addEventListener('change', (evt) => {
      effect = evt.target.value;
      image.className = `effects effects__preview--${effect}`;
      sliderElement.noUiSlider.updateOptions(SETTINGS[effect]);
      sliderElement.removeAttribute('disabled');
      if (effect === 'none') {
        clear();
        sliderElement.setAttribute('disabled', true);
      }
    });
  }
};

initRangeSlider();
