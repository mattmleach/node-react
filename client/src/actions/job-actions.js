import { jobService } from "../services";
import { jobConstants } from "../constants";

export const jobActions = {
  getJobs
};

function getJobs() {
  return dispatch => {
    dispatch({ type: jobConstants.FETCH_JOBS_REQUEST });

    jobService.getJobs().then(
      jobs => {
        dispatch({ type: jobConstants.FETCH_JOBS_SUCCESS, jobs });
      },
      err => {
        const errorMessage = err.toString();
        dispatch({ type: jobConstants.FETCH_JOBS_FAILURE, errorMessage });
      }
    );
  };
}
