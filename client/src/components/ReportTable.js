import React from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { reportActions } from "../actions";
import ReportForm from "./ReportForm";

class ReportTable extends React.Component {
  componentDidMount() {
    this.props.loadReports();
  }
  render() {
    const { reports } = this.props;

    return (
      <MaterialTable
        columns={[{ title: "Report Name", field: "displayName" }]}
        data={reports}
        title="Reporting"
        options={{ padding: "dense" }}
        detailPanel={rowData => {
          return <ReportForm />;
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { reports: state.report.reports };
};

export default connect(
  mapStateToProps,
  { loadReports: reportActions.loadReports }
)(ReportTable);
