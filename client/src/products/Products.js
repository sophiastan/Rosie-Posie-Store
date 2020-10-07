import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import { Link, Redirect } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super();

    this.state = {
      productService: new ProductService(),
      product_id: null,
      goBack: false
    }
  }

  async componentDidMount() {
    let listResponse = await this.state.productService.getProductList();
    let productList = listResponse.products;

    this.setState({
      productList: productList
    })
    console.log(this.state.productList);
  }

  deleteProduct = (id) => {
    this.state.productService.deleteProduct(id);
    alert(`Deleted ${id}!`);

    this.setState({
      product_id: id,
      goBack: true
    });
  }

  selectCat = (event) => {
    const category = event.target.value;

    this.setState({
      selectedCat: category
    });
    const filteredProducts = [];
    this.state.productList.map(product => {
      if (product.product_type === this.state.selectedCat) {
        filteredProducts.push(product);
      }
    });

    console.log(filteredProducts);
  }
  
  render() {
    console.log(this.state.selectedCat)
    if (this.state.goBack) {
      return (<Redirect to="/" />);
    }

    return (
      <div>
        <label>Category</label>
        <select className="browser-default" onChange={this.selectCat}>
          <option value="All">Show All</option>
          <option value="Drink">Drink</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="Toy">Toy</option>
          <option value="Technology">Technology</option>
          <option value="Electronics">Electronics</option>
        </select>
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