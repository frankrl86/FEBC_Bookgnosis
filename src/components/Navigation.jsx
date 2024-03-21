import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="public/BookGnosis-lg.png" alt="BookGnosis" className="img-fluid"  style={{ height: '30px', width: 'auto'}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item ">
              <Link className="nav-link shadow maroon" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link shadow maroon" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link shadow maroon" to="/author">Authors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link shadow maroon" to="/genre">Genre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link shadow bold maroon" to="/signUp">Sign In / Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
