(() => {
  const COUNT_CARDS_PHOTOS = 25;

  const random = (min = 0, max = 0) => {
    if (typeof min !== 'number' || typeof max !== 'number' || (min < 0 && max < 0)) {
      return NaN;
    }

    if (min < 0) {
      min = 0;
    }

    if (max < 0) {
      max = 0;
    }

    if (min > max) {
      [min, max] = [max, min];
    }

    if (min >= 0 && max >= 0) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }
  };

  const name = (str = '', maxLength) => {
    const minLength = 20;

    if (str.length >= minLength && str.length <= maxLength) {
      return true;
    }

    return false;
  };

  const getUniqueID = (countCardsPhotos) => {
    let count = 0;

    const nums = Array.from({length: countCardsPhotos}, () => {
      count += 1;

      return count;
    });

    for (let i = nums.length - 1; i > 0; i--) {
      const currentNum = nums[i];
      const randomNum = Math.floor(Math.random() * (i + 1));

      nums[i] = nums[randomNum];
      nums[randomNum] = currentNum;
    }

    return nums;
  };

  const createDataCardPhoto = (uniqueID, uniqueNumPhoto) => ({
    id: uniqueID,
    url: `photos/${uniqueNumPhoto}.jpg`,
    description: 'Здесь было НЛО',
    likes: random(15, 200),
    comments: random(0, 200)
  });

  const getCollectionCardsPhotos = () => {
    const collectionCardsPhotos = [];

    const [collectionUniqueID, collectionUniquePhotos] = [getUniqueID(COUNT_CARDS_PHOTOS), getUniqueID(COUNT_CARDS_PHOTOS)];

    for (let i = 0; i < COUNT_CARDS_PHOTOS; i++) {
      const dataCardPhoto = createDataCardPhoto(collectionUniqueID[i], collectionUniquePhotos[i]);

      collectionCardsPhotos.push(dataCardPhoto);
    }

    return collectionCardsPhotos;
  };

  name('test', 5);
  getCollectionCardsPhotos();
})();
