import { jobService } from "../services";

export const jobActions = {
  loadJobs
};

export const jobConstants = {
  LOAD_JOBS_REQUEST: "LOAD_JOBS_REQUEST",
  LOAD_JOBS_SUCCESS: "LOAD_JOBS_SUCCESS",
  LOAD_JOBS_FAILURE: "LOAD_JOBS_FAILURE"
};

function loadJobs() {
  return dispatch => {
    dispatch({ type: jobConstants.LOAD_JOBS_REQUEST });

    jobService.loadJobs().then(
      jobs => {
        dispatch({ type: jobConstants.LOAD_JOBS_SUCCESS, jobs });
      },
      err => {
        const errorMessage = err.toString();
        dispatch({ type: jobConstants.LOAD_JOBS_FAILURE, errorMessage });
      }
    );
  };
}
