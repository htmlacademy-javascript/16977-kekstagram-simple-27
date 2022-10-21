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

export {getRandomNumber, checkLengthDescription, getUniqueID, getRandomDescription};
