import {
  CREATE_DATA,
  SET_ALL_PRODUCTS,
  SET_FILTERED_PRODUCTS,
} from "../actionTypes"

const initialState = {
  products: [],
  filteredProducts: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      }
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...action.payload],
      }
    default:
      return state
  }
}

export default reducer
