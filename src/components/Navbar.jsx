import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/visitor">Visitor</Link></li>
        <li><Link to="/exhibitor">Exhibitor</Link></li>
        <li><Link to="/register" className="nav-link register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
