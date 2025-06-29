import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./App.tsx";
import { HeroUIProvider } from "./providers/herouiProvider.tsx";
import { ReduxProvider } from "./providers/reduxProvider.tsx";

import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ReduxProvider>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </ReduxProvider>
    </HashRouter>
  </React.StrictMode>,
);
