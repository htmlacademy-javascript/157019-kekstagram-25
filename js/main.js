import {setFormSubmit} from './form.js';
import {initRangeSlider} from './effects.js';
import './scale.js';
import { showAlert, showMessage } from './util.js';
import './modal.js';
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
    // console.log(filterId);
    const filteredPictures = filterIdToFilter[filterId](pictures);

    removePictures();
    addPictures(filteredPictures);

    /*
    switch(filterId) {
      case 'filter-default':
        addPictures(pictures);
        break;
      case 'filter-random':
        addPictures(getShuffledPhotos(pictures));
        break;
      case 'filter-discussed':
        addPictures(getDiscussedPhotos(pictures));
        break;
    }
**/
  });
}, (errorMesage) => {
  showAlert(errorMesage);
});

setFormSubmit(
  () => {
    hideUploadPicture();
    showMessage('success');
  }, () => {
    hideUploadPicture();
    showMessage('error');
  });

initRangeSlider();


