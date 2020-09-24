import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super();

    this.state = {
      productService: new ProductService(),
      product_id: null
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

  // TODO: needs to refresh after deleting product
  // static getDerivedStateFromProps(props, state) {
  //   if (props.product_id !== state.product_id) {
  //     return {
  //       product_id: props.product_id
  //     };
  //   }
  //   return null;
  // }

  deleteProduct = (id) => {
    this.state.productService.deleteProduct(id);
    alert(`Deleted ${id}!`);

    this.setState({
      product_id: id
    });
  }
  
  render() {
    return (
      <div>
        {
          this.state.productList && 
          this.state.productList.map((product, index) =>          
            <div className="card darken-1" key={index}>
              {/* {
                product.images.map((item, i) => 
                  <img className="card-img-top" key={i} src={item.src} alt="" />
                )
              } */}
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
                <Link 
                  to={`/product/${product.id}`} 
                  className="green btn-flat white-text right">Edit
                </Link>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Products;