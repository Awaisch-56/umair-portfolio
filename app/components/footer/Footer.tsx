"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaBehance, FaFacebookF } from "react-icons/fa";
import NavLink from "../navLink/NavLink";
import { navbarLinks } from "../navbar/Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-social-links">
          <a
            href="https://www.behance.net/chansong5"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon email"
          >
            <FaBehance />
          </a>
          <a
            href="https://www.linkedin.com/in/umair-akhtar-69b061194/"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:umairakhtar380@gmail"
            className="social-icon email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083355917686"
            target="_blank"
            rel="nooper noreferrer"
            className="social-icon email"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <ul className="footer-nav-links">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} isFooter={true} />
              </li>
            ))}
          </ul>
        </div>

        {/* Rights Reserved */}
        <p className="footer-rights">
          {" "}
          &copy; {new Date().getFullYear()} Umair Akhtar | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
