import React from "react";
import SearchJobs from "./SearchJobs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../src/index.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" id="navbar-home">
        JobHunt
      </Link>

      <button
        className="navbar-toggler"
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
        <SearchJobs />
      </div>
    </nav>
  );
}

export default Navigation;
