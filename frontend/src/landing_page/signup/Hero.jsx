import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../authorization/AuthContext";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false); //to switch signup to login
  const [validated, setValidated] = useState(false); //to check all required inpute has data or not
  const [errorMessage, setErrorMessage] = useState(""); //to flash error
  const [signupUser, setSignupUser] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
  });

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  //Handle Input Changes
  const signupInput = (event) => {
    const { name, value } = event.target;
    setSignupUser((signupData) => {
      return { ...signupData, [name]: value };
    });
  };

  const loginInput = (event) => {
    const { name, value } = event.target;
    setLoginUser((loginData) => {
      return { ...loginData, [name]: value };
    });
  };

  //Logic for Signup
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const form = event.currentTarget;
      //checkValidity() returns true if all required input fields filled with data and vice a versa
      if (form.checkValidity() === false) {
        event.stopPropagation(); // tells the browser: "Stop this event right here. Do not let it travel any further up the tree."
        setValidated(true);
      } else {
        const { username, age, email, password } = signupUser;
        if (username && age && email && password) {
          await axios.post("https://zerodha-clone-ukx9.onrender.com/signup", signupUser);
          alert("Signup successful! Please login.");

          setValidated(false);

          navigate("/");
          window.location.reload();

          setIsLogin(true);
        } else {
          alert("Signup failed. Please try again.");
        }
      }
    } catch (err) {
      const statusCode = err.response?.status;

      if (statusCode === 403) {
        const msg = err.response?.data?.message || "Something went wrong";
        setErrorMessage(msg);
      } else {
        const msg = err.response?.data?.message || "Something went wrong";
        setErrorMessage(msg);
      }

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  //logic for login
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
      } else {
        const res = await axios.post("https://zerodha-clone-ukx9.onrender.com/login", loginUser);
        alert(res.data.message || "Logged in successfully!");
        setIsAuthenticated(true); //contains user data login as boolean
        setValidated(false);

        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      const statusCode = err.response?.status;

      if (statusCode === 403) {
        const msg = err.response?.data?.message || "Something went wrong";
        setErrorMessage(msg);
      } else {
        const msg = err.response?.data?.message || "Something went wrong";
        setErrorMessage(msg);
      }

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  //to show signup or login page
  const handleDisplay = () => {
    setValidated(false);
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="container-sm p-5">
        <div className="row text-center ps-3 pe-3 ms-3 me-3 ">
          <div>
            <h1>Open a free demat and trading account online</h1>
            <h2>
              Start investing brokerage free and join a community of 1.6+ crore
              investors and traders
            </h2>
          </div>
          <div className="col-8 p-4">
            <img src="/media/images/account_open.svg" alt="Account Open" />
          </div>

          {isLogin ? (
            <div className="col-4 p-4">
              <form
                onSubmit={handleLoginSubmit}
                className={validated ? "was-validated" : ""}
                noValidate
              >
                <h3 className="fs-2 mb-3 mt-5 pt-5">Login</h3>
                {errorMessage && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
                <div className="form-floating mb-3">
                  <input
                    type="username"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="username"
                    name="username"
                    value={loginUser.username}
                    onChange={loginInput}
                    required
                  />
                  <label htmlFor="floatingUsername">Username</label>
                  <div className="invalid-feedback text-start">
                    Please enter correct username
                  </div>
                </div>
                <div className="form-floating mb-4 p-1">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={loginUser.password}
                    onChange={loginInput}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <div className="invalid-feedback text-start">
                    Please enter correct password
                  </div>
                </div>
                <button className="btn btn-primary pt-2 pb-2 ps-4 pe-4">
                  Login
                </button>
              </form>
              <hr />
              <button
                className="btn btn-primary pt-2 pb-2 ps-4 pe-4"
                onClick={handleDisplay}
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="col-4 ps-4 pe-4">
              <form
                onSubmit={handleSignupSubmit}
                className={validated ? "was-validated" : ""}
                noValidate
              >
                <h3 className="fs-2 mb-3 mt-3">Sign up</h3>

                {errorMessage && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="username"
                    name="username"
                    value={signupUser.username}
                    onChange={signupInput}
                    required
                  />
                  <label htmlFor="floatingInput">Username</label>
                  <div className="invalid-feedback text-start">
                    Please provide a username.
                  </div>
                </div>
                <div className="form-floating mb-4 p-1">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="age"
                    min="18"
                    max="120"
                    name="age"
                    value={signupUser.age}
                    onChange={signupInput}
                    required
                  />
                  <label htmlFor="floatingPassword">Age</label>
                  <div className="invalid-feedback text-start">
                    Please enter a valid age between 18 and 120.
                  </div>
                </div>
                <div className="form-floating mb-4 p-1">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="email"
                    name="email"
                    value={signupUser.email}
                    onChange={signupInput}
                    required
                  />
                  <label htmlFor="floatingPassword">Email</label>
                  <div className="invalid-feedback text-start">
                    Please provide correct email address
                  </div>
                </div>
                <div className="form-floating mb-4 p-1">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    minLength="8"
                    placeholder="password"
                    name="password"
                    value={signupUser.password}
                    onChange={signupInput}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <div className="invalid-feedback text-start">
                    Password must be 8 digit
                  </div>
                </div>
                <button className="btn btn-primary pt-2 pb-2 ps-4 pe-4">
                  Signup
                </button>
              </form>
              <hr />
              <button
                className="btn btn-primary pt-2 pb-2 ps-4 pe-4"
                onClick={handleDisplay}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
