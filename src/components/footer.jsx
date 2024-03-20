import '../index.css';
import bookgnosis from '/Logo-xsml.png'
import SearchBar from './SearchBarfooter';


const Footer = () => {
  return (
    <footer className="footer bg-white container">
      <div className="row">
        <div className="col-md-6">
          <div className="bookgnosis-block d-flex flex-column align-items-left mb-4">
            <h4 className="maroon mb-3">BOOKNOSIS</h4>
            {/* <img src={bookgnosis} alt="" /> */}
            <p className="text-muted mb-4 text-start">Welcome to our book reading app.</p>
            <div className="social-icons d-flex flex-row text-start">
              <a href="https://www.facebook.com" className="me-3">
                <img src='facebook_icon.png' alt="Facebook" className="img-fluid smlicon" />
              </a>
              <a href="https://www.twitter.com" className="me-3">
                <img src='xtwitter_icon.png' alt="Twitter/X" className="img-fluid smlicon" />
              </a>
              <a href="https://www.instagram.com">
                <img src='instagram_icon.png' alt="Instagram" className="img-fluid smlicon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className='row'>
          <div className="col">
            <h5 className="maroon">About</h5>
            <ul className="list-unstyled text-start text-muted">
              <li><a href="/about">Our Team</a></li>
              <li>Our Mission</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="maroon">Discover</h5>
            <ul className="list-unstyled text-start text-muted">
              <li>Authors</li>
              <li>Genres</li>
              <li>Popular Books</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="maroon">Support</h5>
            <ul className="list-unstyled text-start text-muted">
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
