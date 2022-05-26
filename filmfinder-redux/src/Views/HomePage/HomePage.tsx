import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../Components/Navbar/Navbar";
import { RootState, AppDispatch } from "../../Store";
import { getAllMovies } from "../../Slices/MovieSlice";
import "./HomePage.css";
import { IMovie } from "../../Interfaces/IMovie";
import { MovieCard } from "../../Components/MovieCard/MovieCard";

export const HomePage: React.FC = () => {
  const movieInfo = useSelector((state: RootState) => state.movie);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!movieInfo.movies) {
      console.log("Loading in movies");
      dispatch(getAllMovies());
    }
  }, [movieInfo.movies]);

  return (
    <div className="home-page">
      {/* <Navbar /> */}
      <h1>Home Page</h1>
      <div className="movie-card-container">
        {movieInfo.movies ? (
          movieInfo.movies.map((m: IMovie) => {
            return <MovieCard {...m} />;
          })
        ) : (
          <h1>No movies on record or not connected to internet</h1>
        )}
      </div>
    </div>
  );
};
