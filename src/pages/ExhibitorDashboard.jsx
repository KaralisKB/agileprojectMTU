import React from "react";
import { Link } from "react-router-dom";
import "./ExhibitorDashboard.css";

const ExhibitorDashboard = () => {
  return (
    <div className="exhibitor-dashboard-container">
      <h1>Welcome to the Exhibitor Dashboarddfeefe</h1>
      <nav>
        <ul>
          <li>
            <Link to="/exhibitor/register">Register as Exhibitor</Link>
          </li>
          <li>
            <Link to="/exhibitor/books">Manage Your Books</Link>
          </li>
          <li>
            <Link to="/exhibitor/book-stall">Book a Stall</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ExhibitorDashboard;
