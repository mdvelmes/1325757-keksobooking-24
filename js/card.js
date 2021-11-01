const CARD_TEMPLATE = document.querySelector('#card');
const MAP_CONTENT = document.querySelector('.map');
const MAP_CANVAS = MAP_CONTENT.querySelector('#map-canvas');

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const ROOMS = ['комната', 'комнаты', 'комнат'];
const GUESTS = ['гостя', 'гостей', 'гостей'];

const getPluralIdx = (count) => {
  const c10 = count % 10;
  const c100 = count % 100;

  if (c10 === 1 && c100 !== 11) {
    return 0;
  }

  if (c10 >= 2 && c10 <= 4 && (c100 < 10 || c100 >= 20)) {
    return 1;
  }

  return 2;
};

const pluralize = (count, plurals) => plurals[getPluralIdx(count)];
const getPlural = (count, plurals) => `${count} ${pluralize(count, plurals)}`;

const removeExtraFeatures = (elements, features) => {
  elements.forEach((element) => {
    const classes = element.classList[1].split('--');

    if (!features.includes(classes[1])) {
      element.remove();
    }
  });
};

const renderPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photoUrl) => {
    const photoElement = element.cloneNode(true);
    photoElement.src = photoUrl;
    fragment.appendChild(photoElement);
  });

  element.remove();
  return fragment;
};

const renderCard = (ad) => {
  const { offer, author } = ad;
  const card = CARD_TEMPLATE.content.cloneNode(true);

  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const time = card.querySelector('.popup__text--time');
  const featuresContainer = card.querySelector(' .popup__features');
  const features = featuresContainer.querySelectorAll('.popup__feature');
  const description = card.querySelector('.popup__description');
  const photosContainer = card.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');
  const avatar = card.querySelector('.popup__avatar');

  title.textContent = offer.title;
  address.textContent = offer.address;
  price.textContent = `${offer.price} ₽/ночь`;
  type.textContent = TYPES[offer.type];
  capacity.textContent = `${getPlural(offer.rooms, ROOMS)} для ${getPlural(
    offer.guests,
    GUESTS
  )}`;
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  description.textContent = offer.description;

  avatar.src = author.avatar;

  removeExtraFeatures(features, offer.features);

  photosContainer.appendChild(renderPhotos(photoElement, offer.photos));

  MAP_CANVAS.appendChild(card);
};

export { renderCard };
