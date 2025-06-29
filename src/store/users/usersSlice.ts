import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { userRequests } from "@/api/user/userRequests";
import { Store, UsersSlice } from "@/types/Store";

export const getAllUsers = createAsyncThunk("get-all-users", async () =>
  userRequests.getAllUsers(),
);

const initialState: UsersSlice = {
  isError: false,
  isLoading: false,
  usersData: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.usersData = action.payload;
    });
    builder.addCase(getAllUsers.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.usersData = [];
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.usersData = [];
    });
  },
});

// selectors
export const getUsersSlice = (state: Store) => state.users;
export const getUsersData = (state: Store) => state.users.usersData;
