import axios from "axios";

import { base_url } from "../constants";

import { User } from "./userTypes";

const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${base_url}/users`);

  return response.data;
};

export const userRequests = {
  getAllUsers,
};
