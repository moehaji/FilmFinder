package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="review_id")
    int reviewId;

    @Column(name="rating")
    int rating;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonIgnore
    User reviewer;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="movie_id")
    @JsonIgnore
    Movie movieRated;

    public Review() {
    }

    public Review(int reviewId, int rating, User reviewer, Movie movieRated) {
        this.reviewId = reviewId;
        this.rating = rating;
        this.reviewer = reviewer;
        this.movieRated = movieRated;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public User getReviewer() {
        return reviewer;
    }

    public void setReviewer(User reviewer) {
        this.reviewer = reviewer;
    }

    public Movie getMovieRated() {
        return movieRated;
    }

    public void setMovieRated(Movie movieRated) {
        this.movieRated = movieRated;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", rating=" + rating +
                ", reviewer=" + reviewer +
                ", movieRated=" + movieRated +
                '}';
    }
}
