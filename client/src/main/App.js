import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ProductForm from '../products/ProductForm';
import EditProduct from '../products/EditProduct';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/product/new" component={ProductForm} />
          <Route path="/product/:product_id" component={EditProduct} />
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
