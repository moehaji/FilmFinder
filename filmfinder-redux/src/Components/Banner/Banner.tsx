import React, { useEffect, useState } from "react";
import { IMovie } from "../../Interfaces/IMovie";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import "./Banner.css";
import { AddReview } from "../AddReview/AddReview";

export const Banner: React.FC = () => {

  const currMovie = useSelector((state: RootState) => state.movie);
  
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowForm(!showForm);
  }

  return (
    <div className="banner">
      <div className="banner-contents">
        <img className="movie-page-img" src={currMovie.currMovie?.image}></img>
        <div className="movie-page-content">
          <h1 className="banner-title">{currMovie.currMovie?.title}</h1>
          <div className="year-genre-rating">
            <h4>{currMovie.currMovie?.year}</h4>
            <h4>{currMovie.currMovie?.genre.genreName}</h4>
          </div>
          <p>{currMovie.currMovie?.description}</p>
          <div className="banner-buttons">
            <button className="banner-button" onClick={toggleForm}>Add Review</button>
            <button className="banner-button">Add to Favorites</button>
          </div>
          {showForm ? <AddReview /> : <></>}
        </div>
      </div>
      <div className="banner-fadebottom"></div>
    </div>
  );
};
