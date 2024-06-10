import "./Profile.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const authCtx = useContext(AuthContext);
  const userIsLoggedIn = authCtx.isLoggedIn;
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    setIsHovered(false);
    navigate("/");
  };

  return (
    <div
      className="main-profile"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MdOutlineAccountCircle className="account" />
      {isHovered && (
        <div className="dropdown">
          <ul>
            {userIsLoggedIn && (
              <>
                {user?.role === "user" && (
                  <li onClick={() => navigate("/userDashboard")}>
                    <MdOutlineAccountCircle /> My Profile
                  </li>
                )}

                {user?.role === "admin" && (
                  <li onClick={() => navigate("/adminDashboard")}>
                    <MdOutlineAccountCircle /> DashBoard
                  </li>
                )}

                {user?.role === "user" && (
                  <li onClick={() => navigate("/order")}>
                    <BsBoxSeam /> Orders
                  </li>
                )}

                <li onClick={logoutHandler}>
                  <MdLogout /> Logout
                </li>
              </>
            )}
            {!userIsLoggedIn && (
              <li onClick={() => navigate("/login")}>
                <MdLogin />
                Login
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
