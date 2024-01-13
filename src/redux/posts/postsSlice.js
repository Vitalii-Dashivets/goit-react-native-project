import { createSlice } from "@reduxjs/toolkit";
import {
  addPost,
  getPosts,
  updatePost,
  clearPostsArray,
  getComments,
} from "./postsOperations";

const initialState = {
  items: [],
  isLoading: false,
  comments: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addPost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(clearPostsArray.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearPostsArray.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(clearPostsArray.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const postsReducer = postsSlice.reducer;
