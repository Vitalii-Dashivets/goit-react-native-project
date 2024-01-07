import { createSlice } from "@reduxjs/toolkit";
import { addPost, getPosts, updatePost } from "./postsOperations";

const initialState = {
  items: [],
  isLoading: false,
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
      });
  },
});

export const postsReducer = postsSlice.reducer;
