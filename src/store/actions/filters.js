import axios from "../../axios/axios";
import {getIfMainTovar, getAllFilter} from '../../helpers/filters'
import {SET_FILTERS_TO_STORE} from "../actionTypes";

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
