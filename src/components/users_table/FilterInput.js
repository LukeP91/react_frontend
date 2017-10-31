import React from 'react'
import { connect } from 'react-redux'
import { filterByEmail } from '../../actions/usersActions'

let FilterInput = ({dispatch}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(filterByEmail(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Filter by Email
        </button>
      </form>
    </div>
  )
}
FilterInput = connect()(FilterInput)

export default FilterInput
