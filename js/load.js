import {addPictures} from './add-pictures.js';

const createLoader = (onSuccess, onError) => () => fetch(
  'https://25.javascript.pages.academy/kekstagram/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    addPictures(data);
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

export {createLoader};