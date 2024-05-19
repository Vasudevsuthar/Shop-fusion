import "./Regi.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="container-heading">
          <h2>Login</h2>
        </div>
        <hr />
        <div className="login">
          <h5>Email</h5>
          <input type="text" placeholder="Name" />
        </div>
        <div className="login">
          <h5>Password</h5>
          <input type="text" placeholder="Password" />
        </div>
        <hr />
        <div className="forgot-password">
          <a href="">Forgot Password</a>
        </div>
        <div>
          <button>Login</button>
        </div>
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
