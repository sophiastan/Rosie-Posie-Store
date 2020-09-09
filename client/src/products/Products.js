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

    console.log(productList);
    if (productList) {
      this.setState({
        productList: productList
      })
      console.log(productList)
    }
  }

  // renderProductList() {
  //   const productList = this.state.productList;
  //   return productList.map(product => {
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
      null
      // <div>
      //   {this.renderProductList()}
      // </div>
      // this.state.productList ? this.state.productList.map(product => {
      //   return(
      //     <div className="card darken-1" key={product.id}>
      //     <div className="card-content">
      //        <span className="card-title">{product.title}</span>
      //      </div>
      //    </div>
      //   )
      // }) : null
    )
  }
}

export default Products;