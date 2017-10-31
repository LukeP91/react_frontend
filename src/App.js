import React, { Component } from 'react';
import UsersTable from './containers/users_table/UsersTable';
import FilterInput from "./components/users_table/FilterInput";

class App extends Component {
  render() {
    return (
      <div>
        <FilterInput/>
        <UsersTable/>
      </div>
    );
  }
}

export default App;
