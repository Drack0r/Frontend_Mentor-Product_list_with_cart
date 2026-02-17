import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("page")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
