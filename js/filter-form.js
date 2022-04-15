import { debounce } from './util/debounce.js';

const imageFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__form button');

let filterChangeCallback = null;

const onButtonClick = (evt) => {
  const activeButton = imageFilters.querySelector('button.img-filters__button--active');

  if (activeButton !== evt.target) {
    activeButton.classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }

  filterChangeCallback(evt.target.id);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', debounce(onButtonClick));
});

const setFilterChange = (callback) => {
  filterChangeCallback = callback;
};

const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};

export { showFilters, setFilterChange };
