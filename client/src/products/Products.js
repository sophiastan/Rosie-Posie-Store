import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productService: new ProductService()
    }
  }

  async componentDidMount() {
    let listResponse = await this.state.productService.getProductList();
    let productList = listResponse.products;

    this.setState({
      productList: productList
    })

    console.log("productList: ", this.state.productList);
  }

  deleteProduct = (id) => {
    this.state.productService.deleteProduct(id);
    console.log(this.state.productList);
  }
  
  render() {
    return (
      <div>
        {
          this.state.productList && 
          this.state.productList.map((product, index) =>
            <div className="card darken-1" key={index}>
              <div className="card-content">
                <span className="card-title"><b>{product.title}</b></span>
                <p>Description: {product.body_html}</p>
                <p>Type: {product.product_type}</p>
                {
                  product.variants.map((item, i) =>
                    <p key={i}>Price: {item.price}</p>
                  )
                }
                <button 
                  type="button"
                  className="red btn-flat white-text"
                  onClick={() => this.deleteProduct(product.id)}>Delete
                </button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Products;