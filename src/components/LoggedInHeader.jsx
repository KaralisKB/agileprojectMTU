import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const LoggedInHeader = ({ onLogout }) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole"); // Get the user role from local storage

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");

    // Notify the parent component (App.js) about the logout
    onLogout();

    // Navigate to the home page after logout
    navigate("/");
  };

  const getDashboardPath = () => {
    // Determine the dashboard path based on user role
    if (role === "admin") return "/admin-dashboard";
    if (role === "exhibitor") return "/exhibitor-dashboard";
    if (role === "visitor") return "/visitor-dashboard";
    return "/";
  };

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
          <Link to={getDashboardPath()} className="nav-link">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="nav-link logout-button">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default LoggedInHeader;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Header.css';

// const LoggedInHeader = ({ onLogout }) => {
//   const navigate = useNavigate();
//   const role = localStorage.getItem('userRole'); // Get the user role from local storage

//   const handleLogout = () => {
//     // Clear authentication data
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('isLoggedIn');

//     // Notify the parent component (App.js) about the logout
//     onLogout();

//     // Navigate to the home page after logout
//     navigate('/');
//   };

//   const getDashboardPath = () => {
//     // Determine the dashboard path based on user role
//     if (role === 'admin') return '/admin-dashboard';
//     if (role === 'exhibitor') return '/exhibitor-dashboard';
//     if (role === 'visitor') return '/visitor-dashboard';
//     return '/';
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <h1 className="header-title">International Book Fair</h1>
//         <nav className="header-nav">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to={getDashboardPath()} className="nav-link">Dashboard</Link>
//           <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default LoggedInHeader;
