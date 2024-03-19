import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import bookgnosis from '../assets/images/Logo.png'

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        <img src={bookgnosis} alt="" />
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item ">
            <Link class="nav-link shadow maroon" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link shadow maroon" to="/categories">Categories</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow maroon" to="/author">Authors</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow maroon" to="/genre">Genre</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow bold maroon" to="/signUp">Sign In / Sign Up</Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navigation;