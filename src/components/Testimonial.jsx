import React, { useEffect, useRef } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is in view
      }
    );

    const cards = testimonialRef.current.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="testimonial-section" ref={testimonialRef}>
      <h2 className="testimonial-title">What Our Visitors Say</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p>"This book fair is an incredible experience for book lovers. I discovered so many new authors!"</p>
          <h3>- Jane Doe</h3>
        </div>
        <div className="testimonial-card">
          <p>"I loved the art gallery and the atmosphere. I can’t wait for the next fair!"</p>
          <h3>- John Smith</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
