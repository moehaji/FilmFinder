import React, { useEffect } from "react";
import "./MainPage.css";
import { Banner } from "../../Components/Banner/Banner";
import { NavbarPublic } from "../../Components/Navbar/NavbarPublic";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <NavbarPublic />
      <Banner />
    </div>
  );
};
