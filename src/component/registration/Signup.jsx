import { useContext, useRef, useState } from "react";
import "./Regi.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";
import AuthContext from "../store/auth-context";

const SignUp = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (enteredName === "" || enteredEmail === "" || enteredPassword === "") {
      toast.error("All fields are required");
      return;
    }

    if (!emailRegex.test(enteredEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (enteredPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXgJ4yf8Vrl_XTIYC3w9xAtExM8YkoZTo",
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

        if (!res.ok) {
          const data = await res.json();
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }

        const data = await res.json();
        toast.success("Account created successfully");

        const uid = data.localId;
        const formatDate = (date) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");

          return `${day}/${month}/${year}`;
        };
        const formattedDate = formatDate(new Date());
        const formatTime = (date) => {
          const hours = String(date.getHours()).padStart(2, "0");
          const minutes = String(date.getMinutes()).padStart(2, "0");
          const seconds = String(date.getSeconds()).padStart(2, "0");

          return `${hours}:${minutes}:${seconds}`;
        };
        const formattedTime = formatTime(new Date());

        await fetch(
          `https://shop-fushion-default-rtdb.firebaseio.com/usersData/${uid}.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              firstName: enteredName,
              email: enteredEmail,
              signUpDate: formattedDate,
              signUpTime: formattedTime,
              userId: uid,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        authCtx.login(data.idToken, enteredEmail);
        navigate("/login");
        emailInputRef.current.value = "";
        nameInputRef.current.value = "";
        passwordInputRef.current.value = "";
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <form onSubmit={submitHandler}>
          <div className="container-heading">
            <h2>SignUp</h2>
          </div>
          <hr />
          <div className="login">
            <h5>Name</h5>
            <input
              type="name"
              placeholder="Enter Your Name"
              ref={nameInputRef}
            />
          </div>
          <div className="login">
            <h5>Email</h5>
            <input
              type="email"
              placeholder="Enter Your Email"
              ref={emailInputRef}
            />
          </div>
          <div className="login" style={{ marginBottom: "-13px" }}>
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter Your Password"
              ref={passwordInputRef}
            />
          </div>
          <div className="login-button">
            <button type="submit">{isLoading ? <Loader /> : "SignUp"}</button>
          </div>
        </form>
        <hr />
        <div className="p">
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
