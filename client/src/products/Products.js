import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productService: new ProductService(),
      productList:[]
    }
  }

  async componentDidMount() {
    let productList = await this.state.productService.getProductList();

    if (productList) {
      this.setState({
        productList: productList
      })
    }
  }

  // renderProductList() {
  //   return this.state.productList.reverse().map(product => {
  //     return (
  //       <div className="card darken-1" key={product.id}>
  //         <div className="card-content">
  //           <span className="card-title">{product.title}</span>
  //         </div>
  //       </div>
  //     )
  //   })
  // }
  render() {
    return (
      // <div>
      //   {this.renderProductList()}
      // </div>
      this.state.productList ? this.state.productList.map(product => {
        return(
          <div className="card darken-1" key={product.id}>
          <div className="card-content">
             <span className="card-title">{product.title}</span>
           </div>
         </div>
        )
      }) : null
    )
  }
}

export default Products;