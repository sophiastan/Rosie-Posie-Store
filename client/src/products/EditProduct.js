import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

class EditProduct extends Component {
  constructor(props) {
    super();

    this.state = {
      productService: new ProductService(),
      product_id: props.match.params.product_id,
      title: "",
      description: "",
      type: "",
      price: ""
    }
  }

  async componentDidMount() {
    let product = await this.state.productService.getProduct(this.state.product_id);

    this.setState({
      product: product.product
    })

    console.log("product: ", this.state.product);
    console.log("product title: ", this.state.product.title);
  }

  onProductChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    this.setState({
      [name]: val
    });
    
    // TODO: price does not update, sets to 0.00
    console.log(this.state.price);
  }

  updateProduct = (title, description, type, price) => {
    this.state.productService.updateProduct(title, description, type, price);
    alert(`Updated ${title}!`);
  }

  render() {
    const product = this.state.product;
    console.log("render product: ", product);
    return (
      <div className="container">
        <h1 className="text-center mt-5">Edit Product</h1>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              // value={this.state.product.title}
              onChange={this.onProductChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input 
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={this.onProductChange}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input 
              type="text"
              name="type"
              className="form-control"
              placeholder="Type"
              onChange={this.onProductChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input 
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              onChange={this.onProductChange}
            />
          </div>
          <Link to="/" className="red btn-flat white-text">Back</Link>
          <Link to="/">
            <button
              type="submit"
              className="teal btn-flat white-text"
              onClick={() => this.updateProduct(
                this.state.product_id,
                this.state.title, 
                this.state.description, 
                this.state.type, 
                this.state.price
              )}>
              Save
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditProduct;