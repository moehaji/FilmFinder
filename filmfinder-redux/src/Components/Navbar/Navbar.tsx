import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="hero">
      <nav>
        <h2>
          <Link to={"/home"} className="logo">
            Film <span>Finder</span>
          </Link>
        </h2>

        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>

          <li>
            <Link to={"/search"}>Search</Link>
          </li>
        </ul>

        <button type="button">
          <Link to={"/login"} className="nav-login">
            Login
          </Link>
        </button>
      </nav>
    </div>
  );
};
