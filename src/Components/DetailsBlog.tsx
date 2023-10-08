import { AiFillLike } from "react-icons/ai";
import { BlogState } from "../redux/features/blogs/blogs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDisptch } from "../redux/app/store";
import { changeStatus } from "../redux/features/blog/blog";

const DetailsBlog = ({ blog }: { blog: BlogState }) => {
  const dispatch: AppDisptch = useDispatch();
  const handleMutationData = (id: number) => {
    dispatch(changeStatus({ id, updatedData: { isSaved: !blog.isSaved } }));
  };
  const handleLikeButton = (id: number) => {
    dispatch(changeStatus({ id, updatedData: { likes: blog.likes + 1 } }));
  };
  return (
    <>
      <div className="container mt-8"></div>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <main className="">
          <img
            src={blog.image}
            alt="githum"
            className=" rounded-md w-[600px] h-[400px]"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {blog.title}
            </h1>
            <div className="tags" id="lws-singleTags">
              {blog.tags.map((tag) => {
                return <span># {tag}</span>;
              })}
            </div>
            <div className="btn-group">
              {/* <!-- handle like on button click --> */}
              <p className="flex items-center justify-center gap-2 cursor-pointer">
                <AiFillLike
                  className="w-4 h-4"
                  onClick={() => handleLikeButton(blog.id)}
                />
                {blog.likes}
              </p>
              {/* <!-- handle save on button click -->
          <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
              <button className="active save-btn" id="lws-singleSavedBtn">
                {blog.isSaved ? (
                  <span
                    className="flex items-center justify-center gap-1"
                    onClick={() => handleMutationData(blog.id)}
                  >
                    <BsFillBookmarkFill className="w-4 h-4 text-green-600" />
                    Saved
                  </span>
                ) : (
                  <span
                    className="flex items-center justify-center gap-1"
                    onClick={() => handleMutationData(blog.id)}
                  >
                    <BsFillBookmarkFill className="c text-black" />
                    Save
                  </span>
                )}
              </button>
            </div>
            <div className="mt-6  w-[500px] h-[300px]">
              <p>{blog.description}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default DetailsBlog;
