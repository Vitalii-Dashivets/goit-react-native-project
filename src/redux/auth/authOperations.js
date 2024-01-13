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
import {
  writeDataToFirestore,
  getDataFromFirestore,
  updateDataInFirestore,
  getDataByOwnerFromFirestore,
  getUserFromFirestore,
} from "../../firebaseOperations/firestoreApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const newUser = await registerDB({
        email: credentials.email,
        password: credentials.password,
      });

      const imgRef = await uploadFileToStorage({
        collection: "avatars",
        name: newUser.uid,
        file: credentials.avatarUrl,
      });

      await updateUserProfile({
        displayName: credentials.name,
        photoURL: imgRef,
      });
      const res = await getDataFromFirestore("users");
      const payload = {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
        usersList: res,
      };

      await writeDataToFirestore(
        {
          owner: payload.uid,
          photoURL: payload.photoURL,
          name: payload.displayName,
          email: payload.email,
          timeStamp: Date.now(),
        },
        "users"
      );
      return payload;
    } catch (error) {
      alert(error);
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
      const res = await getDataFromFirestore("users");
      const payload = {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
        usersList: res,
      };
      return payload;
    } catch (err) {
      alert(err);
      return thunkAPI.rejectWithValue(err.message);
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
      alert(error);
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
      const res = await getDataFromFirestore("users");
      credentials.usersList = res;
      return credentials;
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  "auth/updateUserAvatar",
  async (credentials, thunkAPI) => {
    try {
      const imgRef = await uploadFileToStorage({
        collection: "avatars",
        name: credentials.uid,
        file: credentials.avatar,
      });

      await updateUserProfile({
        photoURL: imgRef,
      });

      const userProfile = await getUserFromFirestore("users", credentials.uid);

      await updateDataInFirestore("users", userProfile[0].id, {
        photoURL: auth.currentUser.photoURL,
      });
      const res = await getDataFromFirestore("users");
      const payload = {
        photoURL: auth.currentUser.photoURL,
        usersList: res,
      };

      return payload;
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
