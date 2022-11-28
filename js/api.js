const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .then((cards) => {
      onSuccess(cards);
    }).catch(() => {
      onFail('Изображения не загружены с сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Изображение не загружено на сервер');
      }
    }).catch(() => {
      onFail('Изображение не загружено на сервер');
    });
};

export {getData, sendData};
