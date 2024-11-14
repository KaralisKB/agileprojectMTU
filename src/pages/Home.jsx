import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';
import Countdown from '../components/Countdown';
import BookCard from '../components/BookCard';

const Home = () => {
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
        <button className="cta-button primary-button">Book Tickets</button>
        <Link to="/about">
        <button className="cta-button secondary-button">Learn More</button>
        </Link>
      </div>


      {/* Featured Books Section */}
      <div className="featured-section">
        <h2 className="featured-title">Featured Books</h2>
        <p>Click to learn more! </p>
        <div className="book-grid">
          <BookCard
            title="Book Title 1"
            author="Author 1"
            description="This is a wonderful book that discusses the importance of creativity in daily life."
          />
          <BookCard
            title="Book Title 2"
            author="Author 2"
            description="A gripping novel that explores the complexities of human emotions and relationships."
          />
          <BookCard
            title="Book Title 3"
            author="Author 3"
            description="An insightful guide into the world of literature and its influence on culture."
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <Testimonial />

    </div>
  );
};

export default Home;
