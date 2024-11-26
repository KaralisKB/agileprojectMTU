import React from "react";
import { useNavigate } from "react-router-dom";
import './LoggedInHeader.css';


const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const LoggedInHeader = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include", // Include cookies for authentication
      });

      if (!response.ok) {
        throw new Error("Failed to log out.");
      }

      // Clear local storage or cookies if necessary
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");

      // Navigate back to the home page
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <header className="logged-in-header">
      <div className="header-container">
        <button className="header-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className="header-button"
          onClick={() => navigate("/visitor-dashboard")} // Adjust dashboard route as needed
        >
          Dashboard
        </button>
        <button className="header-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default LoggedInHeader;
