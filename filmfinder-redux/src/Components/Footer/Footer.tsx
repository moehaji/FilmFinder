import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

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
