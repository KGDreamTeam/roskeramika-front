(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./src/store/actionTypes.js
var actionTypes = __webpack_require__(7199);
;// CONCATENATED MODULE: ./src/store/reducers/products.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: [],
  filteredProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes/* SET_ALL_PRODUCTS */.aT:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: [...action.payload]
      });

    case actionTypes/* SET_FILTERED_PRODUCTS */.lI:
      return _objectSpread(_objectSpread({}, state), {}, {
        filteredProducts: [...action.payload]
      });

    default:
      return state;
  }
};

/* harmony default export */ const products = (reducer);
;// CONCATENATED MODULE: ./src/store/reducers/basket.js
function basket_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function basket_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { basket_ownKeys(Object(source), true).forEach(function (key) { basket_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { basket_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function basket_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const basket_initialState = {
  items: [],
  itemsToSale: [],
  itemsPrices: [],
  totalPriceToBuy: 0
};

const basket_reducer = (state = basket_initialState, action) => {
  var _minusPrice$;

  switch (action.type) {
    case actionTypes/* PUSH_ITEMS_BASKET */.JH:
      return basket_objectSpread(basket_objectSpread({}, state), {}, {
        items: [...state.items, ...action.payload]
      });

    case actionTypes/* DELETE_ITEM_BASKET */.nj:
      const newArr = deleteItem(state.items, action.payload);
      const arrFromToSale = deleteItem(state.itemsToSale, action.payload);
      return basket_objectSpread(basket_objectSpread({}, state), {}, {
        itemsToSale: [...arrFromToSale],
        items: [...newArr]
      });

    case actionTypes/* DELETE_ITEM_PRICE_BASKET */.fJ:
      const minusPrice = state.itemsPrices.filter(item => action.payload === item.id);
      const filteredArray = state.itemsPrices.filter(item => action.payload != item.id);
      return basket_objectSpread(basket_objectSpread({}, state), {}, {
        itemsPrices: [...filteredArray],
        totalPriceToBuy: state.totalPriceToBuy - parseInt((_minusPrice$ = minusPrice[0]) === null || _minusPrice$ === void 0 ? void 0 : _minusPrice$.price)
      });

    case actionTypes/* SET_TOTAL_PRICE */.GB:
      return basket_objectSpread(basket_objectSpread({}, state), {}, {
        totalPriceToBuy: action.payload
      });

    case actionTypes/* PUSH_ITEMS_TO_SALE */.qG:
      return basket_objectSpread(basket_objectSpread({}, state), {}, {
        itemsToSale: [...action.payload]
      });

    case actionTypes/* PLUS_ITEMS_PRICE */.Yc:
      let index = state.itemsPrices.findIndex(el => el.id === action.payload.id);

      if (index === -1) {
        return basket_objectSpread(basket_objectSpread({}, state), {}, {
          itemsPrices: [...state.itemsPrices, basket_objectSpread({}, action.payload)]
        });
      } else {
        let items = [...state.itemsPrices];
        items[index].price = action.payload.price;
        return basket_objectSpread(basket_objectSpread({}, state), {}, {
          itemsPrices: [...items]
        });
      }

    default:
      return state;
  }
};

const deleteItem = (arr, el) => {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === parseInt(el)) {
      index = i;
    }
  }

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
};

/* harmony default export */ const basket = (basket_reducer);
;// CONCATENATED MODULE: ./src/store/reducers/kategori.js
function kategori_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function kategori_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { kategori_ownKeys(Object(source), true).forEach(function (key) { kategori_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { kategori_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function kategori_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const kategori_initialState = {
  subCategories: [],
  categories: [{
    id: 1,
    name: "Levita1",
    price: 300,
    manufacturer: "Russia",
    size: "30x40",
    surface: "Mat",
    style: "Modern, Casual"
  }]
};

const kategori_reducer = (state = kategori_initialState, action) => {
  switch (action.type) {
    case actionTypes/* PUSH_CATEGORY */.kr:
      return kategori_objectSpread(kategori_objectSpread({}, state), {}, {
        categories: [...action.payload]
      });

    case actionTypes/* PUSH_SUB_CATEGORY */.uM:
      return kategori_objectSpread(kategori_objectSpread({}, state), {}, {
        subCategories: [...action.payload]
      });

    default:
      return state;
  }
};

/* harmony default export */ const kategori = (kategori_reducer);
;// CONCATENATED MODULE: ./src/store/reducers/collections.js
function collections_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function collections_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { collections_ownKeys(Object(source), true).forEach(function (key) { collections_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { collections_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function collections_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const collections_initialState = {
  newCollections: [],
  hitCollections: [],
  otherCollections: [],
  allProducts: [],
  oneCollection: {}
};

const collections_reducer = (state = collections_initialState, action) => {
  switch (action.type) {
    case actionTypes/* PUSH_COLLECTIONS */.bE:
      return [...action.payload];

    case actionTypes/* PUSH_HIT_COLLECTIONS */.d9:
      return collections_objectSpread(collections_objectSpread({}, state), {}, {
        newCollections: [...state.newCollections],
        hitCollections: [...action.payload],
        otherCollections: [...state.otherCollections],
        oneCollection: collections_objectSpread({}, state.oneCollection)
      });

    case actionTypes/* PUSH_ALL_COLLECTIONS */.N:
      return collections_objectSpread(collections_objectSpread({}, state), {}, {
        allProducts: [...action.payload]
      });

    case actionTypes/* PUSH_OTHER_COLLECTIONS */.Bv:
      return collections_objectSpread(collections_objectSpread({}, state), {}, {
        newCollections: [...state.newCollections],
        hitCollections: [...state.hitCollections],
        otherCollections: [...action.payload],
        oneCollection: collections_objectSpread({}, state.oneCollection)
      });

    case actionTypes/* PUSH_NEWS_COLLECTIONS */.F_:
      return collections_objectSpread(collections_objectSpread({}, state), {}, {
        newCollections: [...action.payload],
        hitCollections: [...state.hitCollections],
        otherCollections: [...state.otherCollections],
        oneCollection: collections_objectSpread({}, state.oneCollection)
      });

    case actionTypes/* PUSH_ONE_COLLECTION */.sN:
      return collections_objectSpread(collections_objectSpread({}, state), {}, {
        newCollections: [...state.newCollections],
        hitCollections: [...state.hitCollections],
        otherCollections: [...state.otherCollections],
        oneCollection: collections_objectSpread(collections_objectSpread({}, action.payload.collection), {}, {
          manufacturer: action.payload.collection.manufacturer.country,
          products: [...action.payload.products]
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ const collections = (collections_reducer);
;// CONCATENATED MODULE: ./src/store/reducers/sliders.js

const sliders_initialState = {
  newsSliderArray: [],
  hitsSliderArray: [],
  salesSliderArray: []
};

const sliders_reducer = (state = sliders_initialState, action) => {
  switch (action.type) {
    case actionTypes/* PUSH_ITEMS_SLIDER_COLLECTIONS */.yR:
      return {
        newsSliderArray: [...action.payload.newsArr],
        hitsSliderArray: [...action.payload.hitsArr],
        salesSliderArray: [...action.payload.salesArr]
      };

    default:
      return state;
  }
};

/* harmony default export */ const sliders = (sliders_reducer);
;// CONCATENATED MODULE: ./src/store/reducers/filters.js
function filters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function filters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filters_ownKeys(Object(source), true).forEach(function (key) { filters_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let filters_initialState = {
  loading: false,
  show: false,
  size: [],
  usage: [],
  surface: [],
  catalog: []
};

const filters_reducer = (state = filters_initialState, action) => {
  var _action$payload, _action$payload2, _action$payload3;

  switch (action.type) {
    case actionTypes/* SET_FILTERS_TO_STORE */.gN:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        size: (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.sizes,
        usage: (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.usage,
        surface: (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.surface
      });

    case actionTypes/* RE_SET_FILTERS */.Rx:
      const sizeReseted = [];
      const usageReseted = [];
      const surfaceReseted = [];
      const catalogReseted = [];

      for (let i of state.size) {
        sizeReseted.push(Object.assign({}, i, {
          checked: false
        }));
      }

      for (let i of state.usage) {
        usageReseted.push(Object.assign({}, i, {
          checked: false
        }));
      }

      for (let i of state.surface) {
        surfaceReseted.push(Object.assign({}, i, {
          checked: false
        }));
      }

      for (let i of state.catalog) {
        catalogReseted.push(Object.assign({}, i, {
          checked: false
        }));
      }

      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        show: false,
        size: sizeReseted,
        usage: usageReseted,
        surface: surfaceReseted,
        catalog: catalogReseted
      });

    case actionTypes/* CHECK_SIZE_FILTER */.u7:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        size: state.size.map((item, index) => {
          if (index === action.payload) {
            item.checked = !item.checked;
          }

          return item;
        })
      });

    case actionTypes/* CHECK_USAGE_FILTER */.MM:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        usage: state.usage.map((item, index) => {
          if (index === action.payload) {
            item.checked = !item.checked;
          }

          return item;
        })
      });

    case actionTypes/* CHECK_SURFACE_FILTER */.HZ:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        surface: state.surface.map((item, index) => {
          if (index === action.payload) {
            item.checked = !item.checked;
          }

          return item;
        })
      });

    case actionTypes/* CHECK_CATALOG_FILTER */.Ci:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        catalog: state.catalog.map((item, index) => {
          if (index === action.payload) {
            item.checked = !item.checked;
          }

          return item;
        })
      });

    case actionTypes/* SET_FILTERED */.c7:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        show: action.payload
      });

    case actionTypes/* PUSH_CATEGORY_TO_FILTER */.gG:
      return filters_objectSpread(filters_objectSpread({}, state), {}, {
        catalog: [...action.payload]
      });

    default:
      return state;
  }
};

/* harmony default export */ const filters = (filters_reducer);
;// CONCATENATED MODULE: ./src/store/reducers/index.js







/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
  products: products,
  basket: basket,
  kategori: kategori,
  collections: collections,
  sliders: sliders,
  filters: filters
}));
;// CONCATENATED MODULE: ./src/store/store.js
/*eslint-disable*/




const configureStore = () => {
  const composeEnhancers =  false ? 0 : external_redux_namespaceObject.compose;
  return (0,external_redux_namespaceObject.createStore)(reducers, composeEnhancers((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
};
const initStore = initialState => configureStore(initialState);
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(() => initStore());
/* harmony default export */ const store = ((/* unused pure expression or super */ null && (initStore)));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/assets/img/white-wats.js

const WhiteWatsIcon = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: className,
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12.5476 0C5.92361 0 0.547607 5.376 0.547607 12C0.547607 14.544 1.33961 16.896 2.68361 18.84L1.43561 23.232L5.97161 22.032C7.86761 23.28 10.1236 24 12.5476 24C19.1716 24 24.5476 18.624 24.5476 12C24.5476 5.376 19.1716 0 12.5476 0ZM19.8436 15.864C19.4596 18.36 17.1316 19.272 15.1156 18.672C10.8676 17.424 7.79561 14.736 5.77961 10.824C5.27561 9.864 5.10761 8.784 5.32361 7.68C5.51561 6.696 6.11561 5.952 6.85961 5.328C7.14761 5.088 7.48361 5.016 7.91561 5.04C8.56361 5.016 8.89961 5.232 9.13961 6.048C9.37961 6.888 9.81161 7.656 10.1716 8.472C10.3156 8.832 10.2916 9.12 10.0276 9.384C9.71561 9.72 9.40361 10.104 9.09161 10.44C8.89961 10.656 8.87561 10.848 9.01961 11.112C10.1956 13.2 11.9236 14.616 14.1556 15.456C14.4196 15.552 14.5636 15.432 14.7076 15.264C15.0436 14.808 15.4036 14.376 15.7396 13.92C15.9796 13.56 16.2676 13.512 16.6516 13.704C17.5636 14.136 18.4996 14.568 19.4356 15C19.8676 15.216 19.9156 15.36 19.8436 15.864Z",
      fill: "white"
    })
  });
};
;// CONCATENATED MODULE: ./src/assets/img/white-inst.js


const WhiteInstIcon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: className,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M15.0712 5.92798H8.92725C7.27125 5.92798 5.92725 7.27198 5.92725 8.92798V15.072C5.92725 16.728 7.27125 18.072 8.92725 18.072H15.0712C16.7272 18.072 18.0712 16.728 18.0712 15.072V8.92798C18.0472 7.27198 16.7032 5.92798 15.0712 5.92798ZM11.9993 16.032C9.86325 16.032 8.13525 14.304 8.13525 12.168C8.13525 10.032 9.86325 8.30398 11.9993 8.30398C14.1353 8.30398 15.8632 10.032 15.8632 12.168C15.8632 14.304 14.1353 16.032 11.9993 16.032ZM15.8632 8.85598C15.3592 8.85598 14.9512 8.44798 14.9512 7.94398C14.9512 7.43998 15.3592 7.03198 15.8632 7.03198C16.3672 7.03198 16.7752 7.43998 16.7752 7.94398C16.7752 8.44798 16.3672 8.85598 15.8632 8.85598Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM19.512 15.072C19.512 17.52 17.52 19.512 15.072 19.512H8.928C6.48 19.512 4.488 17.52 4.488 15.072V8.928C4.488 6.48 6.48 4.488 8.928 4.488H15.072C17.52 4.488 19.512 6.48 19.512 8.928V15.072Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M11.9989 14.5681C13.3244 14.5681 14.3989 13.4936 14.3989 12.1681C14.3989 10.8426 13.3244 9.76807 11.9989 9.76807C10.6734 9.76807 9.59888 10.8426 9.59888 12.1681C9.59888 13.4936 10.6734 14.5681 11.9989 14.5681Z",
      fill: "white"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/layout/Footer.js







const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "footer",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "info-item",
          href: "tel:+996555939993",
          children: "\u0422\u0435\u043B: +996 (555) 93-99-93"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "info-item",
          href: "mailto:rkaugrand@gmail.com",
          children: "Email: rkaugrand@gmail.com"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "soc-icons",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.instagram.com/rosskeramika_official/",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx(WhiteInstIcon, {
              className: "white-inst"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://api.whatsapp.com/send?phone=+996555939993",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx(WhiteWatsIcon, {
              className: "white-whats"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B:"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "info-item",
          children: "\u0441 9-00 \u0434\u043E 18-00, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "info-item",
          children: "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043A\u043B\u0430\u0434\u0430: \u0441 9-00 \u0434\u043E 17-00, \u0441\u0443\u0431\u0431\u043E\u0442\u0430: c 9-00 \u0434\u043E 16-00, \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435 - \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433:"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/sub/4",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u041F\u043B\u0438\u0442\u043A\u0430 \u0434\u043B\u044F \u0432\u0430\u043D\u043D\u043E\u0439"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/sub/5",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u041F\u043B\u0438\u0442\u043A\u0430 \u0434\u043B\u044F \u043A\u0443\u0445\u043D\u0438"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/sub/6",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u0424\u0430\u0441\u0430\u0434"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/category/1",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u041A\u0435\u0440\u0430\u043C\u043E\u0433\u0440\u0430\u043D\u0438\u0442"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/category/3",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u041E \u043D\u0430\u0441"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/delivery",
          className: "info-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "info-item",
            children: "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "last",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \xA9 2019"
      })
    })]
  });
};

