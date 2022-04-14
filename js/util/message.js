import { isEscapeKey } from './common.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const showMessage = (type) => {
  const template = type === 'success' ? successMessageTemplate : errorMessageTemplate;

  const message = template.cloneNode(true);
  const title = message.querySelector(`.${type}__title`);

  document.body.append(message);

  const remove = () => {
    message.remove();
    document.removeEventListener('keydown', onEscapeKeydown);
  };

  function onEscapeKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();

      remove();
    }
  }

  message.addEventListener('click', (evt) => {
    if (title === evt.target){
      evt.preventDefault();
      return;
    }

    remove();
  });

  document.addEventListener('keydown', onEscapeKeydown);
};

export {showMessage};
