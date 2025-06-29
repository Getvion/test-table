import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { DefaultLayout } from "@/layouts/default";
import { AppDispatch } from "@/store/store";
import { getGraph, getGraphData } from "@/store/graph/graphSlice";

export const Graph = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isError, isLoading, graphData } = useSelector(getGraphData);

  useEffect(() => {
    dispatch(getGraph());
  }, []);

  const showLoading = isLoading && !isError;
  const showError = !isLoading && isError;
  const showContent = !isLoading && !isError && graphData.length;

  return (
    <DefaultLayout>
      {showLoading && <>Loading data</>} {showError && <>Error</>}
      {showContent && (
        <LineChart data={graphData} height={300} width={500}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" stroke="#8884d8" type="monotone" />
          <Line dataKey="pv" stroke="#82ca9d" type="monotone" />
        </LineChart>
      )}
    </DefaultLayout>
  );
};
