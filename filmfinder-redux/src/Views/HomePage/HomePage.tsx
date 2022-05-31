import React, { useEffect } from "react";
import "./HomePage.css";
import { useSelector, useDispatch } from "react-redux";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { RootState, AppDispatch } from "../../Store";
import { clearCurrMovie, getAllMovies } from "../../Slices/MovieSlice";
import { IMovie } from "../../Interfaces/IMovie";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import { clearMovies } from "../../Slices/MovieSlice";
import { useState } from "react";

export const HomePage: React.FC = () => {
  const movieInfo = useSelector((state: RootState) => state.movie);
  //const userInfo = useSelector((state: RootState) => state.user);
  
  const [filter, setFilter] = useState<string>("");
  //const [showSearch, setShowSearch] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    //console.log(userInfo.user);
    console.log(localStorage.getItem('username'));
    if (!movieInfo.movies) {
      console.log("Loading in movies");
      dispatch(getAllMovies());
    }
    dispatch(clearCurrMovie())
    console.log("Inside of homepage");
  }, [movieInfo.movies]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    console.log(filter)
  };

  const clearFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFilter("");
    // let s = document.getElementById("search");
    // console.log(s);
    // s?.setAttribute('value', 'ble');
  }

  return (
    <div className="home-page">
      <NavbarLoggedIn />
      <h1>Home Page</h1>
      <input id="search" type="text" name="search" placeholder="search" autoComplete="off" onChange={handleInput}></input>
      {/* <input type="reset" value="Reset"></input> */}
      <button name="search-btn" onClick={clearFilters}>Clear</button>
      <div className="movie-card-container">
        {movieInfo.movies ? (
          movieInfo.movies.map((m: IMovie) => {
            if(m.title.toLowerCase().includes(filter.toLowerCase())) {
              return <MovieCard {...m} />
            } else {
              return <></>
            };
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};
