const renderCardsPhotos = (cards) => {
  const templateCardPhoto = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  cards.forEach(({url, likes, comments}) => {
    const element = templateCardPhoto.cloneNode(true);

    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments;

    fragment.append(element);
  });

  return fragment;
};

export {renderCardsPhotos};
