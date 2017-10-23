import React, {Component} from 'react';
import TableHeader from './TableHeader';
import { connect } from 'react-redux'
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from './appRedux'

class UsersTable extends Component {
  renderUserRow = (user, i) => {
    return(
      <tr key={i}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    )
  };

  fetchPostsWithRedux = () => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      return this.fetchPosts().then(([response, json]) =>{
        if(response.status === 200){
          dispatch(fetchPostsSuccess(json))
        }
        else{
          dispatch(fetchPostsError())
        }
      })
    }
  };

  fetchPosts = () => {
    const URL = `http://localhost:3000/users`;
    return fetch(URL, { method: 'GET'})
      .then( response => Promise.all([response, response.json()]));
  };

  componentDidMount() {
    const {dispatch} = this.props;
    this.fetchPostsWithRedux()(dispatch);
  };

  render() {
    const {users=[] } = this.props;

    return (
      <table>
        <TableHeader/>
        <tbody>
          {users.map(this.renderUserRow)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(UsersTable)
