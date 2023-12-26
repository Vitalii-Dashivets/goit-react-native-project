import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  writeDataToFirestore,
  getDataFromFirestore,
} from "../../firebaseOperations/firestoreApi";
import { uploadFileToStorage } from "../../firebaseOperations/storageAPI";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (data, thunkAPI) => {
    try {
      const imageRef = await uploadFileToStorage({
        collection: "images",
        name: data.title,
        file: data.file,
      });

      await writeDataToFirestore({
        owner: data.owner,
        photoURL: imageRef,
        title: data.title,
        location: data.location,
        locationArea: data.locationArea,
      });
      const posts = await getDataFromFirestore();
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
