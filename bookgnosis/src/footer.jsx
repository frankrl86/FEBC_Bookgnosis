import React from 'react';
import './App.css';
import facebookIcon from './assets/facebook_icon.png';
import twitterIcon from './assets/xtwitter_icon.png';
import instagramIcon from './assets/instagram_icon.png';

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bookgnosis-block d-flex flex-column align-items-left mb-4">
              <h4 className="text-muted mb-3">Bookgnosis</h4>
              <p className="text-muted mb-4">Welcome to our book reading app.</p>
              <div className="social-icons d-flex flex-row">
                <a href="https://www.facebook.com" className="me-3">
                  <img src={facebookIcon} alt="Facebook" className="img-fluid smlicon" />
                </a>
                <a href="https://www.twitter.com" className="me-3">
                  <img src={twitterIcon} alt="Twitter/X" className="img-fluid smlicon" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={instagramIcon} alt="Instagram" className="img-fluid smlicon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 footer-right">
            <div className="footer-column">
              <h5 className="text-muted">About</h5>
              <ul className="list-unstyled text-start text-muted">
                <li>About</li>
                <li>Our Team</li>
                <li>Our Mission</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="text-muted">Discover</h5>
              <ul className="list-unstyled text-start text-muted">
                <li>Discover</li>
                <li>Authors</li>
                <li>Genres</li>
                <li>Popular Books</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5 className="text-muted">Support</h5>
              <ul className="list-unstyled text-start text-muted">
                <li>Support</li>
                <li>Help Centre</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
