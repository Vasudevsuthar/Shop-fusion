import { useContext, useRef, useState } from "react";
import "./Regi.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import toast from "react-hot-toast";
import Loader from "../../component/loader/Loader";
import MainContext from "../store/main-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const mainCtx = useContext(MainContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (enteredEmail === "" || enteredPassword === "") {
      toast.error("All fields are required");
      return;
    }

    if (!emailRegex.test(enteredEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXgJ4yf8Vrl_XTIYC3w9xAtExM8YkoZTo",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          authCtx.login(data.idToken, enteredEmail);
          mainCtx.fetchUsersData();
          mainCtx.findUserDataByEmail(enteredEmail);
          mainCtx.fetchOrderDataForUser();
          toast.success("Login successful");
          navigate("/");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },2000);
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <form onSubmit={submitHandler}>
          <div className="container-heading">
            <h2>Login</h2>
          </div>
          <hr />
          <div className="login">
            <h5>Email</h5>
            <input
              type="email"
              placeholder="Enter Your Email"
              ref={emailInputRef}
            />
          </div>
          <div className="login">
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Your Password"
              ref={passwordInputRef}
            />
          </div>
          <div className="forgot-password">
            <a href="">Forgot Password</a>
          </div>
          <div className="login-button">
            <button>{isLoading ? <Loader /> : "Login"}</button>
          </div>
        </form>
        <hr />
        <div className="p">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
