const body = document.body;
const modalEditPhoto = document.querySelector('.img-upload__overlay');
const modalCloseBtn = document.querySelector('.img-upload__cancel');
const uloadFileInput = document.querySelector('#upload-file');
const modalEditForm = document.querySelector('#upload-select-image');

const closeModalEditPhoto = () => {
  modalEditPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  uloadFileInput.value = '';

  modalCloseBtn.removeEventListener('click', closeModalEditPhoto);
};

const showModalEditPhoto = () => {
  modalEditPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  modalCloseBtn.addEventListener('click', closeModalEditPhoto);
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

modalEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValidLengthDescField = pristine.validate();

  if (isValidLengthDescField) {
    evt.currentTarget.submit();
  }
});
