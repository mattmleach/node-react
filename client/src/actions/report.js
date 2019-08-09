import { reportService } from "../services";

export const reportActions = {
  loadReports
};

export const reportConstants = {
  LOAD_REPORTS_REQUEST: "LOAD_REPORTS_REQUEST",
  LOAD_REPORTS_SUCCESS: "LOAD_REPORTS_SUCCESS",
  LOAD_REPORTS_FAILURE: "LOAD_REPORTS_FAILURE"
};

function loadReports() {
  return {
    types: [
      reportConstants.LOAD_REPORTS_REQUEST,
      reportConstants.LOAD_REPORTS_SUCCESS,
      reportConstants.LOAD_REPORTS_FAILURE
    ],
    callAPI: () => reportService.loadReports
  };
}
