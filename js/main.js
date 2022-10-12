(() => {
  const COUNT_CARDS_PHOTOS = 25;
  const countLikes = {
    MIN_LIKES: 15,
    MAX_LIKES: 200
  };
  const countComments = {
    MIN_COMMENTS: 0,
    MAX_COMMENTS: 200
  };
  const DESCRIPTION_CARDS_PHOTOS = [
    'Грохочет гром, сверкает молния в ночи, а на холме стоит безумец и кричит',
    'Сейчас поймаю тебя в сумку, и сверкать ты будешь в ней мне так хочется, чтоб стала ты моей!.',
    'То парень к лесу мчится, то к полю, то к ручью, всё поймать стремится молнию!',
    'Весь сельский люд, смотреть на это выходил, как на холме безумец бегал и чудил.',
    'Он, видно, в ссоре с головою, Видно, сам себе он враг, Надо ж выдумать такое - во дурак!',
    'Утром по сельской дороге, медленно шёл ночной герой, весь лохматый и седой, и улыбался...'
  ];

  const getRandomNumber = (min = 0, max = 0) => {
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

  const checkLengthDescription = (str = '', maxLength) => {
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

  const getRandomDescription = (items = []) => {
    if (items.length === 0) {
      return null;
    }

    const random = Math.floor(Math.random() * items.length);

    if (random > (items.length / 2)) {
      return items.slice(0, random);
    }

    return items.slice(-random);
  };

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

  checkLengthDescription('test', 5);
  getCollectionCardsPhotos(COUNT_CARDS_PHOTOS);
})();
