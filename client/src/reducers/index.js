import { combineReducers } from "redux";

import { authentication } from "./authentication";
import { jobs } from "./jobs";

const rootReducer = combineReducers({
  authentication,
  jobs
});

export default rootReducer;