/* harmony default export */ const layout_Footer = (Footer);
;// CONCATENATED MODULE: ./src/assets/img/wats.js


const WatsIcon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: className,
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.92418 0.0495419C4.64706 0.633 1.31851 3.74614 0.504839 7.92163C0.100147 10.0159 0.40035 12.1494 1.37932 14.1218L1.73177 14.8227L0.857286 17.4048C0.374227 18.8199 -0.00862757 19.9911 0.00014789 19.9998C0.00892335 20.0086 1.22708 19.6341 2.70217 19.1638L5.39114 18.306L5.90461 18.5499C8.00623 19.5338 10.3385 19.7734 12.5574 19.2248C15.9643 18.3802 18.7056 15.7329 19.6498 12.3716C20.0458 10.9523 20.1111 9.26275 19.8196 7.82156C19.1496 4.51687 16.7913 1.76928 13.5976 0.58072C13.1146 0.397738 12.327 0.193109 11.7309 0.0887524C11.1607 -0.00702697 9.51153 -0.0331683 8.92418 0.0495419ZM11.3609 1.62122C14.5676 2.05662 17.2915 4.44702 18.1486 7.58201C18.5141 8.91884 18.5315 10.4121 18.1964 11.7359C17.5088 14.444 15.4597 16.6429 12.7966 17.5267C10.5209 18.2844 7.99725 18.023 5.97399 16.8171C5.78685 16.7082 5.61726 16.6167 5.59971 16.6167C5.58665 16.6167 4.87298 16.8389 4.01584 17.1132C3.16299 17.3832 2.46258 17.5921 2.46258 17.5704C2.46258 17.5531 2.68891 16.8694 2.96727 16.0551L3.47197 14.5747L3.24564 14.2351C2.96279 13.8085 2.50585 12.8809 2.33626 12.389C1.00953 8.54001 2.76299 4.2816 6.44399 2.41809C7.96255 1.65186 9.61173 1.38616 11.3609 1.62122Z",
      fill: "#151F37"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M6.08838 5.09164C5.74471 5.26135 5.27042 5.92323 5.09634 6.47626C5.06145 6.58511 5.01798 6.87244 5.00492 7.11199C4.97451 7.66931 5.08328 8.1527 5.38348 8.77966C5.60532 9.2412 6.11879 10.0162 6.62796 10.652C7.52 11.7709 8.62081 12.6854 9.66508 13.1861C10.4788 13.5737 11.7318 13.9873 12.2626 14.0439C12.9893 14.118 14.0944 13.6346 14.4818 13.0685C14.7342 12.7027 14.8734 11.8058 14.7036 11.6492C14.6167 11.5707 12.9675 10.7653 12.6412 10.6391C12.5281 10.5956 12.3887 10.5737 12.3322 10.5913C12.2669 10.6044 12.0973 10.7786 11.9057 11.0179C11.4359 11.6095 11.2053 11.836 11.079 11.836C10.9094 11.836 10.0651 11.4268 9.591 11.1133C8.98611 10.7126 8.20734 9.92901 7.7853 9.29756C7.61122 9.04065 7.47204 8.77946 7.47204 8.72289C7.47204 8.66182 7.5851 8.49212 7.77653 8.27013C8.05489 7.94358 8.29856 7.55617 8.29856 7.43405C8.29856 7.40791 8.09836 6.90287 7.85469 6.31063C7.56755 5.62261 7.36735 5.196 7.29347 5.11758C7.18041 5.00444 7.15857 4.99995 6.72347 4.99995C6.35368 5.00015 6.24062 5.01751 6.08838 5.09164Z",
      fill: "#151F37"
    })]
  });
};
// EXTERNAL MODULE: ./src/helpers/useWindowDimension.js
var useWindowDimension = __webpack_require__(9680);
;// CONCATENATED MODULE: ./src/assets/img/upArr.js

