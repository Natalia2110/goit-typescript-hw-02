import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
