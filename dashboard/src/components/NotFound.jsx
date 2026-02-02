import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../authorization/AuthContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>

      <h2 style={styles.title}>You've drifted into deep space.</h2>
      <p style={styles.text}>
        The page you are looking for has been moved, deleted, or perhaps never
        existed in this dimension.
      </p>

      {isAuthenticated && (
        <button
          onClick={() => navigate("/")}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#38b2ac")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4fd1c5")}
        >
          Return to Mission Control
        </button>
      )}

      <div style={styles.astronaut}>
        {/* Simple SVG Illustration */}
        <svg
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cbd5e0"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    minHeight: "400px",
    textAlign: "center",
    padding: "20px",
    color: "#482d2f",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  errorCode: {
    fontSize: "8rem",
    fontWeight: "900",
    margin: "0",
    color: "#edf2f7",
    textShadow: "2px 2px 0px #4fd1c5, -2px -2px 0px #f56565",
    letterSpacing: "10px",
  },
  title: {
    fontSize: "1.5rem",
    marginTop: "-20px",
    color: "#4a5568",
  },
  text: {
    maxWidth: "400px",
    color: "#718096",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#4fd1c5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  astronaut: {
    marginTop: "40px",
    opacity: 0.4,
    animation: "float 6s ease-in-out infinite",
  },
};

export default NotFound;
