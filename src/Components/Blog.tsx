import { AiFillLike } from "react-icons/ai";
import { BlogState } from "../redux/features/blogs/blogs";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

const Blog = ({ blog }: { blog: BlogState }) => {
  return (
    <div className="">
      <Link to={`blogs/${blog.id}`}>
        <img src={blog.image} className="w-[300px] h-[150px]" alt="" />
      </Link>
      <div className="py-4">
        <div className="flex items-cneter justify-between">
          <button className="active save-btn" id="lws-singleSavedBtn">
            {blog.isSaved && (
              <span className="flex items-center justify-center gap-1">
                <BsFillBookmarkFill className="w-4 h-4 text-green-600" />
                Saved
              </span>
            )}
          </button>
          <div>
            <p className="flex items-center justify-center gap-2">
              <AiFillLike className="w-4 h-4" />
              {blog.likes}
            </p>
            <p className="lws-publishedDate">{blog.createdAt}</p>
          </div>
        </div>
        <Link to={`blogs/${blog.id}`} className=" font-semibold">
          {" "}
          {blog.title}
        </Link>
        <div className="lws-tags">
          {blog.tags.map((tag) => (
            <Link to={`blogs/${blog.id}`}># {tag} </Link>
          ))}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge">{blog.isSaved} </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Blog;
