import { reportConstants } from "../actions";

const initialState = { reports: [], loading: false, err: null };

export function report(state = initialState, action) {
  switch (action.type) {
    case reportConstants.LOAD_REPORTS_REQUEST:
      return { ...state, loading: true, error: null };
    case reportConstants.LOAD_REPORTS_SUCCESS:
      return { ...state, loading: false, reports: action.reports };
    case reportConstants.LOAD_REPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        reports: [],
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
