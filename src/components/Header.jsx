import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-title">International Book Fair</h1>
          <div className="header-details">
            <p className="header-dates">18th July - 22nd July</p>
            <p className="header-location">Pairc Ui Chaoimh, Cork, Ireland & Cork City Hall, Cork, Ireland</p>
          </div>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div className="auth-links">
            <Link to="/login" className="nav-link auth-link">
              Login
            </Link>
            <Link to="/register" className="nav-link auth-link">
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <h1 className="header-title">International Book Fair</h1>
//         <nav className="header-nav">
//           <Link to="/" className="nav-link">Home</Link>
//           <div className="auth-links">
//             <Link to="/login" className="nav-link auth-link">Login</Link>
//             <Link to="/register" className="nav-link auth-link">Register</Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
