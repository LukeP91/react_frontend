import React, {Component} from 'react'

export default class TableHeader extends Component {
  render(){
    return(
      <thead>
        <tr>
          <th>#</th>
          <th>Full name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
    )
  }
}
