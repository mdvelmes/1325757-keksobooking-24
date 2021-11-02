import { getRandomAds } from './data.js';
import { NUM_ADS } from './constants.js';
import { renderCard } from './card.js';
import { getMinPrice, getTimeIn, getTimeOut } from './form.js';

const ads = getRandomAds(NUM_ADS);

// eslint-disable-next-line
console.log(ads);

const card = renderCard(ads[0]);

const minPrice = getMinPrice();
const timeIn = getTimeIn();
const timeOut = getTimeOut();
