import React from "react";
import { Link } from "react-router-dom";
import "./ExhibitorDashboard.css";

const ExhibitorDashboard = () => {
  return (
    <div className="exhibitor-dashboard">
      <h1 className="dashboard-title">Welcome to the Exhibitor Dashboard</h1>
      <div className="dashboard-options">
        <div className="option-card">
          <h2>Register as Exhibitor</h2>
          <Link to="/exhibitor/register" className="action-button">Register Now</Link>
        </div>
        <div className="option-card">
          <h2>Manage Your Books</h2>
          <Link to="/exhibitor/books" className="action-button">Manage Now</Link>
        </div>
        <div className="option-card">
          <h2>Book a Stall</h2>
          <Link to="/exhibitor/book-stall" className="action-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorDashboard;
