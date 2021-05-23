import axios from "../../axios/axios";
import {getIfMainTovar, getAllFilter} from '../../helpers/filters'
import {CHECK_SIZE_FILTER, CHECK_SURFACE_FILTER, CHECK_USAGE_FILTER, RE_SET_FILTERS, SET_FILTERS_TO_STORE, SET_LOADING_FILTER} from "../actionTypes";

export const getAllFiltersActionCreator = (sub) => dispatch => {
  axios.get(`apiv1/products/?subcategorie=${sub}`)
    .then(res => {
      let payload = {}

      let items = getIfMainTovar(res.data)
      payload = getAllFilter(items)

      dispatch(setFiltersToStore(payload))
    })
    .catch(err => {
      console.log(err)
    })
}

export const setFiltersToStore = payload => {
  return{
    type: SET_FILTERS_TO_STORE,
    payload
  }
}

export const resetFilter = () => {
  return{
    type: RE_SET_FILTERS
  }
}

export const checkOneCheckbox = (payload) => {
  switch (payload.name) {
    case "size":
      return {
        type: CHECK_SIZE_FILTER,
        payload: payload.value
      }
  
    case "usage":
      return {
        type: CHECK_USAGE_FILTER,
        payload: payload.value
      }

    case "surface":
      return {
        type: CHECK_SURFACE_FILTER,
        payload: payload.value
      }
    default:
      return {
        type: null,
        payload: null
      }
  }
}

export const setLoadingFilter = () => {
  return {
    type: SET_LOADING_FILTER
  }
}