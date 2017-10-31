import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UserRow from '../../components/users_table/UsersTableRow'
import TableHeader from '../../components/users_table/TableHeader';
import { filteredUsers } from '../../selectors/filteredUsers'
import { Table } from 'react-bootstrap'

class UsersTable extends Component {
  componentDidMount() {
    this.props.fetchUsers(`http://localhost:3000/users`, {method: 'GET'});
  };

  render() {
    return (
      <Table striped bordered condensed hover>
        <TableHeader/>
        <tbody>
        {this.props.users.map(UserRow)}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: filteredUsers(state.users.sortedUsers, state.users.options.filterBy),
  }
};

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
