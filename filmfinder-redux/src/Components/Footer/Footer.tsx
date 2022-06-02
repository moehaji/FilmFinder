import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="footer-body">
      <footer className="footer">
        <div className="social"></div>

        <ul className="list">
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>

          {/* <li>
            <Link to={"/movie-page"} className="link">
              Movie Page
            </Link>
          </li> */}

          <li>
            <Link to={"/profile"} className="link">
              Profile
            </Link>
          </li>
        </ul>

        <p className="copyright">FilmFinder © 2022</p>
      </footer>
    </div>
  );
};