import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IReview } from "../../Interfaces/IReview";
import "../FontAwesome";
import { Rating } from "react-simple-star-rating";

export const ReviewCard: React.FC<IReview> = (review: IReview) => {
  return (
    <div className="review-card">
      <section id="testimonials">
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="name-user">
                  <strong>
                    {review.reviewer.firstName} {review.reviewer.lastName}
                  </strong>
                  <span> @{review.reviewer.username}</span>
                </div>
              </div>
              <div className="review-comment">{review.content}</div>
              <div className="reviews">
                {/* <Rating ratingValue={review.rating} className="star-rating" /> */}
                <FontAwesomeIcon icon="star" className="fas fa-star" />
                <FontAwesomeIcon icon="star" className="fas fa-star" />
                <FontAwesomeIcon icon="star" className="fas fa-star" />
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon icon="star" className="fas fa-star" />
      </section>
      <FontAwesomeIcon icon="star" className="fas fa-star" />

      <h3>Rating: {review.rating}</h3>
      <q className="review-content">{review.content}</q>
      <p className="review-author">
        - {review.reviewer.firstName} {review.reviewer.lastName}
      </p>
    </div>
  );
};
