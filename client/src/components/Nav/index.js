import React from "react";
import { Link, useLocation } from "react-router-dom";


function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" >
        Google Books
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className={location.pathname === "/" || location.pathname === "/search" ? "nav-item active" : "nav-item"}>
            <Link to="/search" className="nav-link">Search</Link>
          </li>
          <li className={location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
            <Link to="/saved" className="nav-link" >Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
