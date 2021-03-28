import { CREATE_DATA } from "../actionTypes";

const initialState = {
  hello: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DATA:
      return state;
    default:
      return state;
  }
};

export default reducer;
