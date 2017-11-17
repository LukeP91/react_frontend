import React, {Component} from 'react'
import FilterValue from '../../components/filter/FilterValue'

class Filter extends Component {
  render() {
    const test = [{fieldName: 'Name', filterValue: 'em'}, {fieldName: 'Email', filterValue: 'test'}]
    return (
      <div>
        <div>
          {test.map((filtObject, index) => <FilterValue filter={filtObject} key={index} />)}
        </div>
      </div>
    )
  }
}

export default Filter
