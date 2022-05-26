package com.revature.services;

import com.revature.models.Movie;
import com.revature.repo.MovieRepo;
import com.revature.repo.ReviewRepo;
import com.revature.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class MovieService {

    private UserRepo uRepo;
    private MovieRepo mRepo;

    @Autowired
    public MovieService(MovieRepo mRepo, UserRepo uRepo) {

        this.mRepo = mRepo;
        this.uRepo = uRepo;
    }

    public List<Movie> getByGenre(int genreId) {
        List<Movie> movieGenreList;

        movieGenreList = mRepo.findByGenre(genreId);

        return movieGenreList;
    }

    public List<Movie> getAllMovies() {
        List<Movie> moviesList = mRepo.findAll();
        return moviesList;
    }

}
