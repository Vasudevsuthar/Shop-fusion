import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddProductModal from "../addProducrModal/AddProductModal";
import "./Dashboard.css";
import MainContext from "../store/main-context";


const ProdDashboard = () => {
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const handleComposeClick = () => {
    setShowAddProductModal(true);
  };

  const handleCloseAddProdModal = () => {
    setShowAddProductModal(false);
  };


  return (
    <div className="all-prod">
      <div className="prod-head">
        <h4>All Product</h4>
        <button onClick={handleComposeClick}>Add Product</button>
      </div>
      <div className="prod-table-head">
        <p>Product Name</p>
        <p>Product Id</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <>
        {prodData.map((item, index) => (
          <div className="prod-details" key={index}>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <div className="action-button">
              <button onClick={handleComposeClick}>
                <FiEdit />
              </button>
              <button>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </>
      {showAddProductModal && <AddProductModal onClose={handleCloseAddProdModal} />}
    </div>

  );
};

export default ProdDashboard;
