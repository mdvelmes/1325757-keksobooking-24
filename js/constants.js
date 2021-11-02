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

const HouseMinPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export {
  NUM_ADS,
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
  HouseMinPrices,
};
