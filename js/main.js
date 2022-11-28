import {showErrorAlert} from './util.js';
import {getData} from './api.js';
import {renderCardsPhotos} from './render-cards-photos.js';
import './init-edit-form.js';
import {setUserFormSubmit} from './form/display-edit-form.js';
import {setSuccessNotafication, setErrorNotafication} from './form/modal-form.js';

getData(renderCardsPhotos, showErrorAlert);
setUserFormSubmit(setSuccessNotafication, setErrorNotafication);
