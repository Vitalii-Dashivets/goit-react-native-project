export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectAuth = (state) => state.auth;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLoading = (state) => state.auth.isLoading;
