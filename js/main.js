import {addFormSubmit} from './form.js';
import {initRangeSlider} from './effects.js';
import './scale.js';
import { showAlert } from './util/common.js';
import { showMessage } from './util/message.js';
import './modal.js';
import './preview.js';
import {hideUploadPicture} from './open-upload.js';
import {getData} from './api.js';
import {addPictures, removePictures } from './pictures.js';

import { showFilters, setFilterChange } from './filter-form.js';
import { getShuffledPhotos, getDiscussedPhotos } from './filters.js';

const filterIdToFilter = {
  'filter-default': (items) => items.slice(),
  'filter-random': getShuffledPhotos,
  'filter-discussed': getDiscussedPhotos,
};

let pictures = [];

getData((data) => {
  pictures = data;
  addPictures(pictures);
  showFilters();

  setFilterChange((filterId) => {

    const filteredPictures = filterIdToFilter[filterId](pictures);

    removePictures();
    addPictures(filteredPictures);

  });
}, (errorMesage) => {
  showAlert(errorMesage);
});

addFormSubmit(
  () => {
    showMessage('success');
  }, () => {
    showMessage('error');
  },
  () => {
    hideUploadPicture();
  }
);

initRangeSlider();
