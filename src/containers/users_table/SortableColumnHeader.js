import { connect } from 'react-redux'
import { setSortBy } from '../../actions/usersActions'
import ColumnHeader from '../../components/users_table/ColumnHeader'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortBy(ownProps.columnName))
    }
  }
}

const SortableColumnHeader = connect(
  null,
  mapDispatchToProps
)(ColumnHeader)

export default SortableColumnHeader
