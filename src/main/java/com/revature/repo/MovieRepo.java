package com.revature.repo;

import com.revature.models.Movie;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepo extends JpaRepository<Movie, Integer> {

    List<Movie> findAllById(int genreID);
}
