import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarLoggedIn.css";

export const NavbarLoggedIn: React.FC = () => {
  const navigator = useNavigate();

  const handleLogoutNavigate = () => {
    navigator("/*");
  };

  return (
    <header>
      <nav className="navbar">
        <h2>
          <Link to={"/home"} className="logo">
            Film<span>Finder</span>
          </Link>
        </h2>

        <ul className="nav-links">
          <li>
            <Link to={"/home"} className="nav-links">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/search"} className="nav-links">
              Search
            </Link>
          </li>
        </ul>
        <div className="join-box">
          <button className="logout-btn" onClick={handleLogoutNavigate}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};
