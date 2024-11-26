import React from 'react';
import { Link } from 'react-router-dom';

const VisitorDashboard = () => {
  return (
    <div className="visitor-dashboard">
      <h1>Welcome to the Visitor Dashboard</h1>
      <ul>
        <li><Link to="/visitor/ticket-booking">Book Admission Tickets</Link></li>
        <li><Link to="/visitor/exhibitor-list">View Exhibitors</Link></li>
        <li><Link to="/visitor/rules">Rules and Regulations</Link></li>
        <li><Link to="/visitor/book-search">Browse and Search Books</Link></li>
      </ul>
    </div>
  );
};

export default VisitorDashboard;