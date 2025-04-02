import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./home.css"; // Import external CSS file

const Home = () => {
  return (
    <section className="home-container">
      {/* Background Section */}
      <div className="home-background"></div>

      {/* Dark Overlay for Better Readability */}
      <div className="home-overlay"></div>

      {/* Content Section */}
      <div className="home-content">
        <h1 className="home-title">Welcome to Cakes Bricks</h1>
        <p className="home-description">
          Experience the taste of freshly baked cakes made with love and perfection.
        </p>

        {/* Button Wrapped in Link for Navigation */}
        <Link to="/cakes" className="home-button" aria-label="Order your cake">
          PLACE YOUR ORDER
        </Link>
      </div>
    </section>
  );
};

export default Home;
