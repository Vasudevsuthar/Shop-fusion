import React, { useContext, useRef, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";
import MainContext from "../store/main-context";

const AddProductModal = ({ onClose, isEditMode, productData, onSubmit }) => {
  const productNameRef = useRef();
  const productImageRef = useRef();
  const productPriceRef = useRef();
  const specificCategorieRef = useRef();
  const productCategoryRef = useRef();
  const productDiscRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEditMode && productData) {
      productNameRef.current.value = productData.name;
      productImageRef.current.value = productData.image;
      productPriceRef.current.value = productData.price;
      specificCategorieRef.current.value = productData.specificCategorie;
      productCategoryRef.current.value = productData.category;
      productDiscRef.current.value = productData.description;
    }
  }, [isEditMode, productData]);

  const addOrEditProductHandler = (e) => {
    e.preventDefault();

    const newProd = {
      name: productNameRef.current.value,
      image: productImageRef.current.value,
      price: productPriceRef.current.value,
      category: productCategoryRef.current.value,
      specificCategorie: specificCategorieRef.current.value,
      description: productDiscRef.current.value,
    };

    if (!newProd.name || !newProd.image || !newProd.price || !newProd.category || !newProd.specificCategorie || !newProd.description) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        const url = isEditMode 
          ? `https://shop-fushion-default-rtdb.firebaseio.com/productData/${productData.id}.json`
          : "https://shop-fushion-default-rtdb.firebaseio.com/productData.json";

        const method = isEditMode ? "PUT" : "POST";

        const res = await fetch(url, {
          method: method,
          body: JSON.stringify(newProd),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const data = await res.json();
          let errorMessage = isEditMode ? "Edit Product failed" : "Add Product failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message; 
          }
          throw new Error(errorMessage);
        }

        const data = await res.json();
        toast.success(isEditMode ? "Product Edited successfully" : "Product Added successfully");
        onSubmit();
        onClose();
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? "Edit Product" : "Add Product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Control
              type="text"
              placeholder="Enter product name"
              ref={productNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productImage">
            <Form.Control
              type="text"
              placeholder="Enter product Image URL"
              ref={productImageRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Control
              type="number"
              placeholder="Enter product price"
              ref={productPriceRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productCategory">
            <Form.Select ref={productCategoryRef}>
              <option value="">Select Product Category</option>
              <option value="electronics">Electronics</option>
              <option value="man">Man</option>
              <option value="women">Women</option>
              <option value="mobile">Mobile</option>
              <option value="kids">Kids</option>
              <option value="home">Home</option>
              <option value="books">Books</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="specificCategory">
            <Form.Select ref={specificCategorieRef}>
              <option value="">Select Specific Category</option>
              <option value="exclusive">Exclusive Products</option>
              <option value="fashion">Fashion Products</option>
              <option value="featured">Featured Products</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Control
              type="text"
              placeholder="Enter product description"
              ref={productDiscRef}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={addOrEditProductHandler}>
          {isLoading ? <Loader /> : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
