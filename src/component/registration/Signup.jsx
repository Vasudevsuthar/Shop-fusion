import "./Regi.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="container-heading">
          <h2>SignUp</h2>
        </div>
        <hr />
        <div className="login">
          <h5>Name</h5>
          <input type="text" placeholder="Name" />
        </div>
        <div className="login">
          <h5>Email</h5>
          <input type="text" placeholder="Name" />
        </div>
        <div className="login" style={{marginBottom:"-13px"}}>
          <h5>Password</h5>
          <input type="text" placeholder="Password" />
        </div>
        <hr />
        <div>
          <button style={{marginTop:"0"}}>SignUp</button>
        </div>
        <div className="p">
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
