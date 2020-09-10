import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../products/Products';

const Home = () => {
  return (
    <div>
      <h1>
        Rosie Posie Store!
      </h1>
      <Products />
      <div className="fixed-action-btn">
        <Link to="/product/new" className="btn-floating btn-large blue">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Home;