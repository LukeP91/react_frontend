import React from 'react'
import { connect } from 'react-redux'
import { removeFilter } from '../../actions/usersActions'

let FilterValue = (props) => {
  return(
    <div>
      <p>
        {props.filter.fieldName}: {props.filter.filterValue}
        <button
          onChange={() => {props.removeFilter(props.filter.fieldValue)}}
        >
          X
        </button>
      </p>
    </div>
  )
};

const mapDispatchToProps = {
  removeFilter
};

FilterValue = connect(null, mapDispatchToProps)(FilterValue);
export default FilterValue;
