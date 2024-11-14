import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h3>Stay Updated!</h3>
          <p>Sign up for our newsletter to receive the latest updates on the book fair.</p>
          <div className="footer-newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <p className="footer-text">
          Follow us on social media for updates and news!
          <br />
          © 2024 International Book Fair. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
