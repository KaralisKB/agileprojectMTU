import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoggedInHeader = ({ role, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage or cookies and trigger logout logic
    localStorage.removeItem('userRole');
    localStorage.removeItem('isLoggedIn');
    onLogout();
    navigate('/'); // Navigate to home page
  };

  const getDashboardLink = () => {
    switch (role) {
      case 'admin':
        return '/admin-dashboard';
      case 'exhibitor':
        return '/exhibitor-dashboard';
      case 'visitor':
        return '/visitor-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="header">
      <Link to={getDashboardLink()} className="header-link">
        Home Dashboard
      </Link>
      <button className="header-link" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default LoggedInHeader;
