import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('July 18, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2 className="featured-title">Event Countdown</h2>
      <div className="timer">
        <span>{timeLeft.days || '0'} Days </span>
        <span>{timeLeft.hours || '0'} Hours </span>
        <span>{timeLeft.minutes || '0'} Minutes </span>
        <span>{timeLeft.seconds || '0'} Seconds </span>
      </div>
    </div>
  );
};

export default Countdown;
