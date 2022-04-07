import './form.js';
import {initRangeSlider} from './effects.js';
import './scale.js';
import './util.js';
import './open-modal.js';
import './open-upload.js';
import { createLoader } from './load.js';

const loadPictures = createLoader(console.log, console.error)

initRangeSlider();
loadPictures();


