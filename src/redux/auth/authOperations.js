import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  registerDB,
  loginDB,
  updateUserProfile,
  logOutUser,
} from "../../firebaseOperations/firebaseOperations";
import { auth } from "../../../config.js";
import { user } from "../../firebaseOperations/firebaseOperations";
import { uploadFileToStorage } from "../../firebaseOperations/storageAPI";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("FILE:   ", credentials.avatarUrl);
      await registerDB({
        email: credentials.email,
        password: credentials.password,
      });

      // const photoName = auth.currentUser.uid;
      const id = user.uid;
      const imgRef = await uploadFileToStorage({
        collection: "avatars",
        name: id,
        file: credentials.avatarUrl,
      });
      console.log(imgRef);
      console.log("A  F   T   E   R   U   P   L   O   A   D");
      await updateUserProfile({
        displayName: credentials.name,
        photoURL: imgRef,
      });
      const payload = {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      };
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      await loginDB({
        email: credentials.email,
        password: credentials.password,
      });

      const payload = {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      };
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (data, thunkAPI) => {
    try {
      await logOutUser();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (credentials, thunkAPI) => {
    try {
      // const promise = new Promise((resolve, reject) => {
      //   resolve(credentials);
      // });
      return credentials;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
