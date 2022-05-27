import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarLoggedIn.css";

export const NavbarLoggedIn: React.FC = () => {
  const navigator = useNavigate();

  const handleLogoutNavigate = () => {
    navigator("/*");
  };

  return (
    <div>
      <nav className="navbar-loggedin">
        <h2>
          <Link to={"/"} className="logo">
            Film<span>Finder</span>
          </Link>
        </h2>

        <ul>
          <li className="nav-list">
            <Link to={"/"} className="nav-item">
              Home
            </Link>
          </li>

          <li className="nav-list">
            <Link to={"/search"} className="nav-item">
              Search
            </Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogoutNavigate}>
          Logout
        </button>
      </nav>
    </div>
  );
};
