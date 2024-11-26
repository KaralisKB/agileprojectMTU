import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1 className="admin-dashboard-title">Welcome to Admin Dashboard</h1>
      <div className="admin-dashboard-navigation">
        <Link to="/admin/exhibitors" className="admin-link">Manage Exhibitors</Link>
        <Link to="/admin/books" className="admin-link">Manage Books</Link>
        <Link to="/admin/stalls" className="admin-link">Manage Stalls</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
