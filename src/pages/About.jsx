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
        <div className="art-gallery-grid">
          <div className="art-item">
            <img src="art1.jpg" alt="Abstract Art" />
            <p className="art-title">Abstract Visions</p>
            <p className="art-description">A stunning piece that delves into the complexities of human emotions.</p>
          </div>
          <div className="art-item">
            <img src="art2.jpg" alt="Literary Illustration" />
            <p className="art-title">Literary Landscapes</p>
            <p className="art-description">An artistic representation of literature-inspired worlds.</p>
          </div>
          <div className="art-item">
            <img src="art3.jpg" alt="Cultural Art" />
            <p className="art-title">Cultural Connections</p>
            <p className="art-description">An evocative depiction of the ties between art and culture.</p>
          </div>
        </div>
      </section>

      {/* Renowned Writers Section */}
      <section className="renowned-writers-section">
        <h2 className="section-title">Renowned Writers</h2>
        <p className="section-description">
          Meet and interact with celebrated authors who are attending the fair. From fiction writers to poets, the International Book Fair provides the chance to hear from and meet some of the most influential voices in the literary world.
        </p>
        <div className="writers-grid">
          <div className="writer-item">
            <img src="writer1.jpg" alt="Author 1" />
            <p className="writer-name">John Smith</p>
            <p className="writer-bio">A bestselling author known for his gripping thrillers and mystery novels.</p>
          </div>
          <div className="writer-item">
            <img src="writer2.jpg" alt="Author 2" />
            <p className="writer-name">Emma Johnson</p>
            <p className="writer-bio">An award-winning poet whose work explores the depth of human emotions.</p>
          </div>
          <div className="writer-item">
            <img src="writer3.jpg" alt="Author 3" />
            <p className="writer-name">Liam O'Connor</p>
            <p className="writer-bio">A celebrated novelist renowned for his rich storytelling and memorable characters.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
