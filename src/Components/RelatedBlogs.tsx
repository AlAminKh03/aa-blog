import { useEffect } from "react";
import RelatedBlog from "./RelatedBlog";
import { useDispatch, useSelector } from "react-redux";
import { AppDisptch, RootState } from "../redux/app/store";
import { getrelatedBlogs } from "../redux/features/tags/relatedBlogs";
import { BlogState } from "../redux/features/blog/blog";

const RelatedBlogs = ({ id, tags }: { id: number; tags: string[] }) => {
  const dispatch: AppDisptch = useDispatch();
  const { isLoading, isError, error, relatedBlogs } = useSelector(
    (state: RootState) => state.relatedBlog
  );
  useEffect(() => {
    dispatch(getrelatedBlogs({ id, tags }));
  }, [dispatch, id, tags]);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedBlogs.map((relatedBlog: BlogState) => {
          return <RelatedBlog relatedBlog={relatedBlog} />;
        })}
      </div>
    </aside>
  );
};

export default RelatedBlogs;
