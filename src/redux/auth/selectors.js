const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.isFetchingCurrent;

export { getIsLoggedIn, getUserName, getIsFetchingCurrent };
