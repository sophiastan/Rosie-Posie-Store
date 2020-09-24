import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="brand-logo">
            <i className="material-icons">Home</i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;