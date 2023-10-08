import { useParams } from "react-router-dom";
import DetailsBlog from "../Components/DetailsBlog";
import RelatedBlogs from "../Components/RelatedBlogs";
import { AppDisptch, RootState } from "../redux/app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "../redux/features/blog/blog";

const SingleBLog = () => {
  const { blogId } = useParams();
  const dispatch: AppDisptch = useDispatch();
  const { blog } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(getBlog(Number(blogId)));
  }, [dispatch, blogId]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <DetailsBlog blog={blog} />
      </div>
      <div className="col-span-3">
        <RelatedBlogs id={blog.id} tags={blog.tags} />
      </div>
    </div>
  );
};

export default SingleBLog;
