import '../index.css';
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="col-lg-12 col-sm-12 footer bg-white container mt-5 justify-content-around">
      <div className="row">
        <div className="">
          <div className="bookgnosis-block d-flex flex-column align-items-left mb-4">
            <img src="/public/BookGnosis-lg.png" alt="BookGnosis" className="img-fluid" style={{ height: '30px', width: 'auto' }} />
            <p className="text-muted mb-4 text-start">Welcome to our book reading app.</p>
            <div className="social-icons d-flex flex-row text-start justify-content-around">
              <a href="https://www.facebook.com" alt="Facebook" style={{ color: 'blue' }}>
                <BsFacebook size={32} />
              </a>
              <a href="https://www.twitter.com" alt="Twitter" style={{ color: 'black' }}>
                <FaSquareXTwitter size={32} />
              </a>
              <a href="https://www.instagram.com" alt="Instagram" style={{ color: '#E4405F' }}>
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className='row'>
          <div className="col-lg-4">
            <h5 className="maroon">About</h5>
            <ul className="list-unstyled text-start text-muted">
              <li><a href="/about">Our Team</a></li>
              <li><a href="/mission">Our Mission</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="maroon">Discover</h5>
            <ul className="list-unstyled text-start text-muted">
              <li>Authors</li>
              <li>Genres</li>
              <li>Popular Books</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="maroon">Support</h5>
            <ul className="list-unstyled text-start text-muted">
              <li>Help Centre</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
