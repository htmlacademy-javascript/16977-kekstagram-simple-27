import {countLikes, countComments, DESCRIPTION_CARDS_PHOTOS} from './constants.js';
import {getRandomNumber, getUniqueID, getRandomDescription} from './util.js';

const createDataCardPhoto = (uniqueID, uniqueNumPhoto) => ({
  id: uniqueID,
  url: `photos/${uniqueNumPhoto}.jpg`,
  description: getRandomDescription(DESCRIPTION_CARDS_PHOTOS),
  likes: getRandomNumber(countLikes.MIN_LIKES, countLikes.MAX_LIKES),
  comments: getRandomNumber(countComments.MIN_COMMENTS, countComments.MAX_COMMENTS)
});

const getCollectionCardsPhotos = (countCardsPhotos) => {
  const collectionCardsPhotos = [];

  const [collectionUniqueID, collectionUniquePhotos] = [getUniqueID(countCardsPhotos), getUniqueID(countCardsPhotos)];

  for (let i = 0; i < countCardsPhotos; i++) {
    const dataCardPhoto = createDataCardPhoto(collectionUniqueID[i], collectionUniquePhotos[i]);

    collectionCardsPhotos.push(dataCardPhoto);
  }

  return collectionCardsPhotos;
};

export {getCollectionCardsPhotos};
