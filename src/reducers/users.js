import { types } from '../actions/usersActions'
import { sortedUsers, sortType } from "../selectors/sortedUsers";


const initState = {users: [], options: {sortByColumn: '', sortType: '', filterByEmail: ''}, sortedUsers: []}

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
    case types.FILTER_BY_EMAIL: {
      return {
        ...state,
        options: {
          ...state.options,
          filterByEmail: payload.filterByEmail
        }
      }
    }
    default:
      return state;
  }
};

export default users;
