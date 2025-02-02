import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { Provider } from "react-redux";
import setupStore from "./data/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </StrictMode>
);
