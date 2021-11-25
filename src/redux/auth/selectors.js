const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.isFetchingCurrent;
const getToken = state => state.auth.token;
export { getIsLoggedIn, getUserName, getIsFetchingCurrent, getToken };
