import {Link} from 'react-router-dom';

function SpecialNavbar(){
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <p className="navbar-brand mb-0" href="#">Welcome Back!!</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/purchase">Edit Account Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/purchase">Switch Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Your Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Return to All Games</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SpecialNavbar;