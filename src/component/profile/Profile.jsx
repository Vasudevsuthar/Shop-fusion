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
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    setIsHovered(false);
  }

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
                <li onClick={() => navigate("/account")}>
                  <MdOutlineAccountCircle /> My Profile
                </li>
                <li onClick={() => navigate("/order")}>
                  <BsBoxSeam /> Orders
                </li>
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
