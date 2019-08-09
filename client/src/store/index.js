import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import callAPIMiddleware from "../utils/callAPIMiddleware";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, callAPIMiddleware))
);

export default store;
