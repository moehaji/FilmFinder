import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Footer } from "../../Components/Footer/Footer";

export const ProfilePage: React.FC = () => {
  const currUser = useSelector((state: RootState) => state.user);

  return (
    <>
      <NavbarLoggedIn />
      <h1>
        {currUser.user?.firstName} {currUser.user?.lastName}
      </h1>
      <Footer />
    </>
  );
};

/*
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
          <h1 className="banner-description">
            </h1>
            </div>
          </div>
          <div className="banner-fadebottom"></div>
        </div>

*/
