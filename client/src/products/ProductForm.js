import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

export const ProductForm = () => {
  const productService = new ProductService();
  const [ clicked, setClicked ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ type, setType ] = useState("");
  const [ price, setPrice ] = useState("");

  useEffect(() => {
    if (clicked) {
      productService.postProduct(title, description, type, price);
    }
  })
  
  return (
    <div className="container">
      <h1 className="text-center mt-5">Add Product</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Type"
            onChange={e => setType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Price"
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <Link to="/" className="red btn-flat white-text">Cancel</Link>
        <Link to={"/product"}>
          <button
            type="button"
            className="teal btn-flat right white-text"
            onClick={() => setClicked(true)}
          >Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ProductForm;