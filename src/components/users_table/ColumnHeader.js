import React from 'react'
import PropTypes from 'prop-types'

const ColumnHeader = ({ children, onClick }) => {
  return (
    <th
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </th>
  )
}

ColumnHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ColumnHeader
