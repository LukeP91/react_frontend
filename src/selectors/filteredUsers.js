export const filteredUsers = (users, email) => {
  if(email === '') {
    return users
  }

  return users.filter((user) => {
    return user.email.toLowerCase().includes(email) }
  )
};
