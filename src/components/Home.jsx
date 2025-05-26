import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="intro-text">
          <h1>CAROLINE <br /> <span className="highlight">GATWIRI</span></h1>
          <h2>JUNIOR SOFTWARE ENGINEER</h2>
          <p className="email">gatwiri123caroline@gmail.com</p>
        </div>
        <div className="photo-container">
          <img
            src="/img/img1.jpg"
            alt="Caroline Gatwiri"
            className="profile-photo"
          />
        </div>
      </div>

      {/* Video Background */}
      {/* <video autoPlay muted loop playsInline className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </section>
  );
};

export default Home;