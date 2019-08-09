import { combineReducers } from "redux";

import { authentication } from "./authentication";
import { job } from "./job";
import { report } from "./report";

const rootReducer = combineReducers({
  authentication,
  job,
  report
});

export default rootReducer;
