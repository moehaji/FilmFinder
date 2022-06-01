import React from "react";
import "./MoviePage.css";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Banner } from "../../Components/Banner/Banner";
import { IMovie } from "../../Interfaces/IMovie";
import { IReview } from "../../Interfaces/IReview";
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard";

export const MoviePage: React.FC = () => {
  const currMovie = useSelector((state: RootState) => state.movie);

  return (
    <div className="movie-page">
      <NavbarLoggedIn />
      <Banner />
      <h1>Reviews</h1>
      <div className="testimonial-heading">
        <span>Comment</span>
        <h1>Reviews</h1>
      </div>

      {currMovie.currMovie ? (
        currMovie.currMovie.reviews.map((r: IReview) => {
          return <ReviewCard {...r} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};
