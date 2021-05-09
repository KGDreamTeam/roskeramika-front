import {SET_FILTERS_TO_STORE} from "../actionTypes";

let initialState = {
  size: [],
  usage: [],
  surface: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FILTERS_TO_STORE:
      return {
        size: action.payload?.sizes,
        usage: action.payload?.usage,
        surface: action.payload?.surface,
      }
    default:
      return state;
  }
}

export default reducer