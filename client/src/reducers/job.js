import { jobConstants } from "../actions";

const initialState = { jobs: [], loading: false, err: null };

export function job(state = initialState, action) {
  switch (action.type) {
    case jobConstants.LOAD_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case jobConstants.LOAD_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.jobs };
    case jobConstants.LOAD_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
