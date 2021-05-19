const getAuthenticated = state => state.auth.isAuth;
const getUserName = state => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAuthenticated,
  getUserName,
};
