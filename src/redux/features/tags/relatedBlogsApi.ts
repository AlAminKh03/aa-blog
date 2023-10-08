import axiosInstance from "../../../utils/AxiosInstance";

const relatedBlogsApi = async (id: number, tags: string[]) => {
  const limit = 2;
  const queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${id}&_limit=${limit}`;
  console.log(queryString);
  const response = await axiosInstance.get(`/blogs?${queryString}`);
  return response.data;
};

export default relatedBlogsApi;
