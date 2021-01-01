import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(59, 68, 75)" }}>
      <Link to="/" className="navbar-brand" id="navbar-home">
        JobHunt
      </Link>

      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/saved" className="navbar-brand">
              Saved
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="navbar-brand">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
