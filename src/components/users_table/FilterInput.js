import React from 'react'
import { connect } from 'react-redux'
import { filterBy } from '../../actions/usersActions'
import { Col, FormControl, Row } from "react-bootstrap";

let FilterInput = ({dispatch}) => {
  let input
  let select

  return (
    <Row>
      <Col md={3}>
        <FormControl
          componentClass="select"
          inputRef={ref => {
            select = ref
          }}
          onChange={e => {
            dispatch(filterBy(input.value, select.value))
          }}
        >
          <option value="email">Email</option>
          <option value="username">Username</option>
          <option value="name">Name</option>
        </FormControl>
      </Col>
      <Col md={9}>
        <FormControl
          type="text"
          inputRef={ref => {
            input = ref
          }}
          onChange={e => {
            dispatch(filterBy(input.value, select.value))
          }}
        />
      </Col>
    </Row>
  )
}
FilterInput = connect()(FilterInput)

export default FilterInput
