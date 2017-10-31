import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UserRow from '../../components/users_table/UsersTableRow'
import TableHeader from '../../components/users_table/TableHeader';
import { filteredUsers } from '../../selectors/filteredUsers'

class UsersTable extends Component {
  componentDidMount() {
    this.props.fetchUsers(`http://localhost:3000/users`, {method: 'GET'});
  };

  render() {
    return (
      <table>
        <TableHeader/>
        <tbody>
        {this.props.users.map(UserRow)}
        </tbody>
      </table>
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
