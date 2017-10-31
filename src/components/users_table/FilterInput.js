import React from 'react'
import { connect } from 'react-redux'
import { filterByEmail } from '../../actions/usersActions'

let FilterInput = ({dispatch}) => {
  let input

  return (
    <div>
      <input
        ref={node => {
          input = node
        }}
        onChange={e => {
          if (!input.value.trim()) {
            return
          }
          dispatch(filterByEmail(input.value))
        }}
      />
    </div>
  )
}
FilterInput = connect()(FilterInput)

export default FilterInput
