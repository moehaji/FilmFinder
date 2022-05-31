import React from "react";
import { IReview } from "../../Interfaces/IReview";

export const ReviewCard: React.FC<IReview> = (review: IReview) => {
  return (
    <div className="review-card">
        <h3>Rating: {review.rating}</h3>
        <q className="review-content">{review.content}</q>
        <p className="review-author">- {review.reviewer.firstName} {review.reviewer.lastName}</p>
    </div>
  );
};
