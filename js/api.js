const ApiUrl = {
  GET: 'https://25.javascript.pages.academy/kekstagram/data',
  POST: 'https://25.javascript.pages.academy/kekstagram',
};

const getData = (onSuccess, onFail) => {
  fetch (ApiUrl.GET)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      onFail('Не удалось загрузить данные.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    ApiUrl.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте позже.');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте позже.');
    });
};

export {getData, sendData};
