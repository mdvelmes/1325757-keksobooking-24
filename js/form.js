import { HouseMinPrices } from './constants.js';

const FORM = document.querySelector('.ad-form');
const HOUSE_TYPE_SELECT = FORM.querySelector('#type');
const HOUSE_TYPES = HOUSE_TYPE_SELECT.querySelectorAll('option');
const HOUSE_PRICE_SELECT = FORM.querySelector('#price');
const TIME_IN_SELECT = FORM.querySelector('#timein');
const TIME_OUT_SELECT = FORM.querySelector('#timeout');

const updatePrice = (minPrice) => {
  HOUSE_PRICE_SELECT.setAttribute('min', minPrice);
  HOUSE_PRICE_SELECT.setAttribute('placeholder', minPrice);
};

const priceByTypeHandler = (evt) => {
  const typeHouse = evt.target.value;
  const minPrice = HouseMinPrices[typeHouse];
  console.log(typeHouse, minPrice);

  return updatePrice(minPrice);
};

const getMinPrice = () =>
  HOUSE_TYPE_SELECT.addEventListener('change', priceByTypeHandler);

const timeInHandler = () => {
  TIME_OUT_SELECT.value = TIME_IN_SELECT.value;
};

const timeOutHandler = () => {
  TIME_IN_SELECT.value = TIME_OUT_SELECT.value;
};

const getTimeIn = () =>
  TIME_IN_SELECT.addEventListener('change', timeInHandler);
const getTimeOut = () =>
  TIME_OUT_SELECT.addEventListener('change', timeOutHandler);

export { getMinPrice, getTimeIn, getTimeOut };
