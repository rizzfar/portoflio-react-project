import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Rizky Al Farid Hafizh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
