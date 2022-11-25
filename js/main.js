import {COUNT_CARDS_PHOTOS} from './constants.js';
import {getCollectionCardsPhotos} from './data.js';
import {renderCardsPhotos} from './render-cards-photos.js';
import './init-edit-form.js';

const dataCardsPhotos = getCollectionCardsPhotos(COUNT_CARDS_PHOTOS);

const containerCardsPhotos = document.querySelector('.pictures');
const cardsPhotosList = renderCardsPhotos(dataCardsPhotos);

containerCardsPhotos.append(cardsPhotosList);
