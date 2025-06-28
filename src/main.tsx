import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.tsx";
import { HeroUIProvider } from "./providers/herouiProvider.tsx";
import { ReduxProvider } from "./providers/reduxProvider.tsx";

import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
