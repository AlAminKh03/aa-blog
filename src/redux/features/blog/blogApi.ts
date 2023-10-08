import axiosInstance from "../../../utils/AxiosInstance";

const blogApi = async (id: number) => {
  const response = await axiosInstance.get(`/blogs/${id}`);
  console.log(response.data);
  return response.data;
};

export default blogApi;

export const updateBlogs = async (
  id: number,
  updatedData: { isSaved?: boolean; likes?: number }
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
