import React, {Component} from 'react'
import SortableColumnHeader from '../../containers/users_table/SortableColumnHeader'

export default class TableHeader extends Component {
  render(){
    return(
      <thead>
        <tr>
          <SortableColumnHeader columnName={'id'}>#</SortableColumnHeader>
          <SortableColumnHeader columnName={'name'}>Full name</SortableColumnHeader>
          <SortableColumnHeader columnName={'username'}>Username</SortableColumnHeader>
          <SortableColumnHeader columnName={'email'}>Email</SortableColumnHeader>
        </tr>
      </thead>
    )
  }
}
