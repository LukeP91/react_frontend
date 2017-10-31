export const sortType = (options, sortByColumn) => {
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
  return (obj1, obj2) => {
    if(order === 'ASC') {
      return obj1[key] > obj2[key] ? 1 : -1;
    }
    return obj1[key] < obj2[key] ? 1 : -1;
  }
};

export const sortedUsers = (users, columnName, order) => {
  if(order === '') {
    return users
  }
  const usersToSort = [...users];
  return usersToSort.sort(sortByColumn(columnName, order));
};