const UppArrIcon = ({
  className,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: className,
    onClick: onClick,
    width: "8",
    height: "5",
    viewBox: "0 0 8 5",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 5L8 5L4 -3.49691e-07L0 5Z",
      fill: "#151F37"
    })
  });
};
;// CONCATENATED MODULE: ./src/components/reusable/BigLink.js







const BigLink = props => {
  const subCategories = (0,external_react_redux_.useSelector)(state => state.kategori.subCategories);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "item",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${props.id}`,
      className: "link-wrapper",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "link-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "to-navlink",
          children: props.name
        }), /*#__PURE__*/jsx_runtime_.jsx(UppArrIcon, {
          className: "arr"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-items",
      children: subCategories && subCategories.map(sub => {
        if (sub.category === props.id) {
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/sub/${sub.id}`,
            className: "sub-item",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "sub-item",
              children: sub.name
            })
          }, sub.id);
        }
      })
    })]
  });
};

/* harmony default export */ const reusable_BigLink = (BigLink);
;// CONCATENATED MODULE: ./src/components/layout/Navigation.js








const Navigation = () => {
  const {
    categories
  } = (0,external_react_redux_.useSelector)(state => ({
    categories: state.kategori.categories
  }));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "nav",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "left",
        children: [categories && categories.map(item => /*#__PURE__*/jsx_runtime_.jsx(reusable_BigLink, {
          name: item.name,
          id: item.id
        }, item.id)), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          className: "item-link",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "item-link",
            children: "\u041E \u043D\u0430\u0441"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "right",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "watsapp",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "https://api.whatsapp.com/send?phone=+996555939993",
            target: "_blank",
            children: [/*#__PURE__*/jsx_runtime_.jsx(WatsIcon, {
              className: "wats-icon"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text",
              children: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const layout_Navigation = (Navigation);
;// CONCATENATED MODULE: external "react-burger-menu"
const external_react_burger_menu_namespaceObject = require("react-burger-menu");
// EXTERNAL MODULE: ./src/axios/axios.js
var axios = __webpack_require__(393);
;// CONCATENATED MODULE: ./src/components/reusable/SmallLink.js







const SmallLink = props => {
  const subCategories = (0,external_react_redux_.useSelector)(state => state.kategori.subCategories);
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const handleClick = () => {
    setShow(!show);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "to-small",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "link-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/category/${props.id}`,
        className: "to-navlink-small",
        onClick: props.handleCloseModal,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "to-navlink-small",
          children: props.name
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(UppArrIcon, {
        className: show ? "arr down" : "arr",
        onClick: handleClick
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: show ? "sub-to-small show" : "sub-to-small",
      children: subCategories && subCategories.map(sub => {
        if (sub.category === props.id) {
          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/sub/${sub.id}`,
            onClick: props.handleCloseModal,
            className: "sub-item-small",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "sub-item-small",
              children: sub.name
            })
          }, sub.id);
        }
      })
    })]
  });
};

/* harmony default export */ const reusable_SmallLink = (SmallLink);
;// CONCATENATED MODULE: ./src/assets/img/logo.js


const LogoIcon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: className,
    width: "120",
    height: "24",
    viewBox: "0 0 120 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M27.484 17.2509V9.22733H30.1535V11.8968C30.696 11.6268 31.2233 11.2727 31.7327 10.8295C32.3517 10.2895 32.6599 9.85902 32.6599 9.53553C32.6599 9.34195 32.5402 9.18402 32.3033 9.06685C32.0664 8.94714 31.6894 8.88855 31.1698 8.88855H26.8218L27.484 6.5426H31.4958C32.7032 6.5426 33.6482 6.73619 34.3258 7.12591C35.1128 7.5793 35.5076 8.27723 35.5076 9.21459V9.2961C35.5076 10.129 35.2198 10.9314 34.6467 11.7108C34.15 12.3807 33.4623 13.0124 32.586 13.6059C31.8728 14.0924 31.0603 14.5229 30.1535 14.9024V17.2509H27.484Z",
      fill: "#FEFEFE"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M40.0212 9.14587C41.3152 9.14587 42.2525 9.37003 42.8358 9.81833C43.4191 10.2666 43.7095 11.0715 43.7095 12.2356C43.7095 13.2698 43.4446 14.3065 42.9173 15.3406C42.2169 16.6982 41.2719 17.3783 40.0874 17.3783C38.8902 17.3783 37.93 16.7033 37.2091 15.3559C36.6385 14.2988 36.3507 13.2596 36.3507 12.2331C36.3507 11.069 36.636 10.2615 37.2091 9.81578C37.7771 9.37003 38.7145 9.14587 40.0212 9.14587ZM40.0925 11.4434C39.3742 11.4434 39.0176 11.9299 39.0176 12.9004C39.0176 13.3207 39.1246 13.7894 39.336 14.3065C39.5474 14.8235 39.8072 15.0833 40.1103 15.0833C40.4135 15.0833 40.6529 14.8082 40.8286 14.2581C40.9687 13.8148 41.0401 13.364 41.0401 12.9004C41.0401 11.9274 40.7242 11.4434 40.0925 11.4434Z",
      fill: "#FEFEFE"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M48.9643 15.017H50.1615L49.4992 17.4598H48.8854C47.408 17.4598 46.2694 16.8688 45.4722 15.6844C44.8455 14.7598 44.5348 13.7205 44.5348 12.5692C44.5348 11.2014 44.8252 10.2716 45.4085 9.77748C45.8389 9.41069 46.5522 9.22729 47.543 9.22729H49.5476L50.2099 11.5732H48.2053C47.8818 11.6165 47.6347 11.7541 47.4615 11.9884C47.2883 12.2228 47.2017 12.4979 47.2017 12.8188C47.2017 13.3181 47.3672 13.8097 47.6958 14.2936C48.0244 14.7776 48.3785 15.0196 48.7555 15.0196H48.9643V15.017Z",
      fill: "#FEFEFE"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M55.4825 15.017H56.6797L56.0174 17.4598H55.4036C53.9262 17.4598 52.7876 16.8688 51.9903 15.6844C51.3637 14.7598 51.053 13.7205 51.053 12.5692C51.053 11.2014 51.3434 10.2716 51.9267 9.77748C52.3571 9.41069 53.0703 9.22729 54.0612 9.22729H56.0658L56.7281 11.5732H54.7235C54.4 11.6165 54.1529 11.7541 53.9797 11.9884C53.8065 12.2228 53.7199 12.4979 53.7199 12.8188C53.7199 13.3181 53.8854 13.8097 54.214 14.2936C54.5426 14.7776 54.8967 15.0196 55.2736 15.0196H55.4825V15.017Z",
      fill: "#FEFEFE"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M57.5687 17.2509V7.47743L60.2382 6.39233V12.396L61.9015 9.22479H64.5913L62.9254 12.5718L64.9301 17.2458H62.2453L60.2713 12.7985L60.2382 17.2458H57.5687V17.2509Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M69.9276 15.0654H72.3857L71.3337 17.4598H70.1849C68.7075 17.4598 67.5537 16.851 66.7233 15.636C66.0763 14.6884 65.7528 13.667 65.7528 12.5692C65.7528 11.2141 66.0967 10.2818 66.787 9.77748C67.2837 9.41069 68.0529 9.22729 69.0998 9.22729C70.3505 9.22729 71.2751 9.42088 71.8737 9.80805C72.4723 10.1952 72.7703 10.7811 72.7703 11.5656C72.7703 12.3501 72.5156 13.0455 72.0112 13.6466C71.5069 14.2478 70.8115 14.7216 69.9276 15.0654ZM69.4258 11.5732C69.1023 11.5732 68.8553 11.6955 68.6821 11.9375C68.5089 12.1795 68.4222 12.615 68.4222 13.2391C68.5853 13.2391 68.8043 13.1703 69.0845 13.0277C69.3647 12.8876 69.5914 12.7373 69.7646 12.5743C69.841 12.4979 69.8971 12.4113 69.9353 12.3145C69.9735 12.2177 69.9913 12.1311 69.9913 12.0547C69.9913 11.9146 69.9302 11.7974 69.8054 11.7057C69.6831 11.6191 69.5557 11.5732 69.4258 11.5732Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M73.5981 19.9178V9.22729H77.6099C78.6135 9.22729 79.3242 9.4056 79.7445 9.7622C80.3278 10.2589 80.6182 11.1963 80.6182 12.5768C80.6182 13.6874 80.315 14.6732 79.7114 15.5366C78.9141 16.6803 77.7653 17.2509 76.265 17.2509V19.9178H73.5981ZM76.2676 11.5732V14.9049L76.4612 14.9381C76.8382 14.9381 77.182 14.7114 77.4877 14.258C77.7959 13.8046 77.9487 13.3308 77.9487 12.8341C77.9487 12.5004 77.8672 12.2177 77.7067 11.9859C77.5437 11.7541 77.2915 11.6165 76.9477 11.5732H76.2676Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M81.4434 12.5745C81.4434 11.2041 81.7337 10.2719 82.317 9.77517C82.7475 9.40837 83.4607 9.22498 84.4516 9.22498H88.4634V17.2486H85.7939C84.3064 17.2486 83.1627 16.678 82.3654 15.5343C81.7516 14.6505 81.4434 13.6647 81.4434 12.5745ZM85.1215 11.5735C84.7904 11.6168 84.5382 11.7569 84.3675 11.9938C84.1969 12.2306 84.1103 12.5108 84.1103 12.8343C84.1103 13.3081 84.2656 13.7768 84.5738 14.2404C84.8846 14.704 85.2208 14.9357 85.5825 14.9357L85.7914 14.9026V11.5735H85.1215Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M93.3794 11.6777L95.0096 9.57629H96.864V17.014H95.0096V12.3731L93.3794 14.4618L91.7492 12.3731V17.014H89.8949V9.57629H91.7492L93.3794 11.6777Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M97.2307 17.3833H94.6377V13.448L93.3768 15.0629L92.116 13.448V17.3833H89.5229V9.20691H91.9275L93.3768 11.074L94.8262 9.20691H97.2307V17.3833ZM95.3789 16.6447H96.4946V9.94559H95.1904L93.3794 12.2788L91.5683 9.94559H90.2642V16.6447H91.3798V11.2981L93.3794 13.8606L95.3789 11.2981V16.6447Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M102.832 17.014V12.154L100.514 14.696V17.014H98.6675V9.60168H100.514V12.154L102.832 9.60168H104.679V17.014H102.832Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M105.051 17.3833H102.465V13.1066L100.886 14.8386V17.3833H98.3005V9.2323H100.886V11.1987L102.671 9.2323H105.051V17.3833ZM103.201 16.6446H104.309V9.97098H102.995L100.145 13.1116V9.97098H99.0367V16.6446H100.145V14.5533L103.201 11.2013V16.6446Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M106.617 17.014V9.61194H108.461V12.8545L110.318 9.61194H112.399L110.318 12.8469L112.621 17.0115H110.54L108.459 13.0863V17.014H106.617Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M113.247 17.3833H110.318L108.831 14.5738V17.3833H106.248V9.24255H108.831V11.4662L110.104 9.24255H113.074L110.746 12.8621L113.247 17.3833ZM110.764 16.6446H111.994L109.888 12.8341L111.722 9.98123H110.532L108.818 12.9742L110.764 16.6446ZM106.986 16.6446H108.092V9.98123H106.986V16.6446Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M112.98 12.5745C112.98 11.2041 113.27 10.2719 113.854 9.77517C114.284 9.40837 114.997 9.22498 115.988 9.22498H120V17.2486H117.33C115.843 17.2486 114.699 16.678 113.902 15.5343C113.288 14.6505 112.98 13.6647 112.98 12.5745ZM116.658 11.5735C116.327 11.6168 116.075 11.7569 115.904 11.9938C115.733 12.2306 115.647 12.5108 115.647 12.8343C115.647 13.3081 115.802 13.7768 116.11 14.2404C116.421 14.704 116.757 14.9357 117.119 14.9357L117.328 14.9026V11.5735H116.658Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.1865 3.02808H2.24304V20.9715H20.1865V3.02808Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.2615 3.02808H2.24304L3.50904 12.3585L13.2615 3.02808Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.1862 20.9251V3.02808H14.4006L8.73315 8.5394L20.1862 20.9251Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3.50891 4.25183V10.7717L10.0288 4.25183H3.50891Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.35303 14.4053V20.9252H10.8729L4.35303 14.4053Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3.50904 3.02808H2.24304V20.9715H3.50904V3.02808Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "0.5",
      y: "1.28503",
      width: "21.4293",
      height: "21.4293",
      stroke: "white"
    })]
  });
};
;// CONCATENATED MODULE: ./src/assets/img/logo-2.js


const Logo2Icon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: className,
    width: "123",
    height: "20",
    viewBox: "0 0 123 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "123",
      height: "20",
      fill: "url(#pattern0)"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("pattern", {
        id: "pattern0",
        patternContentUnits: "objectBoundingBox",
        width: "1",
        height: "1",
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "#image0",
          transform: "translate(-0.00194415) scale(0.00353482 0.0217391)"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("image", {
        id: "image0",
        width: "284",
        height: "46",
        xlinkHref: "data:image/png;base64,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"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/assets/img/clear-input.js

const ClearInputIcon = ({
  className,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: className,
    onClick: onClick,
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 1.45751L15.1062 0.563721L8 7.67623L0.893785 0.563721L0 1.45751L7.11251 8.56372L0 15.6699L0.893785 16.5637L8 9.45121L15.1062 16.5637L16 15.6699L8.88749 8.56372L16 1.45751Z",
      fill: "#86879A"
    })
  });
};
;// CONCATENATED MODULE: ./src/assets/img/search-icon.js

const SearchIcon = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: className,
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.46731 5.79584C6.46731 3.70408 8.1499 2 10.2353 2C12.3208 2 14.0034 3.70407 14.0034 5.79584C14.0034 7.88759 12.3208 9.59168 10.2353 9.59168C8.1499 9.59168 6.46731 7.88758 6.46731 5.79584ZM10.2353 0C7.02693 0 4.46731 2.618 4.46731 5.79584C4.46731 6.97326 4.8187 8.07384 5.42427 8.99288L0 14.5668L1.39484 16.0001L6.79616 10.4498C7.75359 11.1661 8.94173 11.5917 10.2353 11.5917C13.4438 11.5917 16.0034 8.97364 16.0034 5.79584C16.0034 2.61801 13.4438 0 10.2353 0Z",
      fill: "#393939"
    })
  });
};
;// CONCATENATED MODULE: ./src/components/layout/HeaderSmall.js
function HeaderSmall_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function HeaderSmall_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HeaderSmall_ownKeys(Object(source), true).forEach(function (key) { HeaderSmall_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HeaderSmall_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HeaderSmall_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const HeaderSmall = props => {
  const {
    categories
  } = (0,external_react_redux_.useSelector)(state => ({
    categories: state.kategori.categories
  }));
  const {
    0: items,
    1: setItems
  } = (0,external_react_.useState)("");
  const {
    0: input,
    1: setInput
  } = (0,external_react_.useState)("");
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
    setShow(false);
    setItems("");
  };

  const handleClickSearch = () => {
    axios/* default.get */.Z.get(`/apiv1/collection/?search=${input}`).then(res => {
      const data = res.data.sort((a, b) => a.name - b.name);
      setItems([...data]);
    }).catch(err => {
      console.log(err);
    });
    setShow(true);
  };

  (0,external_react_.useEffect)(() => {
    if (input.length === 0) {
      setShow(false);
      setItems("");
    }
  }, [input]);

  const handleOpenBurger = () => {
    props.setOpen(true);
  };

  const handleCloseBurger = () => {
    props.setOpen(false);
  };

  const menuProps = {
    disableAutoFocus: true,
    styles: styles,
    customCrossIcon: false,
    customBurgerIcon: false,
    isOpen: props.open,
    onOpen: handleOpenBurger,
    onClose: handleCloseBurger,
    width: "80%"
  };

  const Item = props => {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/collection/${props.id}`,
      className: "nav-small",
      onClick: () => {
        handleClearInput();
        handleCloseBurger();
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "nav-small",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item-small",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold-small",
            children: props.name
          }), " ", props.sub]
        })
      })
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_burger_menu_namespaceObject.slide, HeaderSmall_objectSpread(HeaderSmall_objectSpread({}, menuProps), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "inside-side-menu",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "searches",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "search",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "search-div",
            children: [/*#__PURE__*/jsx_runtime_.jsx(SearchIcon, {
              className: "search-icon"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              className: "search-input",
              placeholder: "\u042F \u0438\u0449\u0443...",
              value: input,
              onChange: e => handleChangeInput(e)
            }), input.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx(ClearInputIcon, {
              onClick: handleClearInput,
              className: "clear-input"
            }) : null]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "btn-search",
            onClick: handleClickSearch,
            children: "\u041D\u0430\u0439\u0442\u0438"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          onClick: handleCloseBurger,
          href: "/",
          className: "logos",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "logos",
            children: [/*#__PURE__*/jsx_runtime_.jsx(LogoIcon, {
              className: "logo-main"
            }), /*#__PURE__*/jsx_runtime_.jsx(Logo2Icon, {
              className: "logo-sec"
            })]
          })
        })]
      }), show ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "searched-items-small",
        children: items.length !== 0 ? items.map(item => /*#__PURE__*/jsx_runtime_.jsx(Item, {
          id: item.id,
          name: item.name,
          sub: item.subcategorieis.name
        }, item.id)) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "nothing-small",
          children: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438"
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navigation-small",
        children: [categories && categories.map(item => {
          return /*#__PURE__*/jsx_runtime_.jsx(reusable_SmallLink, {
            handleCloseModal: handleCloseBurger,
            name: item.name,
            id: item.id
          }, item.id);
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          onClick: handleCloseBurger,
          className: "item-link-small",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "item-link-small",
            children: "\u041E \u043D\u0430\u0441"
          })
        })]
      })]
    })
  }));
};

