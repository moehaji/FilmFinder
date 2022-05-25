import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../default-profile-pic.png";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* <img src={defaultImage} alt="Default Profile" className="profile-pic" /> */}

      <ul className="primary-list row">
        <li>
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to={"/search"} className="nav-link">
            Search
          </Link>
        </li>
      </ul>

      <ul className="secondary-list row">
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <li className="logout">
        <Link to={"/login"} className="nav-link">
          <button className="logout-btn">Logout</button>
        </Link>
      </li>
    </nav>
  );
};
