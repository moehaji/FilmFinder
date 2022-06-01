package com.revature.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="movie_id")
    private int movieId;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="year")
    private int year;

    @Column(name="image")
    private String image;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="genre_id")
    private Genre genre;

    //@JsonIgnore
    @OneToMany(mappedBy = "movieRated", cascade = CascadeType.ALL)
    private List<Review> reviews;


    public Movie() {
    }

    public Movie(int movieId, String title, String description, int year, String image, Genre genre, List<Review> reviews) {
        this.movieId = movieId;
        this.title = title;
        this.description = description;
        this.year = year;
        this.image = image;
        this.genre = genre;
        this.reviews = reviews;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "movieId=" + movieId +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", title='" + title + '\'' +
                ", year=" + year +
                ", genre=" + genre +
                //", reviews=" + reviews +
                '}';
    }
}
