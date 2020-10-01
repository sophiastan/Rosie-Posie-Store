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
          {/* <div className="dropdown right">
            <a className="dropdown-toggle" data-toggle="dropdown" href="/">Dropdown
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="/">Item 1</a></li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;