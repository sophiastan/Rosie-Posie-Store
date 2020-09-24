import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

export const ProductForm = () => {
  const productService = new ProductService();
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ type, setType ] = useState("");
  const [ price, setPrice ] = useState("");
  // const [ src, setImage ] = useState("");

  const postProduct = (title, description, type, price) => {
    productService.postProduct(title, description, type, price);
    alert(`Added ${title}!`);
  }

  // TODO: needs to refresh after posting product
  
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
        {/* <div>
          <label>Image Link</label>
          <input 
            type="text"
            className="form-control"
            placeholder="Src"
            onChange={e => setImage(e.target.value)}
          />
        </div> */}
        <Link to="/" className="red btn-flat white-text">Back</Link>
        <Link to={"/product/new"}>
          <button
            type="submit"
            className="teal btn-flat right white-text"
            // onClick={() => setClicked(true)}
            onClick={() => postProduct(title, description, type, price)}
          >Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ProductForm;