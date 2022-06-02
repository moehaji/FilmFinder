import React, { useEffect } from "react";
import "./MoviePage.css";
import { RootState } from "../../Store";
import { useSelector } from "react-redux";
import { NavbarLoggedIn } from "../../Components/Navbar/NavbarLoggedIn";
import { Banner } from "../../Components/Banner/Banner";
import { IReview } from "../../Interfaces/IReview";
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard";
import { Footer } from "../../Components/Footer/Footer";
import { MarginSpace } from "../../Components/MarginSpace/MarginSpace";

export const MoviePage: React.FC = () => {
  const currMovie = useSelector((state: RootState) => state.movie);

  //const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //     console.log("Inside of movie page");
  // }, [currMovie.currMovie?.reviews]);

  return (
    <div className="movie-page">
      <NavbarLoggedIn />
      <Banner />
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
      <MarginSpace />
      <Footer />
    </div>
  );
};
