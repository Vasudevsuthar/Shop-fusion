import React, { useContext, useState } from "react";
import Layout from "../../component/layout/Layout";
import "./Account.css";
import AuthContext from "../../component/store/auth-context";

const Account = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Layout>
      <div className="account-main">
        <div className="account-cantainer">
          <h3>Personal Information</h3>
          <div className="name">
            <div>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <input type="text" placeholder="Last Name" />
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
            <input type="email" placeholder={email} />
          </div>
          <div className="number">
            <h5>Mobile Number</h5>
            <input type="text" placeholder="Mob. Number" />
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
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
              <h6>
                What happens to my existing Shop-Fusion account when I update my
                email address (or mobile number)?
              </h6>
              <p>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
              <h6>
                Does my Seller account get affected when I update my email
                address?
              </h6>
              <p>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
