import { useEffect } from "react";
import { AppDisptch, RootState } from "../redux/app/store";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/features/blogs/blogs";
import { BlogState } from "../redux/features/blog/blog";

const Blogs = () => {
  const { blogs, isError, isLoading, error } = useSelector(
    (state: RootState) => state.blogs
  );
  const { sort, filter } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDisptch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const filteredByStatus = (blog: BlogState) => {
    if (filter === "saved") {
      return blog?.isSaved;
    }
    return true;
  };
  const sortedBlogs = (a: BlogState, b: BlogState) => {
    if (sort === "newest") {
      return (new Date(b?.createdAt) as any) - (new Date(a?.createdAt) as any);
    }
    if (sort === "most_liked") {
      return (b?.likes as any) - (a?.likes as any);
    }
    return 0;
  };
  let content: React.ReactNode;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (blogs.length < 1) {
    content = <p>No blogs found</p>;
  }

  if (blogs.length >= 1) {
    content = blogs
      .slice()
      .sort(sortedBlogs)
      .filter(filteredByStatus)
      .map((blog) => <Blog key={blog.id} blog={blog} />);
  }

  return (
    <main className="grid grid-cols-3 gap-10 mt-14" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Blogs;
