// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Visitor from './pages/Visitor';
// import Exhibitor from './pages/Exhibitor';
// import About from './pages/About';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/visitor" element={<Visitor />} />
//         <Route path="/exhibitor" element={<Exhibitor />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure Header is imported
import Footer from './components/Footer'; // Ensure Footer is imported
import Home from './pages/Home';
import Visitor from './pages/Visitor';
import Exhibitor from './pages/Exhibitor';
import About from './pages/About'; // Import About page
import Register from './pages/Register'; // Import Register page
import Login from './pages/Login';

import AdminDashboard  from './pages/AdminDashboard';
import ManageExhibitors from './pages/ManageExhibitors';
import ManageBooks from './pages/ManageBooks';
import ManageStalls from './pages/ManageStalls';


import ExhibitorDashboard from './pages/ExhibitorDashboard';
import ExhibitorBooks from './pages/ExhibitorBooks';
import BookStall from './pages/BookStall';
import ExhibitorRegister from './pages/ExhibitorRegister';

import VisitorDashboard from './pages/VisitorDashboard';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <Router>
      <Header /> 
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/exhibitor" element={<Exhibitor />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/admin-dashboard' element={<ProtectedRoute role ='admin'><AdminDashboard /></ProtectedRoute>}/>
        <Route path='/visitor-dashboard' element={<ProtectedRoute role ='visitor'><VisitorDashboard /></ProtectedRoute>}/>
        <Route path='/exhibitor-dashboard' element={<ProtectedRoute role ='exhibitor'><ExhibitorDashboard /></ProtectedRoute>}/>
        <Route path='/exhibitor/books' element={<ExhibitorBooks />} />
        <Route path='/exhibitor/register' element={<ExhibitorRegister />} />
        <Route path='/exhibitor/book-stall' element={<BookStall />} />
        <Route path='/admin/books' element={<ManageBooks />} />
        <Route path='/admin/stalls' element={<ManageStalls />} />
        <Route path='/admin/exhibitors' element={<ManageExhibitors />} />

      </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
