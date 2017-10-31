import React, { Component } from 'react';
import UsersTable from './containers/users_table/UsersTable';
import FilterInput from "./components/users_table/FilterInput";
import { Col, Grid, Row } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <FilterInput/>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <UsersTable/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
