import { AiOutlineDelete } from "react-icons/ai";
import React, { useContext } from "react";
import MainContext from "../store/main-context";
import toast from "react-hot-toast";

const UserDashboard = () => {
  const mainCtx = useContext(MainContext);
  const usersData = mainCtx.usersData;

  const userDeleteHandler = async (userId) => {
    try {
      const response = await fetch(`https://shop-fushion-default-rtdb.firebaseio.com/usersData/${userId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("user Delete successfully")
        await mainCtx.fetchUsersData();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


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
              {item.id}
            </p>
            <p>{item.firstName}</p>
            <p>{item.email}</p>
            <p>{item.mobileNumber ? item.mobileNumber : "-"}</p>
            <div className="action-button">
              <button onClick={() => userDeleteHandler(item.id)}>
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
