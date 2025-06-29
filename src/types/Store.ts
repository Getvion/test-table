import { User } from "@/api/user/userTypes";

export interface UsersSlice {
  isError: boolean;
  isLoading: boolean;
  usersData: User[];
}

export interface Store {
  users: UsersSlice;
}
