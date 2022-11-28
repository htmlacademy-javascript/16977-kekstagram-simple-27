const body = document.body;
const modalEditPhoto = document.querySelector('.img-upload__overlay');
const modalCloseBtn = document.querySelector('.img-upload__cancel');
const uloadFileInput = document.querySelector('#upload-file');

const containerImgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreview = containerImgUploadPreview.querySelector('img');

const successNotafictionElement = document.querySelector('#success').content.querySelector('.success');
const errorNotafictionElement = document.querySelector('#error').content.querySelector('.error');

const closeModalEditPhoto = () => {
  modalEditPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  uloadFileInput.value = '';
  containerImgUploadPreview.style = '';
  imgUploadPreview.className = '';

  modalCloseBtn.removeEventListener('click', closeModalEditPhoto);
};

const showModalEditPhoto = () => {
  modalEditPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  modalCloseBtn.addEventListener('click', closeModalEditPhoto);
};

const setSuccessNotafication = () => {
  const successMessage = successNotafictionElement.cloneNode(true);

  body.append(successMessage);

  const successButton = successMessage.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    successMessage.remove();
  });

  const onSuccessMessageEscKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successMessage.remove();
    }
  };

  document.addEventListener('keydown', onSuccessMessageEscKeyDown);

  document.onclick = function (evt) {
    if (evt.target.className !== successMessage) {
      successMessage.remove();
    }
  };
};

const setErrorNotafication = () => {
  const errorMessage = errorNotafictionElement.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  body.append(errorMessage);

  errorButton.addEventListener('click', () => {
    errorMessage.remove();
  });

  const onErrorMessageEscKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.addEventListener('keydown', closeModalEditPhoto);
      errorMessage.remove();
    }
  };

  document.removeEventListener('keydown', closeModalEditPhoto);
  document.addEventListener('keydown', onErrorMessageEscKeyDown);

  document.addEventListener('click', (evt) => {
    if (evt.target.className !== errorMessage) {
      errorMessage.remove();
    }
  });
};

export {closeModalEditPhoto, showModalEditPhoto, setSuccessNotafication, setErrorNotafication};
