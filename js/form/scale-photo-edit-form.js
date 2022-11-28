import {STEP_CONTROL, restrictionsStepsControl} from '../constants.js';

const controlSmallerElement = document.querySelector('.scale__control--smaller');
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const uploadPreviewElement = document.querySelector('.img-upload__preview');

const onClickControlBtn = (condition, currentBtn, someBtn, valueEl, step) => {
  if (condition) {
    valueEl.value = `${step}%`;
    uploadPreviewElement.style = `transform: scale(${step / 100})`;

    someBtn.removeAttribute('disabled');
  } else {
    currentBtn.setAttribute('disabled', 'true');
  }
};

controlBiggerElement.setAttribute('disabled', 'true');

controlSmallerElement.addEventListener('click', () => {
  const controlValueElement = document.querySelector('.scale__control--value');
  const controlValueNum = Number(controlValueElement.value.split('%')[0]);
  const step = controlValueNum - STEP_CONTROL;
  const condition = controlValueNum > restrictionsStepsControl.MIN;

  onClickControlBtn(condition, controlSmallerElement, controlBiggerElement, controlValueElement, step);
});

controlBiggerElement.addEventListener('click', () => {
  const controlValueElement = document.querySelector('.scale__control--value');
  const controlValueNum = Number(controlValueElement.value.split('%')[0]);
  const step = controlValueNum + STEP_CONTROL;
  const condition = controlValueNum < restrictionsStepsControl.MAX;

  onClickControlBtn(condition, controlBiggerElement, controlSmallerElement, controlValueElement, step);
});
