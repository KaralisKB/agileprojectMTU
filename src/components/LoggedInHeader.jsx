import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedInHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Optional: Call the logout API to clear the session on the server
    try {
      const response = await fetch("https://apibookfair.danielefarriciello.dev/api/v1/logout", {
        method: "POST",
        credentials: "include", // Ensure the cookie is sent
      });
      if (response.ok) {
        console.log("Successfully logged out");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }

    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');

    // Redirect to the home page
    navigate('/');
    window.location.reload(); // Ensure the header switches back to the default one
  };

  return (
    <header className="logged-in-header">
      <div className="logo" onClick={() => navigate('/')}>International Book Fair</div>
      <nav className="nav-links">
        <button onClick={() => navigate('/')} className="nav-button">Home</button>
        <button onClick={handleLogout} className="nav-button">Log Out</button>
      </nav>
    </header>
  );
};

export default LoggedInHeader;
