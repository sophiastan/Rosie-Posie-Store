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
      category: "",
      price: ""
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

    this.setState({
      [name]: val
    });
    
    // TODO: price does not update, sets to 0.00
    console.log("onProductChange: ", this.state.price);
  }

  updateProduct = (title, description, category, price) => {
    this.state.productService.updateProduct(title, description, category, price);
    console.log(price);
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
                    // value={this.state.product.body_html}
                    onChange={this.onProductChange}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="browser-default" 
                    name="category" 
                    // value={this.state.product_type}
                    onChange={this.onProductChange}>
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
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    // value={this.state.product.variants[0].price}
                    onChange={this.onProductChange}
                  />
                </div>
                <Link to="/" className="red btn-flat white-text">Back</Link>
                <Link to="/">
                  <button
                    type="submit"
                    className="teal btn-flat white-text right"
                    onClick={() => this.updateProduct(
                      this.state.product_id,
                      this.state.title, 
                      this.state.description, 
                      this.state.category, 
                      this.state.price
                    )}>
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