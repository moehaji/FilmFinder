import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { AddReview } from "../AddReview/AddReview";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../Store";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../Slices/MovieSlice";

export const Banner: React.FC = () => {
  const currMovie = useSelector((state: RootState) => state.movie);
  const userInfo = useSelector((state: RootState) => state.user);

  const dispatch: AppDispatch = useDispatch();
  const [favButton, setFavButton] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    console.log("OUTSIDE OF IF");
    console.log(userInfo.user);
    console.log(currMovie.currMovie);
    // if(userInfo.user && currMovie.currMovie) {
    //   // Get the users favorite movie list
    //   console.log("top of list");
    //   let favs: IMovie[] = userInfo.user.favorites;
    //   console.log(favs);
    //   // Loop through their list and check if the current movie is favorited
    //   for(let i: number = 0; i < favs.length; i++) {
    //     console.log(favs[i].movieId);
    //     if(favs[i].movieId == currMovie.currMovie?.movieId) {
    //       setFavButton(false); // If favorited, change toggle
    //     }
    //   }
    //}
  }, []); //[currMovie.currMovie, userInfo.user?.favorites]);

  const toggleTheForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userInfo.user) {
      //setShowForm(!showForm);
      dispatch(toggleForm());
    } else {
      navigator("/login");
    }
  };

  const toggleFavoriteOn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFavButton(true);
  };

  const toggleFavoriteOff = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFavButton(false);
  };

  return (
    <div className="banner">
      <div className="banner-contents">
        <img className="movie-page-img" src={currMovie.currMovie?.image}></img>
        <video src=""></video>
        <div className="movie-page-content">
          <h1 className="banner-title">{currMovie.currMovie?.title}</h1>
          <div className="year-genre-rating">
            <h4>{currMovie.currMovie?.year}</h4>
            <h4>{currMovie.currMovie?.genre.genreName}</h4>
          </div>
          <div className="movie-description">
            <p>{currMovie.currMovie?.description}</p>
          </div>

          <div className="banner-buttons">
            <button className="banner-button" onClick={toggleTheForm}>
              Add Review
            </button>
            {favButton ? (
              <button className="banner-button" onClick={toggleFavoriteOff}>
                Add Favorite
              </button>
            ) : (
              <button className="banner-button" onClick={toggleFavoriteOn}>
                Remove from Favorites
              </button>
            )}
          </div>
          {currMovie.toggle ? <AddReview /> : <></>}
        </div>
      </div>
      <div className="banner-fadebottom"></div>
    </div>
  );
};
