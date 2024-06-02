import { AiOutlineDelete } from "react-icons/ai";
import React, { useContext } from "react";
import MainContext from "../store/main-context";

const userData = [
  {
    name: "user",
    id: 1,
    email: "test@gmail.com",
    mob: 2365896523,
  },
  {
    name: "user",
    id: 2,
    email: "test@gmail.com",
    mob: 2365896523,
  },
  {
    name: "user",
    id: 3,
    email: "test@gmail.com",
    mob: 2365896523,
  },
  {
    name: "user",
    id: 4,
    email: "test@gmail.com",
    mob: 2365896523,
  },
  {
    name: "user",
    id: 5,
    email: "test@gmail.com",
    mob: 2365896523,
  },
];

const UserDashboard = () => {
  const mainCtx = useContext(MainContext);
  const usersData = mainCtx.usersData;
  console.log(usersData);
  return (
    <div className="all-prod">
      <div className="prod-table-head">
        <p>ID</p>
        <p>Name</p>
        <p>Email</p>
        <p>Mobile No.</p>
        <p>Action</p>
      </div>
      <>
        {usersData.map((item, index) => (
          <div className="prod-details" key={index}>
            <p
              style={{
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.userId}
            </p>
            <p>{item.firstName}</p>
            <p>{item.email}</p>
            <p>{item.mobileNumber}</p>
            <div className="action-button">
              <button>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default UserDashboard;
