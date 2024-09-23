import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-about-items">
            <h2>About</h2>
            <Link to="/AboutMe">Resume</Link>
          </div>
          <div className="footer-contact-items">
            <h2>Contact</h2>
            <Link to="/Contact">Contact Daniel</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-social-items">
            <h2>Social </h2>
            <a href="https://www.instagram.com/vividly_videography">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=100041671745609">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/1danielrivera/">LinkedIn</a>
            <div className="social-icons">
              <a
                className="social-icon-link facebook"
                href="https://www.facebook.com/profile.php?id=100041671745609"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/vividly_videography"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="social-icon-link linkedin"
                href="https://www.linkedin.com/in/1danielrivera/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="Tech-Dan-logos_transparent.png"
                alt="background"
                style={{ width: "120px", height: "120px" }}
              />
            </Link>
          </div>
        </div>
      </section>

      <small className="website-rights">
        &copy; {new Date().getFullYear()} Copyright: Daniel Rivera
      </small>
    </div>
  );
}

export default Footer;
