import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Rizky Al Farid Hafizh, a passionate Software Engineer. 
          I love creating beautiful and functional digital experiences.
        </p>
        <Link to="/" className="btn">View My Work</Link>
      </div>
    </div>
  );
};

export default HomePage;
