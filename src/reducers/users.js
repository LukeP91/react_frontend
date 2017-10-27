import { types } from '../actions/usersActions'

const initState = {users: [], options: {sortByColumn: '', sortType: ''}, sortedUsers: []}

const sortType = (options, sortByColumn) => {
  if(sortByColumn === options.sortByColumn) {
    if(options.sortType === '' ) {
      return 'ASC'
    } else if(options.sortType === 'ASC') {
      return 'DSC'
    } else {
      return ''
    }
  } else {
    return 'ASC'
  }
}
const sortByColumn = (key, order) => {
  console.log(key, order);
  return (obj1, obj2) => {
    if(order === 'ASC') {
      return obj1[key] > obj2[key] ? 1 : -1;
    }
    return obj1[key] < obj2[key] ? 1 : -1;
  }
};

const sortedUsers = (users, columnName, order) => {
    if(order === '') {
      return users
    }
    const usersToSort = [...users];
    return usersToSort.sort(sortByColumn(columnName, order));
};

const users = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.FETCH_USERS_REQUEST: {
      return state;
    }
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: payload,
        sortedUsers: payload
      };
    }
    case types.SET_SORT_BY: {
      console.log('setting up new sort by collection!');
      return {
        ...state,
        sortedUsers: sortedUsers(state.users, payload.sortByColumn, sortType(state.options, payload.sortByColumn)),
        options: {
          ...state.options,
          sortByColumn: payload.sortByColumn,
          sortType: sortType(state.options, payload.sortByColumn)
        }
      }
    }
    default:
      return state;
  }
};

export default users;
