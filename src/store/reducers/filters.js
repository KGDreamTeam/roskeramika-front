import {CHECK_SIZE_FILTER, CHECK_SURFACE_FILTER, CHECK_USAGE_FILTER, RE_SET_FILTERS, SET_FILTERED, SET_FILTERS_TO_STORE} from "../actionTypes";

let initialState = {
  loading: false,
  show: false,
  size: [],
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
      }
    case CHECK_SIZE_FILTER:
      return{
        ...state,
        size: state.size.map((item, index) => {
          if(index === action.payload){
            item.checked = !item.checked
          }
          return item
          
        })
      }
    case CHECK_USAGE_FILTER:
      return{
        ...state,
        usage: state.usage.map((item, index) => {
          if(index === action.payload){
            item.checked = !item.checked
          }
          return item
          
        })
      }
    case CHECK_SURFACE_FILTER:
      return{
        ...state,
        surface: state.surface.map((item, index) => {
          if(index === action.payload){
            item.checked = !item.checked
          }
          return item
          
        })
      }
    case SET_FILTERED:
      return{
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
}

export default reducer