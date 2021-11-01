import { getRandomAds } from './data.js';
import { NUM_ADS } from './constants.js';
import { renderCard } from './card.js';

const ads = getRandomAds(NUM_ADS);

// eslint-disable-next-line
console.log(ads);

const card = renderCard(ads[0]);
