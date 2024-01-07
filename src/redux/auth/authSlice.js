import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./authOperations";
const initialState = {
  user: {
    displayName: "",
    email: "",
    uid: "",
    avatarUrl: "https://reactjs.org/logo-og.png",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  usersList: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.displayName = action.payload.displayName;
        state.user.email = action.payload.email;
        state.user.uid = action.payload.uid;
        state.user.avatarUrl = action.payload.photoURL;
        // state.token = action.payload.stsTokenManager.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.usersList = action.payload.usersList;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.displayName = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.user.avatarUrl = action.payload.photoURL;
        // state.token = action.payload.stsTokenManager.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.usersList = action.payload.usersList;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.email = "";
        state.user.displayName = "";
        state.user.uid = "";
        state.token = "";
        state.user.avatarUrl = "https://reactjs.org/logo-og.png";
        state.isLoggedIn = false;
        state.isLoading = false;
        state.usersList = [];
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.displayName = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.user.avatarUrl = action.payload.photoURL;
        // state.token = action.payload.stsTokenManager.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
