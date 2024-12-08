import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import Countdown from '../components/Countdown';
import BookCard from '../components/BookCard';

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the International Book Fair!</h1>
      <p className="home-description">
        Join us for an amazing experience of books, seminars, and cultural activities.
      </p>

      {/* Countdown Timer */}
      <Countdown />

      {/* Call to Action Section */}
      <div className="cta-section">
        <button className="cta-button primary-button" onClick={togglePopup}>
          Schedule
        </button>
        <Link to="/about">
          <button className="cta-button secondary-button">Learn More</button>
        </Link>
      </div>

      {isPopupVisible && (
  <div className="popup-overlay">
    <div className="popup">
      <h2>Schedule of Events</h2>
      <p><strong>Date:</strong> 18th July - 22nd July</p>
      <p><strong>Location:</strong> Pairc Ui Chaoimh, Cork, Ireland & Cork City Hall, Cork, Ireland</p>
      <p><strong>Opening Times:</strong> 8:00 AM - 9:00 PM</p>
      <p><strong>Note:</strong> Exhibitor stalls are open all day long.</p>
      <h3>Events:</h3>
      <ul>
        <li><strong>Organiser Welcome Speech:</strong> 9:00 AM - Main Hall</li>
        <li><strong>Writing Workshops:</strong> 10:30 AM - 2nd Floor (Conference Room)</li>
        <li><strong>Children's Storytelling Hour:</strong> 11:00 AM - Kids Hall</li>
        <li><strong>Book Launch:</strong> 12:30 PM - Main Hall</li>
        <li><strong>Seminars on Modern Literature:</strong> 2:00 PM - Seminar Room (3rd Floor)</li>
        <li><strong>Cooking with Authors:</strong> 3:00 PM - Food Court Area</li>
        <li><strong>Autograph Sessions with Authors:</strong> 3:30 PM - Signing Booths (1st Floor)</li>
        <li><strong>Poetry Reading:</strong> 4:00 PM - Outdoor Garden Stage</li>
        <li><strong>Meet the Publisher:</strong> 5:00 PM - Publishers' Lounge</li>
        <li><strong>Panel Discussion: Future of Publishing:</strong> 6:00 PM - Seminar Room</li>
        <li><strong>Networking Event for Professionals:</strong> 7:00 PM - VIP Lounge</li>
        <li><strong>Exclusive Book Fair Quiz:</strong> 7:30 PM - Main Hall</li>
      </ul>
      <button className="cta-button secondary-button" onClick={togglePopup}>
        Close
      </button>
    </div>
  </div>
)}


      {/* Featured Books Section */}
      <div className="featured-section">
        <h2 className="featured-title">Featured Books</h2>
        <p>Click to learn more! </p>
        <div className="book-grid">
        <BookCard
    title="Exploring Academic Excellence"
    author="Dr. John Cambridge"
    description="A comprehensive guide to achieving academic excellence in modern education systems."
  />
  <BookCard
    title="Argentine Cuisine: A Culinary Journey"
    author="Maria Lopez"
    description="A flavorful journey through Argentina's iconic dishes and culinary history."
  />
  <BookCard
    title="Cultural Heritage of Taipei"
    author="Dr. Ming-Yu Chen"
    description="A celebration of the rich cultural heritage and traditions of Taipei."
  />
    <BookCard
    title="The Science of Learning"
    author="Prof. Emily Richards"
    description="An in-depth analysis of the processes and methodologies behind effective learning."
  />
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonial />
    </div>
  );
};

export default Home;
