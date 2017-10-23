export const types = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR'
};

export const fetchPostsRequest = () => {
  console.log("TEST")
  return {
    type: types.FETCH_USERS_REQUEST
  }
};

export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload
  }
};

export const fetchPostsError = () => {
  return {
    type: types.FETCH_USERS_ERROR
  }
};

const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
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
