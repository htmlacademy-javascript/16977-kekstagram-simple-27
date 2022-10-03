(() => {
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

  random();
  name('test', 5);
})();
