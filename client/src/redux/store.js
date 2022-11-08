import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import reducers from "./reducer/index";

const middleWareComposer =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__|| compose

const store = createStore(
  reducers,
  // {},
  middleWareComposer(applyMiddleware(thunk)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;