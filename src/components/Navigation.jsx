import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Bookgnosis</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <Link class="nav-link shadow" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow" to="/categories">Categories</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow" to="/author">Authors</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow" to="/genre">Genre</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link shadow bold" to="/signUp">Sign In / Sign Up</Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navigation;