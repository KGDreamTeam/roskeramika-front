import {RE_SET_FILTERS, SET_FILTERS_TO_STORE} from "../actionTypes";

let initialState = {
  show: false,
  size: [
    {
      size: "20x20",
      count: 3,
    }
  ],
  usage: [],
  surface: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_FILTERS_TO_STORE:
      return {
        ...state,
        size: action.payload?.sizes,
        usage: action.payload?.usage,
        surface: action.payload?.surface,
      }
    case RE_SET_FILTERS:
      return{
        ...state,
        show: false,
      }
    default:
      return state;
  }
}

export default reducer