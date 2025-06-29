import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { graphRequests } from "@/api/graph/graphRequests";
import { Graph } from "@/api/graph/graphTypes";
import { Store } from "@/types/Store";

export const getGraph = createAsyncThunk("get-graph", async () =>
  graphRequests.getGraph(),
);

export interface GraphState {
  graphData: Graph[];
  isError: boolean;
  isLoading: boolean;
}

const initialState: GraphState = {
  isError: false,
  isLoading: false,
  graphData: [],
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGraph.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.graphData = action.payload;
    });
    builder.addCase(getGraph.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.graphData = [];
    });
    builder.addCase(getGraph.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.graphData = [];
    });
  },
});

//  selectors
export const getGraphData = (state: Store) => state.graph;
