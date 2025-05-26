import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="intro-text">
          <h1>
            CAROLINE <br />
            <span className="highlight">GATWIRI</span>
          </h1>
          <h2>JUNIOR SOFTWARE ENGINEER</h2>
          <p className="email">gatwiri123caroline@gmail.com</p>
        </div>
        <div className="photo-container">
          <img
            src="src/assets/react.svg" // Replace with your own image URL or local image import
            alt="Caroline Gatwiri"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
