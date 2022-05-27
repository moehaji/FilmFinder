import React from "react";
import "./MoviePage.css";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Banner } from "../../Components/Banner/Banner";
import { IMovie } from "../../Interfaces/IMovie";

export const MoviePage: React.FC = () => {

  const currMovie = useSelector((state: RootState) => state.movie);

  return (
    <div className="main-page">
      <NavbarLoggedIn />
      <Banner />
      <h1>Reviews</h1>
      
    </div>
  );
};
