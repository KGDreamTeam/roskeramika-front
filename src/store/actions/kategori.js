import axios from "../../axios/axios"
import { PUSH_CATEGORY, PUSH_SUB_CATEGORY } from "../actionTypes"
import { pushCategoriesToFilter } from "./filters"

export const handleGetAllKategoriActionCreator = () => (dispatch) => {
  axios
    .get("/apiv1/categories/")
    .then((res) => {
      dispatch(pushCategoi(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const handleGetAllSubCategoriesActionCreator = () => (dispatch) => {
  axios
    .get("/apiv1/subcategories/")
    .then((res) => {
      dispatch(pushSubCategories(res.data))
      dispatch(pushCategoriesToFilter(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const pushCategoi = (payload) => {
  return {
    type: PUSH_CATEGORY,
    payload,
  }
}

export const pushSubCategories = (payload) => {
  return {
    type: PUSH_SUB_CATEGORY,
    payload,
  }
}
