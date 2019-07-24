import React from "react";
import JobTable from "./JobTable";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TableBox = styled.div`
  width: 100%;
`;

class Home extends React.Component {
  render() {
    return (
      <Content>
        <TableBox>
          <JobTable />
        </TableBox>
      </Content>
    );
  }
}

export default Home;
