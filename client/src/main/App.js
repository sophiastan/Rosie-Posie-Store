import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Products from '../products/Products';
import ProductForm from '../products/ProductForm';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Products} />
          <Route path="/product/new" component={ProductForm} />
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
