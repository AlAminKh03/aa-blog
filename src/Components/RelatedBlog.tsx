import { Link } from "react-router-dom";
import { BlogState } from "../redux/features/blog/blog";

const RelatedBlog = ({ relatedBlog }: { relatedBlog: BlogState }) => {
  return (
    <div className="grid grid-cols-2  ">
      <Link to={`/blogs/${relatedBlog.id}`}>
        <img src={relatedBlog.image} className="" alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/blogs/${relatedBlog.id}`} className="text-lg ">
          {relatedBlog.title}
        </Link>
        <div className="mb-0 tags">
          {relatedBlog.tags.map((tag) => {
            return <span className="text-sm"># {tag}</span>;
          })}
        </div>
        <p className="text-sm">{relatedBlog.createdAt}</p>
      </div>
    </div>
  );
  // <!-- related post ends -->
  // <!-- related post  -->
};

export default RelatedBlog;
