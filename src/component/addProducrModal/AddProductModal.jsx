import React, { useContext, useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";
import MainContext from "../store/main-context";

const AddProductModal = ({ onClose }) => {
  const productNameRef = useRef();
  const productImageRef = useRef();
  const productPriceRef = useRef();
  const productCategoryRef = useRef();
  const productDiscRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const mainCtx = useContext(MainContext);

  const addProductHandler = (e) =>{
    e.preventDefault();

    const newProd = {
      name: productNameRef.current.value,
      image: productImageRef.current.value,
      price: productPriceRef.current.value,
      category: productCategoryRef.current.value,
      description: productDiscRef.current.value,
    };

    if (!newProd.name || !newProd.image || !newProd.price || !newProd.category || !newProd.description) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://shop-fushion-default-rtdb.firebaseio.com/productData.json",
          {
            method: "POST",
            body: JSON.stringify(newProd),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const data = await res.json();
          let errorMessage = "Add Product failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message; 
          }
          throw new Error(errorMessage);
        }

        const data = await res.json();
        toast.success("Product Added successfully");
        mainCtx.fetchProductData();
        onClose()
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);

  }

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              ref={productNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product Image URl"
              ref={productImageRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              ref={productPriceRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productCategory">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              ref={productCategoryRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productCategory">
            <Form.Label>Product Discription</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product discription"
              ref={productDiscRef}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={addProductHandler}>
          {isLoading ? <Loader /> : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
