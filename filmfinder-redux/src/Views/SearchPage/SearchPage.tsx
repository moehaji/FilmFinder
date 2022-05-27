import React from "react";
import "./SearchPage.css";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";

export const SearchPage: React.FC = () => {
  return (
    <div className="search-page">
      <NavbarLoggedIn />
    </div>
  );
};
