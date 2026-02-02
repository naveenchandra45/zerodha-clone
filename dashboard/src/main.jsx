import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import axios from "axios";
axios.defaults.withCredentials = true;

import "./index.css";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App></App>
  </StrictMode>,
);
