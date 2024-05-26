import { useRef } from "react";
import "./Regi.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXgJ4yf8Vrl_XTIYC3w9xAtExM8YkoZTo",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage="Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert("Account created successfully");
        emailInputRef.current.value = "";
        nameInputRef.current.value = "";
        passwordInputRef.current.value = "";
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
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
            <input type="name" placeholder="Enter Your Name" ref={nameInputRef}/>
          </div>
          <div className="login">
            <h5>Email</h5>
            <input type="email" placeholder="Enter Your Email" ref={emailInputRef}/>
          </div>
          <div className="login" style={{ marginBottom: "-13px"}}>
            <h5>Password</h5>
            <input type="password" placeholder="Enter Your Password" ref={passwordInputRef}/>
          </div>
          <div>
            <button type="submit">SignUp</button>
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
