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
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Products;