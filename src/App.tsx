import { Route, Routes } from "react-router-dom";

import { Table } from "./pages/Table";
import { Graph } from "./pages/Graph";

export const App = () => {
  return (
    <Routes>
      <Route element={<Table />} path="/" />
      <Route element={<Graph />} path="/graph" />
    </Routes>
  );
};
