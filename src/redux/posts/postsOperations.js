import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  writeDataToFirestore,
  getDataFromFirestore,
  getDataByOwnerFromFirestore,
  updateDataInFirestore,
  getCommentsByPostId,
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
      //let data = Date.now();
      //console.log("TIME", data);
      await writeDataToFirestore(
        {
          owner: data.owner,
          photoURL: imageRef,
          title: data.title,
          location: data.location,
          locationArea: data.locationArea,
          likes: [],
          comments: [],
          timeStamp: Date.now(),
        },
        "posts"
      );
      const posts = await getDataByOwnerFromFirestore("posts", data.owner);
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (owner, thunkAPI) => {
    try {
      const posts = await getDataByOwnerFromFirestore("posts", owner);
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (data, thunkAPI) => {
    try {
      await updateDataInFirestore("posts", data.postId, data.update);
      const posts = await getDataByOwnerFromFirestore("posts", data.owner);
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const clearPostsArray = createAsyncThunk(
  "posts/clearPostsArray",
  async (data, thunkAPI) => {
    try {
      //await updateDataInFirestore("posts", data.postId, data.update);
      //const posts = await getDataByOwnerFromFirestore("posts", data.owner);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getComments = createAsyncThunk(
  "posts/getComments",
  async (postId, thunkAPI) => {
    try {
      const comments = await getCommentsByPostId(postId);
      //console.log(comments);
      return comments.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
