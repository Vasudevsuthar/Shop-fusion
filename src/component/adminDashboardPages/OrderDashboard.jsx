import React from "react";
import "./Dashboard.css";

const orders = [
  {
    id: "#4745-656-23",
    name: "Devon Lane",
    address: "Dhaka",
    totalOrder: 474,
    amount: 5745,
    date: "4/21/12",
    payment: "Paid",
    status: "In-Transit",
  },
  {
    id: "#4745-656-23",
    name: "Esther Howard",
    address: "Rajshahi",
    totalOrder: 5674,
    amount: 7685,
    date: "8/30/14",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "#4745-656-23",
    name: "Robert Fox",
    address: "Chittagong",
    totalOrder: 563,
    amount: 34675,
    date: "10/28/12",
    payment: "Unpaid",
    status: "In-Transit",
  },
  {
    id: "#4745-656-23",
    name: "Savannah Nguyen",
    address: "Chittagong",
    totalOrder: 3563,
    amount: 43657,
    date: "3/4/16",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "#4745-656-23",
    name: "Brooklyn Simmons",
    address: "Chittagong",
    totalOrder: 67574,
    amount: 45446,
    date: "11/7/16",
    payment: "Paid",
    status: "In-Transit",
  },
  {
    id: "#4745-656-23",
    name: "Guy Hawkins",
    address: "Rajshahi",
    totalOrder: 213,
    amount: 45747,
    date: "5/7/16",
    payment: "Unpaid",
    status: "In-Transit",
  },
  {
    id: "#4745-656-23",
    name: "Ronald Richards",
    address: "Rajshahi",
    totalOrder: 545,
    amount: 5645,
    date: "1/28/17",
    payment: "Unpaid",
    status: "Delivered",
  },
  {
    id: "#4745-656-23",
    name: "Leslie Alexander",
    address: "Dhaka",
    totalOrder: 667,
    amount: 4576,
    date: "8/15/17",
    payment: "Unpaid",
    status: "Delivered",
  },
];

const OrderDashboard = () => {
  return (
    <div className="all-prod">
      <div className="prod-table-head">
        <p>Order ID</p>
        <p>Customer Name</p>
        <p>Address</p>
        <p>Order Date</p>
        <p>Amount</p>
        <p>Status</p>
      </div>
      <>
        {orders.map((item, index) => (
          <div className="prod-details" key={index}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.address}</p>
            <p>{item.date}</p>
            <p>{item.amount}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default OrderDashboard;
