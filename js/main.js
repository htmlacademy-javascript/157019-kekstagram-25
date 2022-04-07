import {setFormSubmit} from './form.js';
import {initRangeSlider} from './effects.js';
import './scale.js';
import './util.js';
import './modal.js';
import {hideUploadPicture} from './open-upload.js';
import {getData} from './api.js';
import {addPictures} from './add-pictures.js';

getData((picturs) => {
  addPictures(picturs);
});
setFormSubmit(hideUploadPicture);
initRangeSlider();


