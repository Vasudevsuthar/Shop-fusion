import React, { useContext, useState, useRef, useEffect } from "react";
import Layout from "../../component/layout/Layout";
import ProfileImg from "../../component/img/Profile.png";
import "./Account.css";
import MainContextProvider from "../../component/store/main-context";
import toast from "react-hot-toast";
import AuthContext from "../../component/store/auth-context";
import Loader from "../../component/loader/Loader";

const Account = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const numberInputRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const mainCtx = useContext(MainContextProvider);
  const userData = mainCtx.userData || {};
  const userId = userData.userId;

  useEffect(() => {
    if (userData.gender) {
      setSelectedOption(userData.gender);
    }
  }, [userData]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedData = {
      firstName: firstNameInputRef.current.value || userData.firstName,
      lastName: lastNameInputRef.current.value || userData.lastName,
      gender: selectedOption || userData.gender,
      email: emailInputRef.current.value || userData.email,
      mobileNumber: numberInputRef.current.value || userData.mobileNumber,
      signUpDate: userData.signUpDate,
      signUpTime: userData.signUpTime,
      userId: userData.userId,
    };

    const mobileRegex = /^[0-9]{10}$/;

    if (!updatedData.gender || !updatedData.mobileNumber || !mobileRegex.test(updatedData.mobileNumber)) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await fetch(
          `https://shop-fushion-default-rtdb.firebaseio.com/usersData/${userId}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const data = await res.json();
          let errorMessage = "Update data failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }

        const data = await res.json();
        toast.success("Profile updated successfully");
        mainCtx.fetchUserData(userId);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <Layout>
      <div className="account-main">
        <div className="order-profile">
          <img src={ProfileImg} alt="" />
          <p>
            <strong>Name : </strong>
            {userData.firstName}
          </p>
          <p>
            <strong>Email : </strong>
            {userData.email}
          </p>
        </div>
        <div className="account-cantainer">
          <h3>Personal Information</h3>
          <div className="name">
            <div>
              <input
                type="text"
                placeholder={userData.firstName || "First Name"}
                ref={firstNameInputRef}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={userData.lastName || "Last Name"}
                ref={lastNameInputRef}
              />
            </div>
          </div>
          <div>
            <h5>Your Gender</h5>
            <div className="gender">
              <label className="gender-male">
                <input
                  type="radio"
                  value="male"
                  checked={selectedOption === "male"}
                  onChange={handleOptionChange}
                />
                <span>Male</span>
              </label>
              <label className="gender-male">
                <input
                  type="radio"
                  value="female"
                  checked={selectedOption === "female"}
                  onChange={handleOptionChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="email">
            <h5>Email Address</h5>
            <input
              type="email"
              placeholder={userData.email || "Email Address"}
              ref={emailInputRef}
            />
          </div>
          <div className="number">
            <h5>Mobile Number</h5>
            <input
              type="text"
              placeholder={userData.mobileNumber || "Mobile Number"}
              ref={numberInputRef}
            />
          </div>
          <div className="sub-button">
            <button onClick={submitHandler}>
              {isLoading ? <Loader /> : "Submit"}
            </button>
          </div>
          <div>
            <div className="faqs">FAQs</div>
            <div className="question">
              <h6>
                What happens when I update my email address (or mobile number)?
              </h6>
              <p>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
              <h6>
                When will my Shop-Fusion account be updated with the new email
                address (or mobile number)?
              </h6>
              <p>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
              <h6>
                What happens to my existing Shop-Fusion account when I update my
                email address (or mobile number)?
              </h6>
              <p>
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>
              <h6>
                Does my Seller account get affected when I update my email
                address?
              </h6>
              <p>
                Shop-Fusion has a 'single sign-on' policy. Any changes will
                reflect in your Seller account also.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
