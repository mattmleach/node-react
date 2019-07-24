import React from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { format } from "date-fns";
import { jobActions } from "../../actions";

class JobTable extends React.Component {
  componentDidMount() {
    this.props.getJobs();
  }
  render() {
    const { jobs } = this.props;
    const dateTimeFormat = "YYYY-MM-DD HH:mm";
    return (
      <MaterialTable
        columns={[
          { title: "Job Number", field: "jobNumber" },
          { title: "Process Date", field: "processDate" },
          {
            title: "Start Time",
            field: "startTime",
            render: job => format(job.startTime, dateTimeFormat)
          },
          {
            title: "End Time",
            field: "endTime",
            render: job => format(job.endTime, dateTimeFormat)
          }
        ]}
        data={jobs}
        title="Processing Status"
        options={{ padding: "dense" }}
      />
    );
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs.jobs };
};

export default connect(
  mapStateToProps,
  { getJobs: jobActions.getJobs }
)(JobTable);
