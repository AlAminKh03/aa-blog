import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogs";
import blogSlice from "../features/blog/blog";
import relatedBlogSlice from "../features/tags/relatedBlogs";
import filterSlice from "../features/filter/filter";

const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog: blogSlice,
    relatedBlog: relatedBlogSlice,
    filter: filterSlice,
  },
});

export type AppDisptch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
