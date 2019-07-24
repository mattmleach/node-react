import { jobConstants } from "../constants";

const initialState = { jobs: [], loading: false, err: null };

export function jobs(state = initialState, action) {
  switch (action.type) {
    case jobConstants.FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case jobConstants.FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.jobs };
    case jobConstants.FETCH_JOBS_FAILURE:
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
