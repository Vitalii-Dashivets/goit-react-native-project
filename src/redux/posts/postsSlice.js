import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "./postsOperations";

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
      });
  },
});

export const postsReducer = postsSlice.reducer;
