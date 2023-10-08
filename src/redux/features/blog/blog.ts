import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogApi, { updateBlogs } from "./blogApi";

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
  blog: BlogState;
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const blogInitialState: InitialBlogState = {
  blog: {
    id: 0,
    title: "",
    description: "",
    image: "",
    tags: [],
    likes: 0,
    isSaved: false,
    createdAt: "",
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlog = createAsyncThunk("blog/getBlog", async (id: number) => {
  const response = await blogApi(id);
  return response;
});

export const changeStatus = createAsyncThunk(
  "blogs/changeStatus",
  async ({
    id,
    updatedData,
  }: {
    id: number;
    updatedData: { isSaved?: boolean; likes?: number };
  }) => {
    const response = await updateBlogs(id, updatedData);
    console.log(response);
    return response;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: blogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.blog = blogInitialState.blog;
      state.error = "";
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.blog = action.payload;
      state.error = "";
    });
    builder.addCase(getBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.blog = blogInitialState.blog;
      state.error = action.error.message!;
    });
    builder.addCase(changeStatus.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(changeStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const { isSaved, likes } = action.payload;
      console.log(isSaved);
      state.blog = { ...state.blog, likes: likes, isSaved: isSaved };
      state.error = "";
    });
    builder.addCase(changeStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.blog = state.blog;
      state.isError = true;
      state.error = action.error.message!;
    });
  },
});

export default blogSlice.reducer;
