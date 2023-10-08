import axiosInstance from "../../../utils/AxiosInstance";

const blogsApi = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};

export default blogsApi;

export const updateBlogs = async (
  id: number,
  updatedData: { isSaved: boolean }
) => {
  const updateBlog = await fetch(`http://localhost:9000/blogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await updateBlog.json();
  return data;
};
