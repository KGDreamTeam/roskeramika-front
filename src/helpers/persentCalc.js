export const getPersentPrice = (persent, array) => {
  const minPrice = getMinPriceOfArr(array);
  const doublePrice = minPrice - (minPrice / 100) * persent;
  return Math.round(doublePrice);
};

export const getMinPriceOfArr = arr => {
  return Math.min.apply(
    Math,
    arr.map(function(o) {
      return o.price;
    })
  );
};

export const getPersentPriceOne = (persent, price) => {
  const doublePrice = price - (price / 100) * persent;
  return doublePrice;
};
