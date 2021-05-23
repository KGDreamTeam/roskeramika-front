import axios from "../../axios/axios"
import { getIfMainTovar, getAllFilter } from "../../helpers/filters"
import {
  CHECK_CATALOG_FILTER,
  CHECK_SIZE_FILTER,
  CHECK_SURFACE_FILTER,
  CHECK_USAGE_FILTER,
  PUSH_CATEGORY_TO_FILTER,
  RE_SET_FILTERS,
  SET_FILTERED,
  SET_FILTERS_TO_STORE,
  SET_LOADING_FILTER,
} from "../actionTypes"
import { setAllProducts } from "./products"

export const getAllFiltersActionCreator = () => (dispatch) => {
  axios
    .get(`apiv1/products/`)
    .then((res) => {
      let payload = {}

      let items = getIfMainTovar(res.data)
      payload = getAllFilter(items)

      dispatch(setAllProducts(items))
      dispatch(setFiltersToStore(payload))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const setFiltersToStore = (payload) => {
  return {
    type: SET_FILTERS_TO_STORE,
    payload,
  }
}

export const resetFilter = () => {
  return {
    type: RE_SET_FILTERS,
  }
}

export const checkOneCheckbox = (payload) => {
  switch (payload.name) {
    case "size":
      return {
        type: CHECK_SIZE_FILTER,
        payload: parseInt(payload.value),
      }

    case "usage":
      return {
        type: CHECK_USAGE_FILTER,
        payload: parseInt(payload.value),
      }

    case "surface":
      return {
        type: CHECK_SURFACE_FILTER,
        payload: parseInt(payload.value),
      }
    case "catalog":
      return {
        type: CHECK_CATALOG_FILTER,
        payload: parseInt(payload.value),
      }
    default:
      return {
        type: null,
        payload: null,
      }
  }
}

export const setFilteredItems = (payload) => {}

export const pushCategoriesToFilter = (payload) => {
  const items = payload.map((item) => {
    return {
      checked: false,
      name: item.name,
    }
  })
  return {
    type: PUSH_CATEGORY_TO_FILTER,
    payload: items,
  }
}

export const setFiltered = (payload) => {
  return {
    type: SET_FILTERED,
    payload,
  }
}

export const setLoadingFilter = () => {
  return {
    type: SET_LOADING_FILTER,
  }
}
