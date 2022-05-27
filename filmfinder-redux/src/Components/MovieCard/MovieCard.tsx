import React from "react";
import { IMovie } from "../../Interfaces/IMovie";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import "./MovieCard.css";

export const MovieCard: React.FC<IMovie> = (movie: IMovie) => {
  return (
    <div className="card">
      <img className="movie-img" src={movie.image}></img>
      <h4 className="movie-title">{movie.title}</h4>
      <p className="movie-year">{movie.year}</p>
    </div>
  );
};
