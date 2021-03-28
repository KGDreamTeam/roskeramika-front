export const getSizeProduct = (width, length) => {
  const size = ((width * length) / 100).toFixed(2);
  return size;
};

export const getTotalPriceProduct = (price, count) => {
  return (price * count).toFixed(2);
};
