import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddProductModal from "../addProducrModal/AddProductModal";
import "./Dashboard.css";
import MainContext from "../store/main-context";
import toast from "react-hot-toast";

const ProdDashboard = () => {
  const mainCtx = useContext(MainContext);
  const prodData = mainCtx.productData;
  console.log(prodData);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleComposeClick = () => {
    setIsEditMode(false);
    setCurrentProduct(null);
    setShowAddProductModal(true);
  };

  const handleCloseAddProdModal = () => {
    setShowAddProductModal(false);
  };

  const handleEditClick = (product) => {
    setIsEditMode(true);
    setCurrentProduct(product);
    setShowAddProductModal(true);
  };

  
  const prodDeleteHandler = async (prodId) => {
    try {
      const response = await fetch(`https://shop-fushion-default-rtdb.firebaseio.com/productData/${prodId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Product Delete successfully")
        await mainCtx.fetchProductData();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
              <button onClick={() => handleEditClick(item)}>
                <FiEdit />
              </button>
              <button onClick={() => prodDeleteHandler(item.id)}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
      </>

      
      {showAddProductModal && (
        <AddProductModal
          onClose={handleCloseAddProdModal}
          isEditMode={isEditMode}
          productData={currentProduct}
          onSubmit={mainCtx.fetchProductData} // Refresh the product data after add/edit
        />
      )}
    </div>
  );
};

export default ProdDashboard;
