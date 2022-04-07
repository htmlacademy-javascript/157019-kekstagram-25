const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkDuplicate = (items) => {
  for (let i = 0; i < items.length; i++) {
    if (items.indexOf(items[i], i + 1) !== -1) { // > -1
      return true;
    }
  }

  return false;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('din');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, checkDuplicate, showAlert };
