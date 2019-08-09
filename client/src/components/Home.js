import React from "react";
import AppBar from "./Appbar";
import ReportTable from "./ReportTable";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <ReportTable />
      </div>
    );
  }
}

export default Home;
