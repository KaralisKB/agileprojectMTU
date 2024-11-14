import React, { useState } from 'react';
import './BookCard.css';

const BookCard = ({ title, author, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`book-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="book-card-inner">
        <div className="book-card-front">
          <h3 className="book-title">{title}</h3>
          <p className="book-author">by {author}</p>
        </div>
        <div className="book-card-back">
          <p className="book-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
