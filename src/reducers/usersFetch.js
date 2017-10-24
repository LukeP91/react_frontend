import {types} from '../store/users_table/users'

const usersFetch = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    case types.FETCH_USERS_REQUEST: {
      return state;
    }
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: payload
      };
    }
    default:
      return state;
  }
};

export default usersFetch;
