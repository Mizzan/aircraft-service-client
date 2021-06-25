import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/Cart';

const Navbar = () => {
  const navItemStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  const items = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h4 className="text-light">Aricraft Service App</h4>

        <div id="navbarColor02">
          <ul className="d-flex flex-row text-light navbar-nav mx-2">
            <Link to="/" style={navItemStyle} className="nav-item mx-3">
              Home
            </Link>
            <Link to="/bookings" style={navItemStyle} className="nav-item">
              Bookings[{items.length}]
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
