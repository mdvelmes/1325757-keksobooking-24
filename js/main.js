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
