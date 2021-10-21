// eslint-disable-next-line
'use strict';

const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;
const errorHandler = (func) => {
  try {
    // eslint-disable-next-line
    console.log('result: ', func());
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomNumFloat = (...args) => {
  if (args.length < 2) {
    throw new Error('Маловато аргументов, надо минимум 3: min, max, decline');
  }
  const errorIndex = args.findIndex((value) => !isPositiveNumber(value));
  if (errorIndex >= 0) {
    throw new Error(
      `Неверный тип аргумента с индексом '${errorIndex}'! Значение неверного аргумента: '${args[errorIndex]}'`
    );
  }

  const [min, max, decline = 0] = args;
  const from = Math.min(min, max);
  const to = Math.max(min, max);
  const pow = Math.pow(10, decline);

  const result = Math.round((Math.random() * (to - from) + from) * pow) / pow;

  return result;
};

// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomBetweeen = (min, max) => getRandomNumFloat(min, max, 0);

errorHandler(() => getRandomNumFloat(10, 20, 2));
errorHandler(() => getRandomBetweeen(10, 20));

/* -------------------- MODULE3-TASK1 ------------------- */

const TIMES = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const PHOTO_ROOT = 'http://o0.github.io/assets/images/tokyo/';
const PHOTOS = ['hotel1.jpg', 'hotel2.jpg', 'hotel3.jpg'];
const TITLES = [
  'Chill-ZONE',
  'ICON',
  'Mirage Hotel',
  'Golden Rock Beach Hotel',
  'Dark Side',
];
const DESCRIPTIONS = [
  'Лучший Chill у нас на пляже',
  'Sex, Drugs, Rok`n`Roll',
  'Тренажёрный зал, групповые занятия, индивидуальные тренировки',
  'Молочные коктейли, сауна, девочки 18+',
  'Ночные посиделки у костра под КиШа',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const Prices = {
  MIN: 0,
  MAX: 1e5,
};
const ROOMS = [1, 2, 3, 100];
const Guests = {
  MIN: 1,
  MAX: 200,
};
const DEC = 5;
const NUM_ADS = 10;
const Coordinates = {
  LAT: {
    min: 35.65,
    max: 35.7,
  },
  LNG: {
    min: 139.7,
    max: 139.8,
  },
};

/* ------------- Случайный элемент массиваэ ------------- */

const getRandomItem = (array) => array[getRandomBetweeen(0, array.length - 1)];

/* ------------------------------------------------------ */

/* --------------- Случайный срез массива --------------- */

const getRandomBoolean = () => Math.random() > 0.5;

const getSomeArray = (array, canBeEmpty = false) => {
  const result = array.filter(getRandomBoolean);

  if (!canBeEmpty && result.length < 1) {
    const arrayIdx = Math.floor(Math.random() * array.length);
    result.push(array[arrayIdx]);
  }

  return result;
};

/* ------------------------------------------------------ */

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

  for (let i = 0; i < count; i++) {
    ads.push(getRandomAd());
  }

  return ads;
};

// eslint-disable-next-line
console.log(getRandomAds(NUM_ADS));
