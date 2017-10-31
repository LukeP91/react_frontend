export const filteredUsers = (users, filterBy) => {
  if(filterBy.value === '') {
    return users
  }

  return users.filter((user) => {
    return user[filterBy.column].toLowerCase().includes(filterBy.value) }
  )
};
