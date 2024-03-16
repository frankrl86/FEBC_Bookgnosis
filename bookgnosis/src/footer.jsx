import React from 'react'
import './App.css'
import facebookIcon from './assets/facebook_icon.png'
import twitterIcon from './assets/xtwitter_icon.png'
import instagramIcon from './assets/instagram_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Bookgnosis</h2>
        <p>Welcome to our book reading app.</p>
        <div className="social-icons d-flex">
          <a href="https://www.facebook.com" className="me-3">
            <img src={facebookIcon} alt="Facebook" className="img-fluid"/>
          </a>
          <a href="https://www.twitter.com" className="me-3">
            <img src={twitterIcon} alt="Twitter/X" className="img-fluid"/>
          </a>
          <a href="https://www.instagram.com">
            <img src={instagramIcon} alt="Instagram"  className="img-fluid"/>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>About</h3>
          <ul className="list-unstyled text-end">
            <li>About</li>
            <li>Our Team</li>
            <li>Our Mission</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Discover</h3>
          <ul className="list-unstyled text-end">
            <li>Discover</li>
            <li>Authors</li>
            <li>Genres</li>
            <li>Popular Books</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul className="list-unstyled text-end">
            <li>Support</li>
            <li>Help Centre</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;