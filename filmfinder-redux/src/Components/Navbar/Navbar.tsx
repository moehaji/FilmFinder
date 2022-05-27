import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const navigator = useNavigate();

  const handleRegisterNavigate = () => {
    navigator("/register");
  };

  const handleLoginNavigate = () => {
    navigator("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to={"/home"} className="logo">
            Film <span>Finder</span>
          </Link>
        </h2>

        <div className="join-box">
          <p className="join-msg">The best movies on the web</p>
          <button className="btn join-btn" onClick={handleRegisterNavigate}>
            Join Now
          </button>
          <button className="btn" onClick={handleLoginNavigate}>
            Sign In
          </button>

          {/* <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>

            <li>
              <Link to={"/search"}>Search</Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  );
};
