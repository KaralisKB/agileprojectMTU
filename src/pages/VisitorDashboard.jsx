import React from 'react';
import { Link } from 'react-router-dom';
import './VisitorDashboard.css';

const VisitorDashboard = () => {
  return (
    <div className="visitor-dashboard">
      <h1 className="dashboard-title">Welcome to the Visitor Dashboard</h1>
      <div className="dashboard-options">
        <div className="option-card">
          <h2>Book Admission Tickets</h2>
          <Link to="/visitor/ticket-booking" className="action-button">
            Book Now
          </Link>
        </div>
        <div className="option-card">
          <h2>View Exhibitors</h2>
          <Link to="/visitor/exhibitor-list" className="action-button">
            Explore
          </Link>
        </div>
        <div className="option-card">
          <h2>Rules and Regulations</h2>
          <Link to="/visitor/rules" className="action-button">
            View Rules
          </Link>
        </div>
        <div className="option-card">
          <h2>Browse and Search Books</h2>
          <Link to="/visitor/book-search" className="action-button">
            Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisitorDashboard;
