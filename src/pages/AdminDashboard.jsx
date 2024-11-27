import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Welcome to the Admin Dashboard</h1>
      <div className="dashboard-options">
        <div className="option-card">
          <h2>Manage Exhibitors</h2>
          <Link to="/admin/exhibitors" className="action-button">Manage Now</Link>
        </div>
        <div className="option-card">
          <h2>Manage Books</h2>
          <Link to="/admin/books" className="action-button">Manage Now</Link>
        </div>
        <div className="option-card">
          <h2>Manage Stalls</h2>
          <Link to="/admin/stalls" className="action-button">Manage Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
