import '../index.css';
import BookGnosisLg from '/Logo-small.png'
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container pt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="bookgnosis-block d-flex flex-column mb-4">
            <img src={BookGnosisLg} alt="BookGnosis" className="img-fluid align-self-center" style={{ width: '250px' }} />
            <p className="text-muted mb-4 align-self-center">Welcome to our book reading app.</p>
            <div className="d-flex justify-content-around">
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
        <div className="col-12 col-md-8 align-self-center">
          <div className="row d-flex justify-content-around">
            <div className="col-sm-12 col-md-4">
              <h5 className="maroon">About</h5>
              <ul className="list-unstyled text-start text-muted">
                <li><a href="/about" className="text-decoration-none">Our Team</a></li>
                <li><a href="/mission" className="text-decoration-none">Our Mission</a></li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4">
              <h5 className="maroon">Discover</h5>
              <ul className="list-unstyled text-start text-muted">
                <li>Authors</li>
                <li>Genres</li>
                <li>Popular Books</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4">
              <h5 className="maroon">Support</h5>
              <ul className="list-unstyled text-start text-muted">
                <li>Help Centre</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </footer>
  );
};

export default Footer;
