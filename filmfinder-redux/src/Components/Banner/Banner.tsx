import React, { useEffect } from "react";
import "./Banner.css";

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button className="banner-button">Read</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {/* {truncateDescription(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            50
          )} */}
        </h1>
      </div>

      <div className="banner-fadebottom"></div>
    </div>
  );
};
