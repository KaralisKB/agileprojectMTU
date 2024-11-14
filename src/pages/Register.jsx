import React, { useState } from 'react';
import './Register.css';
import api from '../api/axiosInstance';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    booth: '',
  });
  const [role, setRole] = useState('Visitor');
  const [ message, setMessage] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      type_user_id: formData.role === 'Visitor' ? 3 : formData.role === 'Admin' ? 1 : 2,
      ...(formData.role === 'Exhibitor' && { company: formData.company, booth: formData.booth})
    };

    try {
      const response = await api.post('/register-user', payload);
      if (response.status === 200) {
        setMessage('Registration Succesful');
      }
    } catch (error) {
      setMessage('Registration failed: ' + (error.response?.data || 'Unknown error'));
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Become a member!</h2>
      <form className="register-form" onSubmit={handleSubmit}>

        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="form-group">
          <label htmlFor="role">Register as</label>
          <select id="role" name="role" value={role} onChange={handleRoleChange}>
            <option value="Visitor">Visitor</option>
            <option value="Admin">Admin</option>
            <option value="Exhibitor">Exhibitor</option>
          </select>
        </div>

        {/* Additional Fields for Exhibitors */}
        {role === 'Exhibitor' && (
          <>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="booth">Booth Preference</label>
              <input
                type="text"
                id="booth"
                name="booth"
                value={formData.booth}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button type="submit" className="register-button">Register</button>
      </form>

      {/*Message for succes or fAilure*/}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
