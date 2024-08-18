import React from "react"
import {Link} from "react-router-dom";

function Navbar(){
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Epic Discoveries</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">All Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shark/:id">Game Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about_me">About Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



