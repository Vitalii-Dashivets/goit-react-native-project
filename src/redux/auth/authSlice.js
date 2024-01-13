import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateUserAvatar,
} from "./authOperations";

const initialState = {
  user: {
    displayName: "",
    email: "",
    uid: "",
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/reactnative-goit-e3765.appspot.com/o/avatars%2Fno_photo.png?alt=media&token=62e68122-1639-4ca4-92c1-58600113d90d",
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
        state.user.avatarUrl =
          "https://firebasestorage.googleapis.com/v0/b/reactnative-goit-e3765.appspot.com/o/avatars%2Fno_photo.png?alt=media&token=62e68122-1639-4ca4-92c1-58600113d90d";
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
        state.usersList = action.payload.usersList;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.photoURL;
        // state.token = action.payload.stsTokenManager.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.usersList = action.payload.usersList;
      })
      .addCase(updateUserAvatar.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
