import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, role}) => {
    const userRole = localStorage.getItem('userRole');

    if (userRole !== role) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    role: PropTypes.node.isRequired,
}

export default ProtectedRoute;