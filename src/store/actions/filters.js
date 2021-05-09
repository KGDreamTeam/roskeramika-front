import axios from "../../axios/axios";
import {getAllUsage, getAllSurface, getAllSizes} from '../../helpers/filters'
import {SET_FILTERS_TO_STORE} from "../actionTypes";

export const getAllFiltersActionCreator = (sub) => dispatch => {
  axios.get(`apiv1/products/?subcategorie=${sub}`)
    .then(res => {
      let payload = {}
      payload['sizes'] = getAllSizes(res.data)
      payload['usage'] = getAllUsage(res.data)
      payload['surface'] = getAllSurface(res.data)

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
