export const getIsAuthenticated = state => state.auth.isAuthenticated;

export const getUsername = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;
