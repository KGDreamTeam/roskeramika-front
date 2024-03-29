import { combineReducers } from "redux";

import products from "./products";
import basket from "./basket";
import kategori from "./kategori";
import collections from "./collections";
import sliders from "./sliders";
import filters from './filters';

export default combineReducers({
  products,
  basket,
  kategori,
  collections,
  sliders,
  filters
});
