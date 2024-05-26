import { useContext, useRef } from "react";
import "./Regi.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


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
        }
      );

      if (response.ok) {
        const data = await response.json();
        authCtx.login(data.idToken, enteredEmail);
        alert("Login successful");
        navigate("/");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      alert(error.message);
    }

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
          <div>
            <button>Login</button>
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
