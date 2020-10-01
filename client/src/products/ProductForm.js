import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

export const ProductForm = () => {
  const productService = new ProductService();
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ category, setCat ] = useState("");
  const [ price, setPrice ] = useState("");
  // const [ src, setImage ] = useState("");

  const postProduct = (title, description, category, price) => {
    productService.postProduct(title, description, category, price);
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
          <label>Category</label>
          <select className="browser-default" onChange={e => setCat(e.target.value)}>
            <option value="N/A">N/A</option>
            <option value="Drink">Drink</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Toy">Toy</option>
            <option value="Technology">Technology</option>
            <option value="Electronics">Electronics</option>
          </select>
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
            onClick={() => postProduct(title, description, category, price)}
          >Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ProductForm;