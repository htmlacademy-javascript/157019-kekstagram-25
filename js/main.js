import './form.js';
import {initRangeSlider} from './effects.js';
import './scale.js';
import './util.js';
import './open-modal.js';
import  {photos} from './data.js';
import './open-upload.js';

import {addPictures} from './add-pictures.js';
addPictures(photos);
initRangeSlider();

