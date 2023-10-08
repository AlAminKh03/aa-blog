import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogsApi from "./blogsApi";

export interface BlogState {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  isSaved: boolean;
  createdAt: string;
}
interface InitialBlogState {
  blogs: BlogState[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const blogInitialState: InitialBlogState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  const response = await blogsApi();
  return response;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: blogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.blogs = [];
      state.error = "";
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.blogs = action.payload;
      state.error = "";
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.blogs = [];
      state.error = action.error.message!;
    });
  },
});

export default blogsSlice.reducer;
