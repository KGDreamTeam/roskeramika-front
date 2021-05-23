import axios from "../../axios/axios"
import { SET_ALL_PRODUCTS } from "../actionTypes"

export const handleGetAllProducts = () => (dispatch) => {
  axios
    .get("/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const setAllProducts = (payload) => {
  return {
    type: SET_ALL_PRODUCTS,
    payload: payload,
  }
}