/* harmony default export */ const layout_HeaderSmall = (HeaderSmall);
const styles = {
  bmBurgerBars: {
    background: "#fff"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "white",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#393939"
  }
};
;// CONCATENATED MODULE: ./src/assets/img/ros-grand.js


const RosGrandIcon = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    className: className,
    width: "266",
    height: "27",
    viewBox: "0 0 266 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "266",
      height: "24",
      rx: "12",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "107",
      y: "3",
      width: "151",
      height: "24",
      fill: "url(#pattern0)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M27.7581 16.0355V9.68351H29.8714V11.7968C30.3009 11.5831 30.7183 11.3028 31.1216 10.9519C31.6116 10.5244 31.8556 10.1836 31.8556 9.92751C31.8556 9.77426 31.7608 9.64923 31.5733 9.55647C31.3858 9.4617 31.0873 9.41532 30.676 9.41532H27.2338L27.7581 7.55811H30.9341C31.8899 7.55811 32.638 7.71136 33.1744 8.01989C33.7975 8.37883 34.1101 8.93135 34.1101 9.67343V9.73796C34.1101 10.3974 33.8822 11.0326 33.4285 11.6496C33.0353 12.18 32.4908 12.6801 31.7971 13.1499C31.2325 13.5351 30.5892 13.8758 29.8714 14.1763V16.0355H27.7581Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M37.6835 9.61902C38.7079 9.61902 39.45 9.79647 39.9118 10.1514C40.3735 10.5063 40.6034 11.1435 40.6034 12.0651C40.6034 12.8838 40.3937 13.7045 39.9763 14.5232C39.4217 15.598 38.6736 16.1364 37.7359 16.1364C36.7882 16.1364 36.0279 15.602 35.4573 14.5353C35.0056 13.6984 34.7777 12.8757 34.7777 12.063C34.7777 11.1415 35.0036 10.5023 35.4573 10.1494C35.907 9.79647 36.649 9.61902 37.6835 9.61902ZM37.74 11.4379C37.1713 11.4379 36.889 11.8231 36.889 12.5914C36.889 12.9241 36.9737 13.2951 37.1411 13.7045C37.3084 14.1138 37.5141 14.3195 37.7541 14.3195C37.9941 14.3195 38.1836 14.1017 38.3227 13.6662C38.4337 13.3153 38.4901 12.9584 38.4901 12.5914C38.4901 11.8211 38.2401 11.4379 37.74 11.4379Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M44.7636 14.267H45.7113L45.187 16.2008H44.701C43.5315 16.2008 42.6301 15.733 41.9989 14.7953C41.5029 14.0633 41.2568 13.2406 41.2568 12.3291C41.2568 11.2463 41.4867 10.5102 41.9485 10.119C42.2893 9.82866 42.8539 9.68347 43.6383 9.68347H45.2253L45.7496 11.5407H44.1626C43.9065 11.575 43.7109 11.6839 43.5738 11.8694C43.4367 12.0549 43.3681 12.2727 43.3681 12.5268C43.3681 12.922 43.4992 13.3112 43.7593 13.6943C44.0195 14.0775 44.2998 14.269 44.5982 14.269H44.7636V14.267Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M49.9236 14.267H50.8714L50.3471 16.2008H49.8611C48.6915 16.2008 47.7901 15.733 47.1589 14.7953C46.6629 14.0633 46.4169 13.2406 46.4169 12.3291C46.4169 11.2463 46.6468 10.5102 47.1085 10.119C47.4493 9.82866 48.014 9.68347 48.7984 9.68347H50.3854L50.9097 11.5407H49.3227C49.0666 11.575 48.871 11.6839 48.7338 11.8694C48.5967 12.0549 48.5282 12.2727 48.5282 12.5268C48.5282 12.922 48.6592 13.3112 48.9194 13.6943C49.1795 14.0775 49.4598 14.269 49.7582 14.269H49.9236V14.267Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M51.5752 16.0355V8.29812L53.6885 7.43909V12.192L55.0053 9.68145H57.1347L55.8159 12.3312L57.4029 16.0315H55.2775L53.7147 12.5106L53.6885 16.0315H51.5752V16.0355Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M61.3593 14.3053H63.3052L62.4724 16.2008H61.5629C60.3934 16.2008 59.4799 15.7189 58.8225 14.757C58.3103 14.0069 58.0542 13.1983 58.0542 12.3291C58.0542 11.2564 58.3264 10.5183 58.8729 10.119C59.2661 9.82866 59.8751 9.68347 60.7039 9.68347C61.694 9.68347 62.426 9.83673 62.8999 10.1432C63.3738 10.4497 63.6097 10.9135 63.6097 11.5346C63.6097 12.1557 63.408 12.7062 63.0088 13.1821C62.6095 13.658 62.059 14.0331 61.3593 14.3053ZM60.962 11.5407C60.7059 11.5407 60.5103 11.6375 60.3732 11.829C60.2361 12.0206 60.1675 12.3654 60.1675 12.8595C60.2966 12.8595 60.47 12.805 60.6918 12.6921C60.9136 12.5812 61.0931 12.4622 61.2302 12.3332C61.2907 12.2727 61.3351 12.2041 61.3653 12.1275C61.3956 12.0509 61.4097 11.9823 61.4097 11.9218C61.4097 11.8109 61.3613 11.7181 61.2625 11.6455C61.1657 11.577 61.0649 11.5407 60.962 11.5407Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M64.2653 18.1468V9.68347H67.4413C68.2358 9.68347 68.7984 9.82463 69.1311 10.1069C69.5929 10.5002 69.8228 11.2422 69.8228 12.3352C69.8228 13.2144 69.5828 13.9948 69.1049 14.6784C68.4737 15.5838 67.5643 16.0355 66.3765 16.0355V18.1468H64.2653ZM66.3786 11.5407V14.1783L66.5318 14.2045C66.8303 14.2045 67.1025 14.025 67.3445 13.6661C67.5885 13.3072 67.7095 12.9321 67.7095 12.5389C67.7095 12.2747 67.6449 12.0509 67.5179 11.8674C67.3888 11.6839 67.1892 11.575 66.917 11.5407H66.3786Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M70.4761 12.3334C70.4761 11.2485 70.706 10.5104 71.1677 10.1172C71.5085 9.82683 72.0732 9.68164 72.8576 9.68164H76.0336V16.0337H73.9203C72.7426 16.0337 71.8372 15.582 71.2061 14.6765C70.7201 13.9768 70.4761 13.1964 70.4761 12.3334ZM73.3879 11.5409C73.1258 11.5751 72.9261 11.6861 72.791 11.8736C72.6559 12.0611 72.5874 12.2829 72.5874 12.539C72.5874 12.9141 72.7104 13.2852 72.9544 13.6522C73.2004 14.0192 73.4666 14.2027 73.7529 14.2027L73.9183 14.1765V11.5409H73.3879Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M79.9255 11.6235L81.216 9.95984H82.6841V15.8481H81.216V12.174L79.9255 13.8275L78.6349 12.174V15.8481H77.1669V9.95984H78.6349L79.9255 11.6235Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M82.9744 16.1404H80.9216V13.0249L79.9234 14.3033L78.9252 13.0249V16.1404H76.8724V9.66736H78.776L79.9234 11.1455L81.0708 9.66736H82.9744V16.1404ZM81.5084 15.5556H82.3916V10.2521H81.3592L79.9254 12.0993L78.4917 10.2521H77.4592V15.5556H78.3425V11.3229L79.9254 13.3515L81.5084 11.3229V15.5556Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M87.4087 15.8479V12.0004L85.5737 14.0129V15.8479H84.1117V9.97986H85.5737V12.0004L87.4087 9.97986H88.8707V15.8479H87.4087Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M89.1651 16.1403H87.1183V12.7546L85.8681 14.1259V16.1403H83.8213V9.6875H85.8681V11.2442L87.2816 9.6875H89.1651V16.1403ZM87.7011 15.5556H88.5783V10.2723H87.5377L85.2812 12.7587V10.2723H84.4041V15.5556H85.2812V13.9L87.7011 11.2463V15.5556Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M90.4052 15.848V9.98804H91.8651V12.5551L93.3352 9.98804H94.9826L93.3352 12.549L95.1581 15.846H93.5106L91.8631 12.7386V15.848H90.4052Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M95.6542 16.1405H93.3352L92.1575 13.9162V16.1405H90.1128V9.69568H92.1575V11.4561L93.1658 9.69568H95.5171L93.674 12.5611L95.6542 16.1405ZM93.6881 15.5557H94.6621L92.9944 12.539L94.4463 10.2805H93.5046L92.1475 12.6499L93.6881 15.5557ZM90.6976 15.5557H91.5728V10.2805H90.6976V15.5557Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M95.4425 12.3334C95.4425 11.2485 95.6724 10.5104 96.1342 10.1172C96.475 9.82683 97.0396 9.68164 97.824 9.68164H101V16.0337H98.8867C97.7091 16.0337 96.8037 15.582 96.1725 14.6765C95.6865 13.9768 95.4425 13.1964 95.4425 12.3334ZM98.3544 11.5409C98.0922 11.5751 97.8926 11.6861 97.7575 11.8736C97.6224 12.0611 97.5538 12.2829 97.5538 12.539C97.5538 12.9141 97.6768 13.2852 97.9208 13.6522C98.1668 14.0192 98.433 14.2027 98.7193 14.2027L98.8847 14.1765V11.5409H98.3544Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.981 4.77576H7.77576V18.981H21.981V4.77576Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16.4987 4.77576H7.77576L8.77801 12.1623L16.4987 4.77576Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.9808 18.9442V4.77576H17.4006L12.9138 9.13889L21.9808 18.9442Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.77795 5.74451V10.9061L13.9395 5.74451H8.77795Z",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M9.44604 13.7826V18.9442H14.6076L9.44604 13.7826Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.77801 4.77576H7.77576V18.981H8.77801V4.77576Z",
      fill: "#FED839"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "6.5",
      y: "3.5",
      width: "16.7565",
      height: "16.7565",
      stroke: "#FED839"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("pattern", {
        id: "pattern0",
        patternContentUnits: "objectBoundingBox",
        width: "1",
        height: "1",
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "#image0",
          transform: "translate(0 -0.00953638) scale(0.00352113 0.0221538)"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("image", {
        id: "image0",
        width: "284",
        height: "46",
        xlinkHref: "data:image/png;base64,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"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/containers/Search.js








const Search = () => {
  const {
    0: input,
    1: setInput
  } = (0,external_react_.useState)("");
  const {
    0: items,
    1: setItems
  } = (0,external_react_.useState)("");
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  const handleClearInput = () => {
    setInput("");
    setShow(false);
    setItems("");
  };

  const handleKeyPressed = e => {
    if (e.keyCode === 13) {
      handleClickSearch();
    }
  };

  const handleClickSearch = () => {
    axios/* default.get */.Z.get(`/apiv1/collection/?search=${input}`).then(res => {
      const data = res.data.sort((a, b) => a.name - b.name);
      setItems([...data]);
    }).catch(err => {
      console.log(err);
    });
    setShow(true);
  };

  (0,external_react_.useEffect)(() => {
    if (input.length === 0) {
      setShow(false);
      setItems("");
    }
  }, [input]);

  const Item = props => {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/collection/${props.id}`,
      className: "nav",
      onClick: handleClearInput,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "nav",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bold",
            children: props.name
          }), " ", props.sub]
        })
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "search",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "search-div",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SearchIcon, {
        className: "search-icon"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        className: "search-input",
        placeholder: "\u042F \u0438\u0449\u0443...",
        value: input,
        onKeyDown: handleKeyPressed,
        onChange: e => handleChangeInput(e)
      }), input.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx(ClearInputIcon, {
        onClick: handleClearInput,
        className: "clear-input"
      }) : null]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "btn-search",
      onClick: handleClickSearch,
      children: "\u041D\u0430\u0439\u0442\u0438"
    }), show ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "searched-items",
      children: items.length !== 0 ? items.map(item => /*#__PURE__*/jsx_runtime_.jsx(Item, {
        name: item.name,
        sub: item.subcategorieis.name,
        id: item.id
      }, item.id)) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "nothing",
        children: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438"
      })
    }) : null]
  });
};

/* harmony default export */ const containers_Search = (Search);
;// CONCATENATED MODULE: ./src/assets/img/ic_bascket.js

const IcBasketIcon = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    className: className,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.87587 17.7142C9.0928 17.7142 10.0793 18.6736 10.0793 19.8571C10.0793 21.0406 9.0928 21.9999 7.87587 21.9999C6.65894 21.9999 5.67242 21.0406 5.67242 19.8571C5.67242 18.6736 6.65894 17.7142 7.87587 17.7142ZM7.87587 20.5714C8.28152 20.5714 8.61036 20.2516 8.61036 19.8571C8.61036 19.4626 8.28152 19.1428 7.87587 19.1428C7.47023 19.1428 7.14139 19.4626 7.14139 19.8571C7.14139 20.2516 7.47023 20.5714 7.87587 20.5714ZM16.6897 17.7142C17.9066 17.7142 18.8931 18.6736 18.8931 19.8571C18.8931 20.7238 18.3563 21.5051 17.5329 21.8368C16.7095 22.1685 15.7618 21.9852 15.1316 21.3723C14.5014 20.7595 14.3129 19.8378 14.654 19.0371C14.995 18.2363 15.7985 17.7142 16.6897 17.7142ZM16.6897 20.5714C17.0953 20.5714 17.4242 20.2516 17.4242 19.8571C17.4242 19.4626 17.0953 19.1428 16.6897 19.1428C16.284 19.1428 15.9552 19.4626 15.9552 19.8571C15.9552 20.2516 16.284 20.5714 16.6897 20.5714ZM5.51083 4.85713H22L20.531 10.6143C20.3295 11.3929 19.6973 11.9967 18.8931 12.1785L8.01542 14.6714L8.10356 15.0285C8.18642 15.3551 8.49233 15.5812 8.83805 15.5714H18.8931V17H8.83805C7.81938 17.0099 6.9265 16.3395 6.67866 15.3785L6.4069 14.3142L3.79214 3.97142C3.70928 3.64486 3.40338 3.41877 3.05766 3.42857H2V2H3.05766C4.06812 1.99994 4.94913 2.66829 5.19501 3.62142L5.51083 4.85713ZM19.1355 10.2714L20.1564 6.2857H5.87808L7.67756 13.2857L18.5846 10.7928C18.8546 10.7338 19.0675 10.5322 19.1355 10.2714Z",
      fill: "white"
    })
  });
};
// EXTERNAL MODULE: ./src/store/actions/basket.js
var actions_basket = __webpack_require__(6413);
;// CONCATENATED MODULE: ./src/containers/Basket.js








const Basket = () => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const basket = (0,external_react_redux_.useSelector)(state => state.basket);
  const prices = (0,external_react_redux_.useSelector)(state => state.basket.itemsPrices);
  const totalSum = (0,external_react_redux_.useSelector)(state => state.basket.totalPriceToBuy);
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
      total += parseInt(prices[i].price);
    }

    dispatch((0,actions_basket/* setTotalPrice */.m1)(total));
  }, [prices]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "basket",
    onClick: () => setShow(!show),
    children: [/*#__PURE__*/jsx_runtime_.jsx(IcBasketIcon, {
      className: "ic-basket"
    }), basket.items.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ic-basket-count",
      children: basket.items.length
    }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "total-sum",
      children: [totalSum.toFixed(2), " \u0441\u043E\u043C"]
    }), show ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "basket-dropdown",
      children: [basket.items.length !== 0 ? basket.items.map(item => /*#__PURE__*/jsx_runtime_.jsx(BasketMiniItem, {
        image: item.image1,
        name: item.name,
        artikul: item.artikul
      }, item.name)) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "\u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442\u0443"
      }), basket.items.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/basket",
        className: "offer",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "offer",
          children: "\u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
        })
      }) : null]
    }) : null]
  });
};

const BasketMiniItem = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "basket-dropdown-item",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "cart-img-wrapper",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: props.image,
        alt: "carts item",
        className: "cart-img"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: "text",
      children: [props.name, " ", props.artikul]
    })]
  });
};

/* harmony default export */ const containers_Basket = (Basket);
;// CONCATENATED MODULE: ./src/components/layout/UpperHeader.js








const UpperHeader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "upper-header",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grand-comfort",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          className: "a",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "a",
            children: /*#__PURE__*/jsx_runtime_.jsx(RosGrandIcon, {
              className: "ros-grand"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(containers_Search, {}), /*#__PURE__*/jsx_runtime_.jsx(containers_Basket, {})]
    })
  });
};

/* harmony default export */ const layout_UpperHeader = (UpperHeader);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/layout/Header.js













const Header = () => {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    width
  } = (0,useWindowDimension/* default */.Z)();
  const router = (0,router_.useRouter)();
  const {
    pathname
  } = router;
  (0,external_react_.useEffect)(() => {
    setOpen(false);
  }, [pathname]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "header",
    children: width > 600 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_UpperHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_Navigation, {})]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header-small",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_HeaderSmall, {
        setOpen: setOpen,
        open: open
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "head",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => setOpen(true),
          className: "burger-wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "burger-line",
            children: " "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "burger-line",
            children: " "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "burger-line",
            children: " "
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo-wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LogoIcon, {
                className: "logo-main"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(containers_Basket, {})]
      })]
    })
  });
};

/* harmony default export */ const layout_Header = (Header);
// EXTERNAL MODULE: ./src/store/actions/filters.js
var actions_filters = __webpack_require__(1231);
;// CONCATENATED MODULE: ./src/store/actions/kategori.js



const handleGetAllKategoriActionCreator = () => dispatch => {
  axios/* default.get */.Z.get("/apiv1/categories/").then(res => {
    dispatch(pushCategoi(res.data));
  }).catch(err => {
    console.log(err);
  });
};
const handleGetAllSubCategoriesActionCreator = () => dispatch => {
  axios/* default.get */.Z.get("/apiv1/subcategories/").then(res => {
    dispatch(pushSubCategories(res.data));
    dispatch((0,actions_filters/* pushCategoriesToFilter */.n)(res.data));
  }).catch(err => {
    console.log(err);
  });
};
const pushCategoi = payload => {
  return {
    type: actionTypes/* PUSH_CATEGORY */.kr,
    payload
  };
};
const pushSubCategories = payload => {
  return {
    type: actionTypes/* PUSH_SUB_CATEGORY */.uM,
    payload
  };
};
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CustomApp = ({
  Component,
  pageProps
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    dispatch(handleGetAllKategoriActionCreator());
    dispatch(handleGetAllSubCategoriesActionCreator());
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "whatsapp-mobile",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://api.whatsapp.com/send?phone=+996555939993",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx(WatsIcon, {
          className: "wats-icon"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {})]
  });
};

/* harmony default export */ const _app = (wrapper.withRedux(CustomApp));

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,413,231,680], () => (__webpack_exec__(3053)));
module.exports = __webpack_exports__;

})();