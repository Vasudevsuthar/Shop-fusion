import React, { useContext } from "react";
import ProfileImg from "../../component/img/Profile.png";
import AuthContext from "../../component/store/auth-context";
import Layout from "../../component/layout/Layout";
import { TbBasket } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import "./AdminDashboard.css";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import OrderDashboard from "../../component/adminDashboardPages/OrderDashboard";
import UserDashboard from "../../component/adminDashboardPages/UserDashboard";
import ProdDashboard from "../../component/adminDashboardPages/ProdDashboard";

const AdminDashboard = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;


  return (
    <Layout>
      <div className="admin-container">
        <div className="head">
          <h4>Admin Dashboard</h4>
        </div>
        <div className="admin-profile">
          <img src={ProfileImg} alt="" />
          <p>
            <strong>Name : </strong>Vasudev
          </p>
          <p>
            <strong>Email : </strong>
            {email}
          </p>
        </div>
        <Tabs>
          <TabList className="details">
            <Tab className="total-product">
              <TbBasket className="prod-icon" />
              <h5>Total Product</h5>
              <span>10</span>
            </Tab>
            <Tab className="total-product">
              <FaClipboardList className="prod-icon" />
              <h5>Total Order</h5>
              <span>10</span>
            </Tab>
            <Tab className="total-product">
              <FaUsers className="prod-icon" />
              <h5>Total User</h5>
              <span>10</span>
            </Tab>
          </TabList>
          <TabPanel><ProdDashboard /></TabPanel>
          <TabPanel><OrderDashboard /></TabPanel>
          <TabPanel><UserDashboard /></TabPanel>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
