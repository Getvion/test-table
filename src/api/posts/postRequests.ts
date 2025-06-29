import axios from "axios";

import { base_url } from "../constants";

import { Post } from "./postTypes";

const getAllPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${base_url}/posts`);

  return response.data;
};

export const postsRequests = {
  getAllPosts,
};
