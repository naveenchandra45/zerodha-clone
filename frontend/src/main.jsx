import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./authorization/AuthContext.jsx";
import axios from 'axios';
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </StrictMode>,
);
