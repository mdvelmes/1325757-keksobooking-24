import {
  getRandomBetweeen,
  getRandomItem,
  getRandomNumFloat,
  getSomeArray,
} from './utils.js';

import {
  TIMES,
  TYPES,
  PHOTO_ROOT,
  PHOTOS,
  TITLES,
  DESCRIPTIONS,
  FEATURES,
  Prices,
  ROOMS,
  Guests,
  DEC,
  Coordinates,
} from './constants.js';

const getAvatar = (idx) => `img/avatars/user${idx}.png`;
const getPhotoUrl = (value) => `${PHOTO_ROOT}${getRandomItem(value)}`;

const getRandomAd = () => {
  const avatarIndex = String(getRandomBetweeen(1, 8)).padStart(2, 0);
  const time = getRandomItem(TIMES);

  const location = {
    lat: getRandomNumFloat(Coordinates.LAT.min, Coordinates.LAT.max, DEC),
    lng: getRandomNumFloat(Coordinates.LNG.min, Coordinates.LNG.max, DEC),
  };

  const ad = {
    author: {
      avatar: getAvatar(avatarIndex),
    },
    offer: {
      title: getRandomItem(TITLES),
      description: getRandomItem(DESCRIPTIONS),
      address: Object.values(location).join(', '),
      price: getRandomBetweeen(Prices.MIN, Prices.MAX),
      type: getRandomItem(TYPES),
      rooms: getRandomItem(ROOMS),
      guests: getRandomBetweeen(Guests.MIN, Guests.MAX),
      checkin: time,
      checkout: time,
      features: getSomeArray(FEATURES),
      photos: getPhotoUrl(PHOTOS),
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  };

  return ad;
};

const getRandomAds = (count) => {
  const ads = [];

  for (let idx = 0; idx < count; idx++) {
    ads.push(getRandomAd());
  }

  return ads;
};

export { getRandomAds };
