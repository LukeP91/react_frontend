export const types = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
  SET_SORT_BY: 'SET_SORT_BY',
  FILTER_BY_EMAIL: 'FILTER_BY_EMAIL'
};

const fetchUsersRequest = () => {
  return {
    type: types.FETCH_USERS_REQUEST
  }
};

const fetchUsersError = () => {
  return {
    type: types.FETCH_USERS_ERROR
  }
};



const fetchUsersSuccess = payload => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload
  }
};

export const setSortBy = (sortByColumn) => {
  return {
    type: types.SET_SORT_BY,
    payload: {
      sortByColumn
    }
  }
};

export const filterByEmail = (email) => {
  return {
    type: types.FILTER_BY_EMAIL,
    payload: {
      filterByEmail: email
    }
  }
}

const fetchData = (url, params={}) => {
  return fetch(url, params)
    .then(response => Promise.all([response, response.json()]));
};

export const fetchUsers = (url, params) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    return fetchData(url, params).then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchUsersSuccess(json))
      }
      else{
        dispatch(fetchUsersError())
      }
    })
  }
};


