/*eslint-disable*/

import {createWrapper} from "next-redux-wrapper";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/index";

export const configureStore = () => {

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" ]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
    shouldHotReload: false,
  })
: compose;

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export const initStore = (initialState) => configureStore(initialState);

export const wrapper = createWrapper(() => initStore());

export default initStore;
