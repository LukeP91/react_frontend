import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/users_table/users'
import UserRow from '../../components/users_table/UsersTableRow'
import TableHeader from '../../components/users_table/TableHeader';

class UsersTable extends Component {
  componentDidMount() {
    this.props.fetchUsers(`http://localhost:3000/users`, {method: 'GET'});
  };

  render() {
    const {users = []} = this.props;

    return (
      <table>
        <TableHeader/>
        <tbody>
        {users.map(UserRow)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersFetch.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)






