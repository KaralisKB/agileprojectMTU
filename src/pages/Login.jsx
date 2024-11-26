import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const selectUserRole = (type_user_id) => {
    switch (type_user_id) {
      case 1:
        return "admin";
      case 2:
        return "exhibitor";
      case 3:
        return "visitor";
      default:
        return "unknown";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://apibookfair.danielefarriciello.dev/api/v1/login", {
        method: "POST",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Save token and set headers for future requests
        localStorage.setItem("authToken", token);
        const userInfoResponse = await fetch("https://apibookfair.danielefarriciello.dev/api/v1/me", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });

        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json();
          const role = selectUserRole(userInfo.type_user_id);

          localStorage.setItem("userRole", role);
          localStorage.setItem("isLoggedIn", true);

          // Notify App about login
          onLogin();

          // Navigate to dashboard
          if (role === "admin") navigate("/admin-dashboard");
          if (role === "visitor") navigate("/visitor-dashboard");
          if (role === "exhibitor") navigate("/exhibitor-dashboard");
        }
      } else {
        setMessage("Login failed. Check your credentials.");
      }
    } catch (error) {
      setMessage("Login failed due to network issues.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import api from '../api/axiosInstance';
// import { useNavigate } from "react-router-dom"
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const selectUserRole = (type_user_id) => {
//       switch (type_user_id) {
//         case 1: 
//           return 'admin';
//         case 2:
//           return 'exhibitor';
//         case 3:
//           return 'visitor';
//         default:
//           return 'unknown';
//       }
//     }


//     const handleLogin = async (e) => {
//       e.preventDefault();
//       try {
//           const response = await api.post('/login', { email, password });
//           if (response.status === 200) {
//               setMessage('Login was successful');
//               const token = response.data.token; // or however the token is returned
              
//               // Set the token in the headers
//               api.defaults.headers.common['cookie'] = `myAuthCookie=${token}`
  
//               const userInfo = await api.get('/me'); // Now with the token attached
//               const { type_user_id } = userInfo.data;
  
//               const role = selectUserRole(type_user_id);
  
//               localStorage.setItem('userRole', role);
//               localStorage.setItem('isLoggedIn', true);
  
//               if (role === 'admin') {
//                   navigate('/admin-dashboard');
//               } else if (role === 'visitor') {
//                   navigate('/visitor-dashboard');
//               } else if (role === 'exhibitor') {
//                   navigate('/exhibitor-dashboard');
//               }
//           }
//       } catch (error) {
//           setMessage('Login failed: ' + (error.response?.data || 'Unknown error'));
//       }
//   };

//     return (
//         <div className="login-container">
//           <h2 className="login-title">Login</h2>
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-button">Login</button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       );
// }

// export default Login;