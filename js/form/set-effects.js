const effectsList = document.querySelector('.effects__list');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');

const onImgAddEffect = ({target: {tagName: currentTagName, value: effectValue}}) => {
  if (currentTagName === 'INPUT') {
    uploadPreviewImg.classList = '';
    uploadPreviewImg.classList.add(`effects__preview--${effectValue}`);
  }
};

effectsList.addEventListener('click', onImgAddEffect);
