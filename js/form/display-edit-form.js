import {sendData} from '../api.js';
import {showModalEditPhoto, closeModalEditPhoto} from './modal-form.js';

const uloadFileInput = document.querySelector('#upload-file');
const modalEditForm = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

uloadFileInput.addEventListener('change', showModalEditPhoto);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModalEditPhoto();
  }
});

const pristine = new Pristine(modalEditForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__error',
});

const setUserFormSubmit = (onSuccess, onFail) => {
  modalEditForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValidLengthDescField = pristine.validate();

    if (isValidLengthDescField) {
      blockSubmitButton();
      sendData(
        () => {
          closeModalEditPhoto();
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          onFail('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
