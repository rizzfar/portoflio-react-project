import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <ul >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/education">Education</Link>
      </li>
    </ul>
  )
}

export default NavLink;