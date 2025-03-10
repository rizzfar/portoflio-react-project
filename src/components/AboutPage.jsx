import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img 
          src="https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/435409904_2091173227926777_169040485424378800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JHaXkPoNv84Q7kNvgFNq8g5&_nc_oc=AdgdQeijIBRdxs7RElAu1nleuAzUd7j7hgT-jZWEhGM0v0tDNZj6XbhXyGDFCKH2bLl6EDcKRh6ppB2MLC8-ZO2-&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=AGiVczHZAB7cusdHjpjDWsj&oh=00_AYEfzifDLOum8Gh_0Gvr4u0vETk0HDJdafgclBdqfVUTTw&oe=67D46D59" nameProfile="Rizky Al Farid Hafizh" 
          alt="Profile" 
          className="profile-img"
        />
        <h1>About Me</h1>
        <p>
          Hi! I'm Rizky Al Farid Hafizh, a Software Engineer with a passion for 
          building sleek, functional, and modern digital experiences. I love working 
          with React, Laravel, and UI/UX design to craft intuitive user interfaces.
        </p>
        <Link to="/projects" className="btn">View My Projects</Link>
      </div>
    </div>
  );
};

export default AboutPage;
