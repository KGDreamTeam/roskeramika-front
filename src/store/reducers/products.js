import { CREATE_DATA, SET_ALL_PRODUCTS } from "../actionTypes"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return [...action.payload]
    default:
      return state
  }
}

export default reducer
