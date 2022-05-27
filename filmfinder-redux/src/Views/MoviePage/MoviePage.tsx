import React, { useEffect } from "react";
import "./MoviePage.css";
import { Banner } from "../../Components/Banner/Banner";
import { NavbarPublic } from "../../Components/Navbar/NavbarPublic";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { getCurrMovie, clearMovies } from "../../Slices/MovieSlice";

export const MoviePage: React.FC = () => {

  const currMovie = useSelector((state: RootState) => state.movie);
  //const { id } = useParams();
  //const dispatch: AppDispatch = useDispatch();

  /*useEffect(() => {
    //dispatch(clearMovies());
    if (id) {
      console.log("Loading in movies");
      //dispatch(getCurrMovie(id));
    }
    console.log("Inside of Movie Page");
  }, [currMovie]);*/

  return (
    <div className="main-page">
      {/* <NavbarLoggedIn />
      <Banner /> */}
      <h1>{currMovie.currMovie?.title}</h1>
    </div>
  );
};
