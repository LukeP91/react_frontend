import React from 'react';
import PropTypes from 'prop-types'

const UserRow = (user, i) => {
  return(
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  )
};

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default UserRow;
