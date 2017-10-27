import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/usersActions'
import UserRow from '../../components/users_table/UsersTableRow'
import TableHeader from '../../components/users_table/TableHeader';

class UsersTable extends Component {
  componentDidMount() {
    this.props.fetchUsers(`http://localhost:3000/users`, {method: 'GET'});
  };

  render() {
    console.log('this sorted users: ', this.props.sortedUsers);

    return (
      <table>
        <TableHeader/>
        <tbody>
        {this.props.sortedUsers.map(UserRow)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('changed state users', state.users);
  return {
    sortedUsers: state.users.sortedUsers,
  }
};

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
