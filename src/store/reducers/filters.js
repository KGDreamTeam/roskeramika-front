import {CHECK_SIZE_FILTER, CHECK_SURFACE_FILTER, CHECK_USAGE_FILTER, RE_SET_FILTERS, SET_FILTERS_TO_STORE} from "../actionTypes";

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
        show: false,
      }
    case CHECK_SIZE_FILTER:
      return{
        ...state,
        show: true,
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
        show: true,
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
        show: true,
        surface: state.surface.map((item, index) => {
          if(index === action.payload){
            item.checked = !item.checked
          }
          return item
          
        })
      }
    default:
      return state;
  }
}

export default reducer