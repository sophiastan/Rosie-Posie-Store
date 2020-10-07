import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

class EditProduct extends Component {
  constructor(props) {
    super();

    this.state = {
      productService: new ProductService(),
      product_id: props.match.params.product_id
    }
  }

  async componentDidMount() {
    let product = await this.state.productService.getProduct(this.state.product_id);

    this.setState({
      product: product.product
    })

    console.log("product: ", this.state.product);
  }

  onProductChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    console.log("val: ", val);
    this.setState({
      [name]: val
    });
    return {
      [name]: val
    }
  }

  updateProduct = (product_id, title, description, category, price) => {
    console.log("title: ", title);
    console.log("description: ", description);
    console.log("category: ", category);
    console.log("price: ", price);
    this.state.productService.updateProduct(product_id, title, description, category, price);
    alert(`Updated ${title}!`);
  }

  render() {
    return (
      <div>
        {
          this.state.product ? (
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
                    defaultValue={this.state.product.title}
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
                    defaultValue={this.state.product.body_html}
                    onChange={this.onProductChange}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="browser-default" 
                    name="category" 
                    value={this.state.product.product_type}
                    onChange={this.onProductChange}>
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
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    defaultValue={this.state.product.variants[0].price}
                    onChange={this.onProductChange}
                  />
                </div>
                <Link to="/" className="red btn-flat white-text">Back</Link>
                <Link to="/">
                  <button
                    type="submit"
                    className="teal btn-flat white-text right"
                    onClick={() => { console.log("render price: ", this.state.price);
                      this.updateProduct(
                      this.state.product_id,
                      this.state.title, 
                      this.state.description, 
                      this.state.category, 
                      this.state.price
                    )}}>
                    Save
                  </button>
                </Link>
              </form>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default EditProduct;