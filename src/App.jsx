import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Default Header
import LoggedInHeader from './components/LoggedInHeader'; // New LoggedInHeader
import Footer from './components/Footer';

import Home from './pages/Home';
import Visitor from './pages/Visitor';
import Exhibitor from './pages/Exhibitor';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';

import AdminDashboard from './pages/AdminDashboard';
import ManageExhibitors from './pages/ManageExhibitors';
import ManageBooks from './pages/ManageBooks';
import ManageStalls from './pages/ManageStalls';

import ExhibitorDashboard from './pages/ExhibitorDashboard';
import ExhibitorBooks from './pages/ExhibitorBooks';
import BookStall from './pages/BookStall';
import ExhibitorRegister from './pages/ExhibitorRegister';

import VisitorDashboard from './pages/VisitorDashboard';
import RulesAndRegulations from './pages/RulesAndRegulations';
import TicketBooking from './pages/TicketBooking';
import ExhibitorList from './pages/ExhibitorList';
import ExhibitorDetails from './pages/ExhibitorDetails';
import BookList from './pages/BookList';

import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Check if the user is logged in and their role
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    setIsLoggedIn(!!token); // Convert token to boolean
    setUserRole(role);
  }, []);

  const handleLogin = (role) => {
    // Update state upon login
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    // Clear auth-related data and update state
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <LoggedInHeader role={userRole} onLogout={handleLogout} />
      ) : (
        <Header />
      )}
      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/exhibitor" element={<Exhibitor />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLogin={(role) => handleLogin(role)} />}
          />

          {/* Protected Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/visitor-dashboard"
            element={
              <ProtectedRoute role="visitor">
                <VisitorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exhibitor-dashboard"
            element={
              <ProtectedRoute role="exhibitor">
                <ExhibitorDashboard />
              </ProtectedRoute>
            }
          />

          {/* Exhibitor-Specific Pages */}
          <Route path="/exhibitor/books" element={<ExhibitorBooks />} />
          <Route path="/exhibitor/register" element={<ExhibitorRegister />} />
          <Route path="/exhibitor/book-stall" element={<BookStall />} />

          {/* Admin-Specific Pages */}
          <Route path="/admin/books" element={<ManageBooks />} />
          <Route path="/admin/stalls" element={<ManageStalls />} />
          <Route path="/admin/exhibitors" element={<ManageExhibitors />} />

          {/* Visitor-Specific Pages */}
          <Route path="/visitor/rules" element={<RulesAndRegulations />} />
          <Route path="/visitor/ticket-booking" element={<TicketBooking />} />
          <Route path="/visitor/exhibitor-list" element={<ExhibitorList />} />
          <Route
            path="/visitor/exhibitor-list/:id"
            element={<ExhibitorDetails />}
          />
          <Route path="/visitor/book-search" element={<BookList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // import Home from './pages/Home';
// // import Visitor from './pages/Visitor';
// // import Exhibitor from './pages/Exhibitor';
// // import About from './pages/About';
// // import './App.css';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/visitor" element={<Visitor />} />
// //         <Route path="/exhibitor" element={<Exhibitor />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // };

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header'; // Ensure Header is imported
// import Footer from './components/Footer'; // Ensure Footer is imported
// import Home from './pages/Home';
// import Visitor from './pages/Visitor';
// import Exhibitor from './pages/Exhibitor';
// import About from './pages/About'; // Import About page
// import Register from './pages/Register'; // Import Register page
// import Login from './pages/Login';

// import AdminDashboard  from './pages/AdminDashboard';
// import ManageExhibitors from './pages/ManageExhibitors';
// import ManageBooks from './pages/ManageBooks';
// import ManageStalls from './pages/ManageStalls';


// import ExhibitorDashboard from './pages/ExhibitorDashboard';
// import ExhibitorBooks from './pages/ExhibitorBooks';
// import BookStall from './pages/BookStall';
// import ExhibitorRegister from './pages/ExhibitorRegister';

// import VisitorDashboard from './pages/VisitorDashboard';
// import RulesAndRegulations from './pages/RulesAndRegulations';
// import TicketBooking from './pages/TicketBooking';
// import ExhibitorList from "./pages/ExhibitorList";
// import ExhibitorDetails from "./pages/ExhibitorDetails";
// import BookList from './pages/BookList';


// import ProtectedRoute from './components/ProtectedRoute';


// const App = () => {
//   return (
//     <Router>
//       <Header /> 
//       <div className="main-content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/visitor" element={<Visitor />} />
//         <Route path="/exhibitor" element={<Exhibitor />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/register" element={<Register />} />
//         <Route path='/login' element={<Login />} /> 
//         <Route path='/admin-dashboard' element={<ProtectedRoute role ='admin'><AdminDashboard /></ProtectedRoute>}/>
//         <Route path='/visitor-dashboard' element={<ProtectedRoute role ='visitor'><VisitorDashboard /></ProtectedRoute>}/>
//         <Route path='/exhibitor-dashboard' element={<ProtectedRoute role ='exhibitor'><ExhibitorDashboard /></ProtectedRoute>}/>
//         <Route path='/exhibitor/books' element={<ExhibitorBooks />} />
//         <Route path='/exhibitor/register' element={<ExhibitorRegister />} />
//         <Route path='/exhibitor/book-stall' element={<BookStall />} />
//         <Route path='/admin/books' element={<ManageBooks />} />
//         <Route path='/admin/stalls' element={<ManageStalls />} />
//         <Route path='/admin/exhibitors' element={<ManageExhibitors />} />
//         <Route path='/visitor/rules' element={<RulesAndRegulations />} />
//         <Route path='/visitor/ticket-booking' element={<TicketBooking />} />
//         <Route path='/visitor/exhibitor-list' element={<ExhibitorList />} />
//         <Route path='/visitor/exhibitor-list/:id' element={<ExhibitorDetails />} />
//         <Route path='/visitor/book-search' element={<BookList />} />
        

//       </Routes>
//       </div>
//       <Footer /> 
//     </Router>
//   );
// };

// export default App;
