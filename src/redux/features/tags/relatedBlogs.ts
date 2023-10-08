import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import relatedVideosApi from "./relatedBlogsApi";

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
  relatedBlogs: BlogState[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const blogInitialState: InitialBlogState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getrelatedBlogs = createAsyncThunk(
  "relatedBlogs/getrelatedBlogs",
  async ({ id, tags }: { id: number; tags: string[] }) => {
    const response = await relatedVideosApi(id, tags);
    return response;
  }
);

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState: blogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getrelatedBlogs.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.relatedBlogs = [];
      state.error = "";
    });
    builder.addCase(getrelatedBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.relatedBlogs = action.payload;
      state.error = "";
    });
    builder.addCase(getrelatedBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.relatedBlogs = [];
      state.error = action.error.message!;
    });
  },
});

export default relatedBlogsSlice.reducer;
