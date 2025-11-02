import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContetStoreProvider from "./contactstore/Contextstore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContetStoreProvider>
        {" "}
        <App />
      </ContetStoreProvider>{" "}
    </BrowserRouter>
  </StrictMode>
);
