import React from 'react'
import { connect } from 'react-redux'
import { filterBy } from '../../actions/usersActions'

let FilterInput = ({dispatch}) => {
  let input
  let select

  return (
    <div>
      <select
        ref={node => {
          select = node
        }}
        onChange={e => {
          dispatch(filterBy(input.value, select.value))
        }}
      >
        <option value="email">Email</option>
        <option value="username">Username</option>
        <option value="name">Name</option>
      </select>
      <input
        ref={node => {
          input = node
        }}
        onChange={e => {
          dispatch(filterBy(input.value, select.value))
        }}
      />
    </div>
  )
}
FilterInput = connect()(FilterInput)

export default FilterInput
