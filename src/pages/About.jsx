import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* About Book Fair Section */}
      <section className="about-section">
        <h1 className="about-title">About the International Book Fair</h1>
        <p className="about-description">
          The International Book Fair is an annual cultural event held in Pairc Ui Chaoimh, Cork, Ireland & Cork City Hall, Cork, Ireland, once annually organized by the Enterprise Ireland and Higher Education Ireland, bringing together book enthusiasts, publishers, and renowned authors from around the world. This fair celebrates the world of literature, art, and cultural exchange, offering visitors the opportunity to discover new books, attend reading workshops, and participate in exciting seminars and book signing events. We aim to promote local reading culture and encourage a love for literature in all its forms.
        </p>
      </section>

      {/* Art Gallery Section */}
      <section className="art-gallery-section">
        <h2 className="section-title">Art Gallery</h2>
        <p className="section-description">
          Explore an inspiring art gallery featuring a collection of works from local and international artists. This section showcases artwork that connects deeply with literature and culture, enhancing the experience for all visitors.
        </p>
      </section>

      {/* Renowned Writers Section */}
      <section className="renowned-writers-section">
        <h2 className="section-title">Renowned Writers</h2>
        <p className="section-description">
          Meet and interact with celebrated authors who are attending the fair. From fiction writers to poets, the International Book Fair provides the chance to hear from and meet some of the most influential voices in the literary world.
        </p>
      </section>
    </div>
  );
};

export default About;
