import axios from "../../axios/axios";
import {
  getMinPriceOfArr,
  getPersentPriceOne
} from "../../helpers/persentCalc";
import {
  PUSH_COLLECTIONS,
  PUSH_NEWS_COLLECTIONS,
  PUSH_HIT_COLLECTIONS,
  PUSH_OTHER_COLLECTIONS,
  PUSH_ONE_COLLECTION
} from "../actionTypes";
import { pushItemToBasket } from "./basket";

export const handleGetOneCollectionActionCreator = id => dispatch => {
  let collection = `/apiv1/collection/${id}/`;
  let products = `/apiv1/products/?categorie=&subcategorie=&collection=${id}`;
  axios
    .get(collection)
    .then(response => {
      axios
        .get(products)
        .then(res => {
          let sizeProd;
          let manufacturer;
          let price = getMinPriceOfArr(response.data.products);
          let mainProduct = res.data.filter(item => {
            return item.main_tovar === true;
          });
          if (mainProduct.length !== 0) {
            sizeProd = `${mainProduct[0].width}x${mainProduct[0].length}`;
            manufacturer = `${mainProduct[0]["manufacturer"]["company_name"]}`;
          } else {
            sizeProd = "no main product";
            manufacturer = "no main product";
          }

          dispatch(
            pushOneCollection({
              collection: {
                ...response.data,
                size: sizeProd,
                price: price,
                man: manufacturer
              },
              products: [...res.data]
            })
          );
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

export const handleGetProductsOfCollectionActionCreator = id => dispatch => {
  axios
    .get(`/apiv1/products/?collection=${id}`)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].collection.discount !== 0) {
          data[i].price = getPersentPriceOne(
            data[i].collection.discount,
            data[i].price
          );
          data[i].discount = data[i].collection.discount;
        } else {
          data[i].price = getPersentPriceOne(data[i].discount, data[i].price);
        }
      }
      dispatch(pushItemToBasket(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const handleGetSubCollectionsActionCreator = subCategoryId => dispatch => {
  const sort = arrayOfResponse => {
    const filteredNewCollection = arrayOfResponse.filter(
      item => item.labelnew === true
    );
    const filteredHitCollection = arrayOfResponse.filter(
      item => item.labelhit === true
    );
    const filteredOtherCollection = arrayOfResponse.filter(
      item => item.labelhit === false && item.labelnew === false
    );
    return {
      newCollections: [...filteredNewCollection],
      hitCollections: [...filteredHitCollection],
      otherCollections: [...filteredOtherCollection]
    };
  };

  axios
    .get(`/apiv1/collection/?categories=&subcategorieis=${subCategoryId}`)
    .then(res => {
      const filtered = sort(res.data);
      dispatch(pushNewsCollections(filtered.newCollections));
      dispatch(pushHitCollections(filtered.hitCollections));
      dispatch(pushOtherCollections(filtered.otherCollections));
    })
    .catch(err => {
      console.log(err);
    });
};

export const pushCollections = payload => {
  return {
    type: PUSH_COLLECTIONS,
    payload
  };
};

export const pushOneCollection = payload => {
  return {
    type: PUSH_ONE_COLLECTION,
    payload
  };
};

export const pushNewsCollections = payload => {
  return {
    type: PUSH_NEWS_COLLECTIONS,
    payload
  };
};

export const pushHitCollections = payload => {
  return {
    type: PUSH_HIT_COLLECTIONS,
    payload
  };
};

export const pushOtherCollections = payload => {
  return {
    type: PUSH_OTHER_COLLECTIONS,
    payload
  };
};
