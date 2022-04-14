const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkDuplicate = (items) => items.some((item, i) => items.indexOf(item, i + 1) > -1);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  const style = alertContainer.style;
  style.zIndex = 100;
  style.position = 'absolute';
  style.left = 0;
  style.top = 0;
  style.right = 0;
  style.padding = '10px 3px';
  style.fontSize = '30px';
  style.textAlign = 'center';
  style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, checkDuplicate, showAlert };
