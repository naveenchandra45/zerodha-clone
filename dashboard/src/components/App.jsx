import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import LogoutPage from "./LogoutPage";
import { useContext } from "react";
import NotFound from "./NotFound";
import { AuthContext, AuthProvider } from "../authorization/AuthContext";

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<Home />} />
        ) : (
          <>
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}
